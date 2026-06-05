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

export interface EventModel {
  id: string;
  eventName: string;
  date: string;
  location: {
    arena: string;
    city: string;
    country: string;
  };
  mainCard: string[];
  prelims: string[];
  status: "scheduled" | "live" | "completed" | "cancelled";
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}
