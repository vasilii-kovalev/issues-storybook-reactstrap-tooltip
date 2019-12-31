import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.jsx
configure(require.context("../", true, /\.stories\.jsx$/), module);
