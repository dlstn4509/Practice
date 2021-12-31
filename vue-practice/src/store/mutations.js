// 상태(History)를 관리 함 => state의 값을 변화시킨다.
export default {
  MUT_SEARCH(state, v) {
    state.search = v;
  },
  MUT_SEQUELIZE(state, v) {
    state.sequelize = v;
  },
};
