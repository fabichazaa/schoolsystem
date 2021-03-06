import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects : any[] = []
  constructor(private subjectsService : SubjectsService, private teachersService : TeachersService) { 
    this.subjects = subjectsService.getSubjects();
    this.subjects.forEach(subject => subject["teacher"] = teachersService.getTeacher(subject.teacher_id));
  }

  ngOnInit(): void {
  }

}
