import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'

import {findByAttr, checkProps} from './../../../Utils'

const setUp = (props = {}) => {
    return shallow(<Headline {...props}/>)
}

describe("Headline Component", () => {


    describe("Checking Props types", () => {

        beforeEach(() => {

        })

        it("should not throw a warning", () => {
            const expectedProps = {
                header: 'Test Header',
                descr: "Test description",
                tempArray: [{
                    fName: 'Test First Name',
                    lName: 'Test Last Name',
                    email: 'test@test.com',
                    age: 25,
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined()

        })
        it("should render H1", () => {

        })
        it("should render a description", () => {

        })

    })

    describe("Have NO props", () => {

    })
})

//
// describe("Headline Component", () => {
//
//
//     describe("Have props", () => {
//         let wrapper;
//
//         beforeEach(() => {
//             const props = {
//                 header: "Test Header",
//                 descr: "Test Descr"
//             }
//             wrapper = setUp(props)
//         })
//         it("should see props without errors", ()=> {
//             const component = findByAttr(wrapper, 'HeadlineComponent')
//             expect(component.length).toBe(1)
//         })
//         it("should render H1", ()=> {
//             const h1 = findByAttr(wrapper, 'header')
//             expect(h1.length).toBe(1)
//         })
//         it("should render a description", ()=> {
//             const descr = findByAttr(wrapper, 'description')
//             expect(descr.length).toBe(1)
//         })
//
//     })
//
//     describe("Have NO props", () => {
//         let wrapper;
//         beforeEach(() => {
//             wrapper = setUp()
//         })
//         it("should NOT render ", ()=> {
//             const component = findByAttr(wrapper, 'HeadlineComponent')
//             expect(component.length).toBe(0)
//         })
//         it("should NOT render H1", ()=> {
//             const h1 = findByAttr(wrapper, 'header')
//             expect(h1.length).toBe(0)
//         })
//         it("should NOT render a description", ()=> {
//             const descr = findByAttr(wrapper, 'description')
//             expect(descr.length).toBe(0)
//         })
//     })
// })

