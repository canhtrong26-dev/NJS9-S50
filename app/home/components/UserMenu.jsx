import  Image  from "next/image";

const UserMenu = () => {
  return (
    <div className="flex gap-5 items-center self-stretch my-auto">
      <Image
        loading="lazy"
        src="/images/c16fce4d291ba98a1d07f67fd110316b25ba8d46.png"
        alt="Notification icon"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
        width={26}
        height={26}
      />
      <Image
        loading="lazy"
        src="/images/5dc7ba6d1da173ef09f6c8f67a22a9434c970aa2.jpg"
        alt="User profile"
        className="object-contain shrink-0 self-stretch my-auto w-9 rounded-full aspect-square"
        width={9}
        height={9}
      />
    </div>
  );
};

export default UserMenu;