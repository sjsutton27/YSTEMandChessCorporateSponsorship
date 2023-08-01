import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { YSCComponent } from './ysc/ysc.component';
import { MainComponent } from './main/main.component';
import { TierOfSponsorsComponent } from './tier-of-sponsors/tier-of-sponsors.component';
import { CorporateSponsorBenefitsComponent } from './corporate-sponsor-benefits/corporate-sponsor-benefits.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BoardMemberComponent } from './board-member/board-member.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    YSCComponent,
    MainComponent,
    TierOfSponsorsComponent,
    CorporateSponsorBenefitsComponent,
    TestimonialComponent,
    BoardMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
