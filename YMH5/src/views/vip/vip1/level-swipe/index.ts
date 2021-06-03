import { defineComponent, ref, onMounted } from 'vue';
import { Sticky } from 'vant';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import 'vant/lib/sticky/index.css';

// 一次只能滑动一块 还未解决
const swiperRelativeEffect = () => {
  const progressBarTranslate = ref(0);
  const activeIndex = ref(0);
  const nowLevel = ref(0);
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 8,
    shortSwipes: true,
    on: {
      slideChangeTransitionStart(e) {
        const des = e.previousIndex < e.activeIndex ? 1 : -1;
        if (Math.abs(activeIndex.value - e.previousIndex) <= 1) {
          const index = e.previousIndex + des;
          e.activeIndex = index;
          activeIndex.value = index;
        }
        const num = activeIndex.value - 2;
        const width = ((94 + 64) / 750) * window.innerWidth;
        progressBarTranslate.value = -width * (num > 0 ? num : 0);
      }
    }
  });
  const tapLevel = (index: number): void => {
    activeIndex.value = index;
    swiper.slideTo(index);
  };
  return { swiper, tapLevel, progressBarTranslate, activeIndex, nowLevel };
};

export default defineComponent({
  name: 'vip-level',
  components: {
    [Sticky.name]: Sticky
  },
  setup() {
    const { swiper, tapLevel, progressBarTranslate, activeIndex, nowLevel } = swiperRelativeEffect();
    onMounted(() => {
      swiper.init();
    });
    return { progressBarTranslate, activeIndex, nowLevel, tapLevel };
  }
});
