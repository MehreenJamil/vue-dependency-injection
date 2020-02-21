<script>
import Vue, { VNode, CreateElement } from "vue";
export default {
  name: "renderComponent",
  functional: true,
  render(createElement, context) {
    return createElement("button", "Click me");
  },
  mounted() {
    console.log("mounted");
  }
};
</script>
