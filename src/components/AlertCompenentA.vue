
<template>
  <div>
    <AlertComponent :bodyAlert="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlertComponent from "./AlertComponent.vue";

@Component({
  components: {
    AlertComponent
  }
})
export default class AlertComponentA extends Vue {
  private quote: string = "";
  private msg: string =
    '<h1 style=" color: red;">Dependency Injection From Child A</h1> ';
  //@Inject("ServiceTest") private ServiceTest!: ICustomerService;
}
</script>