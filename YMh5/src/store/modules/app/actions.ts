import { ActionTree, ActionContext } from 'vuex';
import { AppStateType } from './state';
import { StateType } from '@/dto/store';
import { APIs } from '../../../http';

type AugmentedActionContext = ActionContext<AppStateType, StateType>

const actions: ActionTree<AppStateType, StateType> = {
  getVenueData({ commit }) {
    APIs.getVenueData().then((res: any) => {
      commit('setVenueData', res);
    });
  },
  async aycSetCount({ commit }) {
    await Promise.resolve();
    commit('setCount', 10);
  }
}

export default actions;
