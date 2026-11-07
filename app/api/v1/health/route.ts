import {successResponse, withApiHandler} from "@/lib/api/http";
import {serverEnv} from "@/lib/config/env";

export const runtime = "nodejs";

export const GET = withApiHandler(() =>
  successResponse({
    status: "healthy",
    service: "yasir-portfolio-api",
    environment: serverEnv.nodeEnv,
    timestamp: new Date().toISOString(),
  }),
);
