import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faPlay} from '@fortawesome/free-solid-svg-icons'

type Props = {

}
const HowToMakeNFT : React.FC<Props> =() => {
    return(
        <section id="hơ-to-make-nft" className="hero-wrap section">
            <div className="hero-mask opacity-7 bg-dark"/>
            <div className="hero-bg parallax" style={{
                backgroundImage: 'url("/images/home-page/intro-bg-4.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center 0px'
            }}/>
            <div className="hero-content">
                <div className="container text-center">
                    <h2 className="text-9 fw-600 text-white mb-4 mb-lg-5">How to make it?</h2>
                    <a className="popup-youtobe btn-video-play" href="http://www.youtobe.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faPlay}/>
                    </a>
                    <p className="text-white font text-uppercase ls-1 mt-2 mb-0">View</p>
                </div>
            </div>
        </section>
    )
}

export default HowToMakeNFT;