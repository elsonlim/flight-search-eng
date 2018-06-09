import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './FlightListHeader.css';

/**
 * A FlightList objectFlightListHeader
 */
export class FlightListHeader extends Component {

    /**
	 * This method returns the depature and arrival dates(if available)
	 * @returns {Array} containing depature and arrival dates
	 */
    _getFlightDate(isReturn = false) {
        const { depatureDate, arrivalDate } = this.props.searchParams;
        const dates = [];
        if(depatureDate) {
            dates.push(<div key={0}>Depart: {depatureDate.toDate().toLocaleDateString()}</div>);
        }

        if(isReturn && arrivalDate) {
            dates.push(<div key={1}>Return: {arrivalDate.toDate().toLocaleDateString()}</div>)
        }

        return dates;
    }

    /**
	 * This method generates a list of flight row details.
	 * @returns {ReactElement} return a list of FlightRows
	 */
    render() {
        return (
            <div className="flight-list-header">
                <div className="results-title">Your Results</div>
                <div className="results-date">
                    {this._getFlightDate(this.props.searchParams.isReturn)}
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    searchParams: state.searchParams,
});

FlightListHeader.propTypes = {
    searchParams: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, null)(FlightListHeader);