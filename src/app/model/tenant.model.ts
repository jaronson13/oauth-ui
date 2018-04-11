export class Tenant {
  private name: string;
  private description: string;
  private status: string;
  private id: string;
  constructor(name: string, description: string, status: string) {
    this.name = name;
    this.description = description;
    this.status = status;
  }
  getName(): string {
    return this.name;
  }
  setName(value: string) {
    this.name = value;
  }
  getDescription(): string {
    return this.description;
  }
  setDescription(value: string) {
    this.description = value;
  }
  getStatus(): string {
    return this.status;
  }
  setStatus(status: string) {
    this.status = status;
  }
  getId(): string {
    return this.id;
  }
}
