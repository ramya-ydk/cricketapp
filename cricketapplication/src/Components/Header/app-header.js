import { useState, useEffect, useRef, useLayoutEffect } from "react";
//import search from "./searchIcon.png";
import ydk from "./ydk.svg";
import { useNavigate } from "react-router-dom";
// import logo from "./logo.png";
import "./app-header.css";
import { ProfileDropdownItems } from "./profileHeader.js";
import { Button } from "reactstrap";
export const HeaderComponent = {
  Logo: {
    name: "logo",
    src: ydk,
    className: "logo",
    tooltip: "logo",
    alt: "No image",
    height: "75px",
    weight: "105px",
  },
  Title: {
    name: "Cricket App",
    className: "title",
    color: "#35a9d9",
    fontsize: 10,
  },
};

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
const AppHeader1 = ({ menuItems }) => {
  const [checked, setChecked] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();
  const nav = useNavigate();
  useEffect(() => {
    let header = document.getElementsByTagName("header")[0];
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        header.classList.add("sticky");
      } else if (window.scrollY < 200) {
        header.classList.remove("sticky");
      }
    });
  }, []);

  return (
    <>
      {/* <div className={checked ? "bg" : "bgw"}> */}
      <header>
        <Logo logo={HeaderComponent.Logo} />
        <Title title={HeaderComponent.Title} />
        {/* <button onClick={useWindowSize}>size</button> */}
        <input
          type="checkbox"
          id="check"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {windowWidth > 960 ? (
          <nav>
            <ul className={!checked ? "menus" : "menus1"}>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <>
                    <MenuItems
                      items={menu}
                      key={index}
                      depthLevel={depthLevel}
                    />
                  </>
                );
              })}
            </ul>
          </nav>
        ) : (
          // <nav>
          <div className={checked ? "bg" : "bgw"} style={{ width: "100%" }}>
            <div className={!checked ? "menus" : "menus1"}>
              <div className="medialogo">
                <span>
                  {" "}
                  <Title title={HeaderComponent.Title} />
                </span>
                <input
                  className="xmarkicon"
                  type="checkbox"
                  id="check"
                  checked={checked}
                  onChange={() => setChecked(false)}
                />
                <label
                  htmlFor="check"
                  className={checked ? "xbutton" : "xcross"}
                >
                  <i className="fa fa-times"></i>
                </label>
                <hr />
              </div>
              <ul className="mediamenus">
                {menuItems.map((menu, index) => {
                  const depthLevel = 0;
                  return (
                    <>
                      <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                      />
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          //  </nav>
        )}
        <div>
          <Button
            style={{
              marginTop: "20px",
            }}
            color="primary"
            onClick={() => nav("/newRegister")}
          >
            SignUp
          </Button>
        </div>
        {/* <div className="sideIcons"> */}
        <div className={"searchDiv"}>
          <input className="SearchBox" placeholder="Search" type="text" />
          <i className="fa fa-search search" />
        </div>
        <div className={"classProfile"}>
          {ProfileDropdownItems.map((itm, idx) => {
            const menuDepth = 0;
            return <MenuItems items={itm} key={idx} menuDepth={menuDepth} />;
          })}
        </div>
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars"></i>
        </label>
        {/* </div> */}
        {/* <div className={"classProfile"}>
        <ul>
          {ProfileDropdownItems.map((itm, idx) => {
            const menuDepth = 0;
            return <MenuItems items={itm} key={idx} menuDepth={menuDepth} />;
          })}
        </ul>
      </div> */}
      </header>
      {/* <div style={{ height: 300, width: 400 }}>layout</div>
      <div style={{ height: 600, width: 400 }}>layout</div>
      <div style={{ height: 600, width: 400 }}>layout</div> */}
      {/* </div> */}
    </>
  );
};

export const Logo = ({ logo }) => {
  const { name, src, className, tooltip, alt, height, width } = logo;
  return (
    <img
      src={src}
      className={className}
      height={height}
      width={width}
      alt={alt}
    />
  );
};

export const Title = ({ title }) => {
  const { name, className, color, fontsize } = title;
  {
    return (
      <h1 className={className} style={{ color: `${color}` }}>
        {name}{" "}
      </h1>
    );
  }
};

const MenuItems = ({ items, depthLevel }) => {
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
      // Cleanup the event listener
      document.removeEventListener("click", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={window.innerWidth > 960 ? onMouseEnter : null}
      onMouseLeave={window.innerWidth > 960 ? onMouseLeave : null}
    >
      {items.submenu ? (
        <>
          <a
            href={"#" + items.href}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              if (items.onclick) items.onclick();
              setDropdown((prev) => !prev);
            }}
          >
            {items.icon ? (
              <i className={items.icon.type + items.icon.className}></i>
            ) : null}
            {items.title}
            {window.innerWidth < 960 ? (
              <span className="arrow" />
            ) : depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </a>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            submenuclass={items.subMenuClass}
          />
        </>
      ) : (
        // <a href={items.title}>{items.title}</a>
        <a
          href={"#" + items.href}
          className={items.className}
          target={items.target}
          onClick={items.onclick}
        >
          {items.icon ? (
            <i className={items.icon.type + items.icon.className}></i>
          ) : null}
          {items.title}{" "}
        </a>
      )}
    </li>
  );
};

const Dropdown = ({ submenus, dropdown, depthLevel, submenuclass }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`${submenuclass} ${dropdownClass} ${dropdown ? "show" : ""}`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default AppHeader1;
