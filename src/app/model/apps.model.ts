export class Apps {
  private name: string;
  private description: string;
  private status: string;
  private id: string;
  constructor(name: string, description: string, status: string) {
    this.name = name;
    this.description = description;
    this.status = status;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string) {
    this.description = description;
  }
  public getStatus(): string {
    return this.status;
  }
  public setStatus(status: string) {
    this.status = status;
  }
  public getId(): string {
    return this.id;
  }
}
