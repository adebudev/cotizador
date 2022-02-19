import React from 'react';
import './styles.css';

interface IProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ title, onClick }) => {
  return (
    <>
      <button className='btn_primary' onClick={() => onClick()}>
        {title}
      </button>
    </>
  );
};

export default Button;
