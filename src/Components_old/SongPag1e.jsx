import React from 'react'
import Btn from './Btn';
import SongList from './SongList';
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

export default SongPage