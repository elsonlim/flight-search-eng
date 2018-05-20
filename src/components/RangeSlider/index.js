import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const style = {
	minMax: {
		backgroundColor: '#1678C2',
		color: 'white',
		border: '1px solid #e9e9e9',
		borderRadius: '5px',
		padding: '0 2px',
		fontSize: '0.8em',
		fontWeight: 'normal',
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap'
	},
	filterName: { fontWeight: 'bold', marginRight: '10px' },
	rangeInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	rangeContainer: { textAlign: 'left', marginBottom: '10px' },
	rangeSlider: {
		container: { padding: '5px' },
		handleStyle: { borderColor: '#1678C2' },
		trackStyle: { backgroundColor: '#1678C2' },
		railStyle: { backgroundColor: 'grey' }
	}
};

/**
 * A RangeSlider object
 */
class RangeSlider extends Component {
	render() {
		const {
			minMax, filterName, rangeInfo, rangeContainer, rangeSlider
		} = style;

		/**
		 * This method generates a slider with infomations.
		 * @returns {ReactElement} a single slider.
		 */
		return (
			<div style={rangeContainer} >
				<div style={rangeInfo}>
					<span style={filterName}>{this.props.name}</span>
					<span style={minMax}>
						{this.props.value.min} - {this.props.value.max}
					</span>
				</div>
				<div style={rangeSlider.container}>
					<Range
						min={this.props.range.min}
						max={this.props.range.max}
						defaultValue={Object.values(this.props.value)}
						handleStyle={[rangeSlider.handleStyle]}
						trackStyle={[rangeSlider.trackStyle]}
						railStyle={rangeSlider.railStyle}
						onAfterChange={newValue =>
							this.props.updateValue(this.props.name, { min: newValue[0], max: newValue[1] })}
					/>
				</div>
			</div>
		);
	}
}

RangeSlider.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.object.isRequired,
	updateValue: PropTypes.func.isRequired,
};

export default RangeSlider;
