
export class SuccessfulLoginServerResponse {
  isAdmin: any;
  public constructor(
    public userDetails: {
      id: number;
      firstName: string;
      city: string;
      street: string;
    },
    public token?: string,
    public id?: number
  ) {}
}
