import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    height: '100vh'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '50%',
    marginLeft: '25%',
    marginBottom: '30vh',
    marginTop: '31vh',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));