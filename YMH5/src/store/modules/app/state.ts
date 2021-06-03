import storage from '../../../utils/storage';

export interface VenueObject {
  d: string;
  i: string;
  ico: string;
  name: string;
  code?: string;
}
interface State {
  token: string;
  venueData: VenueObject[];
  count: number;
}

const appState: State = {
  token: storage.get('TOKEN') || '',
  venueData: [],
  count: 0
};

export type AppStateType = typeof appState;

export default appState;