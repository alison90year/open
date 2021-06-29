import { GetterTree } from 'vuex';
import { StateType } from '@/dto/store';

const getters: GetterTree<StateType, StateType> = {
  // login: state => state.user.login,
  // userInfo: state =>  state.user.userInfo,
  // balance: state => state.user.balance,
  token: state => state.app.token,
  venueData: state => state.app.venueData
};

export default getters;
