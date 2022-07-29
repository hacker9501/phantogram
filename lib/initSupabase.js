import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from "./constants";

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  localStorage: AsyncStorage,
});
