import './Portfolio.css'


const Portfolio = ()=>
{
    return(
        <>
        <div className="portfolio-container">
            <div className="portfolio-container-child">

                <div className="portfolio-container-1">
                    <div className="portfolio-container-1-flexor">
                        <div className="portfolios">
                            <div className="port-title">
                                <h1>Portfolio</h1>
                            </div>
                            <div className="images-portfolios">
                                <ul>
                                    <li><img src='../../../public/images/backgrounds/img1.jpg' width={300}/></li>
                                    <li><img src='../../../public/images/backgrounds/img2.jpg' width={300}/></li>
                                    <li><img src='../../../public/images/backgrounds/img3.jpg' width={300}/></li>
                                    <li><img src='../../../public/images/backgrounds/img4.jpg' width={300}/></li>
                                    <li><img src='../../../public/images/backgrounds/img5.jpg' width={300}/></li>
                                    <li><img src='../../../public/images/backgrounds/img6.jpg' width={300}/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}



export {Portfolio};