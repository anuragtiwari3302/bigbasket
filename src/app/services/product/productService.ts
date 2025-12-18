import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {

  }

  getCategory() {
    return this.http.get(CONSTANT.API_END_POINT + CONSTANT.METHODS.GET_ALL_CATEGORY);

  }
  
}
