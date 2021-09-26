import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './team.css'


const Team = (props) => {
    const {name,title,experience,salary,rating,img} = props.member;
    const addPeople = <FontAwesomeIcon icon={faUserPlus} />
    return (

        <div className="col">
            <div className="card h-100">
            <img src={img} className="card-img-top" alt=''/>
            <div className="card-body">
            <p className="card-title title">{title}</p>
                <p className="card-title fs-5 nae-color">{name}</p>                
                <p className="card-title">Experience : {experience}</p>
                <p className="card-title">Salary : ${salary}</p>
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star"   
                    fullSymbol="fas fa-star icon-color"
                    />
                <h5>
                <a href="https://www.facebook.com/" target='blank'><i className="fab fa-facebook-square m-1 facebook-color"/></a> 
                <a href="https://github.com/" target='blank'><i className="fab fa-github-square m-1 github-color"/></a>
                <a href="https://twitter.com/" target='blank'><i className="fab fa-twitter m-1 github-color"/></a>
                <a href="https://www.linkedin.com/" target='blank'><i className="fab fa-linkedin m-1 linkedin-color"/></a>
                </h5>
                <div className="card-footer">
                <button onClick={()=>props.handlerAddMember(props.member)} type="button" className="regular-btn">{addPeople} Add Developer</button>
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default Team;