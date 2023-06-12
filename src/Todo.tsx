import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;

const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItemContainer = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? 'gray' : 'inherit')};
`;

const TodoItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

const TodoItemLabel = styled.label`
  flex: 1;
`;

const TodoItemDeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
`;

interface TodoItem {
  id: number;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      const newTodo: TodoItem = {
        id: Date.now(),
        description: todoInput,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setTodoInput('');
    }
  };

  const handleToggleTodo = (todoId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <TodoInput
        type="text"
        placeholder="Enter a new task"
        value={todoInput}
        onChange={handleInputChange}
        onKeyPress={(event) => event.key === 'Enter' && handleAddTodo()}
      />
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItemContainer key={todo.id} completed={todo.completed}>
            <TodoItemCheckbox
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <TodoItemLabel>{todo.description}</TodoItemLabel>
            <TodoItemDeleteButton onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </TodoItemDeleteButton>
          </TodoItemContainer>
        ))}
      </TodoListContainer>
    </Container>
  );
};

export default App;
