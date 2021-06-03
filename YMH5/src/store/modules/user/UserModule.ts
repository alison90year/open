import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import { store } from '@/store';
import { UserInfo } from '../../types';
import { APIs } from '@/http';
@Module({ dynamic: true, store, name: 'user' })
class UserModule extends VuexModule {
  userName: string = '';
  login: boolean = false;
  userInfo: UserInfo = {
    uid: '',
    name: '',
    be_agent_at: '',
    is_agent: '',
    verify_type: ''
  };
  balance: string = '';

  @Mutation
  setLogin(login: boolean) {
    this.login = login;
  }

  @Mutation
  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  @Mutation
  setBalance(balance: string) {
    this.balance = balance;
  }

  @Mutation
  private setUserName(name: string) {
    this.userName = name;
  }

  @Action
  getUserInfo() {
    APIs.getUserInfo().then((res: any) => {
      if (res.status) {
        this.context.commit('setLogin', true);
        this.context.commit('setUserInfo', res.data);
      }
    });
  }

  @Action
  getUserBalance() {
    APIs.getUserBalance().then((res) => {
      if (res.status) {
        this.context.commit('setBalance', res.data);
      }
    });
  }

  @Action
  public async aycSetUserName(name: string) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userName = Math.random() + name;
        resolve(true);
      }, 1000);
    })
  }
}

export default getModule(UserModule);