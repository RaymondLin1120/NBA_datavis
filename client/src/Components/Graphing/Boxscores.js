import React from 'react'
import { useTable } from 'react-table';

const columns = [
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Headers: 'Matchup',
        accessor: 'matchup'
    },
    {
        Headers: 'Result',
        accessor: 'wl'
    },
    {
        Headers: 'FG%',
        accessor: 'fgPct'
    },
    {
        Headers: 'FG3%',
        accessor: 'fg3Pct'
    },
    {
        Headers: 'FT%',
        accessor: 'ftPct'
    },
    {
        Headers: 'MIN',
        accessor: 'min'
    },
    {
        Headers: 'REB',
        accessor: 'reb'
    },
    {
        Headers: 'AST',
        accessor: 'ast'
    },
    {
        Headers: 'BLK',
        accessor: 'blk'
    },
    {
        Headers: 'STL',
        accessor: 'stl'
    },
    {
        Headers: 'TOV',
        accessor: 'tov'
    },
    {
        Headers: 'PF',
        accessor: 'pf'
    },
    {
        Headers: 'PTS',
        accessor: 'pts'
    }
]


function Boxscores(data) {

    return (
        <div>
            
        </div>
    )
}

export default Boxscores
