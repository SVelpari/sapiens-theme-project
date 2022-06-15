import React, { useEffect, useState } from 'react';
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { getPosts, updatePost } from './actions/posts'

import DeleteIcon from '@material-ui/icons/Delete';

import Form from './components/Form/Form';
import useStyles from './styles';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const App = () =>  {
  
  const dispatch = useDispatch();
  const options = ['Blue', 'Green', 'Orange', 'Dark'];

  const [logStatus, setLogStatus] = useState(false);
  const [userData, setUserData] = useState();
  const [theme, setTheme] = useState('Dark');


  useEffect(() => {
    dispatch(getPosts());
    
  },[dispatch])

 
  const onSelect = (option) => {
    //console.log(userData);
    setTheme(option.label);
    dispatch(updatePost(userData._id, {...userData, theme: option.label}));
  }

  const logOut = () => {setLogStatus(false)}

  const classes = useStyles(theme);

  return (
   <div style={{}}>

    {!logStatus ? 
       
      <>
        <Form setLogStatus={setLogStatus} setUserData={setUserData} setTheme={setTheme}/>
      </>

      :
       
      <>
       <div style={{border: '1px solid #acafbd', justifyContent: 'center', alignItems: 'center', background: 'white', display: 'flex'}}>
        <button
          onClick={logOut} 
          style={{color: 'black', position: 'absolute', left: '5%'}}>
         <DeleteIcon />
         <div>Log out</div>
        </button>
        <h1 style={{color: '#393737', fontSize: '5vw'}}>welcome {userData.username}</h1>
        <div style={{position: 'absolute', right: '5%'}}>
          <Dropdown
            className='myClassName' 
            style={{backgroundColor: 'green', color: 'white'}}
            options={options} 
            onChange={onSelect} 
            value={theme} 
            placeholder="Theme" 
          />
        </div>
       </div>  
      
       <div style={classes.box}>
         <div style={classes.text}>I am {userData.username}</div>
         <div style={classes.text}>My chosen theme is {theme}</div>
       </div>
      </>
     }
       
   </div>
  )
}

export default App;
