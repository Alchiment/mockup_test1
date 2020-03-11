import { Component, OnInit, Input } from '@angular/core';
import { InterfaceItem } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent implements OnInit {

  @Input() item: InterfaceItem;

  constructor() { }

  ngOnInit() {
  }

}
