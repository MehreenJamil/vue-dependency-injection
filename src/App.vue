
<template>
  <component v-bind:is="activeComponent" />
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlertComponentA from "./components/AlertCompenentA.vue";
import AlertComponentB from "./components/AlertComponentB.vue";
import AlertComponent from "./components/AlertComponent.vue";

import { inject } from "inversify-props";

@Component({
  components: {
    AlertComponentA,
    AlertComponentB,
    AlertComponent
  }
})
export default class App extends Vue {
  activeComponent: string = "AlertComponent";
  instance: string = "";

  props: Object = {};
  child = [];
  created() {
    // var ComponentClass = Vue.extend(renderComponent);
    // var instanceComponent = new ComponentClass();
    // this.instance = JSON.stringify(instanceComponent.$mount());
    //console.log(typeof instanceComponent.$mount());
    // console.log(this.$children);
  }
}
</script>
