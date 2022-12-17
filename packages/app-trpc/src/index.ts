import * as trpcServer from "@trpc/server";

import { createRouter } from "./app.router";
import { todos } from "./todo/todo.router";

const trpc = createRouter().merge("todos.", todos);

export type AppRouter = typeof trpc;

export default trpc
