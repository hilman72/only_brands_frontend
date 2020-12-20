import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import "./error.component.scss";
import ErrorIcon from '@material-ui/icons/Error';

// function Loader() {
//   var spin = keyframes`
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
// `;

const useStyles = makeStyles(({ palette }) => ({

  errorIcon :{
    fontSize: '2rem',
    color:'#ff4c6d',
  },
  h2:{
    paddingTop:'0.5rem',
    paddingBottom:'0.5rem',
  },
  button:{
    // height:'1.5rem',
    backgroundColor:'white',
    borderRadius:'1.5rem',
    border:'3px solid #ff4c6d',
    padding: '0.5rem',
    fontFamily: 'MontserratRegular !important',
    fontWeight: '200 !important',
    fontSize:' 0.7rem !important',
    padding: '0.5rem',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    "&:hover":{
      cursor: 'pointer',
  }
}

}));

const Error = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const styles = useStyles();

  return (
    <div>

      {/* <div className={styles.bg}></div>
      <div className={`styles.bg styles.bg2`}></div>
      <div className={`styles.bg styles.bg3`}></div>
      <div className={styles.content}>
        <h2>Sliding Diagonals Background Effect</h2>
        <button onClick={handleClick}>go home</button>
      </div> */}

      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
      <ErrorIcon className={styles.errorIcon}/>
        <h2 className={styles.h2}>Oops something went wrong....</h2>
        <button className={styles.button} onClick={handleClick}>Home</button>
      </div>

    </div>
  );
};

export default Error;
