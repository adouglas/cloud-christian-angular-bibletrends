import { Injectable } from '@angular/core';

declare var ping: any;

@Injectable()
export class PingerService {

  constructor() { }

  pingGoogle(): Promise<number> {
    return ping('https://google.com/');
  }
}
