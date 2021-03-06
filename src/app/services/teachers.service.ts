import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  allTeachers: any = []
  constructor() { }

  getTeachers(){
    return this.allTeachers = teachers.slice(0);
  }

  getTeacher(id : number){
    return this.allTeachers = teachers.slice(0).find(teacher => teacher.id == id);
  }
}


const teachers = [
  {id: 1, name: 'Sermina Paras', picture: 'assets/images/teachers/teacher_5.jpg'},
  {id: 2, name: 'Mone Crow', picture: 'assets/images/teachers/teacher_7.jpg'},
  {id: 3, name: 'Jolene Fox', picture: 'assets/images/teachers/teacher_4.jpg'},
  {id: 4, name: 'Lucius Spawn', picture: 'assets/images/teachers/teacher_3.jpg'},
  {id: 5, name: 'Thomas Fate', picture: 'assets/images/teachers/teacher_8.jpg'},
  {id: 6, name: 'Li Xiu Ying', picture: 'assets/images/teachers/teacher_2.jpg'},
  {id: 7, name: 'Seamus John', picture: 'assets/images/teachers/teacher_1.jpg'},
  {id: 8, name: 'Louis Martin', picture: 'assets/images/teachers/teacher_6.jpg'},
]