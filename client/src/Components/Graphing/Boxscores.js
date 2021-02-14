import React from 'react'
import { useTable, usePagination } from 'react-table';
import TableScrollbar from 'react-table-scrollbar';
const columns = [
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Matchup',
        accessor: 'matchup'
    },
    {
        Header: 'Result',
        accessor: 'wl'
    },
    {
        Header: 'FG%',
        accessor: 'fgPct'
    },
    {
        Header: 'FG3%',
        accessor: 'fg3Pct'
    },
    {
        Header: 'FT%',
        accessor: 'ftPct'
    },
    {
        Header: 'MIN',
        accessor: 'min'
    },
    {
        Header: 'REB',
        accessor: 'reb'
    },
    {
        Header: 'AST',
        accessor: 'ast'
    },
    {
        Header: 'BLK',
        accessor: 'blk'
    },
    {
        Header: 'STL',
        accessor: 'stl'
    },
    {
        Header: 'TOV',
        accessor: 'tov'
    },
    {
        Header: 'PF',
        accessor: 'pf'
    },
    {
        Header: 'PTS',
        accessor: 'pts'
    }
]

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      //showPagination={false},
      //className="-striped -highlight"
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      {/* <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}
      <TableScrollbar rows={8}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableScrollbar>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
    </>
  )
}

function Boxscores(data) {
    return (
        <div className = "boxscore-container">
            <p className="title"> Boxscores </p>
            <Table columns={columns} data={data.data} /> 
        </div>
    )
}

export default Boxscores
