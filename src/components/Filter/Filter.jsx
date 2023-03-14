import PropTypes from 'prop-types';
import { Input, Text } from './Filter.styled';

const Filter = ({ onFilter, value }) => {
  const handleChange = evt => {
    const filterName = evt.target.value.trim().toLowerCase();
    onFilter(filterName);
  };

  return (
    <>
      <Text>Find contact by name</Text>
      <Input type="text" name="filter" onChange={handleChange} value={value} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
