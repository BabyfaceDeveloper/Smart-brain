import { Component } from 'react';
import './Logo.css';
import brain from './brain.png';
import Tilt from 'react-parallax-tilt';

class Logo extends Component {
    render() {
        return (
            <div className="ma4 mt0">
                <Tilt className='Tilt br2 shadow-2' tiltMaxAngleX={25} tiltMaxAngleY={25} style={{ height: 150, width: 150 }}>
                    <div className="pa3">
                        <img src={brain} alt="logo" style={{ paddingTop: '5px' }} />
                    </div>
                </Tilt>
            </div>
        );
    }
}
export default Logo;