import React from 'react';
import { useTable, usePagination } from '@tanstack/react-table';

const Table = ({ data }: { data: any[] }) => {
  const columns = React.useMemo(
    () => [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'title', header: 'Title' },
      { accessorKey: 'price', header: 'Price' },
    ],
    []
  );

  const table = useTable({ data, columns });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>{header.renderHeader()}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{cell.renderCell()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.previousPage()}>Previous</button>
        <button onClick={() => table.nextPage()}>Next</button>
      </div>
    </div>
  );
};

export default Table;
