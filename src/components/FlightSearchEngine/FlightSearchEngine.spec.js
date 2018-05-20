import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import mockState from '../../mocks/mockState';
import FlightSearchEngine from './index';

describe('FlightSearchEngine', () => {
    let props;
    let wrapper;
    let store;
    const mockStore = configureStore();

    beforeEach(() => {
        store =  mockStore(mockState);
    });

    describe('snapshot test', () => {
		test('show airline logo', () => {
			const tree = renderer.create(<Provider store={store} ><FlightSearchEngine /></Provider>).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
