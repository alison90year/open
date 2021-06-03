/*
 * @Author: Seanm
 * @Date: 2021-03-30 16:53:07
 */
import { defineComponent } from 'vue';
import { app, plan } from '../static';
interface Plan {
  title: string;
  des: string;
}
export default defineComponent({
  name: 'plan',
  setup() {
    const appList: string[] = app;
    const planList: Plan[] = plan;
    return {
      appList,
      planList
    };
  }
});
