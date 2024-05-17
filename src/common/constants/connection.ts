export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

export const connection: Connection = {
  CONNECTION_STRING: 'https://mysql.com/fake_db',
  DB: 'MYSQL',
  DBNAME: 'TEST',
};
