import request from '@/utils/request'

// 获取轮播图列表
export const getBannerList = () => {
  return request({
    url: '/banner'
  })
}

// 获取热门推荐歌单
export const getHotRecommend = () => {
  return request({
    url: '/personalized?limit=8'
  })
}

// 获取新碟上架数据
export function getNewAlbums() {
  return request({
    url: '/album/newest'
  })
}