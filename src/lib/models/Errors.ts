export enum ApiErrorMessages {
  INVALID_CREDENTIALS = "Invalid credentials",
  USER_NOT_FOUND = "User not found",
  EMAIL_ALREADY_EXISTS = "Email already exists",
  WEAK_PASSWORD = "Weak password",
  INVALID_DATA = "Invalid data",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not found",
  RATE_LIMIT_EXCEEDED = "Rate limit exceeded",
  INTERNAL_SERVER_ERROR = "Internal server error",
  UNEXPECTED_ERROR = "Unexpected error",
}

export type TApiError = {
  message: ApiErrorMessages;
  statusCode: number;
};
