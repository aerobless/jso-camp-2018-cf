"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(httpStatus, errorCode, stacktrace) {
        this.httpStatus = httpStatus;
        this.errorCode = errorCode;
        this.stacktrace = stacktrace;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=apiError.js.map