import { html } from 'lit-html';
import '@npm-workspace-test/hello-world';

export default {
  title: 'CatalystComponents/HelloWorld ',
  argTypes: {},
};

export const Default = () => html`<hello-world></hello-world>`;