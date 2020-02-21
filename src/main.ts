import 'reflect-metadata';
import { Vue } from 'vue-property-decorator';
import App from './App.vue';
import store from './store';
import { router } from './app.router';

import containerBuilder from './app.container';

class AppBootstrap {
  constructor() {
    this.loadDependencyContainer();

    this.loadVueApp();
  }

  private loadDependencyContainer(): void {
    containerBuilder();
  }

  private loadVueApp(): void {
    Vue.config.productionTip = false;

    const app = new Vue({
      el: '.main',
      router: router(),
      store,
      render: h => h(App)
    });
  }
}

// eslint-disable-next-line no-new
new AppBootstrap();
