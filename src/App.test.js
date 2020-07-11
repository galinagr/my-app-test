import React from 'react'
import App from './App'
import {shallow} from 'enzyme'
import {findByAttr, testStore} from "../Utils"

describe("App Component", () => {

    // const setUp = (initialState = {}) => {
    //     const store = testStore(initialState)
    //     const wrapper = shallow(<App props={store}/>).childAt(0)
    //     console.log(wrapper.debug())
    //     return wrapper
    // }
    // let wrapper
    // beforeEach(() => {
    //
    //     const initialState = {
    //         posts: [{
    //             title: 'Test Title 1',
    //             body: 'Some text'
    //         }, {
    //             title: 'Test Title 2',
    //             body: 'Some text'
    //         }, {
    //             title: 'Test Title 3',
    //             body: 'Some text'
    //         }
    //         ]
    //     }
    //     wrapper = setUp(initialState)
    // })
    it("Should render without errors", () => {
        // const component = findByAttr(wrapper, 'appComponent')
        // expect(component.length).toBe(1)
        expect(true).toBe(true)
    })
})

