const user = [{
name:"Pradeep",
email:"asd",
id:1,
password:"1"
}]
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhZGVlcCIsImVtYWlsIjoiYXNkIn0.9XyZlVpCzvr4RW4-YiepZq8zMbnWCg9T30eCCcMTBRU"
function validateUser(data){
     // login api call
     if(data.username === user[0].email && data.password === user[0].password){
        localStorage.setItem("token", token)
        return token
     }
}
function getUser(){
    // decode token to get user details
    if(localStorage.getItem("token"))
     return user;
}
 
export default {
    user: user,
    validateUser:validateUser,
    getUser:getUser
}