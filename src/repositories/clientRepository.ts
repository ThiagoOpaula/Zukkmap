import Client from '../models/Client';
import getRealm from '../services/realm';

export default class ClientRepository {
  public GetAll = async (filter: string): Promise<Realm.Results<Client>> => {
    const realm = await getRealm();

    let data = realm.objects<Client>('Client');

    if (filter) {
      data = data.filtered(`name contains[c] "${filter}"`);
    }

    return data.sorted('name');
  };

  public GetById = (id: string): boolean => {
    return true;
  };

  public SaveClient = async (
    client: Client,
    update?: boolean,
  ): Promise<boolean> => {
    const realm = await getRealm();

    try {
      if (!update) {
        realm.write(() => {
          realm.create('Client', client);
        });
      } else {
        realm.write(() => {
          realm.create('Client', client, true);
        });
      }
    } catch {
      return false;
    }

    return true;
  };

  public DeleteClient = async (id: string): Promise<boolean> => {
    const realm = await getRealm();

    try {
      const toDelete = realm
        .objects<Client>('Client')
        .filtered(`id == "${id}"`);

      realm.write(() => {
        realm.delete(toDelete);
      });
    } catch {
      return false;
    }

    return true;
  };
}
