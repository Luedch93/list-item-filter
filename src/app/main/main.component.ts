import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Element, mockElements } from './variables/elements';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filterText = '';
  elements: Element[] = mockElements;
  displayElements: Element[] = mockElements;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.filterText = this.activatedRoute.snapshot.queryParams['term'];
  }

  filterChanged(value: string) {
    this.displayElements = this.elements.filter((element) =>
      element.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    this.router.navigate(['items'], { queryParams: { term: value } });
  }

  elementSelected(element: Element) {
    this.displayElements = this.displayElements.map((elementList) => {
      elementList.selected = element.id === elementList.id;
      return elementList;
    });
  }
}
