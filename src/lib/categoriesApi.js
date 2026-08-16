import { supabase } from './supabaseClient'

export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('name')
    .order('created_at', { ascending: true })

  if (error) throw error
  return data.map((row) => row.name)
}

export async function addCategory(name) {
  const { data, error } = await supabase.from('categories').insert({ name }).select().single()
  if (error) throw error
  return data.name
}

export async function deleteCategory(name) {
  const { error } = await supabase.from('categories').delete().eq('name', name)
  if (error) throw error
}
