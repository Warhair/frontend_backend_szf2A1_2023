import DataService from '../model/DataService.js';
import TablaView from '../View/Tablazat/TablaView.js';

class Controller {
  constructor () {
    this.dataService = new DataService ();
    this.dataService.getAxiosData ('api/writers', this.megjelenit);
    this.dataService.postAxiosData ('api/writers', {
      nev: 'Jenőőőő',
      szul: 1666,
    });
    this.dataService.putAxiosData ('api/writers', {
      id: 1,
      nev: 'Átírt József Attila',
      szul: 1905,
    });
    this.dataService.deleteAxiosData ('api/writers', 15);
  }
  megjelenit (list) {
    console.log (list);
    //new View(list, $("article form"));
    new TablaView (list, $ ('.adatok'));
  }
}
export default Controller;
