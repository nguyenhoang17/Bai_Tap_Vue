import axios from 'axios'

const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
  baseURL:`${baseUrl}/api`,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})

export default {
    getListProducts(params) 
    {
        return apiAxios({
            method: 'get',
            url: '/products',
            params: params
        })
    },

    createProduct(data) 
    {
      return apiAxios({
        method: 'post',
        url: '/products',
        data: data
      })
    },
    updateProduct(id,data)
    {
      return apiAxios({
        method: 'post',
        url:'/products/' + id,
        data: data
      })
    },
    deleteProduct(id)
    {
      return apiAxios({
        method: 'delete',
        url:'/products/' + id,
      })
    }
}