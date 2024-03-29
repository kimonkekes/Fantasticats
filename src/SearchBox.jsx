
const SearchBox = ({searchChange}) => {
    return (
      <div className='pa2'>  
        <input 
          className='pa3 ba b--green br-pill bg-lightest-blue'
          type='search' 
          placeholder='Search cats'
          onChange={searchChange} 
        />
      </div>  
    )
}

export default SearchBox;