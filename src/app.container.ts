import { container, Container } from 'inversify-props';
import ICustomerService from '@/services/ICustomerService';
import CustomerService from '@/services/CustomerService';
import CustomerServiceB from '@/services/CustomerServiceB';
import Display from '@/display';
//import CustomerServiceB from '@/services/CustomerServiceB';

export default async function containerBuilder(): Promise<void> {
  var obj = new Display();
  // container.options.autoBindInjectable = true;

  if (true) {
    container.addSingleton<ICustomerService>(
      CustomerServiceB,
      'CustomerService'
    );
    container.bind<ICustomerService>('customerService').to(CustomerServiceB);
  }

  if (!container.isBound('customerService')) {
    container.addSingleton<ICustomerService>(
      CustomerServiceB,
      'CustomerService'
    );
    container.bind<ICustomerService>('customerService').to(CustomerServiceB);
  }
}
