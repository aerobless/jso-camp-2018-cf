export class ApiError {
    httpStatus: number;
    errorCode: string;
    stacktrace: string;

    constructor(httpStatus: number, errorCode: string, stacktrace: string) {
        this.httpStatus = httpStatus;
        this.errorCode = errorCode;
        this.stacktrace = stacktrace;
    }
}