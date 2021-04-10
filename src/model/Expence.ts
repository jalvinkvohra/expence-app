interface Expence {
  id?: number;
  spent_at: Date;
  reason: string;
  amount: number;
}

class ExpenceModel implements Expence {
  get spent_at(): Date {
    return this.spent_at;
  }

  get reason(): string {
    return this.reason;
  }

  get amount(): number {
    return this.amount;
  }

  get id(): number | undefined {
    return this.id;
  }

  set id(value: number | undefined) {
    this.id = value;
  }

  set spent_at(value: Date) {
    this.spent_at = value;
  }

  set reason(value: string) {
    this.reason = value;
  }

  set amount(value: number) {
    this.amount = value;
  }
}

export default ExpenceModel;
