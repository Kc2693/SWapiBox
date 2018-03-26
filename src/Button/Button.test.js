import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;
  let props;
  let mockEvent;
  let controlFunc = jest.fn();
  let fetchFunc = jest.fn();

  beforeEach(() => {
    props = {"controlFunc": controlFunc,
             "fetchFunc": fetchFunc,
             "id": "category-button",
             "name": "people"
           }
    wrapper = shallow(<Button {...props}/>);
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('buttonClicker should run controlFunc and fetchFunc with params ', () => {
    mockEvent = {preventDefault: jest.fn(), target: {"name": "people"}}

    wrapper.instance().buttonClicker(mockEvent);

    expect(controlFunc).toHaveBeenCalledWith(mockEvent.target.name);
    expect(fetchFunc).toHaveBeenCalledWith(mockEvent.target.name);
  });
});
