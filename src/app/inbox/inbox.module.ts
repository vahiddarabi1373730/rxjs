import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './../share/share.module';
import { Resolver } from './resolver';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowComponent } from './show/show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      { path: '', component: PlaceholderComponent },

      { path: 'notfound', component: NotFoundComponent, pathMatch: 'full' },
      {
        path: ':id',
        component: ShowComponent,
        resolve: { email: Resolver },
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    InboxHomeComponent,
    CreateComponent,
    IndexComponent,
    ReplyComponent,
    ShowComponent,
    PlaceholderComponent,
    NotFoundComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ShareModule,
  ],
})
export class InboxModule {}
