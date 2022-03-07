import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

import Input from 'components/shared/Input';

const SelectDistrict = (props) => {
  const { cityId, value, onChange, placeholder } = props;

  const [districts, setDistricts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    setDistricts([]);
    setLoading(true);

    if (cityId) {
      const res = await fetch(`/api/coverages/districts/${cityId}`).then(
        (res) => res.json()
      );
      const districts = res?.data || [];

      setDistricts(districts);
      setLoading(false);
    }
  }, [cityId]);

  const options = React.useMemo(
    () =>
      districts.map(({ district_id, district_name }) => ({
        label: district_name,
        value: district_id,
      })),
    [districts]
  );

  const inputProps = {
    placeholder: loading ? 'Masukan kota/kabupaten...' : placeholder,
  };

  return (
    <Autocomplete
      loading={loading}
      isOptionEqualToValue={(inputOptions, inputValue) =>
        inputOptions.label == inputValue
      }
      options={options}
      value={value}
      onChange={onChange}
      renderInput={(params) => {
        return (
          <div ref={params.InputProps.ref}>
            <Input type="text" {...params.inputProps} {...inputProps} />
          </div>
        );
      }}
    />
  );
};

SelectDistrict.propTypes = {
  cityId: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SelectDistrict.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default SelectDistrict;
