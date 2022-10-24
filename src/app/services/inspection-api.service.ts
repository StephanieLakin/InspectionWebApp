import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  readonly inspectionApiUrl = 'http://localhost:7164/api';

  constructor(private http: HttpClient) {}

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionApiUrl + './inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionApiUrl + `/inspections/${id}`);
  }

  // InspectionTypes
  getInspectionTypesList(): Observable<any[]> {
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

  //Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionApiUrl + './status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionApiUrl + `/status/${id}`);
  }
}
