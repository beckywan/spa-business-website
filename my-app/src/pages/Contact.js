export default function Contact() {
    return (
        <body>
            <section className="contact"> 
                <h1>Contact Us</h1>
                <p>(631) 696-8848</p>
                <br></br>
                <div>
                    <h2>Hours of Operation</h2>
                    <p>Monday 10AM-7:30PM</p>
                    <p>Tuesday 10AM-7:30PM</p>
                    <p>Wednesday 10AM-7:30PM</p>
                    <p>Thursday 10AM-7:30PM</p>
                    <p>Friday 10AM-7:30PM</p>
                    <p>Saturday 9:30AM-7PM</p>
                    <p>Sunday 10AM-6PM</p>
                    <small>*Closed on Tuesdays in the Winter</small>
                </div>
                <br></br>
                <div>
                    <h2>Directions</h2>
                    <p>765 Horseblock Rd, Farmingville, New York 11738</p>
                </div>
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8167814420353!2d-73.03084249999999!3d40.8319879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e84637dac00001%3A0xd75676dee46a35e!2s765%20Horseblock%20Road%2C%20Farmingville%2C%20NY%2011738!5e0!3m2!1sen!2sus!4v1699198895420!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <br></br>
                <div className="instagram">
                    <h2>Find more on Instagram</h2>
                    <a href="https://www.instagram.com/dynamitenails631/">
                        <img src="/images/instagram-icon.png" alt="@nailSalon"/>
                    </a>
                </div>
            </section> 
        </body>
    )
}