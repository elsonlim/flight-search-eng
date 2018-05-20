import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import RangeSlider from './index';

describe('RangeSlider', () => {
	let props;

	beforeEach(() => {
		props = {
			name: 'name',
			value: {},
            updateValue: jest.fn(),
            range: {min: 0, max: 3000},
		};
	});

	describe('snapshot test', () => {
		test('renders correctly', () => {
			const tree = renderer.create(<RangeSlider {...props} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
