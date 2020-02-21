//import axios from 'axios'
import ICustomerService from '@/services/ICustomerService';
export default class CustomerService implements ICustomerService {
  public async getCustomizedHtml(): Promise<string> {
    var customizedString = `<h2 style=" color: red;">Dependency Injection From Child A</h2>`;
    return customizedString;
  }
  public async getServiceName(): Promise<string> {
    var customizedString = `CustomerService`;
    return customizedString;
  }
}
