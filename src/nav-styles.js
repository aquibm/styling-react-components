import config from './config-styles.js'
import Radium from 'radium'

const pulse = Radium.keyframes({
	'0%': {
		transform: 'scale3d(1, 1, 1)'
	},
	'15%': {
		transform: 'scale3d(1.05, 1.05, 1.05)'
	},
	'100%': {
		transform: 'scale3d(1, 1, 1)'
	}
}, 'Nav');

const button = {
	flex: '1',
	height: config.imageHeight,
	padding: '20px',
	fontSize: '50px',
	background: 'transparent',
	color: 'white',
	textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
	border: 'none',
	outline: '0',
	cursor: 'pointer',
	userSelect: 'none',
	animation: `${pulse} 4s 2s infinite`,

	':hover': {
		transitions: 'all 1s',
		color: '#8c9ea3'
	}
};

const previousButton = (hasPrevious) => {
	return {
		...button,
		textAlign: 'left',
		visibility: hasPrevious ? 'visible' : 'hidden'
	}
};

const nextButton = (hasNext) => {
	return {
		...button,
		textAlign: 'right',
		visibility: hasNext ? 'visible' : 'hidden'
	}
};

export default {
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		display: 'flex'
	},
	previousButton,
	nextButton
}