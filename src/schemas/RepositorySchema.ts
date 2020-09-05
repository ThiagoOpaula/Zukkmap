export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: { type: 'int' },
      name: { type: 'string', indexed: true },
      longitude: 'int',
      latitude: 'int',
    },
  };
}
