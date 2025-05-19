

function ConfirmedBooking() {

    // const { state } = useLocation()
    // const { resDate, resGuest, resOccasion, resTime } = state || {};
    // console.log({state});

    //Opted for localStorage instead of transferring state from one page to another.

    const retrievedDetailsString = localStorage.getItem('bookingDetails');
    const retrievedDetails = JSON.parse(retrievedDetailsString);
    const { resDate, resGuest, resOccasion, resTime } = retrievedDetails || {};

    return (
        <div className='confirmedBooking'>
        <h1>Reservation confirmed</h1>

        <div className='confirmationCard'>
            <h2>Reservation Details</h2>
            <div className='confirmation-underline'></div>

            <ul>
                <li>Date: <span>{resDate}</span></li>
                <li>Time: <span>{resTime}</span></li>
                <li>Guests: <span>{resGuest}</span></li>
                <li>Occasion: <span>{resOccasion}</span></li>
            </ul>
        </div>

        </div>
    );
};

export default ConfirmedBooking;