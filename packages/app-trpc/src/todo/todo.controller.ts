import { prismaClient, Todo } from "database";

export const getTodos = async (): Promise<Todo[]> => {
    return prismaClient.todo.findMany();
};

export const createTodo = async (input: string): Promise<Todo> => {
    const todo = await prismaClient.todo.create({
        data: { item_text: input, status: false },
    });

    return todo;
};

export const deleteTodo = async (id: number): Promise<boolean> => {
    await prismaClient.todo.delete({ where: { id } });
    return true;
};

export const updateTodoStatus = async (id: number): Promise<Todo | null> => {
    let todo = await prismaClient.todo.findUnique({ where: { id } });
    if (!todo) return null;

    todo = await prismaClient.todo.update({
        where: { id },
        data: { status: !todo.status },
    });

    return todo;
};