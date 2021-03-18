import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; 
import { Avatar, Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    maxWidth: 450,
    fontFamily: 'Roboto',
    color: '#403B3B',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  parrafo:{
    marginTop: -10,
  },
  ingredientesTitle:{
    marginBottom: -10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 15,
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const {open, handleClose, recetaInfo} = props;  

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if(recetaInfo[`strIngredient${i}`]){
        ingredientes.push(
          <li key={i}>{recetaInfo[`strIngredient${i}`]} {recetaInfo[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes;
  }
  

  return (
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > 
        <Fade in={open}>
          <Grid 
            container xs={12} 
            className={classes.paper}
            direction='column'
          >
            <div className={classes.header}>
              <Avatar className={classes.avatar} src={recetaInfo.strDrinkThumb}/>
              <h2>{recetaInfo.strDrink}</h2>
            </div>
            <h4>Instrucciones</h4>
            <p className={classes.parrafo}>{recetaInfo.strInstructions}</p>
            <h4 className={classes.ingredientesTitle}>Ingredientes y cantidades</h4>
            <ul>
              {mostrarIngredientes()}
            </ul>
          </Grid>
        </Fade> 
      </Modal>   
  );
}