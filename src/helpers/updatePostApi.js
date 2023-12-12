
export default function updatePostApi(url, updateData, callback) {
  fetch(`${url}/${updateData.id}`, {
    method: "PUT", // o PATCH - put modifica todo el objeto y patch permite modificar parte de la info del objeto de la API
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
  .then(response => {
    if(!response.ok){
      throw new Error('Error al actualizar el post')
    }
    return response.json()
  })
  .then(data => { callback(data) } )
  .catch(err => err)

}