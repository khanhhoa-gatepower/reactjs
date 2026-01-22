import LeftHeader from './components/LeftHeader';
import RightHeader from './components/RightHeader';

function MainHeader() {
  return (
    <div className='flex justify-between items-center p-4'>
      <LeftHeader />
      <RightHeader />
    </div>
  );
}

export default MainHeader;
