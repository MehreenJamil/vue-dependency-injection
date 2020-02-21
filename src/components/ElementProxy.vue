<script lang="ts">
import AlertComponentA from "./AlertCompenentA.vue";
import AlertComponentB from "./AlertComponentB.vue";

export default {
  components: {
    AlertComponentA,
    AlertComponentB
  },
  name: "ElementProxy",

  props: {
    type: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: () => ({})
    }
  }

  // render(createElement: any) {
  //   const { props: attrs } = this;
  //   return createElement(element, { attrs });
  // }
};
</script>