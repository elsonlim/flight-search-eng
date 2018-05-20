import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RangeSlider from '../RangeSlider';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as Actions from '../../actions';

import './RefineFlightSearch.css'

/**
 * A RefineFlightSearch object
 */
export class RefineFlightSearch extends Component {
	constructor() {
		super();

		this.updatePriceFilter = this.updatePriceFilter.bind(this);
	}

	updatePriceFilter(name, value) {
		this.props.updatePriceSearch(value);
	}

	/**
	 * This method generates sliders for refine searching. 
	 * @returns {ReactElement} the refine search section.
	 */
	render() {
		const priceFilter = this.props.priceRange.filter; 
		const priceSearch = this.props.priceRange.search; 

		return (
			<Card fluid={true}>
				<Card.Content>
					<Card.Header textAlign={'left'}>
						Refine Flight Search
					</Card.Header>
					<div className="refine-search-slider">
						<RangeSlider
							name="Price/Pax" 
							range={priceFilter}
							value={priceSearch} updateValue={this.updatePriceFilter} />
					</div>
				</Card.Content>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	priceRange: state.priceRange
});

RefineFlightSearch.propTypes = {
	priceRange: PropTypes.object.isRequired
}

export default connect(mapStateToProps, Actions)(RefineFlightSearch);
