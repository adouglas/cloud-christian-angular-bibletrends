import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenav: MdSidenav;

  public constructor(
    private router: Router
  ) { }

  public setSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Promise<MdSidenavToggleResult> {
    const promise: Promise<MdSidenavToggleResult> = this.sidenav.open();
    this.router.navigate([{ outlets: { sidenav: [ ] }}], { skipLocationChange: true });
    return promise;
  }

  public close(): Promise<MdSidenavToggleResult> {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<MdSidenavToggleResult> {
    return this.sidenav.toggle(isOpen);
  }
}
