import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-complete-profile-component',
  templateUrl: './complete-profile-component.component.html',
  styleUrls: ['./complete-profile-component.component.css'],
  animations: [
    trigger('fade',[
      state('true', style({ height: '*' })),
    ])
  ]
})
export class CompleteProfileComponentComponent implements OnInit {

  wizard = 'account-info-form';
  wizardHeading = "BASIC INFORMATION";
  constructor() { }

  ngOnInit() {
  }
  profileCreate(event){
    if(event=='work-exp-form'){this.wizardHeading = 'WORK EXPERIENCE';}
    else if(event=='account-info-form'){this.wizardHeading = 'BASIC INFORMATION';}
    else if(event=='skill-form'){this.wizardHeading = 'SKILLS';}
    else if(event=='ideal-job-form'){this.wizardHeading = 'IDEAL JOB';}

    this.wizard = event;
    console.log(event);
  }

}
