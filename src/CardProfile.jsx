import React from 'react'
import './App.css'
export default class CardProfile extends React.Component {
    state = {
        index: 3,
        currentTime: '0:00',
        // ####################################FOR KRISTINA####################################
        musicList: [
            {
                name: 'Дальше действовать будем мы',
                author: 'Artyom Smallkid',
                img:   'https://sun9-87.userapi.com/impf/c625319/v625319351/2deb2/a37plYgoT7A.jpg?size=1080x1440&quality=96&sign=14ddfe8f0a6865e28446506159375c33&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1z7gtsItWjRie9hlmIvUYvbBe5gFPRmxg',
                duration: '3:25'
            },
			
			{
                name: 'Бошентумай',
                author: 'Нина Варьятская',
                img:   'https://sun9-49.userapi.com/impg/BsHh_7YWyoBhLyO3nO1K-BniMMyt6xU2zHcgTQ/LFPfYeqx2yc.jpg?size=1920x1080&quality=96&sign=86bb8be869608178e1fe24e2b69a9f12&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1b4xVgjLqRd_DTkdOxMl8INX6Hb-tqq2l',
                duration: '2:34'
            },
			
			
				{
                name: 'Звезда',
                author: 'Нина Варьятская',
                img:   'https://sun9-49.userapi.com/impg/BsHh_7YWyoBhLyO3nO1K-BniMMyt6xU2zHcgTQ/LFPfYeqx2yc.jpg?size=1920x1080&quality=96&sign=86bb8be869608178e1fe24e2b69a9f12&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1IQjUUPZ0hFskwwQp7kGry9mmt--EzYfN',
                duration: '3:33'
            },
			
					{
                name: 'Импровизация Группа Крови',
                author: 'DackFax',
                img:   'https://sun9-55.userapi.com/impg/tFteEtYTckk_tpigKGmZsdq0OKAA3U_YO1CYlA/JnqNW1Cvwxw.jpg?size=1125x1125&quality=96&sign=b82d1f799e8346d739aacaa683d5575c&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1JQKVlErszOlYZ_hpHRrOQMzOZsJnQTc_',
                duration: '3:07'
            },
			
			
		{
                name: 'Звёзды останутся здесь',
                author: 'Серж Левинс',
                img:   'https://sun9-13.userapi.com/impg/TFyNk9Bpgswz9RbQPSM8FmFgmKDgVWLGikzA8g/76f-qwDvWYA.jpg?size=828x685&quality=95&sign=fbe1ea455e33ef29bb0a4af92ab8dcfa&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1koZBPdPwLhosjsJhg99RWnUretI4Penq',
                duration: '3:39'
            },
			
			{
                name: 'Около семи утра',
                author: 'Константин Рубан',
                img:   'https://sun9-3.userapi.com/impg/3-9bc6898tYkHLsLoppEeUT1oTNM_IP23ia_JA/wLZyUeoJVnM.jpg?size=1620x2160&quality=95&sign=2e9db5dd769e7cde9aa3c9528435aeac&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1z3iWy_xYyybk5orlJhcUV0VoTkPt-OcJ',
                duration: '3:25'
            },
            {
                name: 'Красно жёлтые дни',
                author: 'Виталий Подземный',
                img:   'https://sun9-32.userapi.com/impg/h40Exd0q90aqK3HsdJcS2K33kjLEN_U0bRDvBw/SmVzMx9KGns.jpg?size=1040x2160&quality=95&sign=05fa9766885b71bb5412c5504244e553&type=album',
                audio: 'https://drive.google.com/file/d/1rYxNGKEqiIEkAsGLlAv5aJUWiVSWnJDg/view?usp=sharing',
                duration: '4:57'
            },
            {
                name: 'Музыка волн',
                author: 'Виталий Подземный',
                img:   'https://sun9-32.userapi.com/impg/h40Exd0q90aqK3HsdJcS2K33kjLEN_U0bRDvBw/SmVzMx9KGns.jpg?size=1040x2160&quality=95&sign=05fa9766885b71bb5412c5504244e553&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1nLN8aIr8XqrStQb6VEZC7KxMuBWog5__',
                duration: '3:18'
            },
			
			
				{
                name: 'Стук',
                author: 'Нина Варьятская',
                img:   'https://sun9-49.userapi.com/impg/BsHh_7YWyoBhLyO3nO1K-BniMMyt6xU2zHcgTQ/LFPfYeqx2yc.jpg?size=1920x1080&quality=96&sign=86bb8be869608178e1fe24e2b69a9f12&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1fFviBmQlKSUlT9kd-kaDryXlMeEGjVCo',
                duration: '3:13'
            },
			
			{
                name: 'Ночь',
                author: 'DackFax',
                img:   'https://sun1-55.userapi.com/impg/tFteEtYTckk_tpigKGmZsdq0OKAA3U_YO1CYlA/JnqNW1Cvwxw.jpg?size=1125x1125&quality=96&sign=b82d1f799e8346d739aacaa683d5575c&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1sBL5Q3zJPleHu6JF3QRdZ4K3vmN_1qmZ',
                duration: '5:07'
            },
            {
                name: '',
                author: '',
                img:   '',
                audio: '',
                duration: ''
            },
			{
                name: 'Я объявляю свой дом',
                author: 'Нина Варьятская',
                img:   'https://sun9-49.userapi.com/impg/BsHh_7YWyoBhLyO3nO1K-BniMMyt6xU2zHcgTQ/LFPfYeqx2yc.jpg?size=1920x1080&quality=96&sign=86bb8be869608178e1fe24e2b69a9f12&type=album',
                audio: 'https://drive.google.com/uc?export=download&id=1IAiKLcivhqDz0VaPoFjfd1JEdMxOnvO0',
                duration: '2:04'
            },
			
			{
                name: '15 августа',
                author: 'Каверы',
                img:   'https://drive.google.com/uc?export=download&id=1N7Q8yghfyI-REB88wvg9jL6azX6NlM3H',
                audio: 'https://drive.google.com/uc?export=download&id=1LRwEpgUYnlMcykdf8OGp42A5N1M0hH_M',
                duration: '00:23'
            },
        ],
            // ####################################FOR KRISTINA####################################
        pause: false,
    };


    componentDidMount() {
        this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
        this.playerRef.addEventListener("ended", this.nextSong, false);
        this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
        this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
        this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
        // console.log(this.playerRef)
    }

    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);

        // console.log("this.timeUpdate", this.timeUpdate)
    }

    changeCurrentTime = (e) => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth;
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;

        const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

        this.playheadRef.style.width = userClickWidhtInPercent + "%";
        this.playerRef.currentTime = (duration * userClickWidhtInPercent) / 100;
    }

    hoverTimeLine = (e) => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth

        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

        if (userClickWidhtInPercent <= 100) {
            this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
        }

        const time = (duration * userClickWidhtInPercent) / 100;

        if ((time >= 0) && (time <= duration)) {
            this.hoverPlayheadRef.dataset.content = this.formatTime(time);
        }
    }

    resetTimeLine = () => {
        this.hoverPlayheadRef.style.width = 0;
    }

    timeUpdate = () => {
        const duration = this.playerRef.duration;
        const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
        const playPercent = 100 * (this.playerRef.currentTime / duration);
        this.playheadRef.style.width = playPercent + "%";
        const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
        this.setState({
            currentTime
        });
    }

    formatTime = (currentTime) => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);

        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;

        const formatTime = minutes + ":" + seconds

        return formatTime;
    }

    updatePlayer = () => {
        const { musicList, index } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
    }

    nextSong = () => {
        const { musicList, index, pause } = this.state;

        this.setState({
            index: (index + 1) % musicList.length
        });
        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    };

    prevSong = () => {
        const { musicList, index, pause } = this.state;

        this.setState({
            index: (index + musicList.length - 1) % musicList.length
        });
        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    };


    playOrPause = () => {
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if (!this.state.pause) {
            this.playerRef.play();
        } else {
            this.playerRef.pause();
        }
        this.setState({
            pause: !pause
        })
    }

    clickAudio = (key) => {
        const { pause } = this.state;

        this.setState({
            index: key
        });

        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    }


    render() {
        const { musicList, index, currentTime, pause } = this.state;
        const currentSong = musicList[index];
        return (
            <div className="card">
                <div className="current-song">
                    <audio ref={ref => this.playerRef = ref}>
                        <source src={currentSong.audio} type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="img-wrap">
                        <img src={currentSong.img} alt={currentSong.author}/>
                    </div>
                    <span className="song-name">{currentSong.name}</span>
                    <span className="song-autor">{currentSong.author}</span>

                    <div className="time">
                        <div className="current-time">{currentTime}</div>
                        <div className="end-time">{currentSong.duration}</div>
                    </div>

                    <div ref={ref => this.timelineRef = ref} id="timeline">
                        <div ref={ref => this.playheadRef = ref} id="playhead"></div>
                        <div ref={ref => this.hoverPlayheadRef = ref} class="hover-playhead" data-content="0:00"></div>
                    </div>

                    <div className="controls">
                        <button onClick={this.prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>

                        <button onClick={this.playOrPause} className="play current-btn">
                            {
                                (!pause) ? <i className="fas fa-play"></i>
                                    : <i class="fas fa-pause"></i>
                            }
                        </button>
                        <button onClick={this.nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                    </div>

                </div>
                <div className="play-list" >
                    {musicList.map((music, key = 0) =>
                        <div key={key}
                            onClick={() => this.clickAudio(key)}
                            className={"track " +
                                (index === key && !pause ? 'current-audio' : '') +
                                (index === key && pause ? 'play-now' : '')} >

                            <img className="track-img" src={music.img} alt={music.author} />
                            <div className="track-discr" >
                                <span className="track-name" >{music.name}</span>
                                <span className="track-author" >{music.author}</span>
                            </div>
                            <span className="track-duration" >
                                {(index === key)
                                    ? currentTime
                                    : music.duration
                                }
                            </span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}