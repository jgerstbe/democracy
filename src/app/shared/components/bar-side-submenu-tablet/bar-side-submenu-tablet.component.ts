import { Component, OnInit, HostListener, Input } from '@angular/core';
import { MenuTab } from '../../models/menuTab';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-side-submenu-tablet',
  templateUrl: './bar-side-submenu-tablet.component.html',
  styleUrls: ['./bar-side-submenu-tablet.component.scss']
})
export class BarSideSubmenuTabletComponent implements OnInit {
  @Input() menuTabList$: Observable<MenuTab[]>;
  @Input() stickyStart: number;
  @Input() stickyEnd: number;
  sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
    this.menuTabList$.subscribe();
    this.toggleSubMenuTablet();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.toggleSubMenuTablet();
 }

  toggleSubMenuTablet(): void {
    if (window.pageYOffset > this.stickyStart && window.pageYOffset < this.stickyEnd) {
      this.sticky = true;
    } else {
        this.sticky = false;
    }
  }

}
