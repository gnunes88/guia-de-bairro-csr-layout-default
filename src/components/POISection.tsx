import React from 'react';
import type { POITopic } from '../types/neighborhood';

interface Props {
  poiTopics: POITopic[];
}

export function POISection({ poiTopics }: Props) {
  if (!poiTopics?.length) {
    return null;
  }

  const splitPOIs = (pois: POITopic['pois']) => {
    const midPoint = Math.ceil(pois.length / 2);
    return {
      leftColumn: pois.slice(0, midPoint),
      rightColumn: pois.slice(midPoint),
    };
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {poiTopics.map((topic) => {
          const { leftColumn, rightColumn } = splitPOIs(topic.pois);
          
          return (
            <div key={topic.id} className="mb-16 last:mb-0">
              <h2 id={topic.name.toLowerCase().replace(/\s+/g, '-')} className="text-3xl font-bold mb-6">
                {topic.name}
              </h2>
              <p className="text-gray-600 mb-8">{topic.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div className="space-y-6">
                  {leftColumn.map((poi, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                      <div>
                        <h4 className="font-medium">{poi.poi_name}</h4>
                        <p className="text-sm text-gray-500">{poi.poi_description}</p>
                        <p className="text-sm text-gray-400">{poi.distance}m do centro do bairro</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {rightColumn.map((poi, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                      <div>
                        <h4 className="font-medium">{poi.poi_name}</h4>
                        <p className="text-sm text-gray-500">{poi.poi_description}</p>
                        <p className="text-sm text-gray-400">{poi.distance}m do centro do bairro</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                *Atenção: As distâncias são calculadas a partir do centro do bairro, e podem variar dependendo do ponto específico considerado.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}