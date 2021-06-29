import { MutationTree } from 'vuex';
import { AppStateType, VenueObject } from './state';
import storage from '../../../utils/storage';

const mutations: MutationTree<AppStateType> = {
  setToken(state: AppStateType, data: string) {
    storage.set('TOKEN', data);
    state.token = data;
  },
  setVenueData(state: AppStateType, data: VenueObject[]) {
    state.venueData = data;
  },
  setCount(state: AppStateType, count: number) {
    state.count = count;
  }
}

export default mutations;
