import React from 'react'
import {shallow} from 'enzyme'
import {findByAttr, checkProps} from "../../../Utils"
import SharedButton from './index'
import PropTypes from "prop-types"


describe("SharedButton Component", () => {

    describe("Checking PropTypes", () => {
        it("Should NOT throw a warning", () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe("Renders", () => {
        let wrapper;

        beforeEach(() => {
            const props = { buttonText: 'Example Button Text',
                emitEvent: () => {

                }}
            wrapper = shallow(<SharedButton {...props}/>)

        })
        it("Should render a button", ()=> {
            const button = findByAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })
    })
})
