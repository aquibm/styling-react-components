import React, { PropTypes } from 'react'
import classnames from 'classnames'

function getClassName(visible, button) {
	return classnames(`dft__nav__btn dft__nav__btn--${button}`, {
		'dft__nav__btn--hidden': !visible
	});
}

function Nav(props) {
  return (
    <div className="dft__nav">
      <button className={getClassName(props.hasPrevious, 'prev')} onClick={props.onPrevious}>&#10094;</button>
      <button className={getClassName(props.hasNext, 'next')} onClick={props.onNext}>&#10095;</button>
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