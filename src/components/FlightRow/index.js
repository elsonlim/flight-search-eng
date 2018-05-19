import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'; 

import AirlineLogo from '../AirlineLogo';
import FlightDetail from '../FlightDetail';

import './FlightRow.css';

class FlightRow extends Component {

    getPrice() {
        let { departure, arrival } = this.props;

        let price = departure.price.amount;

        if (arrival) {
            price += arrival.price.amount;
        }

        return price;
    }

    getFlightDetails() {
        let { departure, arrival } = this.props;

        if (arrival) {
            return (
                <div>
                    <Grid columns={'equal'}>
                        <Grid.Column>
                            <FlightDetail flightInfo={departure} />
                        </Grid.Column>
                        <Grid.Column>
                            <FlightDetail flightInfo={arrival} />
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }

        return (<FlightDetail flightInfo={departure} />);
    }
    
    render() {
        const { logo, departure, arrival } = this.props;

        return (
            <div className="flights">
                <Grid>
                    <Grid.Row verticalAlign={'middle'}>
                        <Grid.Column width={3}>
                            <AirlineLogo airlineLogo={logo} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {this.getFlightDetails()}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            ${this.getPrice()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Button content='Select this flight' primary /> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>    
        );
    }
}

export default FlightRow;