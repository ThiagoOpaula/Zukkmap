import { v4 } from 'react-native-uuid';

export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'name',
    properties: {
      id: { type: 'int' },
      name: { type: 'int', indexed: true },
      longitude: 'number',
      latitude: 'number',
    },
  };
}
