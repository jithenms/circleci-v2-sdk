export const getProjectSlug = (
  gitProvider: string,
  username: string,
  repo: string
): string => {
  return `${gitProvider}/${username}/${repo}`;
};

export const getOrgSlug = (
  gitProvider: string,
  username: string
): string => {
  return `${gitProvider}/${username}`;
}