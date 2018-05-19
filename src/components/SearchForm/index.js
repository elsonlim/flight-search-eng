import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './SearchForm.css'

import DatePicker from '../DatePicker';
import * as actions from '../../actions';



class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            from: null,
            to: null,
            depatureDate: null,
            returnDate: null,
            numberOfPassengers: 1
        };

        this.setFrom = this.setFrom.bind(this);
        this.setTo = this.setTo.bind(this);
        this.filterFlights = this.filterFlights.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
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

    showReturnDate() {
        const { isReturn } = this.props;

        if (isReturn === true) {
            return (
                <div>
                    <DatePicker 
                        focus={this.state.focus}
                        onFocusChange={this.onFocusChange}
                        onDateChange={this.onDateChange}
                    />
                </div>
            );
        }
    }

    filterFlights() {
        const { isReturn, updateSearchParams } = this.props;
        const { from, to, numberOfPassengers} = this.state;
        updateSearchParams({
            from,
            to,
            numberOfPassengers,
            isReturn,
        });
    }

    onDateChange(date) {
        this.setState({ date });
      }
    
    onFocusChange({ focused }) {
        this.setState({ focused });
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
        return (
            <div>
                <Form style={{textAlign: 'left'}}>
                    <Dropdown 
                        className="form-field"
                        placeholder='Select '
                        fluid search selection
                        options={countryOptions}
                        onChange={this.setFrom}
                    /> 
                    
                    <Dropdown 
                        className="form-field"
                        placeholder='Destination ' 
                        fluid search selection 
                        options={countryOptions}
                        onChange={this.setTo}
                    /> 

                    <div className="form-field">
                        <DatePicker 
                            className="form-field"
                            focus={this.state.focus}
                            onFocusChange={this.onFocusChange}
                            onDateChange={this.onDateChange}
                        />
                    </div>
                    
                    {this.showReturnDate()}

                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        margin: '15px 0'
                    }}>
                        <Button 
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

export default connect(mapStateToProps, actions)(SearchForm);