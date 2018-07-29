import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid #fff', padding: '0.4rem', width: '96%', height: '70vh', margin: 'auto' }}>
			{props.children}
		</div>
	);
};

export default Scroll;