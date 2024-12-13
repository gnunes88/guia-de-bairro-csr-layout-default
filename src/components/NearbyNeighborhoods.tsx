import React from 'react';
import { NeighborhoodCard } from './NeighborhoodCard';
import type { NearbyNeighborhood } from '../types/neighborhood';

interface Props {
  neighborhoods: NearbyNeighborhood[];
}

export function NearbyNeighborhoods({ neighborhoods }: Props) {
  if (!neighborhoods?.length) {
    return null;
  }

  // Limit to 6 neighborhoods, sorted by distance
  const nearestNeighborhoods = neighborhoods
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Bairros Próximos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearestNeighborhoods.map((neighborhood) => (
            <NeighborhoodCard 
              key={neighborhood.neighborhood_id} 
              neighborhood={neighborhood} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}