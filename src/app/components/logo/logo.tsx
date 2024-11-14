import Image from "next/image";

interface LogoProps {
  size: number;
}

export function Logo({ size }: LogoProps) {
  return (
    <Image
      src={"/logo.svg"}
      alt="logo"
      width={size}
      height={size / 4}
      quality={100}
    />
  );
}
