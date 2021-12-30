import searchApi from '../api/search-api';

const ACT_SEARCH = async ({ commit }) => {
  const { data } = await searchApi();
  commit('MUT_SEARCH', data.documents);
};

export default { ACT_SEARCH };
