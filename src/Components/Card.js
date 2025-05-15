import cycle from '../Images/cycle.png';

function Card({imgurl, title, price, description}) {
    return(
        <section className="Special_Card">
            <div className='Card_image_container'>
                <img src={imgurl} alt={title} width="100%"></img>
            </div>
            <div className='Card_Body'>
                <div className='Card_Title'>
                    <h1 className='Sp_title'>{title}</h1>
                    <h1 className='Price'>{price}</h1>
                </div>
                <p>
                    {description}
                </p>
                <footer>
                    <p>Available for delivery</p>
                    <img src={cycle} alt="bicycle icon" height={33} width={33}></img>
                </footer>
            </div>
        </section>
    )
}

export default Card;