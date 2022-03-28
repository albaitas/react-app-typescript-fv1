import { createContext } from 'react';
import { RemoveTodo, OnToggleImportant, OnToggleLike, UpdateTodo } from './types';

interface ContextProps {
  removeTodo: RemoveTodo;
  updateTodo: UpdateTodo;
  onToggleImportant: OnToggleImportant;
  onToggleLike: OnToggleLike;
}

const Context = createContext<ContextProps>({
  removeTodo: () => {},
  updateTodo: () => {},
  onToggleImportant: () => {},
  onToggleLike: () => {}
});

export default Context;
