<template>
  <div>
    <h1>Customized Interfce Example</h1>
    <div v-html="quote"></div>

    <button @click="getService">Get a quote!</button>
    <button @click="setColor">Change Color!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Inject } from "inversify-props";
import ICustomerService from "@/services/ICustomerService";

@Component
export default class AlertComponent extends Vue {
  private quote: string = "";
  @Prop() readonly bodyAlert!: string;
  @Inject("customerService") customerService!: ICustomerService;

  protected alertOverride() {
    console.log("from AlertComponent");
  }
  get databody(): string {
    return this.$props.bodyAlert;
  }

  public setColor() {
    document.getElementsByTagName("h2")[0].style.color = "black";
  }
  public async getService(): Promise<void> {
    this.quote = await this.customerService.getCustomizedHtml();
    console.log(this.quote);
  }

  public async mounted(): Promise<void> {
    //console.log("mounted Parent");
  }
  public async created(): Promise<void> {
    // console.log("created Parent");
  }
}
</script>