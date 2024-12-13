import { Neighborhood } from '../types/neighborhood';

export function generateNeighborhoodUrl(neighborhood: Neighborhood): string {
  return `/guia-de-bairro/${neighborhood.slug}`;
}