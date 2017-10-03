import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { SidenavService } from './layout/sidenav/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('sideMenu') public sideMenu: MdSidenav;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sideMenu);
  }
}
