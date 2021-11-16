import React from 'react';
import { format } from 'date-fns';
import camelcase from 'lodash.camelcase';

const CompD = () => (
  <div>
    {camelcase('im_component_D')}
    {format(new Date(1996, 8, 20), 'yyyy')}
  </div>
);

export default CompD;
