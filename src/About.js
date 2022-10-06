const About = () => {
    return (
        <section className="about">
            <div className="img-container">
                <img src={require('./img/about-img-lg.jpg')} alt="Diner Interior" />
            </div>
            <div className="info-card">
                <img src={require('./img/about-img-sm-test.jpg')} alt="DGS Small Icon" />
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur
                 culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime
                  molestiae ipsum repellendus ullam! Similique, ut quo.</p>
            </div>
        </section>
    );
}
 
export default About;