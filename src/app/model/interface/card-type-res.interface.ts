import {SupportType} from "../../config/enum";

export interface ICardTypeRes {
  id: number,
  title: string,
  cost: number,
  titleFa: string,
  dailyLimit: string,
  monthlyLimit: string,
  expiry: string,
  chip: boolean,
  atm: boolean,
  pos: boolean,
  ipg: boolean,
  bills: boolean,
  supportType: string,
  club: boolean,
  bankingFee: boolean,
  serviceFee: boolean,
  pinAndGift: boolean,
  liraAccountType: string,
  chargeLimit: boolean,
  chargeTime: string
}
