import React, { useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

import {getAddingMode} from "../../reducer/selectors.js";

const NewButton = () => {
  const buttonRef = useRef();
  const addingMode = useSelector((state) => getAddingMode(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (addingMode) {
      buttonRef.current.setAttribute(`disabled`, `disabled`);
    } else {
      buttonRef.current.removeAttribute(`disabled`);
    }
  }, [addingMode]);

  return (
    <button ref={buttonRef} onClick={() => dispatch(ActionCreator.changeAddingMode(true))} className="additions__add-button">Добавить</button>
  );
};

export default NewButton;
