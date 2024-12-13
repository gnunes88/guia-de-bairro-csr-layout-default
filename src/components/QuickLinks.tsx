import React from 'react';
import type { POITopic } from '../types/neighborhood';

interface Props {
  neighborhoodName: string;
  poiTopics: POITopic[];
}

export function QuickLinks({ neighborhoodName, poiTopics }: Props) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex flex-wrap gap-4 items-center">
          <li>
            <a 
              href="#historia" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              História
            </a>
          </li>
          {poiTopics.map((topic) => (
            <li key={topic.id}>
              <a 
                href={`#${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {topic.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}