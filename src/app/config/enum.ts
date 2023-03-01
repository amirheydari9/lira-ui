export enum RegisterStatus {
  PRE_REGISTER = 'PRE_REGISTER',
  OPR_REJECTED = 'OPR_REJECTED',
  OPR_ACCEPTED = 'OPR_ACCEPTED',
  ADDRESS_CONFIRMED = 'ADDRESS_CONFIRMED',
  PAYMENT_DONE = 'PAYMENT_DONE',
  HOTEL_ADDRESS_CONFIRMED = 'HOTEL_ADDRESS_CONFIRMED',
  CANCELED = 'CANCELED',
}

export enum SupportType {
  NORMAL = "NORMAL",
  VIP = "VIP",
  SPECIAL = "SPECIAL"
}

export enum TransactionState {
  CanceledByUser = "CanceledByUser",
  OK = "OK",
  Failed = "Failed",
  SessionIsNull = "SessionIsNull",
  InvalidParameters = "InvalidParameters",
  MerchantIpAddressIsInvalid = "MerchantIpAddressIsInvalid",
  TokenNotFound = "TokenNotFound",
  TokenRequired = "TokenRequired",
  TerminalNotFound = "TerminalNotFound"
}

export enum PaymentStatus {
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
  FAILED = "FAILED",
}
