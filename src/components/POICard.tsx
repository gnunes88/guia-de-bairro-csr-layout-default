import React from 'react';
import { POIList } from './POIList';
import type { POITopic } from '../types/neighborhood';

interface Props {
  topic: POITopic;
}

export function POICard({ topic }: Props) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{topic.name}</h3>
      <p className="text-gray-600 mb-6">{topic.description}</p>
      <POIList pois={topic.pois} />
    </div>
  );
}