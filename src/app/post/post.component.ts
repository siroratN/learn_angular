import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  enteredValue = '';
  newPost = 'No content';
  onAddPost(){
    this.newPost = this.enteredValue;
  }
}
