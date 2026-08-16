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
    userId: row.user_id,
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

export async function createVoice({ title, body, category, photoUrl, userId, author }) {
  const { data, error } = await supabase
    .from('voices')
    .insert({
      title,
      body,
      category,
      author,
      user_id: userId,
      status: '접수',
      photo_url: photoUrl ?? null,
    })
    .select()
    .single()

  if (error) throw error
  return rowToVoice(data)
}

export async function updateVoice(id, { title, body, category, photoUrl }) {
  const { data, error } = await supabase
    .from('voices')
    .update({
      title,
      body,
      category,
      photo_url: photoUrl ?? null,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return rowToVoice(data)
}

export async function updateVoiceStatus(id, status) {
  const { data, error } = await supabase
    .from('voices')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return rowToVoice(data)
}

export async function deleteVoice(id) {
  const { error } = await supabase.from('voices').delete().eq('id', id)
  if (error) throw error
}
