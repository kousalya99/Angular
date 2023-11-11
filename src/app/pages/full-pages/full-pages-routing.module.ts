import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { TimelineVerticalCenterPageComponent } from './timeline/vertical/timeline-vertical-center-page/timeline-vertical-center-page.component';
import { TimelineVerticalLeftPageComponent } from './timeline/vertical/timeline-vertical-left-page/timeline-vertical-left-page.component';
import { TimelineVerticalRightPageComponent } from './timeline/vertical/timeline-vertical-right-page/timeline-vertical-right-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './invoices/invoice-edit/invoice-edit.component';
import { InvoiceViewComponent } from './invoices/invoice-view/invoice-view.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { UploadComponent } from './Upload/upload/upload.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboards',
        component: DashboardComponent
      },
      {
        path: 'dashboard2',
        component:Dashboard2Component
      },
      {
        path: 'companylist',
        component:CompanyListComponent
      },
      {
        path: 'companyedit/:id',
        component:CompanyEditComponent
      },
      {
        path:'upload',
        component:UploadComponent
      },
      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery Page'
        }
      },
      {
        path: 'invoice',
        component: InvoicePageComponent,
        data: {
          title: 'Invoice Page'
        }
      },
      {
        path: 'create-invoice',
        component:InvoiceCreateComponent
      },
      {
        path: 'list-invoice',
        component:InvoiceListComponent
      },
      {
        path: 'view-invoice/:id',
        component:InvoiceViewComponent
      },
      {
        path: 'edit-invoice/:id',
        component:InvoiceEditComponent
      },
      {
        path: 'horizontaltimeline',
        component: HorizontalTimelinePageComponent,
        data: {
          title: 'Horizontal Timeline Page'
        }
      },
      {
        path: 'timeline-vertical-center',
        component: TimelineVerticalCenterPageComponent,
        data: {
          title: 'Timeline Vertical Center Page'
        }
      },
      {
        path: 'timeline-vertical-left',
        component: TimelineVerticalLeftPageComponent,
        data: {
          title: 'Timeline Vertical Left Page'
        }
      },
      {
        path: 'timeline-vertical-right',
        component: TimelineVerticalRightPageComponent,
        data: {
          title: 'Timeline Vertical Right Page'
        }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Account Settings Page'
        }
      },
      {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'User Profile Page'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
      {
        path: 'kb',
        loadChildren: () => import('./knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule)
      },
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'users-view',
        component: UsersViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'users-edit',
        component: UsersEditComponent,
        data: {
          title: 'Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
