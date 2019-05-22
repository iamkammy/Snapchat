import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom(): void {
  
    // console.log("huha");
    try{
      this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
    }
    catch (err){}
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
