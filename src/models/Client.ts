export default class Client {
  id: string;

  name: string;

  longitude: number | undefined;

  latitude: number | undefined;

  constructor() {
    this.id = '';
    this.name = '';
    this.longitude = 0;
    this.latitude = 0;
  }
}
