import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { NearbyNeighborhood } from '../types/neighborhood';

interface Props {
  neighborhood: NearbyNeighborhood;
}

export function NeighborhoodCard({ neighborhood }: Props) {
  const url = `/guia-de-bairro/${neighborhood.slug}`;

  return (
    <Link 
      to={url}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6"
    >
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold mb-2">{neighborhood.name}</h3>
          <p className="text-gray-600 mb-4">{neighborhood.short_description}</p>
          <p className="text-sm text-gray-500">
            {neighborhood.distance.toFixed(1)}km de distância
          </p>
        </div>
      </div>
    </Link>
  );
}