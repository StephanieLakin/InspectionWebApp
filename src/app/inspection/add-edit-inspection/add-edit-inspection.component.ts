import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css'],
})
export class AddEditInspectionComponent implements OnInit {
  inspectionType: any;
  inspection: any;
  constructor() {}

  ngOnInit(): void {
    this.inspectionType = this.inspection.inspectionType;
  }
}
