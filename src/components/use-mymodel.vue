<template>
  <MyModel>
    <template #header>
      <h2>Awesome Interruption!</h2>
    </template>
    <template #body>
      <p>
        We interrupt your use of our application to
        let you know that this application is awesome
        and you should continue using it every day for
        the rest of your life!
      </p>
    </template>
    <template #footer>
      <em>Now back to your regularly scheduled app usage</em>
    </template>
  </MyModel>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyModel from "./my-modal.vue";

@Component({
  components: {
    MyModel
  }
})
export default class UseMyModel2 extends Vue {}
</script>