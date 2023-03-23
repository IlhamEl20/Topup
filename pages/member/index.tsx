import RootLayout from "@/app/layout";
import OverView from "../../components/organis/Overview";
import SideBar from "../../components/organis/SideBar";

export default function Overview() {
  return (
    <RootLayout>
      <section className="overview overflow-auto">
        <SideBar />
        <OverView />
      </section>
    </RootLayout>
  );
}
