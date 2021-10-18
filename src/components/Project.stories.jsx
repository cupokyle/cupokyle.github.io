import React from "react";

import Project from "./Project";

export default {
  component: Project,
  title: "Project",
};

const Template = (args) => <Project {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: {
    id: "1",
    title: "Test Project",
    projectUrl: "https://www.lego.com",
    projectImgUrl:
      "https://cdn.vox-cdn.com/thumbor/gsgRcVw25MIEzXnI0hNuXUP-ZJE=/0x39:650x472/920x613/filters:focal(0x39:650x472):format(webp)/cdn.vox-cdn.com/assets/960660/Screen_Shot_2012-02-20_at_11.36.09_AM.png",
    state: "PROJECT_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  project: {
    ...Default.args.project,
    state: "PROJECT_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  project: {
    ...Default.args.project,
    state: "PROJECT_ARCHIVED",
  },
};
