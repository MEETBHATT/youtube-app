import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    } 

    return (
            <div className="ui segment">
                <form className="ui form" onSubmit = {onSearchSubmit}>
                    <div className = "field">
                         <label>Video Search</label>
                        <input type="text" value = {term}  onChange = {onInputChange}/>
                    </div>
                    
                </form>
            </div>        
        );
    
}

export default SearchBar;