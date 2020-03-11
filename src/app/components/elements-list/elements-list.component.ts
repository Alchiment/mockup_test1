import { Component, OnInit } from '@angular/core';
import { InterfaceItem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss']
})
export class ElementsListComponent implements OnInit {

  public items: InterfaceItem[] = [
    {
      icon: 'assets/icons/elementary-sel.svg',
      name: 'Elementary SEL',
      percent: {
        purple: '80',
        mint: '20'
      },
      spinner: '75',
      type: 'root'
    },
    {
      icon: 'assets/icons/academic-self-efficacy.svg',
      name: 'Academic Selft-Efficacy',
      percent: {
        purple: '100',
        mint: '10'
      },
      spinner: '100',
      type: 'child'
    },
    {
      icon: 'assets/icons/self-management.svg',
      name: 'Self Management',
      percent: {
        purple: '80',
        mint: '20'
      },
      spinner: '83',
      type: 'child'
    },
    {
      icon: 'assets/icons/mastery-orientation.svg',
      name: 'Mastery Orientation',
      percent: {
        purple: '100',
        mint: '10'
      },
      spinner: '100',
      type: 'child'
    },
    {
      icon: 'assets/icons/academic-self-efficacy.svg',
      name: 'Social Skills',
      percent: {
        purple: '80',
        mint: '20'
      },
      spinner: '83',
      type: 'child',
      last_item: true
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
