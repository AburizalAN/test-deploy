import Skeleton from 'react-loading-skeleton';

const SimpleSkeleton = ({ onLoad = false, height = 245, children }) => {
  if (onLoad) {
    return <Skeleton height={height} width={'100em'} />;
  } else {
    return children;
  }
};

export default SimpleSkeleton;
