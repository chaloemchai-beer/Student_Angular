import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // เพิ่ม CommonModule

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule], // เพิ่ม CommonModule ใน imports
  template: `
    <div class="container">
      <h2>Student Management</h2>

      <!-- ฟอร์มสำหรับเพิ่ม/แก้ไขนักเรียน -->
      <form (ngSubmit)="editIndex === null ? addStudent() : updateStudent()">
        <div>
          <label for="name">Name:</label>
          <input id="name" [(ngModel)]="newStudent.name" name="name" required />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input
            id="lastName"
            [(ngModel)]="newStudent.lastName"
            name="lastName"
            required
          />
        </div>
        <button type="submit" [disabled]="!newStudent.name || !newStudent.lastName">
          {{ editIndex === null ? 'Add Student' : 'Update Student' }}
        </button>
      </form>

      <!-- แสดงรายการนักเรียน -->
      <ul>
        <li *ngFor="let student of students; let i = index">
          name : {{ student.name }} lastName : {{ student.lastName }}
          <button (click)="editStudent(i)">Edit</button>
          <button (click)="deleteStudent(i)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [{ name: 'aa', lastName: 'bbbb' }];
  newStudent = { name: '', lastName: '' };
  editIndex: number | null = null;

  addStudent() {
    if (this.newStudent.name && this.newStudent.lastName) {
      this.students.push({ ...this.newStudent });
      this.newStudent = { name: '', lastName: '' };
    }
  }

  editStudent(index: number) {
    this.editIndex = index;
    this.newStudent = { ...this.students[index] };
  }

  updateStudent() {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = { ...this.newStudent };
      this.newStudent = { name: '', lastName: '' };
      this.editIndex = null;
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
