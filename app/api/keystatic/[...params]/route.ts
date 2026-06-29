import { makeAPIRouteHandler } from "@keystatic/next/api";
import config from "../../../../keystatic.config";

const handler = makeAPIRouteHandler({ config });

export async function GET(req: Request) {
  return handler(req as any, {} as any);
}

export async function POST(req: Request) {
  return handler(req as any, {} as any);
}
