import React from 'react';
import type { POI } from '../types/neighborhood';

interface Props {
  pois: POI[];
}

export function POIList({ pois }: Props) {
  if (!pois?.length) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {pois.map((poi, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
          <div>
            <h4 className="font-medium">{poi.poi_name}</h4>
            <p className="text-sm text-gray-500">{poi.poi_description}</p>
            <p className="text-sm text-gray-400">{poi.distance}m</p>
          </div>
        </li>
      ))}
    </ul>
  );
}