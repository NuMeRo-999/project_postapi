import { renderPost } from "./src/components/renderPost/renderPost"
import createPostApi from "./src/helpers/createPostApi";
import getPostApi from "./src/helpers/getPostApi";
import deletePostApi from "./src/helpers/deletePostApi";
import updatePostApi from "./src/helpers/updatePostApi";

const URL =  `${import.meta.env.VITE_URL_API}/posts`;
let postData = {};
const cardList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const titlePost = document.getElementById('title-post');
const contentPost = document.getElementById('content-post');
const deletePostBtn = document.querySelectorAll('.card-link');
const buscador = 

function init(){
  // console.log('postList', cardList);
  // cardList.innerHTML = cardList
  getPostApi(URL, (data) => renderPost(cardList, data));
}

addPostForm.addEventListener('submit', e => {
  e.preventDefault();
  const boton = e.target.querySelector('.btn');
  if(!(titlePost.value && contentPost.value)){
    alert('Los campos han de estar completos')
  }
  if(boton.classList.contains('btn-secondary')){
    const updateData = {
      id : boton.dataset.id,
      title : titlePost.value,
      post : contentPost.value,
    }

    updatePostApi(URL, updateData, (post) => {
      const cardDataId = cardList.querySelector(`[data-id="${post.id}"]`);
      const cardTitle = cardDataId.querySelector('.card-title');
      cardTitle.textContent = post.title;

      const cardText = cardDataId.querySelector('.card-text')
      cardText.textContent = post.post;

      const cardSubtitle = cardDataId.querySelector('.card-subtitle');
      cardSubtitle.textContent = 'Id post: '+post.id;

      cardDataId.reset();

      renderPost(cardList, [post])
    });

    boton.textContent = 'Añadir Post';
    boton.classList.remove('btn-secondary');
    e.target.reset();
    return;
  }
  
    postData = {
      title: titlePost.value,
      post: contentPost.value
    };
    createPostApi(URL, postData, (data) => {
      renderPost(cardList, [data])
  
    })
    e.target.reset();
})


cardList.addEventListener('click', e => {
  e.preventDefault();
  let editBtnPress = e.target.id === 'edit-post';
  let deleteBtnPress = e.target.id === 'delete-post';
  const card = e.target.closest(".card");
  const dataId = e.target.parentElement.dataset.id;

  if(editBtnPress){
    postData = {
      title: titlePost.value,
      post: contentPost.value
    };
    const boton = addPostForm.querySelector('.btn');
    boton.textContent = 'Actualizar Post';
    boton.classList.add('btn-secondary');
    boton.dataset.id = dataId
    titlePost.value = card.querySelector('.card-title').textContent
    contentPost.value = card.querySelector('.card-text').textContent

  }else if (deleteBtnPress){
    deletePostApi(URL, dataId, () => card.remove())
  }
});

// Inicio de la app
document.addEventListener('DOMContentLoaded', init)

// DataSet (variable oculta )