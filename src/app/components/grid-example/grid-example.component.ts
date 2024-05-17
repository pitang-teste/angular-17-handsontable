import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

function getData() {
  return [
    {
      auto_1: null,
      auto_2: null,
      currency_1: 123456.789,
      currency_2: 0
    },
    {
      auto_1: null,
      auto_2: null,
      currency_1: 0,
      currency_2: 0
    },
    {
      auto_1: null,
      auto_2: null,
      currency_1: 0,
      currency_2: 0
    },
  ]
}

const dropdownData = [...Array(10).keys()];

@Component({
  selector: 'app-grid-example',
  standalone: true,
  imports: [HotTableModule],
  templateUrl: './grid-example.component.html',
})
export class GridExampleComponent implements OnInit, AfterViewInit {
  private hotRegisterer = new HotTableRegisterer();
  public id = 'hotInstance';
  public hotSettings: Handsontable.GridSettings = {};
  public data: any[] = [];


  get grid() {
    return this.hotRegisterer.getInstance(this.id);
  }

  ngOnInit(): void {
    this.data = getData();
    this.hotSettings = {
      data: this.data,
      language: 'pt-BR',
      licenseKey: 'non-commercial-and-evaluation',
      height: 'auto',
      contextMenu: ['copy', 'cut', 'undo', 'redo', 'clear_column'],
      nestedHeaders: [
        [{ label: 'Parent 1', colspan: 2 }, { label: 'Parent 2', colspan: 2 }],
        ['auto 1', 'currency 1', 'auto 2', 'currency 2']
      ],
      columns: [
        {
          data: 'auto_1',
          type: 'dropdown',
          source: dropdownData,
          readOnly: false
        },
        {
          data: 'currency_1',
          type: 'numeric',
          numericFormat: {
            pattern: '0,0.000',
            culture: 'pt-BR',
          },
          readOnly: false,
        },
        {
          data: 'auto_2',
          type: 'dropdown',
          source: dropdownData,
          readOnly: false
        },
        {
          data: 'currency_2',
          type: 'numeric',
          numericFormat: {
            pattern: '0,0.000',
            culture: 'pt-BR',
          },
          readOnly: false,
        }
      ]
    }
  }

  ngAfterViewInit(): void {
    this.grid.loadData(this.data)
  }
}
