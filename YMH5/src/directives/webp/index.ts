import { Directive } from 'vue';
import { isWebp } from '@/utils/helpers';

export const webp: Directive = {
  beforeMount(el: Element) {
    const src: string | null = el.getAttribute('src');

    if (isWebp && src) {
      el.setAttribute('src', `${src}.webp?__static_hash__`);
    }
  }
}
