import axios from 'axios'

// set common header for all api calls
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

// interceptor to handle errors 
axios.interceptors.response.use(null,error=>{
    const expectedErr = error.response &&
    error.response.status >= 400 &&
    error.response.status <     500
    if(expectedErr)
    alert("there is an unexpected error")


    return Promise.reject(error);
})
export default {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put
}