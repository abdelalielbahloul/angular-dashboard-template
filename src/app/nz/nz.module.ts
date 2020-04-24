import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzMessageModule } from 'ng-zorro-antd/message';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];


const modules = [
  NzButtonModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzAvatarModule,
  NzGridModule,
  NzDropDownModule,
  NzCardModule,
  NzSkeletonModule,
  NzSwitchModule,
  NzCommentModule,
  NzTransferModule,
  NzMessageModule
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class NzModule { }
