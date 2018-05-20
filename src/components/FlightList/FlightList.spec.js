import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';
import configureStore from 'redux-mock-store';
import {FlightList} from './index';
import FlightRow from '../FlightRow';
import mockState from '../../mocks/mockState';

enzyme.configure({ adapter: new Adapter() });

describe('FlightList', () => {

    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        props = mockState;
        store =  mockStore(mockState);
        wrapper = shallow(<FlightList {...props} />);
    });
    
    describe('snapshot test', () => {
		test('show flightlist', () => {
			const tree = renderer.create(<Provider store={store}><FlightList {...props} /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });

    describe('_getFilteredFlights', () => {
        test('should have 1 departing and 1 arriving flight', () => {
            const flights = wrapper.instance()._getFilteredFlights();
    
            expect(flights.arriving).toHaveLength(1);
            expect(flights.departing).toHaveLength(1);
        })
    })

    describe('_showOnewayFlights', () => {
        test('should have 1 flightrow', () => {
            const flights = wrapper.instance()._getFilteredFlights();
            const filteredFlights = wrapper.instance()._showOnewayFlights(flights);

            expect(filteredFlights).toHaveLength(1);
        });
    });

    describe('_showReturnFlights', () => {
        test('should have 1 flightrow', () => {
            const flights = wrapper.instance()._getFilteredFlights();
            const filteredFlights = wrapper.instance()._showReturnFlights(flights);

            expect(filteredFlights).toHaveLength(1);
        });
    });

    describe('_checkRefineSearch', () => {
        test('return true if price within range', () => {
            const withinRange = wrapper.instance()._checkRefineSearch(500);

            expect(withinRange).toBeTruthy();
        });

        test('return false if price above range', () => {
            const withinRange = wrapper.instance()._checkRefineSearch(1500);

            expect(withinRange).toBeFalsy();
        });
    });

    describe('getFlightDate', () => {
        test('show 1 date field if is not return flight', () => {
            expect(wrapper.instance().getFlightDate(false)).toHaveLength(1);
        });

        test('show 2 date field if is not return flight', () => {
            expect(wrapper.instance().getFlightDate(true)).toHaveLength(2);
        });
    });
});
