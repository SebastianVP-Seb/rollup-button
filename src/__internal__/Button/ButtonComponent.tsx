import React from 'react';
import { Ione } from '../../icons/ione';
import { IButtonStyleCore } from '../../types/__internal__';

//Se agregan las props que hacen falta (icon left y right, son elementos de tipo React (nodos))
interface IButton extends IButtonStyleCore {
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
};

export const Button:React.FC<IButton> = (props) => {
    const {} = props;
  return (
    <div>ButtonComponents</div>
  );
};

const IconAccept=()=>{

};

const TestRender=()=>{
    return (
        <Button iconLeft={<Ione />}>
          Hola
        </Button>
    )
}
