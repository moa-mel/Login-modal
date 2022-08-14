import React from 'react'
import nft from './nft.jpg';
import {useSelector} from 'react-redux'
import "./Modal.css"

const Modal = ({ open, onClose }) => {
 
  const users = useSelector(user=> user.users)
 /* if (!open) return null; */
  const renderCard = () => users?.map(user => (
    <div key={user.id}  className='overlay' >
    <div
    onClick={(e) => {
      e.stopPropagation();
    }}
      className='modalContainer'
    >
      <img src={nft} alt='/' />
      <div className='modalRight'>
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <div className='content'>
        <a>Hi {user.name} 
        <br/>Do you want a</a>
        <p className="bold">$20 CREDIT</p>
        <a>for your first trade?</a>
        </div>
        <div className='btnContainer'>
          <button className='btnPrimary'>
            <span className='bold'>YES</span>, I love NFT's
          </button>
          <button className='btnOutline'>
            <span className='bold'>NO</span>, thanks
          </button>
        </div>
      </div>
    </div>
  </div> 
   ))
  
  return (
    <div>
    {users.length ? renderCard() : <p>No user</p>}
    </div>
  )
}

export default Modal