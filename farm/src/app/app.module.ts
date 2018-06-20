import { AuthenticationService } from './service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Productpage2Component } from './productpage2/productpage2.component';
import { Productpage3Component } from './productpage3/productpage3.component';
import { Productpage4Component } from './productpage4/productpage4.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HttpModule } from '@angular/http';


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
    ProductpageComponent,
    LoginComponent,
    SignupComponent,
    Productpage2Component,
    Productpage3Component,
    Productpage4Component,
    ProfilepageComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'investments', component: InvestmentsComponent },
      { path: 'openbid', component: OpenbidComponent },
      { path: 'vision', component: VisionComponent },
      { path: 'maizefarm', component: ProductpageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'ricefarm', component: Productpage2Component },
      { path: 'soyabeansfarm', component: Productpage3Component },
      { path: 'poultaryfarm', component: Productpage4Component },
      { path: 'profilepage', component: ProfilepageComponent },       

    ])
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
