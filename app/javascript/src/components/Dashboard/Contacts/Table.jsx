import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { renderContactDetails, renderText, renderDropdown } from "./utils";

const Table = ({ contacts = [], onDeleteContact }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const CONTACTS_TABLE_COLUMN_DATA = [
    {
      title: "Name & Role",
      dataIndex: "name_and_role",
      key: "name_and_role",
      width: "30%",
      render: renderContactDetails,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "30%",
      render: renderText,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "30%",
      render: renderText,
    },
    {
      title: "",
      dataIndex: "icon_button",
      key: "icon_button",
      width: "10%",
      render: (_, { id }) => renderDropdown({ onDeleteContact, id }),
    },
  ];

  return (
    <NeetoUITable
      allowRowClick
      fixedHeight
      rowSelection
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      currentPageNumber={pageNumber}
      defaultPageSize={10}
      handlePageChange={page => setPageNumber(page)}
      rowData={contacts}
    />
  );
};

export default Table;
