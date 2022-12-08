import React from 'react';
function Search({handleClose}) {
    return(
        <div className='cont-search'>
        <div className='search'>
            <div>
                <div>
                    <label htmlFor="">search....</label><br />
                <input type="text" name="" id="" placeholder='What are you looking for?'/>
                <button className='btn-search'>Search</button>
                </div>
               
            </div>
            <button className='close' onClick={handleClose}><i className='fa fa-times'></i></button>
        </div>
        </div>
    )
}export default Search;