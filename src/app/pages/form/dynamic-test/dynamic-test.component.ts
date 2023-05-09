import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  NgModuleFactory,
  NgModuleRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CustomerModule } from '../../../customer/customer.module';

@Component({
  selector: 'dynamic-test',
  template: `<button (click)="loadFeature()">load</button>
    <ng-container #container></ng-container> `,
})
export class DynamicTestComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector,
    private moduleRef: NgModuleRef<CustomerModule>
  ) {}

  ngOnInit() {}

  async loadFeature() {
    const module = await import('../../../customer/customer.module');
    const moduleFactory =
      await this.compiler.compileModuleAndAllComponentsAsync(
        module.CustomerModule
      );

    const componentFactories = moduleFactory.componentFactories;

    // lazy load component of module
    const dynamicModuleComponentFactory = componentFactories[0];
    const dynamicInfoComponent = this.container.createComponent(
      dynamicModuleComponentFactory
    );
    dynamicInfoComponent.instance.name = 'Jack222333';
  }
}
