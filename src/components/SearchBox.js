import React from 'react';

const SearchBox = ({searchfield, SearchChange}) => {
	return(
		<div className='pa2'>
			<input 
			className = 'pa3 ba b--red bg-washed-green'
			type='search' 
			placeholder='search robots'
			onChange ={SearchChange}
			/>
		</div>
	);
}

export default SearchBox;