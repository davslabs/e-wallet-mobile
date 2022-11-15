import { Circle } from 'native-base';

const Earth = (props) => {
  return <Circle opacity="25" position="absolute" zIndex="-1" p="1/2" bgColor="info.500" {...props} />;
};

export default Earth;
