import { RotatingLines } from 'react-loader-spinner';
import { LoaderStile } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStile>
      <RotatingLines
        strokeColor="DarkGreen"
        strokeWidth="5"
        animationDuration="0.75"
        width="108"
        visible={true}
      />
    </LoaderStile>
  );
};
