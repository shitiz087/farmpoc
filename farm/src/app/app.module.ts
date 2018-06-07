import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { InvestmentsComponent } from './investments/investments.component';
import { OpenbidComponent } from './openbid/openbid.component';
import { VisionComponent } from './vision/vision.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductpageComponent } from './productpage/productpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FaqComponent,
    InvestmentsComponent,
    OpenbidComponent,
    VisionComponent,
    HomeComponent,
    FooterComponent,
    ProductpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'investments', component: InvestmentsComponent },
      { path: 'openbid', component: OpenbidComponent },
      { path: 'vision', component: VisionComponent },
      {path:'productpage',component:ProductpageComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
