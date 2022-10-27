import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css'],
  providers: [InspectionApiService],
})
export class AddEditInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionType: any;
  constructor(private Service: InspectionApiService) {}

  @Input()
  inspection: any;
  id: number = 0;
  status: string = '';
  comments: string = '';
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.Service.getStatusList();
    this.inspectionList$ = this.Service.getInspectionList();
    this.inspectionTypeList$ = this.Service.getInspectionTypeList();
  }

  addInspection() {
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId,
    };
    this.Service.addInspection(inspection).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
      return res;
    });
  }

  // updateInspection() {
  //   var inspection = {
  //     id: this.id,
  //     status: this.status,
  //     comments: this.comments,
  //     inspectionTypeId: this.inspectionTypeId,
  //   };
  //   var id: number = this.id;
  //   this.Service.updateInspection(id, inspection).subscribe((res) => {
  //     var closeModalBtn = document.getElementById('add-edit-modal-close');
  //     if (closeModalBtn) {
  //       closeModalBtn.click();
  //     }

  //     var showUpdateSuccess = document.getElementById('update-success-alert');
  //     if (showUpdateSuccess) {
  //       showUpdateSuccess.style.display = 'none';
  //     }
  //     setTimeout(function () {
  //       if (showUpdateSuccess) {
  //         showUpdateSuccess.style.display = 'none';
  //       }
  //     }, 4000);
  //     return res;
  //   });
  // }

  // delete(item: any) {
  //   if (confirm(`Are you sure you want to delete inspection ${item.id}`)) {
  //     this.Service.deleteInspection(item.id).subscribe((res) => {
  //       var closeModalBtn = document.getElementById('add-edit-modal-close');
  //       if (closeModalBtn) {
  //         closeModalBtn.click();
  //       }

  //       var showDeleteSuccess = document.getElementById('delete-success-alert');
  //       if (showDeleteSuccess) {
  //         showDeleteSuccess.style.display = 'block';
  //       }
  //       setTimeout(function () {
  //         if (showDeleteSuccess) {
  //           showDeleteSuccess.style.display = 'none';
  //         }
  //       }, 4000);
  //       this.inspectionList$ = this.Service.getInspectionList();
  //     });
  //   }
  // }
}
