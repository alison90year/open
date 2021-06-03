declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}
interface Payload {
  [random: string]: any;
}

declare const module: any;
