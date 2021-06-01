import axios from 'axios';


const instance =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization']='auth from instance';

export default axios;

//use thiis as import wher u want to use..