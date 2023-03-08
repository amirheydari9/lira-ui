import {ICardTypeRes} from "./card-type-res.interface";
import {RegisterStatus} from "../../config/enum";

export interface IRegisterRes {
  id: number;
  mobileNo: string;
  persianFirstName: string;
  persianLastName: string;
  englishFirstName: string;
  englishLastName: string;
  email: string;
  passNo: string;
  passCreateDate: string;
  passExpireDate: string;
  deliveryAddress: string;
  deliveryPostalCode: string;
  hotelAddress: string;
  hotelPhoneNumber: string;
  passImage: string;
  cardType: ICardTypeRes,
  registerStatus: RegisterStatus,
  description: string
}
