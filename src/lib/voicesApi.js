import { supabase } from './supabaseClient'

function rowToVoice(row) {
  return {
    id: row.id,
    title: row.title,
    body: row.body,
    author: row.author,
    category: row.category,
    status: row.status,
    photo: row.photo_url ? { id: row.id, url: row.photo_url } : null,
    createdAt: row.created_at,
  }
}

export async function uploadPhoto(file) {
  const ext = file.name.split('.').pop()
  const path = `${crypto.randomUUID()}.${ext}`

  const { error } = await supabase.storage.from('photos').upload(path, file, {
    contentType: file.type,
  })
  if (error) throw error

  const { data } = supabase.storage.from('photos').getPublicUrl(path)
  return data.publicUrl
}

export async function fetchVoices() {
  const { data, error } = await supabase
    .from('voices')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data.map(rowToVoice)
}

export async function createVoice({ title, body, category, photoUrl }) {
  const { data, error } = await supabase
    .from('voices')
    .insert({
      title,
      body,
      category,
      author: '나',
      status: '접수',
      photo_url: photoUrl ?? null,
    })
    .select()
    .single()

  if (error) throw error
  return rowToVoice(data)
}
