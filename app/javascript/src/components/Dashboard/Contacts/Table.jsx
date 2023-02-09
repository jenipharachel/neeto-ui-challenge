import React, { useEffect, useState, useRef } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable } from "neetoui";

import { renderDropdown } from "components/Dashboard/utils";

import { GET_COLUMN_DATA } from "./constants";

const Table = ({ contacts = [], onDeleteContact, onEditContact }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const timeoutRef = useRef(null);

  const renderIcon = (_, { id }) =>
    renderDropdown({
      onDelete: onDeleteContact,
      onEdit: onEditContact,
      id,
      icon: MenuHorizontal,
    });

  const columnData = GET_COLUMN_DATA(renderIcon);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <NeetoUITable
      fixedHeight
      pagination
      rowSelection
      columnData={columnData}
      currentPageNumber={pageNumber}
      defaultPageSize={10}
      handlePageChange={page => setPageNumber(page)}
      isLoading={isLoading}
      rowData={contacts}
      totalCount={contacts.length}
    />
  );
};

export default Table;
