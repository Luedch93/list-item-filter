import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() text!: string;
  @Output() textChanged = new EventEmitter<string>();

  searchInput = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    const { text } = changes;

    if (text) {
      this.textChanged.emit(this.text);
    }
  }

  ngOnInit(): void {
    this.searchInput.setValue(this.text);

    this.searchInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => this.textChanged.emit(value));
  }
}
