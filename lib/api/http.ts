import {NextResponse} from "next/server";

export type ApiErrorCode = "BAD_REQUEST" | "NOT_FOUND" | "INTERNAL_SERVER_ERROR";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 500,
    public readonly code: ApiErrorCode = "INTERNAL_SERVER_ERROR",
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({success: true, data, error: null}, {status});
}

export function errorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return NextResponse.json(
      {success: false, data: null, error: {code: error.code, message: error.message}},
      {status: error.statusCode},
    );
  }

  console.error("Unhandled API error:", error);
  return NextResponse.json(
    {success: false, data: null, error: {code: "INTERNAL_SERVER_ERROR", message: "An unexpected error occurred."}},
    {status: 500},
  );
}

/** Wrap route handlers so unexpected exceptions always use the same API contract. */
export function withApiHandler<TContext = unknown>(
  handler: (request: Request, context?: TContext) => Promise<Response> | Response,
) {
  return async (request: Request, context?: TContext): Promise<Response> => {
    try {
      return await handler(request, context);
    } catch (error) {
      return errorResponse(error);
    }
  };
}
