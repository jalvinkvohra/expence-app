interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

class UserModel implements User {
  get name(): string {
    return this.name;
  }

  get email(): string {
    return this.email;
  }

  get password(): string {
    return this.password;
  }

  get id(): number | undefined {
    return this.id;
  }

  set id(value: number | undefined) {
    this.id = value;
  }

  set name(value: string) {
    this.name = value;
  }

  set email(value: string) {
    this.email = value;
  }

  set password(value: string) {
    this.password = value;
  }
}

export default UserModel;
