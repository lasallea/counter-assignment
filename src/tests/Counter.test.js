 import { render, screen, fireEvent } from '@testing-library/react';
 import Counter from '../Components/Counter.js';
 import userEvent from '@testing-library/user-event'
 import React from 'react'
 let counter;

beforeEach(() => {
  counter = render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = counter.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = counter.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const inc = counter.getByText('+');
  const count = counter.getByTestId('count');

  fireEvent.click(inc);
  expect(count).toHaveTextContent('1');

  fireEvent.click(inc);
  expect(count).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
const dec = counter.getByText('-');
const count = counter.getByTestId('count');

fireEvent.click(dec);
expect(count).toHaveTextContent('-1');

fireEvent.click(dec);
expect(count).toHaveTextContent('-2');
});
