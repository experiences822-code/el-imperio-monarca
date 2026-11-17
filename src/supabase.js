import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key && !url.includes('TU-PROYECTO')
  ? createClient(url, key)
  : null;

export const backendStatus = supabase
  ? 'Conectado a Supabase'
  : 'Prototipo local · Supabase pendiente de configurar';
