/*
 * @Author: Seanm
 * @Date: 2021-03-30 16:41:53
 */
import { defineComponent } from 'vue';
import { report } from '../static';
interface ReportList {
  title: string;
  des: string;
}
export default defineComponent({
  name: 'report',
  setup() {
    const reportList: ReportList[] = report;
    return {
      reportList
    };
  }
});
