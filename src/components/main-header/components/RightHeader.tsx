import { NotificationIcon } from '../../icons';

function RightHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className='cursor-pointer'>
        <NotificationIcon color="#1E293B" />
      </div>
      <div className="flex items-center gap-[6px]">
        <div className="flex gap-2 items-center">
          <div>
            <img src="/assets/images/image1.png" alt="avatar" className="w-10 h-10 rounded-3" />
          </div>
          <p className="text-base font-medium">Username</p>
        </div>
        <div className="bg-[#FAF5FF] text-purple-600 py-1 px-[6px] rounded-[99px] text-xs">
          Super Admin
        </div>
      </div>
    </div>
  );
}

export default RightHeader;
