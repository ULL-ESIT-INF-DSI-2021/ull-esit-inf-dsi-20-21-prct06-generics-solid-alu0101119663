interface StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  getName():string;
  getDate():string;
  getDirector():string;
}

export abstract class Streamable implements StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  constructor(name: string, date: string, director: string) {
    this.name_ = name;
    this.date_ = date;
    this.director_ = director;
  }


  abstract getName(): string;
  abstract getDate(): string;
  abstract getDirector(): string;
}