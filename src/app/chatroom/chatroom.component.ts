import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked,AfterViewInit, DoCheck } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked, AfterViewInit,DoCheck {
  @ViewChild('scroller') private feedContainer: ElementRef;
  childdata:any;
  constructor( private chat: ChatService) { 
    
   }

  ngOnInit() {
   
    // setTimeout(() => {
      
    //   this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
    //   console.log("from ")
    // }, 5000);
    // console.log(this.feedContainer.nativeElement.scrollTop)
  }
    
  ngDoCheck(){
    console.log("from chatroom called   huhahahahah")
   if(this.chat.message_come == true){
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
   }
  }

  ngAfterViewInit(){
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  scrollToBottom(): void {
        this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
        this.chat.isScroll = false;
  }

  ngAfterViewChecked() {
    if(this.chat.isScroll == true){
      this.scrollToBottom();
    }
  }

}
