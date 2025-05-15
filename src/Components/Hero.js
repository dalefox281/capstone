import hero_pic from '../Images/heropic.png';

function Hero() {

    const hero_snippet="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."

    return (
        <section className='Hero'>

            <section className='Hero_Section'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>{hero_snippet}</p>
                <button id='reserve_btn' className="btn">Reserve a table</button>
            </section>

            <img className='Hero_pic' src={hero_pic} alt='Man holding food' width={180} height={270}></img>

        </section>
    )
};

export default Hero;