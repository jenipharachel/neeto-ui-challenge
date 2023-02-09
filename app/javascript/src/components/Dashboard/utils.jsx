import React from "react";

import { Avatar, Dropdown, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

const { Menu, MenuItem } = Dropdown;

export const renderContactDetails = (_, { firstName, lastName, role }) => {
  const name = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-row items-center">
      <Avatar className="mr-2" size="large" user={{ name }} />
      <span>
        <Typography style="h5">{name}</Typography>
        <Typography className="neeto-ui-text-gray-600" style="body3">
          {role.label}
        </Typography>
      </span>
    </div>
  );
};

export const renderText = text => (
  <Typography className="neeto-ui-text-gray-600" style="body2">
    {text}
  </Typography>
);

export const renderDropdown = ({ onDelete, onEdit, id, icon, buttonProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <Dropdown buttonProps={buttonProps} buttonStyle="text" icon={icon}>
      <Menu>
        <MenuItem.Button onClick={() => onEdit(id)}>
          {t("button.edit")}
        </MenuItem.Button>
        <MenuItem.Button style="danger" onClick={() => onDelete(id)}>
          {t("button.delete")}
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};
