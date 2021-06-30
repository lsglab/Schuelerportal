import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	Input,
	List,
	ListIcon,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useStore } from '$src/store';
import shallow from 'zustand/shallow';
import type { TodosState } from '$src/types';

type Inputs = {
	content: string;
};

export default function ZustandDemo(): JSX.Element {
	const { todos, add, flip } = useStore(
		(state) => ({
			add: (state as TodosState).add,
			flip: (state as TodosState).flip,
			todos: (state as TodosState).todos,
		}),
		shallow
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit = handleSubmit((data) => add(data));

	return (
		<>
			<List spacing={3}>
				{todos.map((todo) => (
					<ListItem
						key={todo.id.toString()}
						onClick={() => flip(todo.id.toString())}
						color={todo.completed ? 'green.500' : undefined}>
						<ListIcon as={FaCheck} />
						<Text as={todo.completed ? 'del' : undefined} d='inline'>
							{todo.content}
						</Text>
					</ListItem>
				))}
			</List>
			<form onSubmit={onSubmit}>
				<FormControl id='content' isRequired isInvalid={!!errors.content} mt={3}>
					<Input
						placeholder='To-Do'
						variant='filled'
						type='text'
						{...register('content', { required: true })}
					/>
					{errors.content ? (
						<FormErrorMessage>Dieses Feld ist erforderlich</FormErrorMessage>
					) : (
						<FormHelperText>Füge ein Element zur To-Do Liste hinzu</FormHelperText>
					)}
				</FormControl>
				<Button colorScheme='teal' type='submit'>
					Hinzufügen
				</Button>
			</form>
		</>
	);
}
