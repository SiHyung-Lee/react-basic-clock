import React, {Component} from 'react';

class Time extends Component {
    date = new Date();
    state = {
        hour: this.date.getHours(),
        minute: this.date.getMinutes(),
        second: this.date.getSeconds()
    };

    componentDidMount() {
        setInterval(() => {
            this.date = new Date();

            this.setState({
                hour: this.date.getHours(),
                minute: this.date.getMinutes(),
                second: this.date.getSeconds()
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.hour}:{this.state.minute}:{this.state.second}
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <Time/>
        </div>
    );
}

export default App;
