import React from 'react';
import'./Showaddedpeople.css'

const Showaddedpeople = (props) => {
    const {name,img,key} = props.member;
    return (           
            <div className=''>
              <p className='close-icon'><i onClick={()=>props.handlerRemove(key)} className="fas fa-times-circle close-icon-color"></i></p>
              <img className='add-1mg' src={img}alt="..."/>
              <p>{name}</p>
            </div>
    );
};

export default Showaddedpeople;