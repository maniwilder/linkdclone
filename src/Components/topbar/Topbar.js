import { Image, Input, Select } from 'antd'
import {
  BellOutlined,
  HomeOutlined,
  ShoppingOutlined,
  TeamOutlined,
  WechatOutlined
} from '@ant-design/icons';
import profilePic from '../sources/propic.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

const Topbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('Success:');
    navigate('/login/1234');
  };  
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor:' rgb(236, 236, 236)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className='logo' style={{ padding:'10px'}}>
            <Image 
            style={{ width: '50px', height: 'auto' }}
            preview={false}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png'/>
        </div>
        <div className='search-bar' style={{padding:'15px'}}>
        <Search
        placeholder="search" 
        enterButton
        style={{width:'400px'}}
        />
        </div>
        <div className='topbar-icons' style={{ display: 'flex', gap: '65px', paddingLeft:'135px' }}>
        <div className='home' style={{display:'grid', cursor:'pointer'}} onClick={onClick}>
        <HomeOutlined style={{ fontSize: '28px' }}/>
        <span>Home</span>
        </div>
        <div className='network' style={{display:'grid', cursor:'pointer'}}>
        <TeamOutlined style={{ fontSize: '28px' }}/>
        <span>Network</span>
        </div>
        <div className='jobs' style={{display:'grid', cursor:'pointer'}} >
        <ShoppingOutlined style={{ fontSize: '28px' }}/>
        <span>Jobs</span>
        </div>
        <div className='message' style={{display:'grid', cursor:'pointer'}} >
        <WechatOutlined style={{ fontSize: '28px' }}/>
        <span>Messages</span>
        </div>
        <div className='notification' style={{display:'grid', cursor:'pointer'}} >
        <BellOutlined style={{ fontSize: '28px' }}/>
        <span>Notification</span>
        </div>
        <div className='pro-pic' style={{paddingLeft:'430px'}}>
        <div style={{display:'grid', cursor:'pointer'}}>
        <Image src={profilePic} preview={false} style={{ width: '46px', height: '39px' }}/>
          <Select
      defaultValue="My profile"
      style={{
        width: 120,
        marginLeft: "-36px"
      }}
      bordered={false}
      options={[
        {
          value: 'view',
          label: 'View Profile',
        },
        {
          value: 'edit',
          label: 'Edit Profile',
        },
        {
          value: 'logout',
          label: 'Logout',
        },
      ]}
    />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Topbar