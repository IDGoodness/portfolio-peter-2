export function createPageUrl(pageName) {
  if (!pageName) return "/";
  if (pageName.toLowerCase() === "home") return "/";

  const kebab = pageName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return `/${kebab}`;
}

export default createPageUrl;
