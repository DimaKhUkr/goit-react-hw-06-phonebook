// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filters);

  const dispatch = useDispatch();

  return (
    <>
      <label>
        Filter by name <br />
        <input
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={e => dispatch(getFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };
