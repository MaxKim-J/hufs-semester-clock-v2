import React from 'react';
import { format } from 'date-fns';

const CompD = () => <div>{format(new Date(1996, 8, 20), 'yyyy')}</div>;

export default CompD;
