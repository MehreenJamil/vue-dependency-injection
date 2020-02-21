
<template>
  <div>
    <AlertComponent :bodyAlert="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import AlertComponent from "./AlertComponent.vue";
import { mixins } from "vue-class-component";

@Component({
  components: {
    AlertComponent
  }
})
export default class AlertComponentB extends AlertComponent {
  private msg: string =
    '<h1 style=" color: blue;">Dependency Injection From Child B</h1>';
  alertOverride() {
    console.log("from Child B");
  }
}
</script>