import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {setSearchKey} from '../../actions/App';

const Search = () => {
const dispatch = useDispatch();
const searchKey = useSelector(({app: {searchKey}}) => searchKey);

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search characters..."
          value={searchKey}
          onChange={({target}) => dispatch(setSearchKey(target.value))}  
        />
      </form>
    </section>
  );
};

export default Search;
