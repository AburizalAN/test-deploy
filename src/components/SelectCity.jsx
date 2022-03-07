import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

import Input from 'components/shared/Input';

const SelectCity = (props) => {
  const { regionId, value, onChange, placeholder } = props;

  const [cities, setCities] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    setCities([]);
    setLoading(true);

    if (regionId) {
      const res = await fetch(`/api/coverages/cities/${regionId}`).then((res) =>
        res.json()
      );
      const cities = res?.data || [];

      setCities(cities);
      setLoading(false);
    }
  }, [regionId]);

  const options = React.useMemo(
    () =>
      cities.map(({ city_id, city_name }) => ({
        label: city_name,
        value: city_id,
      })),
    [cities]
  );

  const inputProps = {
    placeholder: loading ? 'Masukan provinsi...' : placeholder,
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

SelectCity.propTypes = {
  regionId: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SelectCity.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default SelectCity;
