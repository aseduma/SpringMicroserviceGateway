import { NgModule } from '@angular/core';

import { SpringMicroserviceGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringMicroserviceGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringMicroserviceGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringMicroserviceGatewaySharedCommonModule {}
