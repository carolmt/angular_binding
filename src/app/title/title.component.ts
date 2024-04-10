import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnChanges {

  @Input() title = '';
  @Output() dataFromChild = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void { //variable changes de tipo Simplechanges.
    console.log(changes);
    this.dataFromChild.emit('data from child component')
  }
}
