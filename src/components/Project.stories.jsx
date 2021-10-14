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
