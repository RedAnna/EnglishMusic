import {request} from './request'

export function getCommentary(){
  return request({
    url: '/search?keywords=欧美'
  })
}
export function getSongDetail(id){
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}
export function getAlbum(id){
  return request({
    url: '/album',
    params:{
      id
    }
  })
}