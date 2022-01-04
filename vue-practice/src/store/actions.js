import searchApi from '../api/search-api';
import sequelizeApi from '../api/sequelize-api';
import kakaoMapApi from '../api/kakaoMap-api';
import gongsilApi from '../api/gongsil-api';

const ACT_SEARCH = async ({ commit }, { searchInput, searchSelect }) => {
  const { data } = await searchApi(searchInput, searchSelect);
  commit('MUT_SEARCH', data.documents);
};

const ACT_SEQUELIZE = async ({ commit }) => {
  const { data } = await sequelizeApi();
  commit('MUT_SEQUELIZE', data);
};

const ACT_KAKAOMAP = async ({ commit }, kakaoMapTxt) => {
  const { data } = await kakaoMapApi(kakaoMapTxt);
  commit('MUT_KAKAOMAP', data.documents);
};

const ACT_GONGSIL = async ({ commit }) => {
  const { data } = await gongsilApi();
  commit('MUT_GONGSIL', data);
};

export default { ACT_SEARCH, ACT_SEQUELIZE, ACT_KAKAOMAP, ACT_GONGSIL };
