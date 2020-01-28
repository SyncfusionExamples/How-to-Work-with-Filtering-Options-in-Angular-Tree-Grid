import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];
  public filterSettings: FilterSettingsModel;
  public filterTaskName: FilterSettingsModel = { type: 'Menu' };
  public filterTaskID: FilterSettingsModel = { type: 'CheckBox' };
  ngOnInit(): void {
    this.data = sampleData;
    this.filterSettings = {
      ignoreAccent: true,
      hierarchyMode: 'None', //Parent, Child, Both
      type: 'Excel' //Menu, FilterBar, CheckBox
      //columns: [{ field: 'taskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Plan' },
      //{ field: 'duration', matchCase: false, operator: 'equal', predicate: 'and', value: 5 }]
    };
  }
}
