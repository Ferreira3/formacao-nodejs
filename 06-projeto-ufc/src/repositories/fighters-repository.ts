interface FighterModel {
  id: number;
  name: string;
}

const database: FighterModel[] = [
  {id: 1, name: 'alex pereira'},
  {id: 2, name: 'cyril gane'},
  {id: 3, name: 'charles oliveira'},
  {id: 4, name: 'ilia topuria'},
  {id: 5, name: 'carlos prates'}
]

export const getListFighters = async(): Promise<FighterModel[]> => {
  return database;
}

export const getFighterById = async(id: number): Promise<FighterModel | undefined> => {
  return database.find( player => player.id === id);
}