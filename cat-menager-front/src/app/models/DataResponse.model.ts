import { Cat } from "./cat.model";


export interface DataResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { cats?: Cat[], cat?: Cat };
}