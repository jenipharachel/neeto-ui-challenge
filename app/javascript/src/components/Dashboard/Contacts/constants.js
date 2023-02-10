import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email Address is required"),
  role: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable()
    .required("Role is required"),
});

export const TABLE_ROW_DATA = [
  {
    id: 1,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 4,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 5,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 6,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 7,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 8,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 9,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 10,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 11,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 12,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 13,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 14,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 15,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
  },
  {
    id: 16,
    firstName: "Jacob",
    lastName: "Jones",
    role: { label: "Owner", value: "owner" },
    email: "albert@borer.com",
    created_at: "2023-2-5",
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

export const ROLE_SELECT_OPTIONS = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Users",
    value: "users",
  },
  {
    label: "Leads",
    value: "leads",
  },
  {
    label: "Visitors",
    value: "visitors",
  },
];
