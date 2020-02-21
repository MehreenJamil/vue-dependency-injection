export default interface ICustomerService {
  getCustomizedHtml(): Promise<string>;
  getServiceName(): Promise<string>;
}
