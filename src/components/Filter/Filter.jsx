import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <Label>
      <Input
        type="text"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={handleInput}
      />
    </Label>
  );
};

export default Filter;