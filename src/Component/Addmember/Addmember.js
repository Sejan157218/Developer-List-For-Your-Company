import React from 'react';
import Showaddedpeople from '../Showaddedpeople/Showaddedpeople';

const Addmember = (props) => {
    
    const {addMember,handlerRemove} = props;
    let totalSaray = 0
    for(let member of addMember){
        totalSaray = totalSaray+ member.salary 
    }
    return (
        <div>
            <h4>Selected Developer : {props.addMember.length}</h4>
            <h4>Total Salary : $ {totalSaray}</h4>
            <div className='row row-cols-1 row-cols-md-2 g-2'>
            {
                addMember.map(member=><Showaddedpeople key={member.name} member={member} handlerRemove={handlerRemove}></Showaddedpeople>)
            }
            </div>
        </div>
    );
};

export default Addmember;