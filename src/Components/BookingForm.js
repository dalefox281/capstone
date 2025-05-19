import { useState } from 'react';
import { object, string, number } from 'yup';

function BookingForm({availableTimes, updateTimes, submitForm}) {

    const bookingSchema = object().shape({
        resDate: string().required('Date is required'),
        resTime: string().required('Time is required'),
        resGuest: number()
            .min(1, 'At least 1 guest')
            .max(10, 'No more than 10 guests')
            .required('Number of guests is required'),
        resOccasion: string().required('Occasion is required'),
    });

    const [errors, setErrors] = useState({});

    const [resDate, setResDate] = useState(null);
    const [resTime, setResTime] = useState(null);
    const [resGuest, setResGuest] = useState(1);
    const [resOccasion, setResOccasion] = useState(null);
    const today = new Date();
    const todayFormatted = today.toISOString().slice(0,10);

    const incrementGuest = () => {
    setResGuest(prev => {
        const next = Number(prev) + 1;
        return next > 10 ? 10 : next;
        });
    };

const decrementGuest = () => {
    setResGuest(prev => {
        const next = Number(prev) - 1;
        return next < 1 ? 1 : next;
        });
    };

    const dateHandler = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
        updateTimes(selectedDate);
    };

    const timeHandler = (e) => {
        setResTime(e.target.value);
    };

    const guestHandler = (e) => {
        setResGuest(e.target.value);
    };

    const occasionHandler = (e) => {
        setResOccasion(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookingDetails = {resDate, resTime, resGuest, resOccasion}

        try {
            await bookingSchema.validate(bookingDetails, {abortEarly: false});
            setErrors({});
            const bookingDetailsString = JSON.stringify(bookingDetails);
            localStorage.setItem('bookingDetails', bookingDetailsString);
            submitForm(bookingDetails);
        } catch (err) {
            if (err.inner) {
                const formErrors = {};
                err.inner.forEach(e => {
                    formErrors[e.path] = e.message;
                });
            setErrors(formErrors);
            }
        }
        // console.log(bookingDetails);

    };

    function readTimes() {
        return availableTimes.map((time, idx) => (
            <option key={idx} value={time}>{time}</option>
        ))
    }

    return (
        <>
            <form
            className="BookingForm"
            onSubmit={handleSubmit}
            aria-label="Booking form">
                <div className='form-group'>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        id="res-date"
                        type="date"
                        min={todayFormatted}
                        value={resDate}
                        onChange={dateHandler}
                        required
                        aria-label="Choose date" />
                </div>
                {errors.resDate && <span className='error'>{errors.resDate}</span>}
                <div className='form-group'>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        data-testid="time-select"
                        id="res-time"
                        type='time'
                        value={resTime}
                        onChange={timeHandler}
                        aria-label="Choose time">
                        {readTimes()}
                    </select>
                </div>
                {errors.resTime && <span className='error'>{errors.resTime}</span>}
                <div className='form-group'>
                    <label htmlFor='guests'>Number of guests</label>
                    <div className="number-input">
                        <button type="button" className="decrement" onClick={decrementGuest} aria-label="Decrement guests on click">-</button>
                        <input id='guests' type="number" value={resGuest} onChange={guestHandler} aria-label="Number of guests" />
                        <button type="button" className="increment" onClick={incrementGuest} aria-label="Increment guests on click">+</button>
                    </div>
                    {errors.resGuest && <span className='error'>{errors.resGuest}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={resOccasion}
                        onChange={occasionHandler}
                        type='string'
                        aria-label="Occasion">
                            <option>Choose the occasion...</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                            <option>Other</option>
                    </select>
                </div>
                {errors.resOccasion && <span className='error'>{errors.resOccasion}</span>}
                <input
                    type="submit"
                    className='btn'
                    value="Make Your reservation"
                    name='make your reservation'
                    aria-label="Submit reservation on click" />
            </form>
        </>
    )
};

export default BookingForm;