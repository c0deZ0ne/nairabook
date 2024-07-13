export default interface IDatabase {
  db_path: string;
  _init: Function;
  get: Function;
  read: Function;
  write: Function;
  update: Function;
  save: Function;
  delete: Function;
  findByEmail: Function;
  findById: Function;
  get_all_books: Function;
}
