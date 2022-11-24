import Link from "next/link";

export function PrimaryButton({ href,text }) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center w-[207px] bg-primary px-5 py-4"
    >
      <span className="text-black text-[15px]">{text}</span>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.6 0V1.9H14.931L0 17.6605L1.269 19L16.2 3.2395V15.2H18V0H3.6Z"
          fill="black"
        />
      </svg>
    </Link>
  );
}

