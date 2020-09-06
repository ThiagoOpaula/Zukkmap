export default class RepositorySchema {
  static schema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      name: { type: 'string', indexed: true },
      longitude: 'float',
      latitude: 'float',
    },
  };
}
