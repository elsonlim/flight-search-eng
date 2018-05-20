import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FlightDetail from './index';

enzyme.configure({ adapter: new Adapter() });

describe('FlightDetail', () => {

    let props;
    let wrapper;
    
    beforeEach(() => {
        props = {
            flightInfo: {
                "id": 0,
                "IATA": "DL",
                "flightNo": 90,
                "from": "USA",
                "to": "HKG",
                "price": {
                    "amount": 261,
                    "currency": "USD"
                },
                "time": {
                    "arrival": 609,
                    "departure": 425,
                    "duration": 104
                }
            },
        }
        wrapper = shallow(<FlightDetail {...props} />);
    });

    it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FlightDetail {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
    });
    
    describe('snapshot test', () => {
		test('show airline logo', () => {
			const tree = renderer.create(<FlightDetail {...props} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
    });
    
    describe('_numToTime', () => {
        test('convert 2 to 00:02am', () => {
            expect(wrapper.instance()._numToTime(2)).toEqual('00:02am');
        });

        test('convert 102 to 01:02am', () => {
            expect(wrapper.instance()._numToTime(102)).toEqual('01:02am');
        });

        test('convert 1234 to 00:34am', () => {
            expect(wrapper.instance()._numToTime(1234)).toEqual('12:34pm');
        });

        test('convert 2359 to 11:59pm', () => {
            expect(wrapper.instance()._numToTime(2359)).toEqual('11:59pm');
        });
    });

    describe('_getDayIncrement', () => {
        test('returns empty string if depature time before arrival', () => {
            expect(wrapper.instance()._getDayIncrement(1234, 2234)).toEqual('');
        });

        test('returns +1 string if depature time before arrival', () => {
            expect(wrapper.instance()._getDayIncrement(2359, 1234)).toEqual('(+1)');
        });
    });
});
