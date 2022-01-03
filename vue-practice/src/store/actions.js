import searchApi from '../api/search-api';
import sequelizeApi from '../api/sequelize-api';
import kakaoMapApi from '../api/kakaoMap-api';

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

export default { ACT_SEARCH, ACT_SEQUELIZE, ACT_KAKAOMAP };
