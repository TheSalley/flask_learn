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

// 获取热门推荐歌单详情
export const getHotRecommendDetail = (id) => {
  return request({
    url: `/playlist/detail?id=${id}`
  })
}

// 获取新碟上架数据
export function getNewAlbums() {
  return request({
    url: '/album/newest'
  })
}

// 播放歌曲
export function getSongUrl(id) {
  return request({
    url: `/song/url?id=${id}`
  })
}

// 排行榜单
export function getRankList(){
  return request({
    url: 'toplist'
  })
}

// 排行榜详情
export function getRankListDetail(id){
  return request({
    url: `/playlist/detail?id=${id}`
  })
}

