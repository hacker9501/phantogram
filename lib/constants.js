if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL is required");
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error("SUPABASE_SERVICE_KEY is required");
}

export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || "";

export const Styles = {
  fontNormal: 20,
  fontMedium: 28,
  fontLarge: 34,
  fontExtraLarge: 40,
  colorPrimary: "black",
  spacing: 12,
};
