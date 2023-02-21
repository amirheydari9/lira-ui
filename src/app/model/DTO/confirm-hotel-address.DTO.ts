export class ConfirmHotelAddressDTO {
  constructor(
    public hotelAddress: string,
    public hotelPhoneNumber: string,
    public startDate: string,
    public endDate: string,
  ) {
  }
}
