import request from '@/utils/request'

 

  export function getListOne(params) {
    return request({ url: '/api/category/oms/listOne', method: 'get', params: params})
  }