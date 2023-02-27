import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RegisterDTO} from "../model/DTO/register.DTO";
import {IRegisterRes} from "../model/interface/register-res.interface";
import {IInquiryRegisterRes} from "../model/interface/inquiry-register-res.interface";
import {ConfirmAddressDTO} from "../model/DTO/confirm-address.DTO";
import {ConfirmHotelAddressDTO} from "../model/DTO/confirm-hotel-address.DTO";
import {IConfirmAddressRes} from "../model/interface/confirm-address-res.interface";
import {IConfirmHotelAddressRes} from "../model/interface/confirm-hotel-address-res.interface";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async register(payload: RegisterDTO): Promise<IRegisterRes> {
    return this.http.post<IRegisterRes>(`${this.baseUrl}api/register`, payload).toPromise()
  }

  async inquiryRegister(): Promise<any>{
    return of({
      "id": 6,
      "mobileNo": null,
      "persianFirstName": "آناهیتا",
      "persianLastName": "زمانی",
      "englishFirstName": "Anahita",
      "englishLastName": "Zamani",
      "email": "aa@aa.aa",
      "passNo": "1234567890",
      "passCreateDate": "2023-02-10",
      "passExpireDate": "2028-02-10",
      "deliveryAddress": null,
      "deliveryPostalCode": null,
      "hotelAddress": null,
      "hotelPhoneNumber": null,
      "passImage": "passports/09364936401.png",
      "cardType": {
        "id": 1,
        "title": "pink",
        "cost": 10000
      },
      "registerStatus": "PRE_REGISTER"
    }).pipe().toPromise()
    // return this.http.get<IInquiryRegisterRes>(`${this.baseUrl}api/register/inquiry-register`).toPromise()
  }

  async confirmAddress(payload: ConfirmAddressDTO): Promise<IConfirmAddressRes> {
    return this.http.put<IConfirmAddressRes>(`${this.baseUrl}api/register/confirm-address`, payload).toPromise()
  }

  async confirmHotelAddress(payload: ConfirmHotelAddressDTO): Promise<IConfirmHotelAddressRes> {
    return this.http.put<IConfirmHotelAddressRes>(`${this.baseUrl}api/register/confirm-hotel-address`, payload).toPromise()
  }

}
