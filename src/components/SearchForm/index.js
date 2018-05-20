import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';

import './SearchForm.css'

import DatePicker from '../DatePicker';
import * as actions from '../../actions';

export class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            from: null,
            to: null,
            depatureDate: null,
            arrivalDate: null,
            numberOfPassengers: 1
        };

        this.setFrom = this.setFrom.bind(this);
        this.setTo = this.setTo.bind(this);
        this.setPassengers = this.setPassengers.bind(this);
        this.filterFlights = this.filterFlights.bind(this);
        this.setDepatureDate = this.setDepatureDate.bind(this);
        this.setArrivalDate = this.setArrivalDate.bind(this);
    }

    setFrom(event, { value }) {
        this.setState({
            from: value
        })
    }

    setTo(event, { value }) {
        this.setState({
            to: value
        })
    }

    setPassengers(event, { value }) {
        this.setState({
            numberOfPassengers: value
        })
    }

    setDepatureDate(date) {
        this.setState({
            depatureDate: date
        })
    }

    setArrivalDate(date) {
        this.setState({
            arrivalDate: date
        })
    }

    showReturnDate() {
        const { isReturn } = this.props;

        if (isReturn === true) {
            const date = new Date();
            date.setDate(date.getDate() + 1);

            return (
                <div className="form-field">
                    <div>Return Date</div>
                    <DatePicker
                        initialDate={moment(date)}
                        onDateChange={this.setArrivalDate}
                    />
                </div>
            );
        }
    }

    filterFlights() {
        const { isReturn, updateSearchParams } = this.props;
        const { from, to, depatureDate, arrivalDate, numberOfPassengers} = this.state;
        updateSearchParams({
            from,
            to,
            numberOfPassengers,
            depatureDate,
            arrivalDate,
            isReturn,
        });
    }    

    render() {

        //const location = ['USA', 'AUS', 'SGP', 'HKG', 'JPN', 'TWN'];

        const countryOptions = [
            { key: 'AUS', value: 'AUS', flag: 'au', text: 'Australia' },
            { key: 'JPN', value: 'JPN', flag: 'jp', text: 'Japan' },
            { key: 'HKG', value: 'HKG', flag: 'hk', text: 'Hong Kong' },
            { key: 'SGP', value: 'SGP', flag: 'sg', text: 'Singapore' },
            { key: 'TWN', value: 'TWN', flag: 'tw', text: 'Taiwan' },
            { key: 'USA', value: 'USA', flag: 'us', text: 'United States' },
        ]

        const passengerOptions = [1,2,3,4,5,6,7,8,9].map(num => ({
            key: num, value: num, text: num
        }));

        return (
            <div>
                <Form style={{textAlign: 'left'}}>
                    <div>From</div>
                    <Dropdown 
                        className="form-field"
                        placeholder='Select '
                        fluid search selection
                        options={countryOptions}
                        onChange={this.setFrom}
                    /> 
                    
                    <div>Destination</div>
                    <Dropdown 
                        className="form-field"
                        placeholder='Destination ' 
                        fluid search selection 
                        options={countryOptions}
                        onChange={this.setTo}
                    /> 

                    <div className="form-field">
                        <div>Depature Date</div>
                        <DatePicker 
                            initialDate={moment(new Date())}
                            onDateChange={this.setDepatureDate}
                        />
                    </div>
                    
                    {this.showReturnDate()}

                    <div>Passengers</div>
                    <Dropdown 
                        className="form-field"
                        placeholder='Passengers'
                        fluid search selection
                        options={passengerOptions}
                        onChange={this.setPassengers}
                        defaultValue={1}
                    /> 

                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        margin: '15px 0'
                    }}>
                        <Button
                            primary 
                            className="form-button"
                            onClick={this.filterFlights}
                            type='submit'>
                                Search
                        </Button>
                    </div>
                    
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isReturn: state.searchType
});

SearchForm.propTypes = {
    isReturn: PropTypes.bool.isRequired,
    updateSearchParams: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(SearchForm);