import React, { useEffect, useState, useRef } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable } from "neetoui";

import { renderDropdown } from "components/Dashboard/utils";

import { getColumnData } from "./utils";

const Table = ({ contacts = [], onDeleteContact, onEditContact }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const renderIcon = (_, { id }) =>
    renderDropdown({
      onDelete: onDeleteContact,
      onEdit: onEditContact,
      id,
      icon: MenuHorizontal,
    });

  const columnData = getColumnData(renderIcon);

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
