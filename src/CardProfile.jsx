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
                img:   'https://vk.com/id8535351?z=photo8535351_369379742%2Falbum8535351_0%2Frev',
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
                img:   'https://vk.com/enawd?z=photo113370402_457248956%2Fphotos113370402',
                audio: 'https://drive.google.com/uc?export=download&id=1IQjUUPZ0hFskwwQp7kGry9mmt--EzYfN',
                duration: '3:33'
            },
			
					{
                name: 'Импровизация Группа Крови',
                author: 'DackFax',
                img:   'https://vk.com/dackfax2?z=photo375779867_457256242%2Fphotos375779867',
                audio: 'https://drive.google.com/uc?export=download&id=1JQKVlErszOlYZ_hpHRrOQMzOZsJnQTc_',
                duration: '3:07'
            },
			
			
		{
                name: 'Звёзды Останутся здесь',
                author: 'Серж Левинс',
                img:   'https://vk.com/a.shukshin?z=photo18865972_457239924%2Fphotos18865972',
                audio: 'https://drive.google.com/uc?export=download&id=1koZBPdPwLhosjsJhg99RWnUretI4Penq',
                duration: '3:39'
            },
			
			{
                name: 'Около семи утра',
                author: 'Константин Рубан',
                img:   'https://vk.com/id144116206?z=photo144116206_457240336%2Fphotos144116206',
                audio: 'https://drive.google.com/uc?export=download&id=1z3iWy_xYyybk5orlJhcUV0VoTkPt-OcJ',
                duration: '3:25'
            },
			
				{
                name: 'Стук',
                author: 'Нина Варьятская',
                img:   'https://vk.com/enawd?z=photo113370402_457248956%2Fphotos113370402',
                audio: 'https://drive.google.com/uc?export=download&id=1fFviBmQlKSUlT9kd-kaDryXlMeEGjVCo',
                duration: '3:13'
            },
			
			{
                name: 'Ночь',
                author: 'DackFax',
                img:   'https://vk.com/dackfax2?z=photo375779867_457256242%2Fphotos375779867',
                audio: 'https://drive.google.com/uc?export=download&id=1sBL5Q3zJPleHu6JF3QRdZ4K3vmN_1qmZ',
                duration: '5:07'
            },
			
			{
                name: 'Я объявляю свой дом',
                author: 'Нина Варьятская',
                img:   'https://vk.com/enawd?z=photo113370402_457248956%2Fphotos113370402',
                audio: 'https://drive.google.com/uc?export=download&id=1IAiKLcivhqDz0VaPoFjfd1JEdMxOnvO0',
                duration: '2:04'
            },
			
			{
                name: 'Вступление',
                author: 'Мария Шулятьева',
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
        console.log(this.playerRef)
    }

    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);

        console.log("this.timeUpdate", this.timeUpdate)
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