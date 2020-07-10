import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/DataService';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './component/header/header.component';
import { AddRequestComponent } from './component/add-request/add-request.component';
import { RequestHistoryComponent } from './component/request-history/request-history.component';
import { GetBatchStatsComponent } from './component/get-batch-stats/get-batch-stats.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { LoginPageComponent } from './component/login-page/login-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRequestComponent,
    RequestHistoryComponent,
    GetBatchStatsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
