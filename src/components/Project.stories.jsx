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
      "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/23/17/tmp/buzzfeed-prod-fastlane-01/tmp-name-2-1059-1490303712-5_dblbig.jpg",
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
