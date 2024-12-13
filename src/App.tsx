import React, { useEffect, useState } from 'react';
import { getNeighborhoodDetails } from './services/api';
import { NeighborhoodHero } from './components/NeighborhoodHero';
import { POISection } from './components/POISection';
import { NearbyNeighborhoods } from './components/NearbyNeighborhoods';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { parseNeighborhoodUrl } from './utils/url';
import type { NeighborhoodDetails } from './types/neighborhood';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<NeighborhoodDetails | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // For now, we'll still use ID 1 since the API only accepts IDs
        // In a real implementation, you'd need an API that can look up neighborhoods by slug
        const details = await getNeighborhoodDetails(1);
        setData(details);
      } catch (err) {
        setError('Falha ao carregar os dados do bairro');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return <ErrorMessage message={error || 'Algo deu errado'} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <NeighborhoodHero neighborhood={data.neighborhood} />
      
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">{data.neighborhood.intro_text}</p>
          <div dangerouslySetInnerHTML={{ __html: data.neighborhood.description }} />
        </div>
      </section>

      <POISection poiTopics={data.poi_topics} />
      <NearbyNeighborhoods neighborhoods={data.nearby_neighborhoods} />
    </div>
  );
}

export default App;