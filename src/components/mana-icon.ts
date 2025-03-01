import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { css } from 'lit';

export const styles = css`

`;

registerIconLibrary('ms', {
  resolver: name => {
    const filename = name.replace(/^ms-/, '');
    return `https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${filename}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});
