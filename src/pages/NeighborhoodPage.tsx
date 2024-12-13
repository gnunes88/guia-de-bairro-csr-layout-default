import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNeighborhoodDetails } from '../services/api';
import { NeighborhoodHero } from '../components/NeighborhoodHero';
import { POISection } from '../components/POISection';
import { NearbyNeighborhoods } from '../components/NearbyNeighborhoods';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import type { NeighborhoodDetails } from '../types/neighborhood';

export function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<NeighborhoodDetails | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      
      try {
        const details = await getNeighborhoodDetails(slug);
        setData(details);
      } catch (err) {
        setError('Falha ao carregar os dados do bairro');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return <ErrorMessage message={error || 'Algo deu errado'} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <NeighborhoodHero 
        neighborhood={data.neighborhood} 
        poiTopics={data.pois_topics}
      />
      
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="prose prose-lg">
          <h2 id="historia" className="text-3xl font-bold mb-6">
            Um pouco da história de {data.neighborhood.name}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.neighborhood.description }} />
        </div>
      </section>

      <POISection poiTopics={data.pois_topics} />
      <NearbyNeighborhoods neighborhoods={data.nearby_neighborhoods} />
    </div>
  );
}