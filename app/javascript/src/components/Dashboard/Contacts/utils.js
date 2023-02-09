import dayjs from "dayjs";

import { renderContactDetails, renderText } from "components/Dashboard/utils";

export const getColumnData = renderIcon => [
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
    render: created_at => renderText(dayjs(created_at).format("MMM D, YYYY")),
  },
  {
    title: "",
    dataIndex: "icon_button",
    key: "icon_button",
    width: "10%",
    render: renderIcon,
  },
];
