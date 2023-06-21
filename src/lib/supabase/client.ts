import { SUPABASE_KEY } from '@/config'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oibxohxdtofkvpzabloj.supabase.co'
const supabaseKey = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
