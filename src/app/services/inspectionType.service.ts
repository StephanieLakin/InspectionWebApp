import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionTypeService {
  readonly inspectionApiUrl = 'http://localhost:7164/api';

  constructor(private http: HttpClient) {}

  getInspectionTypeList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspectionType');
  }

  addInspectionType(data: any) {
    return this.http.post(this.inspectionApiUrl + './inspectionType', data);
  }

  updateInspectionType(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/inspectionType/${id}`, data);
  }

  deleteInspectionType(id: number | string) {
    return this.http.delete(this.inspectionApiUrl + `/inspectionType/${id}`);
  }
}
