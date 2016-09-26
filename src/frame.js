import React from 'react'

import css from './frame.css'

function Frame({ children }) {
	return <div className={css.root}>{children}</div>
}

export default Frame