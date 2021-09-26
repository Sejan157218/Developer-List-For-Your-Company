import React, { useEffect, useState } from 'react';
import Addmember from '../Addmember/Addmember';
import Budget from '../Budeget/Budget';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [members,setMembers] = useState([]);
    const [addMember,setAddmember] = useState([]);
    const [displaySearch,setDisplaySearch] = useState([])

    useEffect(()=>{
        fetch('./fakedata.json')
            .then(res =>res.json())
            .then(data =>{
                setMembers(data);
                setDisplaySearch(data)
            })
    },[]);
    const searchhandler = event=>{
        const searchText = event.target.value;
        const SearchDeveloper = members.filter(member=>member.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplaySearch(SearchDeveloper);
    }


    const handlerAddMember = member=>{
        const newMember = [...addMember,member]
        setAddmember(newMember)
    }
    const handlerRemove=key=>{
        const removeMember = addMember.filter(member=>member.key!==key)
        setAddmember(removeMember)
    }
    return (
        <div>
            <Header searchhandler={searchhandler}></Header>
            <Budget></Budget>
            <div className='home'>
            
            <div className='row row-cols-1 row-cols-md-3 g-3 team-css'>
            {
              displaySearch.map(member=><Team key={member.key} member={member} handlerAddMember={handlerAddMember}></Team>)  
            }
            </div>
            <div className="addmember-css">
                <Addmember handlerRemove={handlerRemove} addMember={addMember}></Addmember>
            </div>
            
            </div>
        </div>
    );
};

export default Home;