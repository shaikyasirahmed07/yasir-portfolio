/** Centralised server-only environment configuration. */
function optionalEnv(name:string):string|undefined{
  const value=process.env[name]?.trim();
  return value||undefined;
}
export const serverEnv={
  nodeEnv:process.env.NODE_ENV??"development",
  siteUrl:optionalEnv("SITE_URL"),
} as const;
