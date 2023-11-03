export default function Contact() {
    return (
        <body>
            <section className="contact"> 
                <h1>Contact Us</h1>
                <p>(123) 456-7890</p>
                <br></br>
                <div>
                    <h2>Hours of Operation</h2>
                    <p>Monday 10AM-7:30PM</p>
                    <p>Tuesday Closed</p>
                    <p>Wednesday 10AM-7:30PM</p>
                    <p>Thursday 10AM-7:30PM</p>
                    <p>Friday 10AM-7:30PM</p>
                    <p>Saturday 9:30AM-7PM</p>
                    <p>Sunday 10AM-6PM</p>
                </div>
                <br></br>
                <div>
                    <h2>Directions</h2>
                    <p>New York, NY</p>
                </div>
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622236789!2d-74.30932477148002!3d40.69701929469058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1698952436674!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <br></br>
                <div className="instagram">
                    <h2>Find more on Instagram</h2>
                    <a href="https://www.google.com/">
                        <img src="/images/instagram-icon.png" alt="@nailSalon"/>
                    </a>
                </div>
            </section> 
        </body>
    )
}