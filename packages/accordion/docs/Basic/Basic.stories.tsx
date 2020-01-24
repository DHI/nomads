import React from 'react';

import Accordion from '../../src/Accordion';

export const Basic = () => (
  <div style={{ maxWidth: 600, padding: 30 }}>
    <Accordion headline="First accordion">
      <p>This is the inner content</p>
    </Accordion>
    <Accordion headline="Second accordion">
      <p>This is the inner content</p>
    </Accordion>
    <Accordion headline="Third accordion">
      <p>This is the inner content</p>
    </Accordion>
  </div>
);
