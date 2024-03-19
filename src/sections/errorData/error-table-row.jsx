import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const FixedTableCell = styled(TableCell)`
    min-width: 100px;
`;

const WideFixedTableCell = styled(TableCell)`
    min-width: 150px;
`;

export default function ErrorTableRow({
  sequence,
  date,
  timestamp,
  nodeAddress,
  location,
  errerType,
  errerCause,
  solution,
  done,
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
      <TableRow hover tabIndex={-1}>

        <FixedTableCell align="center">{sequence}</FixedTableCell>

        <FixedTableCell align="center">{date}</FixedTableCell>
      
        <FixedTableCell align="center">{timestamp}</FixedTableCell>
      
        <FixedTableCell align="center">{nodeAddress}</FixedTableCell>

        <FixedTableCell align="center">{location}</FixedTableCell>

        <WideFixedTableCell align="center">{errerType}</WideFixedTableCell>

        <WideFixedTableCell align="center">{errerCause}</WideFixedTableCell>

        <FixedTableCell align="center">{solution}</FixedTableCell>

        <FixedTableCell align="center">{done}</FixedTableCell>

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


ErrorTableRow.propTypes = {
  sequence: PropTypes.any,
  date: PropTypes.any,
  timestamp: PropTypes.string,
  nodeAddress: PropTypes.string,
  location: PropTypes.string,
  errerType: PropTypes.string,
  errerCause: PropTypes.string,
  solution: PropTypes.string,
  done: PropTypes.string,
};
