import React from 'react'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Basic test', () => {
 
  it('should renders without crashing', () => {
    expect(() => shallow(<BrowserRouter><App /></BrowserRouter>)).not.toThrowError(Error)
  })

 
})
