import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // แก้ไขจาก styleUrl เป็น styleUrls
})
export class AppComponent {
  title = 'Students';
}
