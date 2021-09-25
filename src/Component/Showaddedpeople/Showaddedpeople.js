import React from 'react';
import'./Showaddedpeople.css'

const Showaddedpeople = (props) => {
    const {name,img} = props.member;
    return (
        <div className="col col-show">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p>{name}</p>
            <button>remove</button>
          </div>
        </div>
      </div>
    );
};

export default Showaddedpeople;