import searchApi from '../api/search-api';

const ACT_SEARCH = async ({ commit }, { searchInput, searchSelect }) => {
  const { data } = await searchApi(searchInput, searchSelect);
  commit('MUT_SEARCH', data.documents);
};

export default { ACT_SEARCH };
