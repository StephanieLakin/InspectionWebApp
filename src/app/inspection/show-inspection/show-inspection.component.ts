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

  // Map to display data associated with FK
  inspectionTypeMap: Map<number, string> = new Map();

  constructor(private Service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.Service.getInspectionList();
  }
}
