import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import DATA from './food-info2.json'
import 'bootstrap/dist/css/bootstrap.css';



export const FoodTable = ({}) => {

    const columns = useMemo(() => COLUMNS ,[])
    const data = useMemo(() => DATA, [])

    const table = useTable({
        columns,
        data       
    });

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = table

    return (
        <table className="table"{...getTableProps}>
            <thead className="thead-dark">
                {headerGroups.map((headerGroups) =>(
                <tr {...headerGroups.getHeaderGroupProps}>
                    {headerGroups.headers.map(column =>(
                        <th scope="col"{...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}                    
                </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps}>
                {rows.map(row =>{
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td scope="row"{...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}                        
                    </tr>
                );
                })}
            </tbody>
        </table>
        
    );
}