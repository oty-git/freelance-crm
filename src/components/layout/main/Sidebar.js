import { Link, useLocation } from "react-router-dom";
import menuConfig from "../../../constants/menuConfig";
import React, { memo, useEffect, useState } from "react";
import apiPermissions from "../../../api/permissions";
import { Collapse } from "react-collapse";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Sidebar = ({ i18n }) => {
  const auth = useSelector((state) => state.auth);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    getMenuPermissions();
  }, [i18n.language, auth]);

  const getMenuPermissions = async () => {
    const result = await apiPermissions.post(menuConfig(), "/menu");
    setMenu(result);
  };

  return (
    <div className="side__menu">
      {menu && menu.headSide && (
        <div className="head__side">
          <ul>
            {menu.headSide.map((item, index) => {
              return (
                <SidebarItem
                  key={index}
                  label={item.label}
                  href={item.link}
                  img={item.img}
                  count={item.count}
                />
              );
            })}
          </ul>
        </div>
      )}

      {menu &&
        menu.mainSide &&
        menu.mainSide.length > 0 &&
        menu.mainSide.map((item, index) => {
          return (
            <div key={index} className="menu__main--side">
              {item.title && <p>{item.title}</p>}
              <ul>
                {item.title && item.items && item.items.length > 0 ? (
                  item.items.map((menuItem, menuIndex) => {
                    return (
                      <SidebarItem
                        key={menuIndex}
                        label={menuItem.label}
                        href={menuItem.link}
                        img={menuItem.img}
                        count={menuItem.count}
                      />
                    );
                  })
                ) : (
                  <SidebarItem
                    children={item.children}
                    key={index}
                    label={item.label}
                    href={item.link}
                    img={item.img}
                    count={item.count}
                  />
                )}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default withTranslation()(Sidebar);

const SidebarItem = ({ label, href, img, count, children }) => {
  const location = useLocation();

  const { pathname } = location;

  const [open, setOpen] = useState(
    (children && children.find((item) => item.link === pathname)) || false,
  );

  return children && children.length ? (
    <li className="droppable__link">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <span className="image__side">
          <img src={img} alt="headicon" />
        </span>
        {label}
        {count && <span className="numb__span">{count}</span>}
        <img
          src="/images/vectorarrow.svg"
          alt="vectorarrow"
          className="drop__arrow"
        />
      </a>
      <Collapse isOpened={open}>
        <ul>
          {children.map((menuItem, menuIndex) => {
            return (
              <SidebarItem
                key={menuIndex}
                label={menuItem.label}
                href={menuItem.link}
                count={menuItem.count}
              />
            );
          })}
        </ul>
      </Collapse>
    </li>
  ) : (
    <li className={href === pathname ? "current__menu" : ""}>
      <Link to={href}>
        {!!img && (
          <span className="image__side">
            <img src={img} alt="headicon" />
          </span>
        )}
        {label}
        {count && <span className="numb__span">{count}</span>}
      </Link>
    </li>
  );
};
