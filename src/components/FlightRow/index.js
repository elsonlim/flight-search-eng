import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'; 
import { connect } from 'react-redux';

import AirlineLogo from '../AirlineLogo';
import FlightDetail from '../FlightDetail';

import './FlightRow.css';

class FlightRow extends Component {
    getFlightDetails() {
        const { departure, arrival } = this.props;

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
        const { logo, price } = this.props;

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
                            {price}
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

const mapStateToProps = state => ({
    numberOfPassengers: state.searchParams.numberOfPassengers
});

export default connect(mapStateToProps)(FlightRow);