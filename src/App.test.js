import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingPage, { initializeTimes } from './Components/BookingPage';

test('renders submission button', () => {
  render(<BookingPage />);
  const buttonElement = screen.getByText("Make Your reservation");
  expect(buttonElement).toBeInTheDocument();
});

test('returns expected initialized times', () => {
  const expectedValue = [
            'Choose time',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
        ];
  const result = initializeTimes();
  expect(result).toEqual(expectedValue);
});

test('updateTimes updates availableTimes when a date is selected', () => {
  render(<BookingPage />);
  // Initially, the time select should have no options (since availableTimes is empty)
  let timeSelect = screen.getByTestId("time-select");
  expect(timeSelect.options.length).toBe(0);

  // Simulate selecting a date
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2025-05-17" } });

// After selecting a date, the time select should be populated
  timeSelect = screen.getByTestId("time-select");
  const options = Array.from(timeSelect.options);
  const expectedOptions = [
    'Choose time',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const optionTexts = options.map(option => option.textContent);
  expect(optionTexts).toEqual(expectedOptions);
});
