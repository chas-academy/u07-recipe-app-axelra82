// A simple reusable tags component for list and single recipe views
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  // Use input from app-tags in parent component
  // to pass data down to child component
  @Input() tags: string;

  constructor() { }

  ngOnInit(): void {
  }

}
