import { mockedSearchData } from "./mock-data";
import { rest } from "msw";
export const handlers = [
  rest.get(
    "http://www.omdbapi.com/",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedSearchData));
    }
  ),
];
