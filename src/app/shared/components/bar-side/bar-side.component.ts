import { Component, OnInit, Input } from '@angular/core';
import { MenuTab } from '../../models/menuTab';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.scss']
})
export class BarSideComponent implements OnInit {
  @Input() menuTablList: MenuTab[];
  @Input() logoutButton: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logoutUser();
  }

}
