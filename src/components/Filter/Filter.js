import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { changeFilter } from 'redux/filter/filter.slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></Input>
    </>
  );
};
