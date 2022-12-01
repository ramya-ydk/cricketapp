import React, { useEffect, useState, useRef } from "react";
import "./LHN.css";
import { LhnMenus } from "./LHNmenus";

// import ydk from "../images/logo.svg";

export const LeftNavigation = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={`side-bar ${collapse ? "collapse" : ""}`}>
      <div className="logo-name-wrapper">
        <div className="logo-name">
          {/* <img src={ydk} className="logo" alt="company LOGO" srcSet="" /> */}
          <span className="logo-name__name">companyName</span>
        </div>

        <button
          className="logo-name__button"
          onClick={() => setCollapse(!collapse)}
        >
          <i
            className={`arrowCollapse ${
              collapse
                ? "collapse bx bx-arrow-from-left logo-name__icon collapse "
                : "bx bx-arrow-from-right logo-name__icon"
            }`}
            id="logo-name__icon"
          ></i>
        </button>
      </div>

      <ul className="features-list">
        {LhnMenus.map((menulist, ind) => (
          <ul className="features-list" key={ind}>
            <MainMenu listItems={menulist} />{" "}
          </ul>
        ))}
      </ul>
    </div>
  );
};

const MainMenu = ({ listItems }) => {
  var level = 1;
  return (
    <>
      {listItems.map((item, ind) => (
        <SideBarList item={item} level={level} key={ind} />
      ))}
    </>
  );
};

const SideBarList = ({ item, level }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropdown]);

  const onMouseClicked = () => {
    setDropdown((prev) => !prev);
  };
  if (item.submenu) {
    console.log(item.submenu);
    return (
      <>
        <span ref={ref}>
          {
            <a
              href={"#" + item.href}
              className={level === 1 ? "sideBarLink" : "dropdownLink"}
              onClick={onMouseClicked}
              style={dropdown ? { backgroundColor: "white" } : {}}
            >
              <IconText item={item} />

              <div style={{ padding: "10px" }}>
                <i
                  className={
                    dropdown ? "fa fa-caret-down" : "fa fa-caret-right"
                  }
                ></i>
              </div>
            </a>
          }
          <div className={dropdown ? "show" : "hide"} key={item.level + "Div"}>
            <Dropdown item={item} level={level} dropdown={dropdown} />
          </div>
        </span>
      </>
    );
  } else {
    return (
      <span ref={ref}>
        {item.title ? (
          <div className="category-header">{item.title}</div>
        ) : (
          <a
            href={item.href}
            className={level === 1 ? "sideBarLink" : "dropdownLink"}
          >
            <IconText item={item} />
          </a>
        )}
      </span>
    );
  }
};

const Dropdown = ({ item, level }) => {
  var level = level + 1;

  return (
    <div>
      {item.submenu.map((itm, ind) => (
        <SideBarList
          item={itm}
          key={`${ind}DD`}
          level={level} // dropdown={ dropdown }
        />
      ))}

      {console.log(item.label, level)}
    </div>
  );
};

const IconText = ({ item }) => {
  return (
    <div>
      <span className="icons">
        <i className={item.icon}> </i>
      </span>
      <span className="features-item-text" onClick={() => item.onclick()}>
        {item.label}
      </span>
      <span className="tooltip"> {item.label}</span>
    </div>
  );
};
