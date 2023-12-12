
export default function createPostApi(url, postData, callback) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(response => {
    if(!response.ok){
      throw new Error('Error al insertar la tarea')
    }
    return response.json()
  })
  .then(data => callback(data))
  .catch(err => err)
}