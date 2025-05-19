import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookingPage, { initializeTimes } from './Components/BookingPage';

test('renders submission button', () => {
  render(<MemoryRouter><BookingPage /></MemoryRouter>);
  const buttonElement = screen.getByText("Make Your reservation");
  expect(buttonElement).toBeInTheDocument();
});

test('returns expected initialized times', () => {
  const expectedValue = [true, true]; // Is a list with content, contains formatted times
  const result = initializeTimes(new Date());
  const resultIsList = Array.isArray(result) && result.length > 0;

  const timeFormat = /^[0-9]{2}:[0-9]{2}$/;
  const resultHasTimes = result.every(time => timeFormat.test(time));

  const determination = [resultIsList, resultHasTimes];
  expect(determination).toEqual(expectedValue);
});

test('updateTimes updates availableTimes when a date is selected', () => {
  render(<MemoryRouter>
          <BookingPage />
        </MemoryRouter>);
  // Initially, the time select should have no options (since availableTimes is empty)
  let timeSelect = screen.getByTestId("time-select");
  expect(timeSelect.options.length).toBe(0);

  // Simulate selecting a date
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2025-05-17" } });

// After selecting a date, the time select should be populated
  timeSelect = screen.getByTestId("time-select");
  const options = Array.from(timeSelect.options);
  const expectation = [true, true]; // Is a list with items, items are formatted times

  const optionTexts = options.map(option => option.textContent);

  const isList = Array.isArray(optionTexts) && optionTexts.length > 0;

  const timeFormat = /^[0-9]{2}:[0-9]{2}$/;
  const hasTimes = optionTexts.every(time => timeFormat.test(time));

  const determination = [isList, hasTimes];

  expect(determination).toEqual(expectation);
});
