import { html } from 'lit-html';
import '@catalyst-component-test/hello-world';

export default {
  title: 'Example/HelloWorld',
  argTypes: {},
};

export const Primary = () => html`<hello-world></hello-world>`;