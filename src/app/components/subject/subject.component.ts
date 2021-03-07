import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  id: any;
  currentSubject: any;


  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];


  constructor(private subjectsService : SubjectsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.currentSubject = this.getSubject(this.id);
    if(this.currentSubject == null){
      this.router.navigate(['/not_found'])
    }
  }

  getSubject(id: number){
    //TODO: Subscribe to endpoint
    return this.subjectsService.getSubject(id);
  }

}
