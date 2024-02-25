import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="about-container">

          <div className="about-container-2">
            <div className="title-img">
              <h1>About</h1>
              <img src='../../../public/laptop1.png' width={400}/>
            </div>
            <div className="homeabout">
              <p>About me</p>
              <h1>I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.</h1>
            </div>

            <div className="container-2-1">
              <div className="homeabout-1">
                <h2>I design professional & beautiful websites</h2>
              </div>
              <div className="aboutcontainer-2">
                <p className='hmabt-2'>With y ears of experience in graphic and web design, I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.</p>
                <p className='hmabt-2-1'>I’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.</p>
                <button>READ MORE</button>
              </div>
            </div>

          </div>



          <div className="about-container-3">
            <h1>What I do</h1>
            <div className="container-3-1">
              <p>From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.</p>
              <img src='../../../public/images/icons/right-arrow.png' width={60} alt="right-arrow"/>
            </div>

            <div className="container-3-2">
              <div className="uiux">
                <div className="uiux-title">
                  <img src='../../../public/images/icons/uiux.png' width={30} alt="uiux"/>
                  <h4>UI/UX DESIGN</h4>
                </div>
                <div className="description-uiux">
                  <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                </div>
              </div>

              <div className="web">
                <div className="web-title">
                  <img src='../../../public/images/icons/webdevelopment.png' width={30} alt="webdevelopment"/>
                  <h4>WEB DEVELOPMENT</h4>
                </div>
                <div className="description-web">
                  <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                </div>
              </div>

              <div className="app">
                <div className="app-title">
                  <img src='../../../public/images/icons/mobile.png' width={30} alt="mobile"/>
                  <h4>APP DEVELOPMENT</h4>
                </div>
                <div className="description-app">
                  <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="about-container-4">
            <div className="container-4-1">
              <div className="container-4-1-1">
                <h1>Skills</h1>
                <div className="skills">
                  <label>HTML<progress value={60} max={100}>60%</progress></label>
                  <label>CSS<progress value={40} max={100}>40%</progress></label>
                  <label>JavaScript<progress value={50} max={100}></progress></label>
                  <label>React JS<progress value={60} max={100}></progress></label>
                  <label>Python<progress value={60} max={100}></progress></label>
                  <label>Adobe Photoshop<progress value={50} max={100}></progress></label>
                  <label>Adobe Illustrator<progress value={40} max={60}></progress></label>
                </div>
              </div>

              <div className="container-4-1-2">
                <h1>My Experience</h1>
                <div className="experience">
                  <div className="exp-uiux">
                    <p>2020-2024</p>
                    <h5>UI/UX DESIGNER</h5>
                    <p>I have responsibly led a team of 12 designers to help, supervise and approve their designs to make sure it matches client expectations and latest design standards.</p>
                  </div>

                  <div className="exp-web">
                    <p>2020-2024</p>
                    <h5>WEB DEVELOPER</h5>
                    <p>I was responsible for all the in-house and client-based web development assignments. I take pride in having helped the best of clients and getting maximum ratings for the company.</p>
                  </div>

                  <div className="exp-app">
                    <p>2022-2024</p>
                    <h5>APP DEVELOPER</h5>
                    <p>I was a part of an amazing design team and worked together with them to help design and develop apps and websites for different clients of the company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export { About };
