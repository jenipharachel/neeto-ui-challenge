import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA } from "./constants";

const Table = ({ contacts = [] }) => (
  <div className="contacts-table-height w-full">
    <NeetoUITable
      allowRowClick
      rowSelection
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      rowData={contacts}
    />
  </div>
);

export default Table;
