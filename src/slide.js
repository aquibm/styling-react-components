import React, { PropTypes } from 'react'

import css from './slide.css'

function Slide(props) {
  return (
    <article style={props.style} className={css.root}>
      <img src={props.image} alt={props.title} />
      <footer className={css.footer}>
        <h2 className={css.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
}

export default Slide