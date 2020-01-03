import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Label = styled.label`
    padding: 0.5rem;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-bottom: .5rem;
    box-sizing: border-box;
`;

const Checkbox = styled.input`
    display: none;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #61DAFB;
    transition: .4s;
    border-radius: 34px;
    box-sizing: border-box;
`;

class Switch extends React.Component {
    render() {
        return (
            <div className="panel">
                <Label id="date-switch" className="switch">
                    <Checkbox type="checkbox" value="on"/>
                    <Slider className="slider round"/>
                </Label>
                <label className="panel-switch-text" htmlFor="date-switch">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </label>
            </div>
        )
    }
}

export default Switch;