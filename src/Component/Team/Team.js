import React from 'react';
import './team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {
    const {name,identity,age,salary,img} = props.member;
    const addPeople = <FontAwesomeIcon icon={faUserPlus} />
    return (

        <div className="col">
            <div className="card h-100">
            <img src={img} className="card-img-top" alt=''/>
            <div className="card-body">
                <h5 className="card-title">Name : {name}</h5>
                <p className="card-title">Identity : {identity}</p>
                <p className="card-title">Age : {age}</p>
                <p className="card-title">Salary : {salary}</p>
                <button onClick={()=>props.handlerAddMember(props.member)} type="button" className="btn btn-primary">{addPeople} Add Member</button>
            </div>
            </div>
        </div>
    );
};

export default Team;