import specials from "../Assets/specials";
import Card from './Card'

function Menu () {
    return (
        <>
            Menu
            <menu>
            <ul className="menuitems">
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
            </menu>

        </>
    )
}

export default Menu;