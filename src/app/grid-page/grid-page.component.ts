import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {KendoGridColumnTemplatesComponent} from '../kendo-grid-column-templates/kendo-grid-column-templates.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css']
})
export class GridPageComponent  {
  @ViewChild('columnTemplates') columnTemplates: KendoGridColumnTemplatesComponent;
  @Input() gridData: any[];
  @Input() columnsDefinition ;

  getTemplateContext(dataItem, col) {
    return _.get(dataItem, col.field, {});
  }

  getTemplate(template) {
    const temp = this.columnTemplates[template];
    return temp;
  }
}
