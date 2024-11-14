import Image from "next/image";

export function Logo() {
  return (
    <Image
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={160}
      height={28}
      priority
    />
  );
}
