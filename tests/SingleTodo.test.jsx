import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SingleTodo } from '../src/Todos/SingleTodo';
import React from 'react';

describe("Single todo", () => {
    test("Single todo gets renderd correctly to the screen", () => {
        const todo = {
            id: 1,
            text: "Test code",
            done: false
        }
        render(<SingleTodo todo={todo}/>)
        expect(screen.getByText(todo.text)).toBeInTheDocument();
    })
})