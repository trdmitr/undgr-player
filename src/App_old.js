import React from 'react';
// import SongList from './Components/SongList';
// import SongPage from './Components/SongPage';
import './Player.css';

   const songList  = [
      {name:'Sanctified with Dynamite', 
      author: 'PowerWolf', 
      duration: '3:51', 
      cover: 'https://cdnb.artstation.com/p/assets/images/images/010/532/065/large/zsofia-dankova-1.jpg?1539776234',
      singl: 'https://drive.google.com/uc?export=download&id=1grD5Ug4C0Gh4hGB3IVMfC7V3VrGNWmLU'
      },

      {name:'Army of the Night', author: 'PowerWolf', duration: '3:51', cover: 'https://i.pinimg.com/originals/10/37/36/1037361b721513a7168e1dae07139f55.jpg'},
      {name:'Higher Than Heaven', author: 'PowerWolf', duration: '3:51', cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81633f7-ac45-4e1d-9255-46297d588240/dcf39re-204aaff0-a53f-4f9b-83d3-81239bf35778.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MTYzM2Y3LWFjNDUtNGUxZC05MjU1LTQ2Mjk3ZDU4ODI0MFwvZGNmMzlyZS0yMDRhYWZmMC1hNTNmLTRmOWItODNkMy04MTIzOWJmMzU3NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fE1cp7I7GjauqJ8gKCoqz2cK1BHjeAwhivRnE7oMsVo'},
      {name:'Incense & Iron', author: 'PowerWolf', duration: '3:51', cover: 'https://i.pinimg.com/originals/2b/ca/63/2bca632180d842a6f15908154ce862bb.jpg'},
      {name:'Venom of Venus', author: 'PowerWolf', duration: '3:51', cover: 'https://steamuserimages-a.akamaihd.net/ugc/941709259346307842/830C554F58DDEF61ACD21D28FBC3FC4FEAAAE136/'},
      {name:'Sanctified with Dynamite', author: 'PowerWolf', duration: '3:51', cover: 'https://cdnb.artstation.com/p/assets/images/images/010/532/065/large/zsofia-dankova-1.jpg?1539776234'},
      {name:'Army of the Night', author: 'PowerWolf', duration: '3:51', cover: 'https://i.pinimg.com/originals/10/37/36/1037361b721513a7168e1dae07139f55.jpg'},
      {name:'Higher Than Heaven', author: 'PowerWolf', duration: '3:51', cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81633f7-ac45-4e1d-9255-46297d588240/dcf39re-204aaff0-a53f-4f9b-83d3-81239bf35778.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MTYzM2Y3LWFjNDUtNGUxZC05MjU1LTQ2Mjk3ZDU4ODI0MFwvZGNmMzlyZS0yMDRhYWZmMC1hNTNmLTRmOWItODNkMy04MTIzOWJmMzU3NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fE1cp7I7GjauqJ8gKCoqz2cK1BHjeAwhivRnE7oMsVo'},
      {name:'Incense & Iron', author: 'PowerWolf', duration: '3:51', cover: 'https://i.pinimg.com/originals/2b/ca/63/2bca632180d842a6f15908154ce862bb.jpg'},
      {name:'Venom of Venus', author: 'PowerWolf', duration: '3:51', cover: 'https://steamuserimages-a.akamaihd.net/ugc/941709259346307842/830C554F58DDEF61ACD21D28FBC3FC4FEAAAE136/'},
    ]
    const Btn = ({className = '', icon = 'play_arrow', children, ...props}) => (
      <button className={`btn--play ${className}`} {...props}>
        {children 
          ? children
          : <i class={`fa fa-${icon}`}/>
        }
      </button>
    )
    
    
    const SongList = ({list = [], stop, handle, active, open}) => (
      <div className='list'> 
        <h3 className='list__title'>
          Songs
          {(!active && active !== 0) && 
            <Btn className='list__action' icon='play' onClick={() => stop(0)}/>
          }
        </h3>
        <div className={`list__wrapper ${open ? 'bg': ''}`}>
          {list.map((el,index) => (
            <div className={`list__item ${active === index ? 'active' : ''}`} style={{transitionDelay: `${0.075 * index}s`}} onClick={() => stop(index)}>
              <span className='list__cover' style={{transitionDelay: `${0.075 * index}s`}}>
                <img src={el.cover}/>
              </span>
              <div className='info' >
                <span className='info__name'>{el.name}</span>
                <span className='info__author'>{el.author}</span>
              </div>
              <span className='info__duration' style={{transitionDelay: `${0.075 * index}s`}}>{el.duration}</span>
            </div>
          ))}
        </div>
      </div>
    )
    
    const SongPage = ({index, stop, next, prev, open, handleOpen, pause}) => {
      const data = songList[index];
      return (
      <div class={`song ${open ? '' : 'simple'}`}>
        <Btn className='backward' icon='angle-down' onClick={handleOpen}/>
          <div className='song__cover-wrapper'>
            <div class="song__cover">
              <img src={data.cover} alt="" />
            </div>
            {open && 
              <div className='song__actions'>
                <Btn className='song__btn' icon='random'/>
                <Btn className='song__btn' icon='repeat'/>
              </div>
            }
          </div>
        <div class="song__info">
          <span class="song__name" onClick={!open ? handleOpen : undefined}>
            <span>{data.name}</span>
            <span class="song__author">{data.author}</span>
          </span>
          <div class="song__panel">
            {open && <Btn className='song__btn prev' icon='backward' disabled={!prev} onClick={prev}/>}
            <Btn className='song__btn' icon={pause ? 'play' : 'pause'} onClick={() => stop(index)}/>
            <Btn className='song__btn next' icon='forward' disabled={!next} onClick={next}/>
          </div>
          {!open && <span className='info__status'><span></span></span>}
        </div>
      </div>
    )
    };
    
    export default class App extends React.Component{
    state = {
      open: false,
      active: false,
      pause: false
    };
        
    handleOpen = () => { this.setState(state => ({ open: !state.open }) )};
    pause = () => {this.setState(state => ({ pause: !state.pause}) )}
    handlePlay = (active) => {
      this.setState(state => ({
        active: state.active === active ? false : active
      }))
    };
    next = () => this.handlePlay(this.state.active < songList.length - 1 ? this.state.active + 1 : 0);
    prev = () => this.handlePlay(this.state.active > 0 ? this.state.active - 1 : songList.length - 1);
 
    render(){

      const {active, open, pause} = this.state;
      return (
        
        <div className='player'>
          <SongList
            list={songList} 
            stop={this.handlePlay} 
            open={open} 
            handle={this.handlePlay} 
            active={active}
          />
          {(active || active === 0) && 
            <SongPage
              open={open}
              index={active} 
              handleOpen={this.handleOpen} 
              pause={pause}
              stop={this.pause}
              next={this.next} 
              prev={this.prev}/>
          }
        </div>
      )
    }
  };

