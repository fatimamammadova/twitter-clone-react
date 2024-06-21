import { Link } from "react-router-dom";
import { trends } from "../../../../utils/consts";
import { Trend } from "./trend";
import { SidebarSection } from "../../../../components/sidebar-section";

export const Trends = () => {
  return (
    <SidebarSection title="Trends for you" more="/trends">
      {trends.map((item, index) => (
        <Trend item={item} key={index} />
      ))}
    </SidebarSection>
  );
};
