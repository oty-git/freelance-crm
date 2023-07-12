import Dropdown from "../../../account/blocks/Dropdown";
import UserDropdown from "../../../account/blocks/UserDropdown";
import Languages from "./Languages";
import { useTranslation } from "react-i18next";

const RightHeader = () => {
  const { t } = useTranslation();

  const notifications = [
    {
      value:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur",
    },
    {
      value:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur",
    },
    {
      value:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur",
    },
    {
      value:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur",
    },
  ];
  return (
    <div className="right__header">
      <div className="header__communication">
        <a href="#">
          <img
            src="/images/svg/svg-sprite/symbol/communication.svg"
            alt="communication"
          />
          <span className="communication__title">3</span>
        </a>
      </div>
      <div className="header__notification">
        <Dropdown headerTitle={t("Notifications")} items={notifications} />
      </div>
      <Languages />
      <div className="profile__header">
        <UserDropdown />
      </div>
    </div>
  );
};
export default RightHeader;
