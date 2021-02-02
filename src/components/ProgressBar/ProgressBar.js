import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
    getColor = (percent) => {
        if (this.props.percent === 100) return 'green';
        if (this.props.percent >= 80) return 'lightgreen';
        if (this.props.percent >= 60) return 'yellowgreen';
        if (this.props.percent >= 40) return 'yellow';
        if (this.props.percent >= 20) return 'crimson';
        return 'red';
    }

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    }

    render() {
        const {percent, width, height} = this.props;
        return (
            <div style={{border: 'solid 1px lightgray', width:width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,
    /** Bar width */
    width: PropTypes.number.isRequired,
    /** Bar height */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 5
}

export default ProgressBar;