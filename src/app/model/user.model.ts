export class User {
  private firstName: string;
  private lastName: string;
  private tenant: string;
  private group: string;
  private id: string;
  constructor(firstName: string, lastName: string, tenant: string, group: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tenant = tenant;
    this.group = group;
  }
  getId(): string {
    return this.id;
  }
  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(value: string) {
    this.firstName = value;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(value: string) {
    this.lastName = value;
  }

  getTenant(): string {
    return this.tenant;
  }

  setTenant(value: string) {
    this.tenant = value;
  }

  getGroup(): string {
    return this.group;
  }

  setGroup(value: string) {
    this.group = value;
  }
}
