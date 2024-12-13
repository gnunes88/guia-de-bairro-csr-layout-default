export interface Neighborhood {
  neighborhood_id: number;
  name: string;
  short_description: string;
  slug: string;
  intro_text: string;
  link_search_results: string;
  image_url: string;
  latitude: number;
  longitude: number;
  description: string;
  city: string;
  state: string;
}

export interface POI {
  distance: number;
  poi_name: string;
  poi_description: string;
}

export interface POITopic {
  id: number;
  name: string;
  description: string;
  pois: POI[];
}

export interface NearbyNeighborhood {
  neighborhood_id: number;
  name: string;
  short_description: string;
  slug: string;
  image_url: string | null;
  distance: number;
}

export interface NeighborhoodDetails {
  neighborhood: Neighborhood;
  pois_topics: POITopic[]; // Alterado de poi_topics para pois_topics
  nearby_neighborhoods: NearbyNeighborhood[];
}