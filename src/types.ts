import type { OptionalExcept } from '$src/util';

export type Todo = {
	content: string;
	completed: boolean;
	id: string;
};
export type TodosState = {
	todos: Todo[];
	add: (todo: OptionalExcept<Todo, 'content'>) => void;
	flip: (id: string) => void;
	modify: (fn: (state: TodosState) => void) => void;
};
