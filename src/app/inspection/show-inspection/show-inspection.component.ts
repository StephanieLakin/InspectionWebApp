import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
  providers: [InspectionApiService],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionTypeList: any = [];
  inspection: any;
  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;

  // Map to display data associated with Foreign Keys:
  inspectionTypeMap: Map<number, string> = new Map();

  constructor(private Service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.Service.getInspectionList();
    this.inspectionTypeList$ = this.Service.getInspectionTypeList();
  }

  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      commments: null,
      inspectionTypeId: null,
    };
    this.modalTitle = 'Add Inspection';
    this.activateAddEditInspectionComponent = true;
  }

  modalEdit(item: any) {
    this.inspection = item;
    this.modalTitle = 'Edit Inspection';
    this.activateAddEditInspectionComponent = true;
  }

  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.Service.getInspectionList();
  }
}
