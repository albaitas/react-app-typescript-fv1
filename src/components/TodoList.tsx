import { ITodo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: ITodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const elements = todos.map((todo) => {
    return (
      <div className='list-group-item' key={todo.id}>
        <TodoItem todo={todo} />
      </div>
    );
  });
  return <>{todos.length > 0 ? <div className='app-list'>{elements}</div> : <h4>No Todos!</h4>}</>;
}
