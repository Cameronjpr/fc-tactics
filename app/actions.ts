'use server'

export async function createTactic(formData: FormData) {
  console.log(await formData.get('name'))

  return {
    ok: true,
  }
}
