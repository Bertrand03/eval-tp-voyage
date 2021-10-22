
export class Trip {
  private _id: number;
  private _name: string;
  private _description: string;
  private _dateBegin: Date;
  private _dateEnd: Date;
  private _imgUrl: string;
  private _creatorId: number;
  private _createdAt: Date;
  private _updateAt: Date;
  private __v: number;


  constructor(id: number, name: string, description: string, dateBegin: Date, dateEnd: Date, imgUrl: string, creatorId: number, createdAt: Date, updateAt: Date, _v: number) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateBegin = dateBegin;
    this._dateEnd = dateEnd;
    this._imgUrl = imgUrl;
    this._creatorId = creatorId;
    this._createdAt = createdAt;
    this._updateAt = updateAt;
    this.__v = _v;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateBegin(): Date {
    return this._dateBegin;
  }

  set dateBegin(value: Date) {
    this._dateBegin = value;
  }

  get dateEnd(): Date {
    return this._dateEnd;
  }

  set dateEnd(value: Date) {
    this._dateEnd = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get creatorId(): number {
    return this._creatorId;
  }

  set creatorId(value: number) {
    this._creatorId = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updateAt(): Date {
    return this._updateAt;
  }

  set updateAt(value: Date) {
    this._updateAt = value;
  }

  get _v(): number {
    return this.__v;
  }

  set _v(value: number) {
    this.__v = value;
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      dateBegin: this.dateBegin,
      dateEnd: this.dateEnd,
      imgUrl: this.imgUrl,
      creatorId: this.creatorId,
      createdAt: this.createdAt,
      updatedAt: this.updateAt,
      v: this._v
    };
  }

  static fromJSON(tripAsJSON: any): Trip {

    return new Trip(
      tripAsJSON.id,
      tripAsJSON.name,
      tripAsJSON.description,
      tripAsJSON.dateBegin,
      tripAsJSON.dateEnd,
      tripAsJSON.imgUrl,
      tripAsJSON.creatorId,
      tripAsJSON.createdAt,
      tripAsJSON.updateAt,
      tripAsJSON.__v,
    );
  }

}
