import { TApiError } from "./models/Errors";

type SuccessResponse<T> = {
  success: true;
  data: T;
};

type ErrorResponse = {
  success: false;
  error: TApiError;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export function isSuccess<T>(response: ApiResponse<T>): response is SuccessResponse<T> {
  return response.success === true;
}

export function isError<T>(response: ApiResponse<T>): response is ErrorResponse {
  return response.success === false;
}
