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

  // Map to display data associated with Foreign Keys:
  inspectionTypeMap: Map<number, string> = new Map();

  constructor(private Service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.Service.getInspectionList();
    this.inspectionTypeList$ = this.Service.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap() {
    this.Service.getInspectionList().subscribe((data) => {
      this.inspectionTypeList = data;

      for (let i = 0; i < data.length; i++) {
        this.inspectionTypeMap.set(
          this.inspectionTypeList[i].id,
          this.inspectionTypeList[i].inspectionName
        );
      }
    });
  }
}
