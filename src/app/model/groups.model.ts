export class Group {
  private name: string;
  private tenant: string;
  private app: string;
  private permissions?: any;

  constructor(name: string, tenant: string, app: string) {
    this.name = name;
    this.tenant = tenant;
    this.app = app;
  }

  getPermissions(): any {
    return this.permissions;
  }

  setPermissions(value: any) {
    this.permissions = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getTenant(): string {
    return this.tenant;
  }

  setTenant(value: string) {
    this.tenant = value;
  }

  getApp(): string {
    return this.app;
  }

  setApp(value: string) {
    this.app = value;
  }
}
