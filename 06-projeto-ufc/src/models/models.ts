export interface FighterModel {
  id: number;
  name: string;
  stats: StatsModel;
}

export interface StatsModel {
  record: { w: number; l: number; d: number };
  division: string;
  nickname: string;
  age: number;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}
