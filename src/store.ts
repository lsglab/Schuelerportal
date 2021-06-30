import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import create, { UseStore } from 'zustand';
import createContext from 'zustand/context';
import produce from 'immer';
import type { TodosState } from '$src/types';

// @ts-ignore
export const { Provider, useStore } = createContext();
export const createStore = (): UseStore<TodosState> =>
	create<TodosState>(
		devtools(
			persist(
				(set, get) => ({
					add: (todo) =>
						set((state) => ({
							todos: [
								...state.todos,
								{
									completed: todo.completed ?? false,
									content: todo.content,
									id: todo.id ?? uuid(),
								},
							],
						})),
					flip: (id) =>
						get().modify((state) => {
							state.todos.find((todo, index) => {
								/* eslint-disable no-param-reassign */
								if (todo.id === id) {
									state.todos[index].completed = !state.todos[index].completed;
									return true;
								}
								return false;
							});
						}),
					modify: (fn) => set(produce(fn)),
					todos: [],
				}),
				{
					name: 'schuelerportal-global',
				}
			),
			'schuelerportal-global'
		)
	);
