import React from 'react'
import { Parallax } from 'react-parallax';
import luxury from '../car-images/Lexus.jpg';
import used from '../car-images/toyota.jpg';
import newcars from '../car-images/Audi.webp';
// import transcar from '../car-images/Audi-4K-PNG.png'
// import { Parallax as P, ParallaxLayer} from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import ChatBot from '../components/ChatBot'
import logo_ from '../components/caravellecut.png'


const HomePage = () => {
    return (
        <div className="Home">
            <ChatBot/>
            <div className='gradient-content'>
                <div className='content'>
                    <div className='logo-content'>
                        <h1 className='logo-font'>CARAVELLE</h1>
                        <img className='homeLogo' src={logo_} alt='logopng'/>
                        <p className='landing-font'>Elevate Your Drive</p>  
                    </div>
                </div>
            </div>

            <div className='homedivider'></div>
            
            <Parallax strength={200} bgImage={luxury}>
                <div className='content'>
                <div className='text-content'>
                    <div className='luxuryInfo landing-font'>
                        <h1>Luxury</h1>
                        <p>Travel in style</p>
                    </div>
                </div>
                <Link to="/CarList" className='ConLink'>
                    <button type='button' className='btn'>Shop Now</button>
                </Link>
                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={400} bgImage={newcars}>
                <div className='content'>
                <div className='text-content'>
                    <div className="new-text landing-font">
                        <h1>New</h1>
                        <p>Keeping it modern</p>
                    </div>
                </div>

                <Link to="/CarList" className='ConLink'>
                    <button type='button' className='btn'>Shop Now</button>
                </Link>

                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={200} bgImage={used}>
                <div className='content'>
                <div className='text-content'>
                    <div className='usedInfo landing-font'>
                        <h1>Used</h1>
                        <p>Exploration on a budget</p>
                    </div>
                </div>

                <Link to="/CarList" className='ConLink'>
                    <button type='button' className='btn'>Shop Now</button>
                </Link>

                <table className='aboutTable'>
                    <tr>
                        <th>Caravelle</th>
                        <Link to="/Contact" className='ConLink'>
                            <th>Contact</th>
                        </Link>
                    </tr>
                </table>
                
                </div>
            </Parallax>
        </div>

        
    )
}

export default HomePage