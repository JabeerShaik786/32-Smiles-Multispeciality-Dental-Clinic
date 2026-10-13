export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return cleanPath;
  }

  if (cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
};
