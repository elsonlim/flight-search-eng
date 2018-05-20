import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import AirlineLogo from './index';

describe('AirlineLogo', () => {

    let props;
    let wrapper;
    
    beforeEach(() => {
        props = {
            airlineLogo: 'DL'
        }
    });

    it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AirlineLogo {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
    });
    
    describe('snapshot test', () => {
		test('show airline logo', () => {
			const tree = renderer.create(<AirlineLogo {...props} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
