import { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
    render() {
        return (
            <div className="absolute mt4 center" style={{ left: 0, right: 0, width: "500px" }}>
                <img id="inputimage" src={this.props.imageUrl} alt='' width='500px' height='auto' />
                <div className='bounding-box' style={{
                    top: this.props.box.topRow,
                    right: this.props.box.rightCol,
                    bottom: this.props.box.bottomRow,
                    left: this.props.box.leftCol,
                }}></div>
            </div>
        );
    }
}
export default FaceRecognition;