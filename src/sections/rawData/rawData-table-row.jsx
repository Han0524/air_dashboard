import { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function RawDataTableRow({
  date, 
  location,
  pm25,
  pm10,
  ch2o,
  temperature,
  humidity,
  wind_direction,
  wind_speed
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover>

        <TableCell align="center">{date}</TableCell>

        <TableCell align="center">{location}</TableCell>

        <TableCell align="center">{pm25}</TableCell>

        <TableCell align="center">{pm10}</TableCell>

        <TableCell align="center">{ch2o}</TableCell>

        <TableCell align="center">{temperature}</TableCell>

        <TableCell align="center">{humidity}</TableCell>

        <TableCell align="center">{wind_direction}</TableCell>

        <TableCell align="center">{wind_speed}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

RawDataTableRow.propTypes = {
  date: PropTypes.any,
  location: PropTypes.any,
  pm25: PropTypes.any,
  pm10: PropTypes.any,
  ch2o: PropTypes.any,
  temperature: PropTypes.any,
  humidity: PropTypes.any,
  wind_direction: PropTypes.any,
  wind_speed: PropTypes.any,
};
