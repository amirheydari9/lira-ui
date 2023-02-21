export class RegisterDTO {
  constructor(
    public persianFirstName: string,
    public persianLastName: string,
    public englishFirstName: string,
    public englishLastName: string,
    public email: string,
    public passNo: string,
    public passCreateDate: string,
    public passExpireDate: string,
    public cardTypeId: number,
    public passImage: string,
  ) {
  }
}
