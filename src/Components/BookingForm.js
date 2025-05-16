import React, { useState } from 'react';

function BookingForm() {

    const [resDate, setResDate] = useState(null);
    const [resTime, setResTime] = useState(null);
    const [resGuest, setResGuest] = useState(null);
    const [resOccasion, setResOccasion] = useState(null);

    const dateHandler = (e) => {
        setResDate(e.target.value);
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
                    <select id="res-time " value={resTime} onChange={timeHandler}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="guests">Number of guests</label>
                    <input value={resGuest} onChange={guestHandler}
                    type="number" placeholder="1" min="1" max="10" id="guests" />
                </div>
                <div className='form-group'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={resOccasion} onChange={occasionHandler}>
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