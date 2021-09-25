import React from 'react';
import Showaddedpeople from '../Showaddedpeople/Showaddedpeople';

const Addmember = (props) => {
    const {addMember} = props;
    let totalSaray = 0
    for(let member of addMember){
        totalSaray = totalSaray+ member.salary 
    }
    return (
        <div>
            <h1>Total Member : {props.addMember.length}</h1>
            <h1>Total Salary : {totalSaray}</h1>
            <div className='row row-cols-1 row-cols-md-2 g-2'>
            {
                addMember.map(member=><Showaddedpeople key={member.name} member={member}></Showaddedpeople>)
            }
            </div>
        </div>
    );
};

export default Addmember;