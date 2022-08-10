import React from 'react'
import Btn from './Btn'

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

  export default SongList