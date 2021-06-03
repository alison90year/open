import { UserInfo } from '../../types';

interface State {
  login: boolean;
  userInfo: UserInfo;
  balance: string;
}

const userState: State = {
  login: false,
  userInfo: {
    uid: '',
    name: '',
    be_agent_at: '',
    is_agent: '',
    verify_type: ''
  },
  balance: ''
};

export type UserStateType = typeof userState;

export default userState;