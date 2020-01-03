import React, {Component} from 'react';
import Switch from "./Switch";
import styled from 'styled-components';

const Display = styled.div`
  background-color:#282C34;
  border:1rem solid #32363E;
  display: flex;
  border-radius: 50%;
  height:14rem;
  width:14rem;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
  color: #61DAFB;
  text-align: center;
  font-family: .AppleSystemUIFont, sans-serif;
`;
const DisplayTime = styled.div`
  font-size: 42px;
  font-weight: 600;
`;

const DisplayDate = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

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
            <Display>
                <DisplayTime>{this.state.hour}:{this.state.minute}:{this.state.second}</DisplayTime>
                <DisplayDate>{this.state.year}.{this.state.month}.{this.state.day}</DisplayDate>
            </Display>
        )
    }
}

function App() {
    return (
        <div className="App">
            <Switch/>
            <CurrentDate/>
        </div>
    );
}

export default App;
