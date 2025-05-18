import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import { fetchAPI } from "../api";

// Utility function for initial times (exported for testing)

function initializeTimes(dateObject) {
    const times = fetchAPI(dateObject);
    return times;
}

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
        const dateObj = typeof selectedDate === 'string' ? new Date(selectedDate) : selectedDate;
        const newAvailableTimes = initializeTimes(dateObj);
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