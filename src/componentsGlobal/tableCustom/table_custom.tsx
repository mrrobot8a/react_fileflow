import React from 'react';
import './table_custom.css';

interface TableColumn {
    header: string;
    key: string;
    render?: (value: any, row?: any) => JSX.Element | string; // Acepta un segundo argumento opcional (la fila completa)
}

interface DataTableProps {
    columns: TableColumn[];
    data: any[];
    onRowClick?: (item: any) => void;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, onRowClick }) => {
    return (
        <table className="table table-bordered table-alternate table-custom">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} scope="col">{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex}>
                                {col.render ? col.render(row[col.key], row) : col.key == "index" ? row[col.key] + 1 : row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
