import React, { PropTypes } from 'react'

import css from './nav.css'

function getPrevClassName(hasPrevious) {
	return hasPrevious ? css.prev : css.prevHidden;
}

function getNextClassName(hasNext) {
	return hasNext ? css.next : css.nextHidden;
}

function Nav(props) {
  return (
    <div className={css.root}>
      <button className={getPrevClassName(props.hasPrevious)} onClick={props.onPrevious}>&#10094;</button>
      <button className={getNextClassName(props.hasNext)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
}

export default Nav;