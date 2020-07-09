import React, {Component} from 'react';
import Header from './components/header';
import Headline from './components/headline'
import './app.scss';

const tempArray = [{
    fName: 'Joe',
    lName: 'Blower',
    email: 'gag@gagdgag.com',
    age: 25,
    onlineStatus: true
}]


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <section className="main">
                    <Headline header="Posts" descr="Click the button to see Posts!" tempArray={tempArray}/>
                </section>
            </div>
        )
    }

}

export default App;
