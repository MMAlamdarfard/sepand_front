import http from '@/Api/api';

const getMe= async()=>{
   return await http.get("me")
}
export default {
    getMe
};