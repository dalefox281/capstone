import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookingPage, { initializeTimes } from './Components/BookingPage';
import { date } from 'yup';

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

test ('Check input elements to validate correct attributes', () => {
  render(<MemoryRouter><BookingPage /></MemoryRouter>);

  const dateInput = screen.getByLabelText('Choose date');
  const minDate = new Date().toISOString().slice(0, 10);

  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min', minDate);
  expect(dateInput).toHaveAttribute('required');

  const timeInput = screen.getByLabelText('Choose time');

  expect(timeInput).toHaveAttribute('type', 'time');

  const guestInput = screen.getByLabelText('Number of guests');

  expect(guestInput).toHaveAttribute('type', 'number');

  const occasionInput = screen.getByLabelText('Occasion');

  expect(occasionInput).toHaveAttribute('type', 'string');
});

test('tests the forms validation, first errors and then success', async () => {
  render(<MemoryRouter initialEntries={['/booking']}><App /></MemoryRouter>);

  // Click the submit button without filling any fields
  const submitButton = screen.getByRole('button', { name: /Submit reservation on click/i });
  submitButton.click();

  // Wait for validation errors to appear
  expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/occasion is required/i)).toBeInTheDocument();

  const dateInput = screen.getByLabelText('Choose date');
  const timeInput = screen.getByLabelText('Choose time');
  const guestInput = screen.getByLabelText('Number of guests');
  const occasionInput = screen.getByLabelText('Occasion');
  const today = new Date().toISOString().slice(0,10);

  fireEvent.change(dateInput, {target: { value: today}});
  const validOption = Array.from(timeInput.options).find(option => option.value && option.value !== 'Choose time...');
  fireEvent.change(timeInput, { target: { value: validOption.value }});
  fireEvent.change(guestInput, { target: {value: 3}});
  const validOccasion = Array.from(occasionInput.options).find(option => option.value && option.value !== 'Choose the occasion...');
  fireEvent.change(occasionInput, {target: {value: validOccasion.value}});

  submitButton.click();

  expect(await screen.findByText(/reservation details/i)).toBeInTheDocument();
});
