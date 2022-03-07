import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

import Input from 'components/shared/Input';

const SelectRegion = (props) => {
  const { value, onChange, placeholder } = props;

  const [regions, setRegions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    setLoading(true);
    const regionsFromStorage = localStorage.getItem('regions');

    if (regionsFromStorage) {
      setRegions(JSON.parse(regionsFromStorage));
      setLoading(false);
      return;
    }

    const res = await fetch('/api/coverages/regions').then((res) => res.json());
    const regions = res?.data || [];

    localStorage.setItem('regions', JSON.stringify(regions));

    setRegions(res?.data || []);
    setLoading(false);
  }, []);

  const options = React.useMemo(
    () =>
      regions.map(({ region_id, region_name, ...rest }) => ({
        label: region_name,
        value: region_id,
        ...rest,
      })),
    [regions]
  );

  const inputProps = { placeholder };

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

SelectRegion.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SelectRegion.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default SelectRegion;
