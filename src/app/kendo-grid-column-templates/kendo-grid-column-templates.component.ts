import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-kendo-grid-column-templates',
  templateUrl: './kendo-grid-column-templates.component.html'
})
export class KendoGridColumnTemplatesComponent  {

  @ViewChild('textTemplate') textTemplate;
  @ViewChild('emailTemplate') emailTemplate;
  @ViewChild('checkboxTemplate') checkboxTemplate;
  @ViewChild('urlTemplate') urlTemplate;
  @ViewChild('cityTemplate') cityTemplate;

}
