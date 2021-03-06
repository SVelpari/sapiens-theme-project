import axios from 'axios';

//const url = 'http://localhost:5000/posts';
const url = 'https://sapiens-theme-app.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
//export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);