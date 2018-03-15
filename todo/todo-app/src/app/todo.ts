export class Todo {
id: string;
_id: string;
  title = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
