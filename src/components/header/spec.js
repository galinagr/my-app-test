import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import {findByAttr} from '../../../Utils/index'


const setUp = (props = {}) => {
    return shallow(<Header {...props}/>)
}

describe("Header Component", () => {
    let component;
    beforeEach(() => {
        component = setUp()

    })

    it("should render without errors", () => {
        // console.log(component.debug())
        const wrapper = findByAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })
    it("should render a logo", () => {
        const logo = findByAttr(component, 'logoImage')
        expect(logo.length).toBe(1)
    })

})
