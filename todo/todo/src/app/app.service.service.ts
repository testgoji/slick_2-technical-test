import { AppModel } from './app.model'; // The model we defined for the application.
import { Observable } from 'rxjs/Observable'; //Observable from rxjs library
import 'rxjs/add/operator/map'; // map method from rxjs library
import 'rxjs/add/operator/catch';catch method from rxjs library
import 'rxjs/add/observable/throw';throw method from rxjs library

private endpointUrl ="http://10.0.0.212/slick";

constructor(private http:Http) {
}

getTodos(): Observable<AppModel[]> {
  return this.http.get(this.endpointUrl )
  .map((response: Response) => {
  const result = response.json();
  return result;
  })
  .catch((error : Response | any) => {
  return Observable.throw(error.statusText);
  });
}

createTodo(obj: {}): Observable < AppModel > {
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.post(this.endpointUrl, obj, options)
        .map((response: Response) => {
            const result = response.json();
            return result;
        })
        .catch((error: Response | any) => {
            console.log(error.statusText);
            return Observable.throw(error);
        });
}

