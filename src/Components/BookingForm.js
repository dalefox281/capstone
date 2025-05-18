import React, { useState } from 'react';

function BookingForm({availableTimes, updateTimes}) {

    const [resDate, setResDate] = useState(null);
    const [resTime, setResTime] = useState(null);
    const [resGuest, setResGuest] = useState(1);
    const [resOccasion, setResOccasion] = useState(null);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted: ', {resDate, resTime, resGuest, resOccasion});
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
            onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="res-date">Choose date</label>
                    <input id="res-date" type="date" value={resDate} onChange={dateHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        data-testid="time-select"
                        id="res-time "
                        value={resTime}
                        onChange={timeHandler}>
                        {readTimes()}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='guests'>Number of guests</label>
                    <div className="number-input">
                        <button type="button" className="decrement" onClick={decrementGuest}>-</button>
                        <input id='guests' type="number" value={resGuest} min="1" max="10" onChange={guestHandler} />
                        <button type="button" className="increment" onClick={incrementGuest}>+</button>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={resOccasion}
                        onChange={occasionHandler}
                    >
                            <option>Choose the occasion...</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                            <option>Other</option>
                    </select>
                </div>
                    <input type="submit" className='btn' value="Make Your reservation" />

            </form>
        </>
    )
};

export default BookingForm;