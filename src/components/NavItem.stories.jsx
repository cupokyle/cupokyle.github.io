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
      "https://cdn-icons.flaticon.com/svg/5074/5074700.svg?token=exp=1634856184~hmac=1316d9f2fc81a14b5a305aff9446bb5c",
    state: "NAVITEM",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
