export function imageLoader(permalink: string, imageName: string): string {
  return `/src/content/portfolio/${permalink}/${imageName}`;
}
