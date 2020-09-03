import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Mhip2SharedModule } from 'app/shared/shared.module';
import { Mhip2CoreModule } from 'app/core/core.module';
import { Mhip2AppRoutingModule } from './app-routing.module';
import { Mhip2HomeModule } from './home/home.module';
import { Mhip2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Mhip2SharedModule,
    Mhip2CoreModule,
    Mhip2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Mhip2EntityModule,
    Mhip2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Mhip2AppModule {}
