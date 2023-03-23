import RootLayout from "@/app/layout";
import cx from "classnames";
import Link from "next/link";
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <RootLayout>
      <li className="nav-item my-auto">
        <Link className={classTitle} href={href}>
          {/* <a aria-current="page"></a> */}
          {title}
        </Link>
      </li>
    </RootLayout>
  );
}
