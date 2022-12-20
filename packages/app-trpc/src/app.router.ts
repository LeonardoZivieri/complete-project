import * as trpc from "@trpc/server";
import { TrpcAdapterContext, BufferToJSObjectTransformer } from '@h4ad/serverless-adapter/lib/frameworks/trpc';
import { AppContext } from "./app.context";

export const createRouter = () => {
    return trpc.router<TrpcAdapterContext<AppContext>>()
        .transformer(new BufferToJSObjectTransformer());
};