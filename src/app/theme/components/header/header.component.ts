import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ven-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  constructor(private _router: Router) {
  }

  startSearch() {
      jQuery('.neonatal').addClass('scrollable-container');
    jQuery('.neonatal').find('sidebar-notification-cmp').parent('div').find('#main').addClass('startSearch');
}

endSearch() {
    jQuery('.neonatal').removeClass('scrollable-container');
  jQuery('.neonatal').find('sidebar-notification-cmp').parent('div').find('#main').removeClass('startSearch');
}
  ngOnInit() {
  }

  signout(){
    localStorage.removeItem('User');
    this._router.navigateByUrl('/login');

  }

  viewProfile() {
      this._router.navigateByUrl('/pages/userProfile');
  }
}
