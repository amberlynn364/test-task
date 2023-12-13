import { ApiResponse } from '../types';

export default async function fetchRepos(
  value: string,
  signal: AbortSignal
): Promise<ApiResponse | null> {
  if (!value) return null;
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${value}&per_page=10`,
      { signal }
    );
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Interrupted!');
    } else {
      console.error(error);
    }
    throw error;
  }
}
