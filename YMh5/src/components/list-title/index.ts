import { defineComponent } from 'vue';

interface Props {
  iconUrl: string,
  title: string,
  desc: string,
  styl?: string,
  cls?: string
}

export default defineComponent({
  name: 'ListTitle',
  props: {
    iconUrl: String,
    title: String,
    desc: String,
    styl: String,
    cls: String
  },
  setup(props) {
    const clickHandler = () => {
      // emit('click');
    }
    return {
      clickHandler
    }
  }
});
