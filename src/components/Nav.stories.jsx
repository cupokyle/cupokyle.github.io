import React from "react";

import Nav from "./Nav";
import * as NavStories from "./NavItem.stories";

export default {
  component: Nav,
  title: "Nav",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in NavItem.stories.js.
  navItems: [
    { ...NavStories.Default.args.navItem, id: "1", title: "Nav Item 1" },
    { ...NavStories.Default.args.navItem, id: "2", title: "Nav Item 2" },
    { ...NavStories.Default.args.navItem, id: "3", title: "Nav Item 3" },
    { ...NavStories.Default.args.navItem, id: "4", title: "Nav Item 4" },
    { ...NavStories.Default.args.navItem, id: "5", title: "Nav Item 5" },
    { ...NavStories.Default.args.navItem, id: "6", title: "Nav Item 6" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  navItems: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
