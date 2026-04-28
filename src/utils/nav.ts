export function getNavHref(path: string, base: string): string {
  // Ensure base ends with /
  const baseNormalized = base.endsWith('/') ? base : `${base}/`;

  // For root, return base as-is (already ends with /)
  if (path === '') {
    return baseNormalized;
  }

  // For other paths: baseNormalized + path + /
  // Example: "/ateliersmassoda/" + "ateliers" + "/" → "/ateliersmassoda/ateliers/"
  return `${baseNormalized}${path}/`;
}

export function isActiveLink(currentPath: string, linkPath: string): boolean {
  // Normalize both paths for comparison (remove trailing slashes)
  const normalizedCurrent = currentPath.replace(/\/$/, '');
  const normalizedLink = linkPath.replace(/\/$/, '');

  return normalizedCurrent === normalizedLink;
}
