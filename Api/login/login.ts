import httpLogin from "./api_login";



const Login= async({phone,pass}:{phone:string,pass:string})=>{
   return await httpLogin.post("login",{
    phone:phone,
    pass:pass
   })
}
const refreshToken= async({token}:{token:string})=>{
   return (await httpLogin.post("refreshToken",{
      refreshToken:token
   })).data.accessToken
}
export default {
   Login,
   refreshToken
};