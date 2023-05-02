import type { FC } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { colors } from '../constants';

const Loader: FC = () => {
  return (
    <ColorRing
      visible
      height="200"
      width="200"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={[
        colors.blue,
        colors.green,
        colors.green,
        colors.green,
        colors.blue,
      ]}
    />
  );
};

export default Loader;
