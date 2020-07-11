import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ListItem extends Component {
    render() {
        const {title, descr} = this.props
        if (!title) {
            return null
        }

        return (
            <div data-test='listItemComponent'>
                <h2 data-test='listItemTitle'>{title}</h2>
                <div data-test='listItemDescription'>
                    {descr}
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string
}

export default ListItem
