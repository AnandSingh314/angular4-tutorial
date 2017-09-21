import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-advance-routing',
  templateUrl: './advance-routing.component.html',
  styleUrls: ['./advance-routing.component.css']
})
export class AdvanceRoutingComponent implements OnInit {

  private username: string;
  private parameters: string[];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('name');
    this.parameters = this.route.snapshot.paramMap.getAll('username');
    console.log(this.route);
  }

}
