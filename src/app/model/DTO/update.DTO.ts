import {ICardTypeRes} from "../interface/card-type-res.interface";

export class UpdateDTO {
  constructor(
    public id: number,
    public cardTypeId: ICardTypeRes,
    public englishFirstName: string,
    public englishLastName: string,
    public email: string,
    public passNo: string,
    public passCreateDate: string,
    public passExpireDate: string,
    public passImage: string,
    public estimatedCost?: number,
  ) {
  }

}
