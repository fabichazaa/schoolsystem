import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  allSubjects : any = []
  constructor() { }

  getSubjects(){
    return this.allSubjects = subjects.slice(0);
  }

  getSubject(id: number){
    return this.allSubjects = subjects.slice(0).find(subject => subject.id == id);
  }
}

const subjects = [{id: 1, name: 'Art', teacher_id: 1, picture: 'assets/images/subjects/art.jpg'},
                  {id: 2, name: 'Geography', teacher_id: 2, picture: 'assets/images/subjects/geography.jpeg'},
                  {id: 3, name: 'Mathematics', teacher_id: 3, picture: 'assets/images/subjects/mathematics.jpg'},
                  {id: 4, name: 'History', teacher_id: 4, picture: 'assets/images/subjects/history.png'},
                  {id: 5, name: 'Biology', teacher_id: 5, picture: 'assets/images/subjects/biology.jpg'},
                  {id: 6, name: 'Philosophy', teacher_id: 6, picture: 'assets/images/subjects/philosophy.jpg'},
                  {id: 7, name: 'Literature', teacher_id: 6, picture: 'assets/images/subjects/literature.jpg'},
                  {id: 8, name: 'Music', teacher_id: 7, picture: 'assets/images/subjects/music.jpg'},
                  {id: 9, name: 'French', teacher_id: 8, picture: 'assets/images/subjects/france.jpg'}
                  ]