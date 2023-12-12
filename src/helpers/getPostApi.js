
export default function getPostApi(url, callback) {
  fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error('Error al cargar el json')
      }
      return response.json()
    })
    .then(data => callback(data) )
    .catch(err => err)
}