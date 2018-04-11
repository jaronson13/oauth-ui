import { Tenant } from '../../model/tenant.model';

export const mockTenantData: Tenant[] = [
  new Tenant('JP Morgan', 'Bank', 'Active'),
  new Tenant('Giant', 'Grocery', 'Inactive'),
  new Tenant('Vertex', 'Tax', 'Active')
];
