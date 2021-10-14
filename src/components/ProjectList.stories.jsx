import React from "react";

import ProjectList from "./ProjectList";
import * as ProjectStories from "./Project.stories";

export default {
  component: ProjectList,
  title: "ProjectList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <ProjectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in project.stories.js.
  projects: [
    { ...ProjectStories.Default.args.project, id: "1", title: "Project 1" },
    { ...ProjectStories.Default.args.project, id: "2", title: "Project 2" },
    { ...ProjectStories.Default.args.project, id: "3", title: "Project 3" },
    { ...ProjectStories.Default.args.project, id: "4", title: "Project 4" },
    { ...ProjectStories.Default.args.project, id: "5", title: "Project 5" },
    { ...ProjectStories.Default.args.project, id: "6", title: "Project 6" },
  ],
};

export const WithPinnedProjects = Template.bind({});
WithPinnedProjects.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  projects: [
    ...Default.args.projects.slice(5, 0),
    { id: "6", title: "Project 6 (pinned)", state: "PROJECT_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  projects: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
