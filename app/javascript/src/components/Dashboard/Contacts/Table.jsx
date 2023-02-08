import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable } from "neetoui";

import { renderDropdown } from "components/Dashboard/utils";

import { COLUMN_DATA } from "./constants";

const Table = ({ contacts = [], onDeleteContact }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const renderIcon = (_, { id }) =>
    renderDropdown({
      onDelete: onDeleteContact,
      onEdit: () => {},
      id,
      icon: MenuHorizontal,
    });

  const columnData = COLUMN_DATA(renderIcon);

  return (
    <NeetoUITable
      allowRowClick
      fixedHeight
      rowSelection
      columnData={columnData}
      currentPageNumber={pageNumber}
      defaultPageSize={10}
      handlePageChange={page => setPageNumber(page)}
      rowData={contacts}
    />
  );
};

export default Table;
