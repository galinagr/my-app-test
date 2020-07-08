import checkPropTypes from 'check-prop-types'
import Headline from "../src/components/headline"

export const findByAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
}

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}
