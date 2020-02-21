import CustomerService from './CustomerService';
import ICustomerService from './ICustomerService';

//import axios from 'axios'

export default class CustomerServiceB extends CustomerService
  implements ICustomerService {
  public async getCustomizedHtml(): Promise<string> {
    var customizedString = `<h2 style=" color: orange;">Dependency Injection From Child B</h2>
    `;
    return customizedString;
  }
  public async getServiceName(): Promise<string> {
    return 'CustomerServiceB';
  }
}
