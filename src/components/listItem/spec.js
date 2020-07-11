import React from 'react'
import {shallow} from 'enzyme'
import {findByAttr, checkProps} from "../../../Utils"
import ListItem from './index'
import SharedButton from "../button"

describe("ListItem Component", () => {

    describe("Checking PropTypes", () => {

        it("Should not throw a waring ", () => {
            const expectedProps = {
                title: 'Test ListItem',
                descr: "Test ListItem description"
            }

            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe("ListItem Component renders", () => {

        let wrapper;

        beforeEach(() => {
            const props = {
                title: 'Test ListItem',
                descr: "Test ListItem description"
            }
            wrapper = shallow(<ListItem {...props}/>)

        })
        it("Should render a ListItem", () => {
                const listItem = findByAttr(wrapper, 'listItemComponent')
                expect(listItem.length).toBe(1)
            }
        )
        it("Should render a ListItem title", () => {
                const listItemTitle = findByAttr(wrapper, 'listItemTitle')
                expect(listItemTitle.length).toBe(1)
            }
        )
        it("Should render a ListItem description", () => {
                const listItemDescr = findByAttr(wrapper, 'listItemDescription')
                expect(listItemDescr.length).toBe(1)
            }
        )

    })

    describe("Should NOT render", () => {
        let wrapper

        beforeEach(() => {
            const props = {
                descr: "Some text..."
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it("Should NOT render a ListItem", () => {
                const listItem = findByAttr(wrapper, 'listItemComponent')
                expect(listItem.length).toBe(0)
            }
        )

    })


})



