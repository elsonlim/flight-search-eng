import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import mockState from '../../mocks/mockState';
import {SearchContainer} from './index';

enzyme.configure({ adapter: new Adapter() });

describe('SearchContainer', () => {
    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        props = {updateFlightType: jest.fn()};
        store =  mockStore(mockState);
        wrapper = shallow(<SearchContainer {...props} />);
    });
    
    describe('snapshot test', () => {
		test('show search container', () => {
			const tree = renderer.create(<Provider store={store}><SearchContainer /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });

    describe('handleItemClick', () => {
        it('set states and updateFightType', () => {
            wrapper.instance().handleItemClick({}, { name: 'Return' });
            
            expect(wrapper.state().activeItem).toEqual('Return');
            expect(props.updateFlightType).toHaveBeenCalledTimes(1);
        });
    });
});
