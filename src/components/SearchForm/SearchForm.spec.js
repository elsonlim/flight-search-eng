import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import mockState from '../../mocks/mockState';
import {SearchForm} from './index';

enzyme.configure({ adapter: new Adapter() });

describe('SearchForm', () => {
    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        props = {
            isReturn: true,
            updateSearchParams: jest.fn()
        };
        store =  mockStore(mockState);
        wrapper = shallow(<SearchForm {...props} />);
    });
    
    describe('snapshot test', () => {
		test('show search form', () => {
			const tree = renderer.create(<Provider store={store}><SearchForm {...props} /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
        });
        
        test('show search form when isReturn is false', () => {
            let props2 = {
                isReturn: false,
                updateSearchParams: jest.fn()
            }
			const tree = renderer.create(<Provider store={store}><SearchForm {...props2} /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });

    describe('setFrom', () => {
        it('set state of from to value', () => {
            wrapper.instance().setFrom({}, { value: 'value'});
            
            expect(wrapper.state().from).toEqual('value');
        });
    });

    describe('setTo', () => {
        it('set state of to to value', () => {
            wrapper.instance().setTo({}, { value: 'value'});
            
            expect(wrapper.state().to).toEqual('value');
        });
    });

    describe('setPassengers', () => {
        it('set state of numberOfPassengers to value', () => {
            wrapper.instance().setPassengers({}, { value: 'value'});
            
            expect(wrapper.state().numberOfPassengers).toEqual('value');
        });
    });

    describe('setDepatureDate', () => {
        it('set state of depatureDate to value', () => {
            wrapper.instance().setDepatureDate('value');
            
            expect(wrapper.state().depatureDate).toEqual('value');
        });
    });

    describe('setArrivalDate', () => {
        it('set state of arrivalDate to value', () => {
            wrapper.instance().setArrivalDate('value');
            
            expect(wrapper.state().arrivalDate).toEqual('value');
        });
    });

    describe('filterFlights', () => {
        it('calls updateSearchParams', () => {
            wrapper.instance().filterFlights();
            
            expect(props.updateSearchParams).toHaveBeenCalledTimes(1);
        });
    });
});
