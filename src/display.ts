import { container } from 'inversify-props';

export default class Display {
  public Info(containerObj: any): any {
    console.log('Container Info  :: ', containerObj);
  }
}
