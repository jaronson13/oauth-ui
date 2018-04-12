import {Component, Input, OnInit} from '@angular/core';
import {Apps} from '../../model/apps.model';

@Component({
  selector: 'app-tenant-display-apps',
  templateUrl: './tenant-display-apps.component.html',
  styleUrls: ['./tenant-display-apps.component.css']
})
export class TenantDisplayAppsComponent implements OnInit {

  @Input() tenantId: string;
  tenantApps: Apps[] = [new Apps('Alexandria', 'a library', 'active')];
  displayApps = false;
  constructor() { }

  ngOnInit() {
    // TODO: use endpoint to get all apps for specific tenant and display them in template
    // tenantApps = tenantService.getAppsForTenant(tenantId);
    this.tenantApps =
      [new Apps(Math.random().toString(36).substring(7), '', ''), new Apps(Math.random().toString(36).substring(7), 'test', 'test')];
  }
}
