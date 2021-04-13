import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  @Input() recipesData:any;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.recipesData);
  }

  filter(){
    this.recipesData = [];
    this.newItemEvent.emit(this.recipesData);
  }


  onCheckboxChange(e) {
    const value = e.target.parentElement.innerText.trim().toLowerCase();
    let state: boolean;

    if (e.target.checked) {
      // console.log(`${value} checked`);
      state = true;
    } else {
      state = false;
      // console.log(`${value} unchecked`);
    }
    
    this.recipesData = this.recipesData.filter(
      (word: any) => 
        word.strCategory.toLowerCase() === value
    );

    this.newItemEvent.emit(this.recipesData);
  }

}
