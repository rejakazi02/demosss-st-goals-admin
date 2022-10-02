import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTop = true;
  resSearchShow = false;
  headerFixed = false;

  constructor(
    private router:Router,
    private carousel:CarouselCntrlService
  ) { }

  ngOnInit(): void {
    this.scrollTopToStart();
  }

  /**
   * Close Header TopBar
   */
  closeHeaderTop(){
    this.headerTop = false;
  }
  /***
   * Responsive search bar toggle
   */
  resSearchBoxToggle(){
    this.resSearchShow =! this.resSearchShow;
  }
  /***
   * header Fixed;
   */
  @HostListener('window:scroll')
  scrollBody(){
    if(window.scrollY > 400 ){
      this.headerFixed = true;
      console.log('Header Fixed');
    }else{
      this.headerFixed = false;
      console.log('Header Not Fixed');
    }
  }
  /***
   * Scroll Top To Start
   */
  scrollTopToStart(){
    this.router.events.subscribe((e) =>{
      if(!(e instanceof NavigationEnd)){
        return;
      }
      window.scrollBy(0,0);
    })

  }/** End */

}
