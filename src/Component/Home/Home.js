import React, { useEffect, useState } from 'react';
import Addmember from '../Addmember/Addmember';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [members,setMembers] = useState([]);
    const [addMember,setAddmember] = useState([])
    useEffect(()=>{
        fetch('./fakedata.json')
            .then(res =>res.json())
            .then(data =>setMembers(data))
    },[])
    const handlerAddMember = member=>{
        const newMember = [...addMember,member]
        setAddmember(newMember)
    }
    return (
        <div>
            <Header></Header>
            <Addmember addMember={addMember}></Addmember>
            <hr />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
              members.map(member=><Team key={member.key} member={member} handlerAddMember={handlerAddMember}></Team>)  
            }
            </div>
        </div>
    );
};

export default Home;