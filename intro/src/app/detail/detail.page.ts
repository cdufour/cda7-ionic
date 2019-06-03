import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private route: ActivatedRoute) {
    //console.log(this.route.params)
    
  }

  ngOnInit() {
    
    this.route.params.subscribe((res) => {
      console.log(res.index)
    })

  }

}
