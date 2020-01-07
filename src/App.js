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

class App extends Component {
    date = new Date();
    state = {
        day: this.date.toDateString(),
        hour: this.date.getHours(),
        minute: this.date.getMinutes(),
        second: this.date.getSeconds(),
        showDate: false,
    };

    componentDidMount() {
        setInterval(() => {
            this.date = new Date();
            this.setState({
                day: this.date.toDateString(),
                hour: this.date.getHours(),
                minute: this.date.getMinutes(),
                second: this.date.getSeconds()
            });
        }, 1000);
    }

    handleDate = (e) => {
        const {checked} = e.target;
        this.setState({
           showDate: checked
        });
    };

    render() {
        return (
            <div className="App">
                <Switch
                    handleDate={this.handleDate}
                />
                <Display>
                    <DisplayTime>{this.state.hour}:{this.state.minute}:{this.state.second}</DisplayTime>
                    {this.state.showDate ? <DisplayDate>{this.state.day}</DisplayDate> : false}
                </Display>
            </div>
        )
    }
}

export default App;
