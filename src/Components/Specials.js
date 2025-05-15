import Card from './Card';
import salad from '../Images/greek salad.jpg';
import bruchetta from '../Images/bruchetta.png';
import dessert from '../Images/lemon dessert.jpg';

const specials={
    greekSalad: {
        imgurl:salad,
        title:"Greek Salad",
        price:"$12.99",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    bruchetta: {
        imgurl:bruchetta,
        title:"Bruchetta",
        price:"$5.99",
        description:"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    lemondessert: {
        imgurl:dessert,
        title:"Lemon Dessert",
        price:"$5.00",
        description:"This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    },
};

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