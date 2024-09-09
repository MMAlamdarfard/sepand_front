 
import { PermissionsRequest, PermissionsResponce } from './model';
import { ApiCall } from '@/Api/api_call';


const getPermissionsList = async () => {
   return await ApiCall.getRequest<PermissionsResponce>("/admin/permision");
};
const addPermissionsList = async (data:PermissionsRequest) => {
    return await ApiCall.postRequest<String>("/admin/permision",data);
 };
 const editPermissionsList = async (id:string,data:PermissionsRequest) => {
    return await ApiCall.patchRequest<String>("/admin/permision/"+id,data);
 };
 const deletePermissionsList = async (id:string,) => {
    return await ApiCall.deleteRequest<String>("/admin/permision/"+id,);
 };
 export const Permission = {
  addPermissionsList,
  editPermissionsList,
  deletePermissionsList,
  getPermissionsList,
 };