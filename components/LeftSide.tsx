import SocialIcons from './SocialIcons';


const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className='w-[2px] h-full bg-textDark'></div>
      <div className='flex flex-col gap-4'>
        <SocialIcons />
      </div>
      <div className='w-[2px] h-[30%] bg-textDark'></div>
    </div>
  );
};

export default LeftSide;
