import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: number;
}

export function Logo({ size }: LogoProps) {
  return (
    <Link href={'#logo'}>
      <Image
        id="logo"
        src={"/logo.svg"}
        alt="logo"
        width={size}
        height={size / 4}
        quality={100}
      />
    </Link>
  );
}
