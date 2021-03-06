import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) 
  { }

  ngOnInit(): void {
  }
  navigate(path: any, id: any) {
    this.router.navigate([{outlets: {mainPanel: [path]}}],
                            {relativeTo: this.route});
  }
}
