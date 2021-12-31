import searchApi from '../api/search-api';
import sequelizeApi from '../api/sequelize-api';

const ACT_SEARCH = async ({ commit }, { searchInput, searchSelect }) => {
  const { data } = await searchApi(searchInput, searchSelect);
  commit('MUT_SEARCH', data.documents);
};

const ACT_SEQUELIZE = async ({ commit }) => {
  const { data } = await sequelizeApi();
  commit('MUT_SEQUELIZE', data);
};

export default { ACT_SEARCH, ACT_SEQUELIZE };
