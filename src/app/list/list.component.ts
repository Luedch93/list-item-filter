import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Element } from '../main/variables/elements';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() elements: Element[] = [];
  @Output() itemSelected = new EventEmitter<Element>();

  constructor() {}

  ngOnInit(): void {}

  trackById(_: number, item: Element) {
    return item.id;
  }

  itemClicked(element: Element) {
    this.itemSelected.emit(element);
  }
}
