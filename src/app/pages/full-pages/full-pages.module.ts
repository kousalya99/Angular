import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule } from "ng-chartist";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { SwiperModule } from "ngx-swiper-wrapper";
import { PipeModule } from "app/shared/pipes/pipe.module";

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { HorizontalTimelineComponent } from "./timeline/horizontal/component/horizontal-timeline.component";
import { TimelineVerticalCenterPageComponent } from "./timeline/vertical/timeline-vertical-center-page/timeline-vertical-center-page.component";
import { TimelineVerticalLeftPageComponent } from "./timeline/vertical/timeline-vertical-left-page/timeline-vertical-left-page.component";
import { TimelineVerticalRightPageComponent } from "./timeline/vertical/timeline-vertical-right-page/timeline-vertical-right-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from "./search/search.component";
import { FaqComponent } from "./faq/faq.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersViewComponent } from "./users/users-view/users-view.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './invoices/invoice-edit/invoice-edit.component';
import { InvoiceViewComponent } from './invoices/invoice-view/invoice-view.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { UploadComponent } from './Upload/upload/upload.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AnalysisComponent } from './Dashboard/analysis/analysis.component';
import { AssessmentComponent } from './Dashboard/assessment/assessment.component';
import { SubmissionsComponent } from './Dashboard/submissions/submissions.component';
import { RespondentsComponent } from './Dashboard/respondents/respondents.component';
import { AssesmentTypeComponent } from './Dashboard/assesment-type/assesment-type.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { AnalysisLinebarComponent } from './Dashboard/analysis-linebar/analysis-linebar.component';
import { SubmissionsLinebarComponent } from './Dashboard/submissions-linebar/submissions-linebar.component';
import { RespondentLinebarComponent } from './Dashboard/respondent-linebar/respondent-linebar.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
@NgModule({
  imports: [
    CommonModule,
    FullPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartistModule,
    AgmCoreModule,
    NgSelectModule,
    NgbModule,
    SwiperModule,
    PipeModule,
    NgxDatatableModule,
    NgApexchartsModule
  ],
  declarations: [
    GalleryPageComponent,
    InvoicePageComponent,
    HorizontalTimelinePageComponent,
    HorizontalTimelineComponent,
    TimelineVerticalCenterPageComponent,
    TimelineVerticalLeftPageComponent,
    TimelineVerticalRightPageComponent,
    UserProfilePageComponent,
    SearchComponent,
    FaqComponent,
    AccountSettingsComponent,
    UsersListComponent,
    UsersViewComponent,
    UsersEditComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    InvoiceViewComponent,
    InvoiceListComponent,
    CompanyListComponent,
    CompanyEditComponent,
    UploadComponent,
    DashboardComponent,
    AnalysisComponent,
    AssessmentComponent,
    SubmissionsComponent,
    RespondentsComponent,
    AssesmentTypeComponent,
    AnalysisLinebarComponent,
    SubmissionsLinebarComponent,
    RespondentLinebarComponent,
    Dashboard2Component,
   
  ],
})
export class FullPagesModule {}
