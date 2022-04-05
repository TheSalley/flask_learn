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
    url: '/top/playlist?limit=8'
  })
}
