import './Home.css'


const Home = ()=>
{
    return(
        <>
        <div className="container">
            <div className="home-container-1">
                <div className="details">
                    <ul>
                        <li><p>HELLO, MY NAME IS</p></li>
                        <li><h1>Nabaraj Basnet</h1></li>
                        <li><h5>Web Developer</h5></li>
                    </ul>
                    
                    <ul className='home-contact-detail'>
                        <li><img src='../../../public/images/icons/email.png' width={25}/>CONTACTNABARAJ@GMAIL.COM</li>
                        <li><img src='../../../public/images/icons/phone-call.png' width={25}/>9804573093</li>
                    </ul>
                </div>  
                <div className="myimg">
                    <img src='../../../public/images/backgrounds/myimage.png' width={500}/>
                </div>
            </div>



            <div className="home-container-2">
                <div className="aboutme-small-title">
                    <p>About me</p>
                </div>
                <div className="des-about-me">
                <h1>I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.</h1>
                </div>
            </div>


            <div className="home-container-2">
                <div className="homeabout-1">
                    <h2>I design professional & beautiful websites</h2>
                </div>
                <div className="homeabout-2">
                    <p className='hmabt-2'>With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.</p>
                    <p className='hmabt-2-1'>I’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.</p>
                    <button>READ MORE</button>
                </div>
            </div>

        </div>
        </>
    )
}



export {Home};