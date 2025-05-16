import Card from './Card';
import specials from '../Assets/specials';

function Specials() {
    return (
        <section className="Specials">
            <header>
                <h3>This Weeks Specials!</h3>
                <button className="btn">Online Menu</button>
            </header>
            <main>
                <ul>
                    {Object.keys(specials).map(key => (
                        <Card
                            key={key}
                            imgurl={specials[key].imgurl}
                            title={specials[key].title}
                            price={specials[key].price}
                            description={specials[key].description}
                        />
                    ))}
                </ul>
            </main>
        </section>
    )
}

export default Specials;