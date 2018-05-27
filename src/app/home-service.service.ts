import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HomeServiceService {

  constructor(private httpClient: HttpClient) {
  }


  OpenGardenLamb() {
    this.httpClient.get('http://192.168.1.150/LEDOn')
      .subscribe();
  }

  CloseGardenLamb() {
    this.httpClient.get('http://192.168.1.150/LEDOff')
      .subscribe();
  }
}
