import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child;
  students =[ {
    id: "1",
    name: "sathiya",
        course: "BCA"
      },
      {
        id: "2",
        name: "arul",
            course: "MCA"
          },
          {
            id: "3",
            name: "selva",
                course: "Bsc"
              }
    
    ];
//   students = [{
//     studentid: "1",
//     studentname: "sathiya",
//     course: "BCA"
//   },
//   {
//     studentid: "2",
//     studentname: "selva",
//     course: "BCA"
//   },
//   {
//     studentid: "3",
//     studentname: "sabari",
//     course: "BCA"
//   }
// ];

childMessage="this is child message";
  constructor() { }

  ngOnInit() {
  }

  onclick(){
    console.log('child value is',this.child.message);
  }

}
