import * as actionTypes from './constants';

import { rankingAPI } from '@/services';

const changeFeatureListAction = (featureList) => ({
  type: actionTypes.CHANGE_FEATURE_LIST,
  featureList,
});

const changeMediaListAction = (mediaList) => ({
  type: actionTypes.CHANGE_MEDIA_LIST,
  mediaList,
});

const changeCurrentRankingIDAction = (currentRankingID) => ({
  type: actionTypes.CHANGE_CURRENT_RANKING_ID,
  currentRankingID,
});

// 获取榜单列表
export const getRankingListAction = (params) => {
  return (dispatch, getState) => {
    rankingAPI.getRankingList().then((res) => {
      if (res.code === 200) {
        const featureList = res.list?.slice(0, 4) || []; // 前4条为特色榜数据
        const mediaList = res.list?.slice(4) || []; // 媒体榜数据
        dispatch(changeFeatureListAction(featureList));
        dispatch(changeMediaListAction(mediaList));
      }
    });
  };
};

// 获取榜单id获取榜单详情
export const getRankingDeatilByIDAction = (id) => {
  return (dispatch, getState) => {
    dispatch(changeCurrentRankingIDAction(id));
    // TODO:改变榜单详情数据
  };
};
