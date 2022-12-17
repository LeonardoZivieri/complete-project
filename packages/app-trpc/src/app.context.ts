import * as trpc from "@trpc/server";

export const createContext = (
    opts?: trpc.ContextOptions,
) => {
    console.log(opts?.req.method);
    return null;
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;