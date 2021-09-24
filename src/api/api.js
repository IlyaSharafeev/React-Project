import axios from "axios";


const baseAxios = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "a3419011-6a5f-4936-97dd-bd91c63a15bd"
   }
})

//! For UsersContainer.jsx (Component: Users)
export const usersAPI = {
   getCurrentPageAndPageSize(currentPage, pageSize ) {
      return baseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },
   getPageNumberAndPageSize(pageNumber, pageSize) {
      return baseAxios.get(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   }
}

//! For Users.jsx (Component: Users)
export const buttonOnClick = {
   unSubscribe(userId) {
      return baseAxios.delete(`follow/${userId}`)
         .then(response => {
            return response.data;
         })
   },
   Subscribe(userId) {
      return baseAxios.post(`follow/${userId}`, {})
         .then(response => {
            return response.data;
         });
   }
}

