import React from "react";
import ImgReload from './reload.png';

function Title({ update }) {
  return (
    <div className="center__title">
      <h2 className="title">Notes</h2>
      <button className="btn__reload" type="button" onClick={() => update()}>
        <img src={ImgReload} alt="update" width="30px" height="30px" />
      </button>
    </div>
  );
}

export default Title;
