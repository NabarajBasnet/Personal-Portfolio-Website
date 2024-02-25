import './Services.css'


const Services = ()=>
{
    return(
        <>
        <div className="services-container">
            <div className="services-container-child">

                <div className="container-3-2">

                    <div className="uiux">
                        <div className="uiux-title">
                            <img src='../../../public/images/icons/uiux.png' width={30}/>
                            <h4>UI/UX DESIGN</h4>
                        </div>
                        <div className="description-uiux">
                            <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                        </div>
                    </div>

                    <div className="web">

                        <div className="web-title">
                            <img src='../../../public/images/icons/webdevelopment.png' width={30}/>
                            <h4>WEB DEVELOPMENT</h4>
                        </div>
                        <div className="description-web">
                            <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                        </div>
                    </div>

                    <div className="app">
                        <div className="app-title">
                            <img src='../../../public/images/icons/mobile.png' width={30}/>
                            <h4>APP DEVELOPMENT</h4>
                        </div>
                        <div className="description-app">
                            <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}



export {Services};