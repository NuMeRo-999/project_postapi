
export default function deletePostApi(url, id, callback) {
  fetch(`${url}/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if(!response.ok){
        throw new Error('Error al borrar el post')
      }
      callback()
    })
    .catch(err => err)
}