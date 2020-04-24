import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';

import { formatDistance } from 'date-fns';
import { TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list: TransferItem[] = [];
  loading = true;
  constructor(public msg: NzMessageService) { }

  ngOnInit(): void {
    this.getData();
  }

  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  getData(): void {
    const ret: TransferItem[] = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
    this.list = ret;
  }
  reload(direction: string): void {
    this.getData();
    this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }

  

}
