import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {useDispatch} from 'react-redux'

function Snack(props){
    
    const dispatch = useDispatch()

    const useStyles = makeStyles(theme => ({
        icon: {
            marginLeft: '15px'
        }
    }));

    const MySnackbar = styled(Snackbar)({
    backgroundColor: 'white',
    color: 'black',
    border: props.snackbar.success ? '3px solid green' : '2px solid red', 
    borderRadius: '16px',
    padding: '6px 16px',
    fontSize: '1.2rem',
    
    });

    const classes = useStyles();

    const handleClose = () => {
        dispatch({
          type: 'message',
          payload: {
            view: false,
            message: '',
            success: false
          }
        });
    }

    return (

        <div>
        {props.snackbar.view === true && (
          <MySnackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={props.snackbar.view}
            onClose={handleClose}
            autoHideDuration={7000}
          >
            <>
              {(typeof props.snackbar.message) === "string" ?
                (<p>{props.snackbar.message}</p>) :
                <ul>
                  {props.snackbar.message?.map(message =>
                    <li>{message.message}</li>
                  )}
                </ul>
              }
              
            </>
          </MySnackbar>
        )}
  
      </div>
    );


}

const mapStateToProps = (state) => {
    return {
        snackbar: state.userReducer.snackbar,
        
    }
  }
  
  export default connect(mapStateToProps, null)(Snack);