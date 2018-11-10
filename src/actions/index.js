import axios from 'axios'

const ROOT_URL = 'http://localhost/wp-json/wp/v2'

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts`)

    return{
        type : 'FETCH_POSTS',
        payload : request
    }
}

export function fetchPost(id){

    const request = axios.get(`${ROOT_URL}/posts/${id}`)

    return{
        type : 'FETCH_POST',
        payload : request
    }

}