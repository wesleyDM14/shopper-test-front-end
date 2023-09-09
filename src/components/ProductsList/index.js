import { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { Container, StyledIcon, StyledTextInput, TextInputContainer } from "./style";

import { FaSearch } from 'react-icons/fa';

export default function ProductsTable({ columns, data }) {
    const [filterInput, setFilterInput] = useState("");

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value);
        setFilterInput(value);
    };

    return (
        <Container>
            <TextInputContainer>
                <StyledIcon><FaSearch /></StyledIcon>
                <StyledTextInput
                    value={filterInput}
                    onChange={handleFilterChange}
                    placeholder={"Pesquisar Nome do Produto"}
                />
            </TextInputContainer>

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sort-desc"
                                                : "sort-asc"
                                            : ""
                                    }
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    )
}