export interface ApiResponse {
  incomplete_results: boolean;
  items: RepositoryData[];
  total_count: number;
}

export interface RepositoryData {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  owner: OwnerRepoData;
}

export interface OwnerRepoData {
  avatar_url: string;
  login: string;
}
