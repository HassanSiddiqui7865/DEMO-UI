import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PriceCardComponent } from './Components/price-card/price-card.component';
import { WorkImageComponent } from './Components/work-image/work-image.component';
import { SliderComponent } from './Components/slider/slider.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SatisfiedComponent } from './Components/satisfied/satisfied.component';
import { SolutionComponent } from './Components/solution/solution.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './Components/counter/counter.component';
import { PackagesComponent } from './packages/packages.component';
import { WebpackagesComponent } from './packages/prices/webpackages/webpackages.component';
import { LogopackagesComponent } from './packages/prices/logopackages/logopackages.component';
import { VideopackagesComponent } from './packages/prices/videopackages/videopackages.component';
import { CwpackagesComponent } from './packages/prices/cwpackages/cwpackages.component';
import { SmpackagesComponent } from './packages/prices/smpackages/smpackages.component';
import { MarketingComponent } from './packages/prices/marketingpackages/marketing.component';
import { SeopackagesComponent } from './packages/prices/seopackages/seopackages.component';
import { ServicesComponent } from './services/services.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { LogodesignsComponent } from './showcase/work/logodesigns/logodesigns.component';
import { WebComponent } from './showcase/work/web/web.component';
import { MotionComponent } from './showcase/work/motion/motion.component';
import { BrandingComponent } from './showcase/work/branding/branding.component';
import { IllustrationComponent } from './showcase/work/illustration/illustration.component';
import { MobileappsComponent } from './showcase/work/mobileapps/mobileapps.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsformComponent } from './Components/contact-usform/contact-usform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PriceCardComponent,
    WorkImageComponent,
    SliderComponent,
    FooterComponent,
    SatisfiedComponent,
    SolutionComponent,
    AboutComponent,
    CounterComponent,
    PackagesComponent,
    WebpackagesComponent,
    LogopackagesComponent,
    VideopackagesComponent,
    CwpackagesComponent,
    SmpackagesComponent,
    MarketingComponent,
    SeopackagesComponent,
    ServicesComponent,
    ShowcaseComponent,
    LogodesignsComponent,
    WebComponent,
    MotionComponent,
    BrandingComponent,
    IllustrationComponent,
    MobileappsComponent,
    ContactComponent,
    ContactUsformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
