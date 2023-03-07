import {TransactionState} from "../../config/enum";

export class PaymentCallbackDTO {
  constructor(
    public MID: number,
    public State: TransactionState,
    public Status: number,
    public Rrn: string,
    public RefNum: string,
    public ResNum: string,
    public TerminalId: string,
    public TraceNo: string,
    public Amount: number,
    public AffectiveAmount: number,
    public Wage: number,
    public SecurePan: string,
    public Token: string,
    public HashedCardNumber: string,
  ) {
  }
}
