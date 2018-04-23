import { User } from '../../../model/user.model';

export const mockUserData: User[] = [
  new User('Peter', 'Vink', 'Vertex', 'Vertex-Admin'),
  new User('Heimdall', 'Asgardian', 'Bifrost', 'Bifrost-Admin'),
  new User('Thor', 'Asgardian', 'Bifrost', 'Bifrost-User'),
  new User('Loki', 'Asgardian', 'Bifrost', 'Bifrost-User'),
  new User('Ego', 'God', 'Universe', 'Universe-Admin')
];
