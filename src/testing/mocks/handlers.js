import { mockedSearchData } from "./mock-data";
import { rest } from "msw";
import { baseUrl } from "common/config";

export const handlers = [
  rest.get(baseUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedSearchData));
  }),
];
