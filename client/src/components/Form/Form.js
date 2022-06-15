import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Form = ({ setLogStatus, setUserData, setTheme }) => {
  const classes = useStyles();
  
  const [postData, setPostData] = useState({ username: '', password: '' })
  const [wrongPwd, setWrongPwd] = useState(false);
  
  const allUsers = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {username: _name, password: _pwd} = postData;
    console.log(_name, _pwd)
   
    const targetUser = allUsers.filter((el) => el.username === _name)[0];
    console.log(targetUser);

    if(_pwd === targetUser.password) {
      //console.log(targetUser);
      setUserData(targetUser);
      setTheme(targetUser.theme);
      setLogStatus(true);
    } else {
      setWrongPwd(true);
    }

    clear();
  }

  const clear = () => {
    setPostData({ username: '', password: ''  });
  }

  return (
    <>
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6' style={{marginBottom: 12, color: '#004680'}}>SAPIENS</Typography>
        <TextField name='UserName' variant='outlined' label='Username' fullWidth value={postData.username} onChange={(e) => setPostData({...postData, username: e.target.value})}/>
        <TextField type="password" name='password' variant='outlined' label='Password' fullWidth value={postData.password} onChange={(e) => setPostData({...postData, password: e.target.value})}/>
        <Button className={classes.buttonSubmit} type='submit' variant='contained' color='primary' size='large' fullWidth>
          Login
        </Button>
        { wrongPwd ? 
         <div style={{color: 'red'}}>
          The Username & Password does not match !
         </div> : null
        }
      </form>  
    </Paper>
    
    </>
  )
}

export default Form;
