import Image  from "next/image";

const Logo = () => {
  return (
    <Image
      loading="lazy"
      src="/images/logo.png"
      alt="Localhost logo"
      className="object-contain shrink-0 self-stretch my-auto h-8"
      width={120}
      height={40}
    />
  );
};

export default Logo;