import Image from 'next/image';
import LogoSvg from "../assets/logo.svg";
import Link from 'next/link';

export const HeaderContainer = () => {
  return (
    <div className="flex p-5 bg-gray-200">
      <div className="flex items-center justify-between w-full mx-auto max-w-[900px]">
        <div className="logo">
          <Image src={LogoSvg} width={80} height={80} alt="Logo" />
        </div>
        <div>
          <ul className="flex justify-center px-0 list-none">
            <li className="mr-4">
              <Link href="/" passHref>
                Inicio
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/rotate" passHref>
                Rotar Matriz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
