import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

// async function fetchData(id) {
//     const respond = await fetch(
//         'https://microservice-blog.awalmula.co.id/wp-json/wp/v2' + `/recipe/?bahan_utama=${id}`
//       );
//       const data = await respond.json();
//       if (data.length > 0){
//         return data
//       }else{
//         return "empty"
//       }

// }

export default function TabPanel(props) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{id}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
