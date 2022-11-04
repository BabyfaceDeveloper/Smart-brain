import { Component } from 'react';

class Navigation extends Component {
    render() {
        if (this.props.isSignedIn) {
            return (
                <nav style={{ 'display': 'flex', justifyContent: 'flex-end' }}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => this.props.onRouteChange('signout')}>Sign Out</p>
                </nav>
            )
        }
        return (
            <nav style={{ 'display': 'flex', justifyContent: 'flex-end' }}>
                <p className='f3 link dim black underline pa3 pointer' onClick={() => this.props.onRouteChange('signin')}>Sign In</p>
                <p className='f3 link dim black underline pa3 pointer' onClick={() => this.props.onRouteChange('register')}>Register</p>
            </nav>
        )
    }
}
export default Navigation;