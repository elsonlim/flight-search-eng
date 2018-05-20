import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import mockState from '../../mocks/mockState';
import { RefineFlightSearch } from './index';

enzyme.configure({ adapter: new Adapter() });

describe('RefineFlightSearch', () => {

    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        props = Object.assign({}, mockState);
        props.updatePriceSearch = jest.fn();
        store =  mockStore(mockState);
        wrapper = shallow(<RefineFlightSearch {...props} />);
    });
    
    describe('snapshot test', () => {
		test('show refine flight search', () => {
			const tree = renderer.create(<Provider store={store}><RefineFlightSearch {...props} /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });

    describe('updatePriceFilter', () => {
        it('calls props.updatePriceRange with value', () => {
            wrapper.instance().updatePriceFilter('price', 123);
            //console.log(props);
            expect(props.updatePriceSearch).toHaveBeenCalledTimes(1);
        });
    });
});
