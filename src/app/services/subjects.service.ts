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
}

const subjects = [{id: 1, name: 'Art', teacher: 'Sermina Paras', picture: 'assets/images/art.jpg'},
                  {id: 2, name: 'Geography', teacher: 'Mone Crow', picture: 'assets/images/geography.jpeg'},
                  {id: 3, name: 'Mathematics', teacher: 'Minerva McGonagall', picture: 'assets/images/mathematics.jpg'},
                  {id: 4, name: 'History', teacher: 'Lucius Spawn', picture: 'assets/images/history.png'},
                  {id: 5, name: 'Biology', teacher: 'Thomas Fate', picture: 'assets/images/biology.jpg'},
                  {id: 6, name: 'Philosophy', teacher: 'Felix Lowe', picture: 'assets/images/philosophy.jpg'},
                  {id: 7, name: 'Literature', teacher: 'Cassandra Jean', picture: 'assets/images/literature.jpg'},
                  {id: 8, name: 'Music', teacher: 'Seamus John', picture: 'assets/images/music.jpg'},
                  {id: 9, name: 'French', teacher: 'Louis Martin', picture: 'assets/images/france.jpg'}
                  ]