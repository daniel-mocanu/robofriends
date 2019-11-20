import React from 'react';

const Searchbox = ({searchField, searchChange}) => {
    return (
        <div className= 'pa2'>
          <input
          className= "pa3 ba b--green bg-lightest-blue"
          type='search'placeholder='search robots'
          onChange= {searchChange} //html event on change
          /> 
          
    


        </div>
    );
}


export default Searchbox; 
