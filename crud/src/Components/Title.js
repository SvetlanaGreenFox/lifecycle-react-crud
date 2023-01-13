import React from "react";
import ImgReload from "./reload.png";

const styles={
	btn: {
		padding: '8px 8px 8px 32px',
    // fontFamily: 'Arial, Verdana',
    background: `#f0f0f0`,
		backgroundImage: `url(${ImgReload})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
		border: 'none',
		cursor: 'grab'
	}
}

function Title({ update }) {
  return (
    <div className="center__title">
      <h2 className="title">Notes</h2>
      {/* <img onClick={ () => reload()} className='title__reload' src='' alt="" /> */}
      <button style={styles.btn} type="button" onClick={() => update()}>
        {/* <img src={Update} alt="update" width="30px" height="30px" /> */}
      </button>
    </div>
  );
}

export default Title;
