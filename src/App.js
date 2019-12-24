import React, {Component} from 'react';

class CurrentDate extends Component {
    date = new Date();
    state = {
        year: this.date.getFullYear(),
        month: this.date.getMonth() + 1,
        day: this.date.getDate(),
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
                <div>{this.state.hour}:{this.state.minute}:{this.state.second}</div>
                <div>{this.state.year}.{this.state.month}.{this.state.day}</div>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <CurrentDate/>
        </div>
    );
}

export default App;
