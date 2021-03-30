import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './MainContainer.css'

import foreverYaGirl from '../assets/forever-ya-girl.png';
import mainImg from '../assets/main-img.png';
import keiyaaLogo from '../assets/keiyaa-logo.png';

import previousIcon from '../assets/icons/skip_previous_black_24dp.svg'; 
import playButton from '../assets/icons/play_arrow_black_24dp.svg';
import nextIcon from '../assets/icons/skip_next_black_24dp.svg';

class Player extends Component {
    render() {
        return (
            <>
                <Col sm={3}>
                    <img src={previousIcon} className="audioPlayer--skip" id="previous--icon" alt="previous-track"/>
                </Col>   
                <Col sm={6}>
                    <img src={playButton} className="audioPlayer--play" id="play--icon" alt="play-track"/>
                </Col> 
                <Col sm={3}>
                    <img src={nextIcon} className="audioPlayer--skip" id="next--icon" alt="next-track" />
                </Col> 
            </>
        )
    }
}

class Lyrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLyrics: this.props.display,
        }
    }

    render() {
        return (
            <>
                <div className="lyrics-cover">
                    <div className="lyrics-text noshow" id="lyrics-text">
                    why won't you love me?
                    i'm so damn easy to love
                    i'm so damn easy to love
                    i'm so damn easy to trust
                    i please you enough
                    i know that reason is tough to buck with...

                    talk to me.
                    </div>
                </div>
           </>
        )
    }
}

export default class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            displayLyrics: false,
        }
    }

    // setLyricsDisplayState() {
    //     if (!this.state.displayLyrics) {
    //         this.setState({ displayLyrics: true });
    //     } else {
    //         this.setState({ displayLyrics: false });
    //     }
    // }

    render() {
        return(
            <>
            <div className="mainContainer" >
            <Container fluid>
                <Row style={{height: '80vh', overflow: 'hidden'}}>
                    <Col style={{height: '100%', overflow: 'hidden'}} sm={8}>
                        <Lyrics display={this.state.displayLyrics}/>
                        <img src={mainImg} alt="forever-ya-girl-cover-art"/>
                    </Col>
                    <Col sm={4} style={{ padding: '30px' }}>
                       <Row style={{ marginBottom: '50px' }}>
                           <img style={{ display: 'block', margin: 'auto' }} src={foreverYaGirl} alt="forever-ya-girl"/>
                           </Row>
                       <Row style={{textAlign: 'center'}}> 
                            <Player />
                       </Row>
                       <Row>
                            <div className="modal-player" style={{width: '100%'}}>
                            <div style={{margin: 'auto'}} type="button" id="btn-play"
                                    ></div>
                                <div style={{margin: 'auto', width: '100%'}}> 
                                    <div className="audio-spectrum" id="audio-spectrum"></div>
                                </div>
                            </div>
                        </Row>
                       <Row style={{ width: '100%', position: 'absolute', bottom: '100px' }}> 
                        <span className="lyrics-toggle-button lato-font" id="lyrics-toggle">LYRICS</span> 
                       </Row>
                    </Col>
                </Row>
                <Row style={{height: '20vh', width: '100%'}}>
                    <Col style={{color: 'white', height: '100%'}} sm={8}>
                        <h3 style={{ marginBottom: 0 }} className={'lato-font'}>NOW PLAYING</h3>
                        <div className={'track-title-showbox'}>
                            <span className="track-title">I Thot There Was One Wound in This House, There's Two</span>
                        </div>
                    </Col>
                    <Col style={{height: '100%'}} sm={4}>
                        <img style={{position: 'absolute', left: '-200px', bottom: '0'}} src={keiyaaLogo} alt="keiyaa-name-logo"/>
                    </Col>
                </Row>
            </Container>
            </div>
            
            </>

        )
    }
}