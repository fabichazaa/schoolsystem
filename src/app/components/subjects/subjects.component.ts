import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects : any[] = []
  constructor(private subjectsService : SubjectsService) { 
    this.subjects = subjectsService.getSubjects();
  }

  ngOnInit(): void {
  }

}
