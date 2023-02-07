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

export const NOTES_TABLE_COLUMN_DATA = [
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

export const NOTES_TABLE_ROW_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
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
