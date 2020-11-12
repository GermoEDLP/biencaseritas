import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(id: string){
    if(id=='top'){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }else{
      document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
  }

}
