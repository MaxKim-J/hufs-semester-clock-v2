import React, { ReactElement } from 'react';

console.log(process.env.NODE_ENV);
console.log(process.env.BASE_URL);

function Comp(): ReactElement {
  return <h1>나는 컴포넌트라네!</h1>;
}

export default Comp;
