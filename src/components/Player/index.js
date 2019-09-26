import React from 'react'
import Slider from 'rc-slider'
import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from "./styles";
import volumeIcon from '../../assets/images/volume.svg'
import shuffleIcon from '../../assets/images/shuffle.svg'
import backwardIcon from '../../assets/images/backward.svg'
import playIcon from '../../assets/images/play.svg'
import pauseIcon from '../../assets/images/pause.svg'
import forwardIcon from '../../assets/images/forward.svg'
import repeatIcon from '../../assets/images/repeat.svg'

const Player = () => (
    <Container>
        <Current>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEyV3y5L_H2xyXhueK3lDxv4NK_q2u5sW3bmQCALxaee85gS2" alt="cover"/>
            <div>
                <span>American idiot</span>
                <small>Green Day</small>
            </div>
        </Current>
        <Progress>
            <Controls>
                <button>
                    <img src={shuffleIcon} alt="shuffle"/>
                </button>
                <button>
                    <img src={backwardIcon} alt="backward"/>
                </button>
                <button>
                    <img src={playIcon} alt="play"/>
                </button>
                <button>
                    <img src={forwardIcon} alt="forward"/>
                </button>
                <button>
                    <img src={repeatIcon} alt="repeat"/>
                </button>
            </Controls>
            <Time>
                <span>1:22</span>
                <ProgressSlider>
                    <Slider     railStyle={{background:'#404040', borderRadius: 10}}
                                trackStyle={{background: '#1ED760'}}
                                handleStyle={{border: 0}}
                    />
                </ProgressSlider>
                <span>4:24</span>
            </Time>
        </Progress>
        <Volume>
            <img src={volumeIcon} alt="Volume"/>
            <Slider
                railStyle={{background:'#404040', borderRadius: 10}}
                trackStyle={{background: '#fff'}}
                handleStyle={{display: 'none'}}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player