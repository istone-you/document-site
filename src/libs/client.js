import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "**********",
  apiKey: process.env.API_KEY,
});
