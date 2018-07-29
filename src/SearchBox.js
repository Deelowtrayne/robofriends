import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				name="searchbar" 
				placeholder="Search the app..." 
				onChange={ searchChange }
			/>
			{/*<input type="submit" name="searchBtn" value="search"/>*/}
		</div>
	)
}

export default SearchBox;