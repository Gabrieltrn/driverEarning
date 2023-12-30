export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  categoriaCarro: string;
  modeloCarro: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    categoriaCarro: string,
    modeloCarro: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.categoriaCarro = categoriaCarro;
    this.modeloCarro = modeloCarro;
  }
}
