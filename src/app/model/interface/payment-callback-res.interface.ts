import {PaymentStatus} from "../../config/enum";

export interface IPaymentCallbackRes {
  mobileNumber: string;
  clientTrackingNumber: string;
  referenceNumber: string;
  maskedCardNumber: string;
  amount: number;
  transactionDate: string;
  paymentStatus: PaymentStatus;
}
