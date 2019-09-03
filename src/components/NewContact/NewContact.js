import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import * as contactActions from '../../actions/contact';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function NewContact() {


    const dispatch = useDispatch();
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
      const [values, setValues] = React.useState({
        name: '',
        age: '',
        email : '',
        phone : ''
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
        <div>
            <Button onClick={handleOpen} fullWidth variant="outlined" color="primary" className={classes.button}>
                Add new contact
        </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h1>New Contact</h1>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-full-width"
                            label="Name"
                            style={{ margin: 8 }}
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
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button onClick={()=>dispatch(contactActions.asyncAddContact(values))} fullWidth style={{ margin: 8 }} variant="outlined" color="primary" className={classes.button}>
                            Send
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}


export default NewContact;