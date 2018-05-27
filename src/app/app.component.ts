import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from './home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bizim Ev';
  IsOpen = false;

  constructor(private homeService: HomeServiceService) {
  }

  OpenGardenLamb() {
    this.homeService.OpenGardenLamb();
    this.IsOpen = true;
  }

  CloseGardenLamb() {
    this.homeService.CloseGardenLamb();
    this.IsOpen = false;
  }

  ngOnInit(): void {
    this.CloseGardenLamb();
    this.IsOpen = false;
  }
}
