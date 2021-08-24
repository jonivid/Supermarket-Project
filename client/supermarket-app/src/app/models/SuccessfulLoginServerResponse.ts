import { UserDetails } from './UserDetails';
// export class SuccessfulLoginServerResponse {
//     public constructor(
//         public token?: string,
//         public userType?: string,
//         public userDetails?: { id: number, firstName: string },
//     ) { }

// }
export class SuccessfulLoginServerResponse{
    isAdmin: any;
    public constructor(
        public userDetails: { id: number, firstName: string },
        public token?:string,
        public id?:number,
    ){}

}