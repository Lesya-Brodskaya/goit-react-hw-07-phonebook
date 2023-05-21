import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          placeholder="Enter filter"
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        ></Input>
      </Label>
    </>
  );
};

export default Filter;
