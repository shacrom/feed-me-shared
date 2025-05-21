"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    // General errors
    ErrorCode["INVALID_INPUT"] = "INVALID_INPUT";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["UKNOWN_ERROR"] = "UNKNOWN_ERROR";
    // User-related errors
    ErrorCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorCode["USER_ALREADY_EXISTS"] = "USER_ALREADY_EXISTS";
    ErrorCode["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ErrorCode["TOO_MANY_ATTEMPTS"] = "TOO_MANY_ATTEMPTS";
    // Product-related errors
    ErrorCode["PRODUCT_NOT_FOUND"] = "PRODUCT_NOT_FOUND";
    ErrorCode["PRODUCT_OUT_OF_STOCK"] = "PRODUCT_OUT_OF_STOCK";
    // Order-related errors
    ErrorCode["ORDER_NOT_FOUND"] = "ORDER_NOT_FOUND";
    ErrorCode["ORDER_ALREADY_SHIPPED"] = "ORDER_ALREADY_SHIPPED";
    // Payment-related errors
    ErrorCode["PAYMENT_FAILED"] = "PAYMENT_FAILED";
    // TypeORM errors codes
    ErrorCode["UNIQUE_VIOLATION"] = "23505";
    ErrorCode["FOREIGN_KEY_VIOLATION"] = "23503";
    ErrorCode["NOT_NULL_VIOLATION"] = "23502";
    ErrorCode["CHECK_VIOLATION"] = "23514";
    ErrorCode["EXCLUSION_VIOLATION"] = "23P01";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
