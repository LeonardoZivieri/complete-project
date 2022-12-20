import { ServerlessAdapter } from "@h4ad/serverless-adapter";
import { CorsFramework } from "@h4ad/serverless-adapter/lib/frameworks/cors/index.js";
import { TrpcAdapterContext, TrpcFramework, TrpcFrameworkOptions } from "@h4ad/serverless-adapter/lib/frameworks/trpc/index.js";
import { AzureHandler } from "@h4ad/serverless-adapter/lib/handlers/azure/index.js";
import { PromiseResolver } from "@h4ad/serverless-adapter/lib/resolvers/promise/index.js";
import { HttpTriggerV4Adapter } from "@h4ad/serverless-adapter/lib/adapters/azure/index.js";
import trpc from "app-trpc";
import type { AppContext } from "app-trpc";

type TrpcContext = TrpcAdapterContext<AppContext>;
const frameworkOptions: TrpcFrameworkOptions<TrpcContext> = {
    createContext: () => Promise.resolve({ potato: true }),
};

const framework = new TrpcFramework<TrpcContext>(frameworkOptions);
const corsFramework = new CorsFramework(framework)

export default ServerlessAdapter.new(trpc)
    .setFramework(corsFramework)
    .setHandler(new AzureHandler())
    .setResolver(new PromiseResolver())
    .addAdapter(new HttpTriggerV4Adapter({ stripBasePath: '/api/trpc' }))
    .build();