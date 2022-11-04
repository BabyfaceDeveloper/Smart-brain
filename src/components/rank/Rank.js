import { Component } from 'react';

class Rank extends Component {
    render() {
        const { name, entries } = this.props;
        return (
            <>
                <div className="white f3">
                    {`${name}, your current entry count is...`}
                </div>
                <div className="white f1">
                    {entries}
                </div>
            </>
        );
    }
}
export default Rank;