import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import moment from 'moment';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DatePicker from './index';

enzyme.configure({ adapter: new Adapter() });

describe('DatePicker', () => {

    let props;
    let wrapper;
    
    beforeEach(() => {
        props = {
            initialDate: moment(new Date()),
            onDateChange: jest.fn(),
        }
        wrapper = shallow(<DatePicker {...props} />);
    });

    it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<DatePicker {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
    });
    
    describe('snapshot test', () => {
		test('show airline logo', () => {
			const tree = renderer.create(<DatePicker {...props} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });
    
    describe('onDateChange', () => {
        test('update the date value in state', () => {
            const dateObj = moment(new Date());
            wrapper.instance().onDateChange(dateObj);

            const date = wrapper.state().date;
            expect(date).toEqual(dateObj);
        });

        test('calls props onDateChange with date', () => {
            const dateObj = moment(new Date());
            props.onDateChange.mockClear();
            
            wrapper.instance().onDateChange(dateObj);
            
            expect(props.onDateChange).toHaveBeenCalledTimes(1);
        });
    });

    describe('onFocusChange', () => {
        test('update the focus value in state', () => {
            wrapper.instance().onFocusChange({
                focused: true
            });

            const focused = wrapper.state().focused;
            expect(focused).toEqual(true);
        });
    });
});
