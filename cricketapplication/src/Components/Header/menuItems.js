export const menuItems = [
  {
    title: " Tournaments",
    href: "./new page",
    target: "",
    className: "items",
    onclick: () => {
      console.log("home");
    },
    subMenuClass: "dropdown",
    submenu: [
      {
        title: "Highlights",
        href: "./service 1",
        className: "submenu",
        //icon: { type: "fa fa-", className: "address-book" },
        onclick: () => {
          console.log("home");
        },
      },
    ],
  },
  {
    title: "Matches",
    href: "./contact Us",
    className: "items",
    subMenuClass: "dropdown",
    // onclick: () => {
    //   console.log("aboutus1");
    // }
    //,
    // submenu: [
    //   {
    //     title: "about1",
    //     href: "./detail 1",
    //     className: "submenu",
    //     onclick: () => {
    //       console.log("submenu about1");
    //     },
    //   },
    //   { title: "about2", href: "./detail 2", className: "submenu" },
    //   {
    //     title: "about3",
    //     href: "./detail 3",
    //     className: "submenu",
    //     subMenuClass: "dropdown",
    //     onclick: () => {
    //       console.log("submenu about3");
    //     },
    //     submenu: [
    //       {
    //         title: "about us1",
    //         href: "./detail 3a",
    //         className: "subRight",
    //         subMenuClass: "dropdown",
    //         onclick: () => {
    //           console.log("home");
    //         },
    //         submenu: [
    //           {
    //             title: "about us 2",
    //             href: "./detail 3ba",
    //             className: "subRight",
    //             onclick: () => {
    //               console.log("home");
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    // icon: { type: 'fa fa-', className: 'address-book' },
  },
  {
    title: "Teams",
    href: "./contact Us",
    className: "items",
    subMenuClass: "dropdown",
    onclick: () => {
      console.log("home");
    },
    // submenu: [
    //   {
    //     title: "course1",
    //     href: "./service 1",
    //     className: "submenu",
    //     onclick: () => {
    //       console.log("home");
    //     },
    //   },
    //   {
    //     title: "course2",
    //     href: "./service 2",
    //     className: "submenu",
    //     onclick: () => {
    //       console.log("home");
    //     },
    //     subMenuClass: "dropdown",
    //     submenu: [
    //       {
    //         title: " new course1",
    //         href: "./detail 3a",
    //         className: "subRight",
    //         onclick: () => {
    //           console.log("home");
    //         },
    //       },
    //       {
    //         title: "new course2",
    //         href: "./detail 3b",
    //         className: "subRight",
    //         onclick: () => {
    //           console.log("home");
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     title: "course3",
    //     href: "./detail 3",
    //     className: "submenu",
    //     subMenuClass: "dropdown",
    //     submenu: [
    //       {
    //         title: "course1",
    //         href: "./detail 3a",
    //         className: "subRight",
    //         onclick: () => {
    //           console.log("home");
    //         },
    //       },
    //       {
    //         title: "course2",
    //         href: "./detail 3b",
    //         className: "subRight",
    //         onclick: () => {
    //           console.log("home");
    //         },
    //       },
    //     ],
    //   },
    // ],

    //icon: { type: "fa fa-", className: "address-book" },
  },
  {
    title: "About Us",
    href: "./contact Us",
    className: "items",
    onclick: () => {
      console.log("home");
    },
    //icon: { type: "fa fa-", className: "address-book" },
  },

  {
    title: "Contact Us",
    href: "./service page",
    className: "items",
    subMenuClass: "dropdown",
    onclick: () => {
      console.log("home");
    },
    submenu: [
      {
        title: "blog1",
        href: "./service 1",
        className: "submenu",
        //icon: { type: "fa fa-", className: "address-book" },
        onclick: () => {
          console.log("home");
        },
      },
      {
        title: "blog2",
        href: "./service 2",
        className: "submenu",
        onclick: () => {
          console.log("home");
        },
      },
      {
        title: "blog3",
        href: "./detail 3",
        className: "submenu",
        subMenuClass: "dropdown",
        onclick: () => {
          console.log("home");
        },
        submenu: [
          {
            title: "blog1",
            href: "./detail 3a",
            className: "subRight",
            onclick: () => {
              console.log("home");
            },
          },
          {
            title: "blog2",
            href: "./detail 3b",
            className: "subRight",
            onclick: () => {
              console.log("home");
            },
          },
        ],
      },
    ],
  },
  // {
  //   title: "Shop",
  //   href: "./contact Us",
  //   className: "items",
  //   subMenuClass: "dropdown",
  //   onclick: () => {
  //     console.log("home");
  //   },
  // },
  // {
  //   title: "Home",
  //   href: "./new page",
  //   target: "",
  //   className: "items",
  //   onclick: () => {
  //     console.log("home");
  //   },
  // },
  // {
  //   title: "About",
  //   href: "./contact Us",
  //   className: "items",
  //   subMenuClass: "dropdown",
  //   // onclick: () => {
  //   //   console.log("aboutus1");
  //   // }
  //   //,
  //   submenu: [
  //     {
  //       title: "about1",
  //       href: "./detail 1",
  //       className: "submenu",
  //       onclick: () => {
  //         console.log("submenu about1");
  //       },
  //     },
  //     { title: "about2", href: "./detail 2", className: "submenu" },
  //     {
  //       title: "about3",
  //       href: "./detail 3",
  //       className: "submenu",
  //       subMenuClass: "dropdown",
  //       onclick: () => {
  //         console.log("submenu about3");
  //       },
  //       submenu: [
  //         {
  //           title: "about us1",
  //           href: "./detail 3a",
  //           className: "subRight",
  //           subMenuClass: "dropdown",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //           submenu: [
  //             {
  //               title: "about us 2",
  //               href: "./detail 3ba",
  //               className: "subRight",
  //               onclick: () => {
  //                 console.log("home");
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   // icon: { type: 'fa fa-', className: 'address-book' },
  // },
  // {
  //   title: "Courses",
  //   href: "./contact Us",
  //   className: "items",
  //   subMenuClass: "dropdown",
  //   onclick: () => {
  //     console.log("home");
  //   },
  //   submenu: [
  //     {
  //       title: "course1",
  //       href: "./service 1",
  //       className: "submenu",
  //       onclick: () => {
  //         console.log("home");
  //       },
  //     },
  //     {
  //       title: "course2",
  //       href: "./service 2",
  //       className: "submenu",
  //       onclick: () => {
  //         console.log("home");
  //       },
  //       subMenuClass: "dropdown",
  //       submenu: [
  //         {
  //           title: " new course1",
  //           href: "./detail 3a",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //         {
  //           title: "new course2",
  //           href: "./detail 3b",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       title: "course3",
  //       href: "./detail 3",
  //       className: "submenu",
  //       subMenuClass: "dropdown",
  //       submenu: [
  //         {
  //           title: "course1",
  //           href: "./detail 3a",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //         {
  //           title: "course2",
  //           href: "./detail 3b",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //       ],
  //     },
  //   ],

  //   //icon: { type: "fa fa-", className: "address-book" },
  // },
  // {
  //   title: "pages",
  //   href: "./contact Us",
  //   className: "items",
  //   onclick: () => {
  //     console.log("home");
  //   },
  //   //icon: { type: "fa fa-", className: "address-book" },
  // },

  // {
  //   title: "Blog",
  //   href: "./service page",
  //   className: "items",
  //   subMenuClass: "dropdown",
  //   onclick: () => {
  //     console.log("home");
  //   },
  //   submenu: [
  //     {
  //       title: "blog1",
  //       href: "./service 1",
  //       className: "submenu",
  //       //icon: { type: "fa fa-", className: "address-book" },
  //       onclick: () => {
  //         console.log("home");
  //       },
  //     },
  //     {
  //       title: "blog2",
  //       href: "./service 2",
  //       className: "submenu",
  //       onclick: () => {
  //         console.log("home");
  //       },
  //     },
  //     {
  //       title: "blog3",
  //       href: "./detail 3",
  //       className: "submenu",
  //       subMenuClass: "dropdown",
  //       onclick: () => {
  //         console.log("home");
  //       },
  //       submenu: [
  //         {
  //           title: "blog1",
  //           href: "./detail 3a",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //         {
  //           title: "blog2",
  //           href: "./detail 3b",
  //           className: "subRight",
  //           onclick: () => {
  //             console.log("home");
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Shop",
  //   href: "./contact Us",
  //   className: "items",
  //   subMenuClass: "dropdown",
  //   onclick: () => {
  //     console.log("home");
  //   },
  // },
];
