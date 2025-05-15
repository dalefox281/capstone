// import testimonials from "../Assets/Reviews";
// import ReviewCard from "./ReviewCard";
import user1 from '../Images/Users/user1.jpg';
import user2 from '../Images/Users/user2.jpg';
import user3 from '../Images/Users/user3.jpg';
import user4 from '../Images/Users/user4.jpg';


function Testimonials() {
    return (
        <section className="Testimonials">
            <h1 className="ReviewTitle">Testimonials</h1>
            <ul>
                {/* {Object.keys(testimonials).map(key => (
                    <ReviewCard
                        key={key}
                        rating={testimonials[key].rating}
                        imgurl={testimonials[key].imgurl}
                        user={testimonials[key].user}
                        review={testimonials[key].review}
                    />
                ))} */}

                <li className="ReviewCard">
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className="Reviewer">
                        <img src={user1} alt="Steve"/>
                        <h2>Steve</h2>
                    </div>
                    <p>Absolutely fantastic! High quality and exceeded expectations. Highly recommend! </p>
                </li>
                <li className="ReviewCard">
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className="Reviewer">
                        <img src={user2} alt="Steve"/>
                        <h2>Amanda</h2>
                    </div>
                    <p>Delicious food and excellent service! Our server was friendly and attentive. Highly recommend! </p>
                </li>
                <li className="ReviewCard">
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className="Reviewer">
                        <img src={user3} alt="Steve"/>
                        <h2>Patty</h2>
                    </div>
                    <p>Amazing food and a great atmosphere. Perfect for a casual meal or special occasion. Five stars!</p>
                </li>
                <li className="ReviewCard">
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className="Reviewer">
                        <img src={user4} alt="Steve"/>
                        <h2>Richolas</h2>
                    </div>
                    <p>Best meal I've had in a long time! The greek salad was outstanding. Great value too!</p>
                </li>
            </ul>
        </section>
    )
}

export default Testimonials;