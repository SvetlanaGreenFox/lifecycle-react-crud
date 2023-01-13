import React from "react";
import ImgReload from "./reload.png";

const styles={
	btn: {
		padding: '8px',
		background: 'white',
		backgroundImage: `url(${require("./reload.png")})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
		border: 'none'
	}
}

function Title({ update }) {
  return (
    <div className="center__title">
      <h2 className="title">Notes</h2>
      <button style={styles.btn} type="button" onClick={() => update()}>
        <img src={ImgReload} alt="update" width="30px" height="30px" />
      </button>
    </div>
  );
}

export default Title;
