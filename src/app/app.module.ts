import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarsComponent } from './stars/stars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filters/filter.pipe';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    StarsComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    HomeComponent,
    ProductDetailComponent,
    FilterPipe
  ],
  //path:''配置基础url将会导航到HomeComponent
  //products/:prodTitle用于渲染ProductDetailComponent
  //选择HashLocationStrategy作为策略，并通过依赖注入到provider中
  //path熟悉拥有一个额外的url片段:prodTitle
  imports: [
    BrowserModule,
    // AppRoutingModule
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products/:productId',component : ProductDetailComponent}
    ])
  ],
  providers: [{provide: LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
