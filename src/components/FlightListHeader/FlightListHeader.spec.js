import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { FlightListHeader } from './index';
import mockState from '../../mocks/mockState';

enzyme.configure({ adapter: new Adapter() });

describe('FlightListHeader', () => {

    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        props = mockState;
        store =  mockStore(mockState);
        wrapper = shallow(<FlightListHeader {...props} />);
    });
    
    describe('snapshot test', () => {
		test('show FlightListHeader', () => {
			const tree = renderer.create(<Provider store={store}><FlightListHeader {...props} /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
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
