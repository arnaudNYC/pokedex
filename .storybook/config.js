import '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import requireContext from 'require-context.macro';
addDecorator(withA11y);

const req = requireContext('../src', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
