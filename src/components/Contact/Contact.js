import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import * as contactActions from '../../actions/contact';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';



const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  iconHover: {
    '&:hover': {
      opacity : 0.9
    },
  },
  icon : {
    padding: theme.spacing(1),
    textAlign: 'center',
  }
})); 


function getModalStyle() {
  const top = 50
  const left = 50 

  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

function Contact({_id,name,age,phone,email}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
      name,
      age,
      email,
      phone
    });

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
    const handleChange = name => event => {
      setValues({ ...values, [name] : event.target.value });
    };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{name}</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>{age}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{email}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{phone}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.icon}> 
            <Button onClick={handleOpen}   variant="outlined" color="primary" className={classes.button}> 
              <CreateIcon className={classes.iconHover} color="primary"/> 
            </Button> 
            <Button onClick={()=>{
              let conf = window.confirm("Confirm delete operation !!");
              if(conf) dispatch(contactActions.asyncDeleteContact(_id));
              }}  variant="outlined" color="primary" className={classes.button}> 
              <DeleteIcon className={classes.iconHover} color="error"/>
            </Button>   
          </Paper>
        </Grid>
      </Grid>
      <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.modal}>
                    <h1>New Contact</h1>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-full-width"
                            label="Name"
                            style={{ margin: 8 }}
                            defaultValue={name}
                            placeholder="Name"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange = {handleChange('name')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Email"
                            type="email"
                            defaultValue={email}
                            style={{ margin: 8 }}
                            placeholder="Email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange = {handleChange('email')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Phone Number"
                            style={{ margin: 8 }}
                            placeholder="Phone Number"
                            fullWidth
                            defaultValue={phone}
                            onChange = {handleChange('phone')}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Age"
                            style={{ margin: 8 }}
                            onChange = {handleChange('age')}
                            type="number"
                            defaultValue={age}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button onClick={()=>{ dispatch(contactActions.asyncUpdateContact({_id,...values}));handleClose();}} fullWidth style={{ margin: 8 }} variant="outlined" color="primary" className={classes.button}>
                            Send
                        </Button>
                    </form>
                </div>
            </Modal>
    </div>
  );
}

export default Contact;
