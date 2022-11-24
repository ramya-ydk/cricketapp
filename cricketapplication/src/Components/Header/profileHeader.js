import React from "react";

export const ProfileDropdownItems = [
  {
    // title: "profile",
    // className:"classProfile",
    id: "profile",
    icon: { type: "fa fa-", className: "user fa-2x" },

    subMenuClass: "profiledropdown",
    submenu: [
      {
        title: "My profile",
        id: "profileItem1",
        className: "profileDD1",
      },
      {
        title: "My Course",
        id: "profileItem2",
        className: "profileDD2",
      },
      {
        title: "Edit profile",
        id: "profileItem3",
        className: "profileDD3",
      },
    ],
  },
];
