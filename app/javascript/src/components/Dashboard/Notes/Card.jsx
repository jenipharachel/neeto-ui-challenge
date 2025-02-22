import React from "react";

import dayjs from "dayjs";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tooltip, Avatar } from "neetoui";
import { useTranslation } from "react-i18next";

import { renderDropdown } from "components/Dashboard/utils";
import { useUserState } from "contexts/user";

const Badge = ({ tag, id }) => (
  <div
    className="neeto-ui-border-gray-300 py-0.125 neeto-ui-rounded-none neeto-ui-bg-gray-100 my-0.125 mr-1 inline-block border px-2"
    key={id}
  >
    <Typography className="neeto-ui-text-gray-600" style="body3">
      {tag}
    </Typography>
  </div>
);

const Card = ({ note, onDelete, onEdit }) => {
  const { t } = useTranslation();

  const {
    user: { first_name, last_name },
  } = useUserState();

  return (
    <div className="neeto-ui-bg-white neeto-ui-shadow-xs neeto-ui-border-gray-300 neeto-ui-rounded-sm my-2 w-full border p-4">
      <div className="flex flex-row justify-between">
        <Typography className="neeto-ui-text-gray-800 mb-0.5" style="h4">
          {note.title}
        </Typography>
        {renderDropdown({
          onDelete,
          onEdit,
          id: note.id,
          icon: MenuVertical,
          buttonProps: { className: "-mt-2" },
          t,
        })}
      </div>
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
      <hr className="my-3" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          {note.tags.map((tag, id) => (
            <Badge id={id} key={id} tag={tag.label} />
          ))}
        </div>
        <div className="flex flex-row items-center">
          <Clock size={10} />
          <Tooltip
            content={dayjs().format("dddd, h:mm A")}
            followCursor="horizontal"
            position="bottom-start"
          >
            <Typography className="neeto-ui-text-gray-600 ml-1" style="body3">
              Created {dayjs(note.date).fromNow()}
            </Typography>
          </Tooltip>
          <Avatar
            className="ml-2"
            size="small"
            user={{ name: `${first_name} ${last_name}` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
