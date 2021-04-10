import UserModel from "./User";

interface Register {
  password_confirmation: string;
}

class RegisterModel extends UserModel implements Register {
  get password_confirmation(): string {
    return this.password_confirmation;
  }

  set password_confirmation(value: string) {
    this.password_confirmation = value;
  }
}

export default RegisterModel;
