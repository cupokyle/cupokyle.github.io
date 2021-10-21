import React from "react";

import NavItem from "./NavItem";

export default {
  component: NavItem,
  title: "Nav Item",
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  navItem: {
    id: "1",
    title: "Test Nav Item",
    navItemImgUrl:
      "https://cdn.vox-cdn.com/thumbor/gsgRcVw25MIEzXnI0hNuXUP-ZJE=/0x39:650x472/920x613/filters:focal(0x39:650x472):format(webp)/cdn.vox-cdn.com/assets/960660/Screen_Shot_2012-02-20_at_11.36.09_AM.png",
    state: "NAVITEM_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
