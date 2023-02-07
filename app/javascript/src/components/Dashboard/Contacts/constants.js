import { renderContactDetails, renderText, renderDropdown } from "./utils";

export const CONTACTS_TABLE_COLUMN_DATA = [
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
    render: renderDropdown,
  },
];

export const CONTACTS_TABLE_ROW_DATA = [
  {
    id: 1,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 1,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];
