let divPost = "";

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {<post>Object} posts 
*/
export const renderPost = (element, posts) => {
  posts.forEach(post => {
    divPost += ` 
    <div class="card m-2" style="width: 18rem;">
    <div class="card-body" data-id=${post.id}>
      <h5 class="card-title">${post.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Id post: ${post.id}</h6>
      <p class="card-text">${post.post}</p>
      <a href="#" class="card-link btn btn-primary" id="edit-post">Editar</a>
      <a href="#" class="card-link btn btn-danger" id="delete-post">Borrar</a>
      </div> 
    </div>`;
  });
  element.innerHTML = divPost;
}