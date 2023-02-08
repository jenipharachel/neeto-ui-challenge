import { renderContactDetails, renderText } from "components/Dashboard/utils";

export const COLUMN_DATA = renderIcon => [
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
    render: renderIcon,
  },
];

export const TABLE_ROW_DATA = [
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
    id: 2,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 3,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 4,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 5,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 6,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 7,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 8,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 9,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 10,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 11,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 12,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 13,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 14,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 15,
    name_and_role: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    id: 16,
    name_and_role: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];

export const MENU_BAR_OPTIONS = {
  title: "Contacts",
  blocks: [
    {
      label: "All",
      count: 0,
      active: true,
    },
    {
      label: "Archived",
      count: 0,
    },
    {
      label: "Completed",
      count: 0,
    },
    {
      label: "Phase 2",
      count: 0,
    },
  ],
};
