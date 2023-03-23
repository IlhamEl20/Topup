import Image from "next/image";
interface MenuItemProps {
  title: string;
}
export default function MenutItem(props: MenuItemProps) {
  const { title } = props;
  return (
    <div className="item mb-30">
      <Image
        src="/icon/ic-menu-overview.svg"
        width={25}
        height={25}
        alt="icon"
      />
      <p className="item-title m-0 ml-2 ">
        <a href="../member/overview" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
