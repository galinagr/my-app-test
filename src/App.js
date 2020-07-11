import React, {Component} from 'react';
import Header from './components/header';
import Headline from './components/headline'
import SharedButton from './components/button'
import ListItem from './components/listItem'
import {connect} from 'react-redux'
import {fetchPosts} from "./actions"
import './app.scss';

const tempArray = [{
    fName: 'Joe',
    lName: 'Blower',
    email: 'gag@gagdgag.com',
    age: 25,
    onlineStatus: true
}]
const initialState = {
    hideBtn: false
}

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {...initialState}
        this.fetch = this.fetch.bind(this)
    }

    fetch() {
        this.props.fetchPosts()
        this.exampleMethod_updateState()
    }

    exampleMethod_updateState() {
        const {hideBtn} = this.state
        this.setState({
            hideBtn: !hideBtn
        })
    }

    render() {

        const {posts} = this.props
        const {hideBtn} = this.state

        const configButton = {
            buttonText: 'Get Posts',
            emitEvent: this.fetch
        }

        return (
            <div className="App" data-test='appComponent'>
                <Header/>
                <section className="main">
                    <Headline header="Posts" descr="Click the button to see Posts!" tempArray={tempArray}/>
                    {!hideBtn &&
                    <SharedButton {...configButton}/>
                    }
                    {posts.length > 0 &&
                    <div>
                        {posts.map((post, index) => {
                            const {title, body} = post
                            const configListItem = {
                                title,
                                descr: body
                            }

                            return (
                                <ListItem key={index}{...configListItem}/>
                            )
                        })}
                    </div>}
                </section>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(App);
