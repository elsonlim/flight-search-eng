import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import './SearchForm.css'

class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            from: null,
            to: null,
            depatureDate: null,
            returnDate: null,
            numberOfPassengers: null
        };

        this.setFrom = this.setFrom.bind(this);
        this.setTo = this.setTo.bind(this);
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

    render() {
        const countryOptions = [
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' },
            { key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong' },
            { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore' },
            { key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan' },
            { key: 'us', value: 'us', flag: 'us', text: 'United States' },
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

                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        margin: '15px 0'
                    }}>
                        <Button className="form-button" type='submit'>Search</Button>
                    </div>
                    
                </Form>
            </div>
        );
    }
}

export default SearchForm;