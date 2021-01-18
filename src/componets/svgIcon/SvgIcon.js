import React from 'react';
import sprite from '../../img/sprite/sprite.svg';

const SvgIcon = ({name, color, size, className}) => {
  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  )
}

export default SvgIcon;