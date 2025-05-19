import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    // updateTimes must be inside the component to access dispatch
    const updateTimes = (selectedDate) => {
        const dateObj = typeof selectedDate === 'string' ? new Date(selectedDate) : selectedDate;
        const newAvailableTimes = initializeTimes(dateObj);
        dispatch({ type: 'SET_TIMES', payload: newAvailableTimes });
    };

    function submitForm(bookingDetails) {
        const result = submitAPI(bookingDetails);
        console.log(result);
        if (result === true) {
            navigate('/booking-confirmation', { state: bookingDetails });
            // return bookingDetails;
        } else {
            alert("Try again");
        };
    };

    return (
        <div className="BookingPage">
            <h1>Reserve a table</h1>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
            />
        </div>
    );
}

export { initializeTimes };
export default BookingPage;