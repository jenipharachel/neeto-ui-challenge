import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Dropdown, Typography } from "@bigbinary/neetoui";

const { Menu, MenuItem } = Dropdown;

export const renderContactDetails = name_and_role => {
  const { name, role } = name_and_role;

  return (
    <div className="flex flex-row items-center">
      <Avatar className="mr-2" size="large" user={{ name }} />
      <div>
        <Typography style="h5">{name}</Typography>
        <Typography style="body3">{role}</Typography>
      </div>
    </div>
  );
};

export const renderText = text => (
  <Typography className="neeto-ui-text-gray-600" style="body2">
    {text}
  </Typography>
);

export const renderDropdown = ({ onDeleteContact, id }) => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger" onClick={() => onDeleteContact(id)}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);
