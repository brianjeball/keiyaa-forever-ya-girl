import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './MainContainer.css'

import foreverYaGirl from '../assets/forever-ya-girl.png';
import mainImg from '../assets/main-img.png';

class Player extends Component {
    render() {
        return (
            <div className="audioPlayer">
                {/* previous icon */}
                {/* play icon */}
                {/* next icon */}
            </div>
        )
    }
}

export default class MainContainer extends Component {

    render() {
        return(
            <>
            <div className="mainContainer">
            <Row fluid>
                <Col sm={8}>
                    <img src={mainImg} alt="forever-ya-girl-cover-art"/>
                </Col>
                <Col sm={4}>
                    <img src={foreverYaGirl} alt="forever-ya-girl"/>
                </Col>
                
            </Row>
            </div>
            
            </>

        )
    }
}