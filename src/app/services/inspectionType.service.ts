import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionTypeService {
  readonly inspectionApiUrl = 'http://localhost:7164/api';

  constructor(private http: HttpClient) {}

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionApiUrl + './inspectionTypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(
      this.inspectionApiUrl + `/inspectionTypes/${id}`,
      data
    );
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionApiUrl + `/inspectionTypes/${id}`);
  }
}
