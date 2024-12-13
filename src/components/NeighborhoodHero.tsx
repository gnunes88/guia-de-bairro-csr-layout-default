import React from 'react';
import { MapPin } from 'lucide-react';
import { Map } from './Map';
import { QuickLinks } from './QuickLinks';
import { generateNeighborhoodUrl } from '../utils/url';
import type { Neighborhood, POITopic } from '../types/neighborhood';

const DEFAULT_IMAGE_URL = 'https://ynkkkxhqzvqzzvikxteu.supabase.co/storage/v1/object/public/neighborhood_guide/imagem-bairro-padrao.jpg';

interface Props {
  neighborhood: Neighborhood;
  poiTopics: POITopic[];
}

export function NeighborhoodHero({ neighborhood, poiTopics }: Props) {
  const url = generateNeighborhoodUrl(neighborhood);
  const imageUrl = neighborhood.image_url || DEFAULT_IMAGE_URL;

  return (
    <>
      <header>
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={neighborhood.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">{neighborhood.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{`${neighborhood.city}, ${neighborhood.state}`}</span>
              </div>
              <div className="mt-6">
                <a 
                  href={neighborhood.link_search_results}
                  className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Imóveis Disponíveis
                </a>
              </div>
            </div>
          </div>
        </div>
        <QuickLinks neighborhoodName={neighborhood.name} poiTopics={poiTopics} />
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">{neighborhood.short_description}</h2>
        <p className="text-xl text-gray-600 mb-12">{neighborhood.intro_text}</p>
        <Map 
          latitude={neighborhood.latitude}
          longitude={neighborhood.longitude}
          name={neighborhood.name}
        />
      </div>
    </>
  );
}