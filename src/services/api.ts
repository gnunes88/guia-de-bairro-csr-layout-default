const BASE_URL = 'https://vercel-r372.vercel.app/api';

export async function getNeighborhoodDetails(slug: string) {
  const response = await fetch(`${BASE_URL}/neighborhoods/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch neighborhood details');
  }
  return response.json();
}