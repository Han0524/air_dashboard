import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { useErrors } from 'src/hooks/useErrorData'; // Missed spacing between imports
import { errorData } from 'src/_mock/errorData'; // Missed spacing between imports
import useErrorDataStore from 'src/store/errorDataStore';

import Iconify from 'src/components/iconify'; // Removed extra semicolon
import Scrollbar from 'src/components/scrollbar';

import { emptyRows } from '../utils';
import ErrorTableRow from '../error-table-row';
import ErrorTableHead from '../error-table-head';
import TableEmptyRows from '../table-empty-rows';
import ErrorTableSelection from '../error-table-selection';

// ----------------------------------------------------------------------

export default function ErrorDataView() {

  const { isPending, error, data } = useErrors();
  const { setErrorData } = useErrorDataStore();
  
  useEffect(() => {
    if (!isPending && !error && data) {
      setErrorData(data.data);
    }
  }, [isPending, error, data, setErrorData]);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('date');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Error Data</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Node
        </Button>
      </Stack>

      <Card>

        <ErrorTableSelection/>

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ErrorTableHead
                order={order}
                orderBy={orderBy}
                rowCount={errorData.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'sequence', label: '순번'},
                  { id: 'date', label: '측정일'},
                  { id: 'timestamp', label: '측정시각' },
                  { id: 'nodeAddress', label: '노드번호' },
                  { id: 'location', label: '노드위치' },
                  { id: 'errerType', label: '에러타입'},
                  { id: 'errerCause', label: '에러원인'},
                  { id: 'solution', label: '해결방안' },
                  { id: 'done', label: '처리여부' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {errorData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ErrorTableRow
                      key={row.id}
                      sequence={row.sequence}
                      date={row.date}
                      timestamp={row.timestamp}
                      nodeAddress={row.nodeAddress}
                      location={row.location}
                      errerType={row.errerType}
                      errerCause={row.errerCause}
                      solution={row.solution}
                      done={row.done}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, errorData.length)}
                />

              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={errorData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
