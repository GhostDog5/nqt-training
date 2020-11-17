import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {orderRoutes} from './order/order.routes';
import {OrderModule} from './order/order.module';
import {HttpClientModule} from '@angular/common/http';
import {QuotationModule} from './quotation/quotation.module';
import {quotationRoutes} from './quotation/quotation.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuotationModule.forRoot(),
    OrderModule.forRoot(),
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: '/quotation'},
      ...quotationRoutes,
      ...orderRoutes
    ]),
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
