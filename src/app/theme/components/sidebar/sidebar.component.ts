import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'app/theme/services/menu.service';

@Component({
  selector: 'ven-sidebar',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];
  busy: Subscription;

  constructor(private _router: Router, private _menuService: MenuService) {

  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menus = [];
    this._menuService.getMenus()
      .subscribe((data: any[]) => {
        this.menus = data;
      });
  }

  goto(item) {

    this.menus.forEach(element => {
      element.active = false;
    });
    item.active = true;
    
  }

}