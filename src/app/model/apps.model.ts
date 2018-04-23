export class Apps {
  private name: string;
  private description: string;
  private tenant: string;
  private id: string;
  constructor(name: string, description: string, tenant: string) {
    this.name = name;
    this.description = description;
    this.tenant = tenant;
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
  public getTenant(): string {
    return this.tenant;
  }
  public setTenant(status: string) {
    this.tenant = status;
  }
  public getId(): string {
    return this.id;
  }
}
