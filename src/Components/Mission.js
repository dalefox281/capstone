import photo1 from '../Images/restaurant.jpg';
import photo2 from '../Images/restaurant chef B.jpg';

const missionStatement="To consistently provide delicious, high-quality food made with fresh ingredients, served in a welcoming and comfortable atmosphere. We aim to create enjoyable dining experiences for every guest, fostering a sense of community and satisfaction with every meal."

function Mission() {
    return (
        <div className="mission">
            <div className="missiontext">
                <h1>Little Lemon</h1>
                <h2>Our Mission</h2>
                <p>{missionStatement}</p>
            </div>
            <div className="imgcontainer">
                <img
                    className='base-image'
                    src={photo1}
                    alt='Restaurant'
                    height={500}
                    width={500}/>
                <img
                    className='overlay'
                    src={photo2}
                    alt='Chef at the restaurant'
                    height={500}
                    width={500}/>
            </div>
        </div>
    )
}

export default Mission;