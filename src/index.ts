import { z, Routing, createConfig, createServer, defaultEndpointsFactory } from "express-zod-api";

const requestEndpoint = defaultEndpointsFactory.build({
  method: "post",
  input: z.object({
    
  }),
  output: z.object({}),
  handler: async ({ input, options, logger }) => {
    console.log("🚀 ~ file: index.ts ~ line 8 ~ handler: ~ input", input)
    return {};
  },
});

const config = createConfig({
  server: {
    listen: 1337,
  },
  cors: true,
  logger: {
    level: "debug",
    color: true,
  },
});

const routing: Routing = {
  request: requestEndpoint,
};

createServer(config, routing);
