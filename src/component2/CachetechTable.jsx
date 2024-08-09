import React, { useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Card, CardContent, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '6px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sortIcon: {
    fontSize: 'small',
    verticalAlign: 'middle',
    marginLeft: theme.spacing(1),
    visibility: 'hidden', // initially hide sorting icon
  },
  activeOnboarding: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

const CachetechTable = ({ columns, data }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredRows = rows.filter(row =>
    row.cells.some(cell =>
      String(cell.value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.cardHeader}>
          <div className={classes.activeOnboarding}>Active onboarding (17)</div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      borderBottom: '1px solid black',
                      background: '#f2f2f2',
                      color: 'black',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      padding: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {column.render('Header')}
                      {column.isSorted ? (
                        <SwapVertIcon
                          className={classes.sortIcon}
                          style={{ visibility: 'visible', transform: column.isSortedDesc ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '8px',
                          borderBottom: '1px solid black',
                          textAlign: 'left',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '8px' }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default CachetechTable;
