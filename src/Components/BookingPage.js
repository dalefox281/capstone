import BookingForm from "./BookingForm";
import { useReducer } from 'react';

// Utility function for initial times (exported for testing)
const initializeTimes = () => [
    'Choose time',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
];

function timesReducer(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);

    // updateTimes must be inside the component to access dispatch
    const updateTimes = (selectedDate) => {
        const newAvailableTimes = initializeTimes();
        dispatch({ type: 'SET_TIMES', payload: newAvailableTimes });
    };

    return (
        <div className="BookingPage">
            <h1>Reserve a table</h1>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </div>
    );
}

export { initializeTimes };
export default BookingPage;