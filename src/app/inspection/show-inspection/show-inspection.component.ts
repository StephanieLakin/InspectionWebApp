import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';
import { InspectionTypeService } from 'src/app/services/inspectionType.service';
import { StatusService } from 'src/app/services/Status.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(
    private InspectionApiService: InspectionApiService,
    private InspectionTypeService: InspectionTypeService,
    private StatusService: StatusService
  ) {}

  ngOnInit(): void {}
}
