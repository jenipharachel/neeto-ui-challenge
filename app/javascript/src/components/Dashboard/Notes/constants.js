import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: "",
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup.object().required("Assigned Contact is required"),
  tags: yup
    .array(yup.object({ label: yup.string(), value: yup.string() }))
    .min(1, "Tags is required"),
});

export const TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const TABLE_ROW_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: [{ label: "Getting Started", value: "getting_started" }],
    date: "2023-02-5",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: [{ label: "Getting Started", value: "getting_started" }],
    date: "2023-02-6",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: [{ label: "Getting Started", value: "getting_started" }],
    date: "2023-02-7",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: [{ label: "Getting Started", value: "getting_started" }],
    date: "2023-02-8",
  },
];

export const CONTACT_SELECT_OPTIONS = [
  {
    label: "Ronald Richards",
    value: "ronald@example.com",
  },
  {
    label: "Jacob Jones",
    value: "jacob@example.com",
  },
  {
    label: "Oliver Smith",
    value: "oliver@example.com",
  },
  {
    label: "Jane Smith",
    value: "jane@example.com",
  },
];

export const TAG_SELECT_OPTIONS = [
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "User Experience",
    value: "user_experience",
  },
];

export const MENU_BAR_OPTIONS = {
  title: "Notes",
  blocks: [
    {
      label: "All",
      count: 200,
      active: true,
    },
    {
      label: "Users",
      count: 80,
    },
    {
      label: "Leads",
      count: 60,
    },
    {
      label: "Visitors",
      count: 60,
    },
  ],
  segments: [
    {
      label: "Europe",
      count: 80,
    },
    {
      label: "Middle-East",
      count: 60,
    },
    {
      label: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      label: "Sales",
      count: 80,
    },
    {
      label: "Finance",
      count: 60,
    },
    {
      label: "User Experience",
      count: 60,
    },
  ],
};
