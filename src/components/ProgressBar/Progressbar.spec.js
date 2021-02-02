import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import ProgressBar from './ProgressBar';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
    test('asdf', () => {
        const wrapper = shallow(<ProgressBar percent={50} width={500} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    });
});