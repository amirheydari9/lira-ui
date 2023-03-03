export class RegisterDTO {
  constructor(
    public cardTypeId: number,
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
