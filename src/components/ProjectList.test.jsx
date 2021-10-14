import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as ProjectListStories from "./ProjectList.stories"; //👈  Our stories imported here

//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedProjects } = composeStories(ProjectListStories);

it("renders pinned projects at the start of the list", () => {
  const { container } = render(<WithPinnedProjects />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Project 6 (pinned)"]'
    )
  ).not.toBe(null);
});
