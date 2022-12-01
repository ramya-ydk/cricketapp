import React from "react";
// import * as RiIcons from "react-icons/ri";

export const LhnMenus = [
  [
    { title: "MENUS" },
    {
      label: "SCHEDULE TOURNAMENT",
      icon: "fa fa-home ",
      href: "./menu1",
      // level: "1",
      tooltip: "Heading1",
      onclick: () => {
        console.log("home");
      },
    },
    {
      label: "CREATE TEAM ",
      icon: "fa fa-envelope",
      //href: "./msg2",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      // submenu: [
      //   {
      //     label: "Gmail",
      //     icon: "fa fa-inbox ",
      //     //href: "./msg2.1",
      //     iconClosed: <i className="fa fa-caret-right" />,
      //     iconOpened: <i className="fa fa-caret-down" />,
      //     // level: "2.1",
      //     onclick: () => {
      //       console.log("gmail");
      //     },
      //     submenu: [
      //       {
      //         label: "Sent",
      //         icon: "fa fa-inbox ",
      //         href: "./msg2.1.1",
      //         // level: "2.1.1",
      //         onclick: () => {
      //           console.log("message");
      //         },
      //       },
      //       {
      //         label: "Trash",
      //         icon: "fa fa-trash ",
      //         href: "./msg2.1.2",
      //         // level: "2.1.2",
      //         iconClosed: <i className="fa fa-caret-right" />,
      //         iconOpened: <i className="fa fa-caret-down" />,
      //         onclick: () => {
      //           console.log("message");
      //         },
      //         submenu: [
      //           {
      //             label: "Trash1",
      //             icon: "fa fa-trash ",
      //             href: "./msg2.1.2",
      //             // level: "2.1.2.1",
      //             onclick: () => {
      //               console.log("message");
      //             },
      //           },
      //           {
      //             label: "Trash2",
      //             icon: "fa fa-trash ",
      //             href: "./msg2.1.2.2",
      //             // level: "2.1.2.2",
      //             iconClosed: <i className="fa fa-caret-right" />,
      //             iconOpened: <i className="fa fa-caret-down" />,
      //             onclick: () => {
      //               console.log("message");
      //             },
      //             submenu: [
      //               {
      //                 label: "Trash2.1",
      //                 icon: "fa fa-trash ",
      //                 href: "./msg2.1.2",
      //                 // level: "2.1.2.1",
      //                 onclick: () => {
      //                   console.log("message");
      //                 },
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     label: "Hmail",
      //     icon: "fa fa-envelope",
      //     //href: "./msg2.1",
      //     // iconClosed: <i className="fa fa-caret-right" />,
      //     // iconOpened: <i className="fa fa-caret-down" />,
      //     // level: "2.1",
      //     onclick: () => {
      //       console.log("gmail");
      //     },
      //     submenu: [
      //       {
      //         label: "Sent",
      //         icon: "fa fa-inbox ",
      //         href: "./msg2.1.1",
      //         // level: "2.1.1",
      //         onclick: () => {
      //           console.log("message");
      //         },
      //       },
      //       {
      //         label: "Trash",
      //         icon: "fa fa-trash ",
      //         href: "./msg2.1.2",
      //         // level: "2.1.2",
      //         iconClosed: <i className="fa fa-caret-right" />,
      //         iconOpened: <i className="fa fa-caret-down" />,
      //         onclick: () => {
      //           console.log("message");
      //         },
      //         submenu: [
      //           {
      //             label: "Trash1",
      //             icon: "fa fa-trash",
      //             href: "./msg2.1.2",
      //             // level: "2.1.2.1",
      //             onclick: () => {
      //               console.log("message");
      //             },
      //           },
      //           {
      //             label: "Trash2",
      //             icon: "fa fa-address-book ",
      //             href: "./msg2.1.2.2",
      //             // level: "2.1.2.2",
      //             iconClosed: <i className="fa fa-caret-right" />,
      //             iconOpened: <i className="fa fa-caret-down" />,
      //             onclick: () => {
      //               console.log("message");
      //             },
      //             submenu: [
      //               {
      //                 label: "Trash2.1",
      //                 icon: "fa fa-address-book ",
      //                 href: "./msg2.1.2",
      //                 // level: "2.1.2.1",
      //                 onclick: () => {
      //                   console.log("message");
      //                 },
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     label: "WhatsApp",
      //     icon: "fa fa-whatsapp ",
      //     href: "./msg2.2",
      //     // level: "2.2",
      //     onclick: () => {
      //       console.log("message");
      //     },
      //   },
      //   {
      //     label: "instagram",
      //     icon: "fa fa-instagram ",
      //     href: "./msg2.3",
      //     // level: "2.3",
      //     onclick: () => {
      //       console.log("message");
      //     },
      //   },
      // ],
    },
    {
      label: "REGISTERED TEAMS",
      icon: "fa fa-bell",
      href: "./notification",
      // level: "1",
      onclick: () => {
        console.log("message");
      },
    },
    {
      label: "CREATE NEW TEAM",
      icon: "fa fa-user",
      href: "./profile",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      submenu: [
        {
          label: "User Profile",
          icon: "fa fa-address-book ",
          href: "./user",
          // level: "1.0",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "Insta Profile",
          icon: "fa fa-address-book ",
          href: "./insta",
          // level: "4.2",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "FB Profile",
          icon: "fa fa-address-book ",
          href: "./fb",
          // level: "4.3",
          onclick: () => {
            console.log("message");
          },
        },
      ],
    },
  ],

  [
    { title: "Heading1" },
    {
      label: "Home",
      icon: "fa fa-home ",
      href: "./menu1",
      // level: "1",
      tooltip: "Heading1",
      onclick: () => {
        console.log("home");
      },
    },
    {
      label: "Message",
      icon: "fa fa-envelope",
      //href: "./msg2",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      submenu: [
        {
          label: "Gmail",
          icon: "fa fa-inbox ",
          //href: "./msg2.1",
          iconClosed: <i className="fa fa-caret-right" />,
          iconOpened: <i className="fa fa-caret-down" />,
          // level: "2.1",
          onclick: () => {
            console.log("gmail");
          },
          submenu: [
            {
              label: "Sent",
              icon: "fa fa-inbox ",
              href: "./msg2.1.1",
              // level: "2.1.1",
              onclick: () => {
                console.log("message");
              },
            },
            {
              label: "Trash",
              icon: "fa fa-trash ",
              href: "./msg2.1.2",
              // level: "2.1.2",
              iconClosed: <i className="fa fa-caret-right" />,
              iconOpened: <i className="fa fa-caret-down" />,
              onclick: () => {
                console.log("message");
              },
              submenu: [
                {
                  label: "Trash1",
                  icon: "fa fa-trash ",
                  href: "./msg2.1.2",
                  // level: "2.1.2.1",
                  onclick: () => {
                    console.log("message");
                  },
                },
                {
                  label: "Trash2",
                  icon: "fa fa-trash ",
                  href: "./msg2.1.2.2",
                  // level: "2.1.2.2",
                  iconClosed: <i className="fa fa-caret-right" />,
                  iconOpened: <i className="fa fa-caret-down" />,
                  onclick: () => {
                    console.log("message");
                  },
                  submenu: [
                    {
                      label: "Trash2.1",
                      icon: "fa fa-trash ",
                      href: "./msg2.1.2",
                      // level: "2.1.2.1",
                      onclick: () => {
                        console.log("message");
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Hmail",
          icon: "fa fa-envelope",
          //href: "./msg2.1",
          // iconClosed: <i className="fa fa-caret-right" />,
          // iconOpened: <i className="fa fa-caret-down" />,
          // level: "2.1",
          onclick: () => {
            console.log("gmail");
          },
          submenu: [
            {
              label: "Sent",
              icon: "fa fa-inbox ",
              href: "./msg2.1.1",
              // level: "2.1.1",
              onclick: () => {
                console.log("message");
              },
            },
            {
              label: "Trash",
              icon: "fa fa-trash ",
              href: "./msg2.1.2",
              // level: "2.1.2",
              iconClosed: <i className="fa fa-caret-right" />,
              iconOpened: <i className="fa fa-caret-down" />,
              onclick: () => {
                console.log("message");
              },
              submenu: [
                {
                  label: "Trash1",
                  icon: "fa fa-trash",
                  href: "./msg2.1.2",
                  // level: "2.1.2.1",
                  onclick: () => {
                    console.log("message");
                  },
                },
                {
                  label: "Trash2",
                  icon: "fa fa-address-book ",
                  href: "./msg2.1.2.2",
                  // level: "2.1.2.2",
                  iconClosed: <i className="fa fa-caret-right" />,
                  iconOpened: <i className="fa fa-caret-down" />,
                  onclick: () => {
                    console.log("message");
                  },
                  submenu: [
                    {
                      label: "Trash2.1",
                      icon: "fa fa-address-book ",
                      href: "./msg2.1.2",
                      // level: "2.1.2.1",
                      onclick: () => {
                        console.log("message");
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "WhatsApp",
          icon: "fa fa-whatsapp ",
          href: "./msg2.2",
          // level: "2.2",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "instagram",
          icon: "fa fa-instagram ",
          href: "./msg2.3",
          // level: "2.3",
          onclick: () => {
            console.log("message");
          },
        },
      ],
    },
    {
      label: "Notification",
      icon: "fa fa-bell",
      href: "./notification",
      // level: "1",
      onclick: () => {
        console.log("message");
      },
    },
    {
      label: "Profile",
      icon: "fa fa-user",
      href: "./profile",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      submenu: [
        {
          label: "User Profile",
          icon: "fa fa-address-book ",
          href: "./user",
          // level: "1.0",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "Insta Profile",
          icon: "fa fa-address-book ",
          href: "./insta",
          // level: "4.2",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "FB Profile",
          icon: "fa fa-address-book ",
          href: "./fb",
          // level: "4.3",
          onclick: () => {
            console.log("message");
          },
        },
      ],
    },
  ],

  [
    { title: "Heading2" },
    {
      label: "Home2",
      icon: "fa fa-home",
      href: "./menu1",
      // level: "1",
      onclick: () => {
        console.log("message");
      },
    },
    {
      label: "Message2",
      icon: "fa fa-envelope ",
      href: "./msg2",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      submenu: [
        {
          label: "Gmail2",
          icon: "fa fa-inbox ",
          href: "./msg2.1",
          iconClosed: <i className="fa fa-caret-right" />,
          iconOpened: <i className="fa fa-caret-down" />,
          // level: "2.1",
          onclick: () => {
            console.log("message");
          },
          //   submenu: [
          //     {
          //       label: "Sent",
          //       icon: "fa fa-inbox ",
          //       href: "./msg2.1.1",
          //       // level: "2.1.1",
          //       onclick: () => {
          //         console.log("message");
          //       },
          //     },
          //     {
          //       label: "Trash",
          //       icon: "fa fa-trash ",
          //       href: "./msg2.1.2",
          //       // level: "2.1.2",
          //       onclick: () => {
          //         console.log("message");
          //       },
          //     },
          //   ],
        },
        {
          label: "WhatsApp2",
          icon: "fa fa-whatsapp ",
          href: "./msg2.2",
          // level: "2.2",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "instagram",
          icon: "fa fa-instagram ",
          href: "./msg2.3",
          // level: "2.3",
          onclick: () => {
            console.log("message");
          },
        },
      ],
    },
    {
      label: "Notification2",
      icon: "fa fa-bell",
      href: "./notification",
      // level: "1",
      onclick: () => {
        console.log("message");
      },
    },
    {
      label: "Profile2",
      icon: "fa fa-address-book",
      href: "./profile",
      iconClosed: <i className="fa fa-caret-right" />,
      iconOpened: <i className="fa fa-caret-down" />,
      // level: "1",
      onclick: () => {
        console.log("message");
      },
      submenu: [
        {
          label: "User Profile",
          icon: "fa fa-address-book ",
          href: "./user",

          // level: "4.1",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "Insta Profile",
          icon: "fa fa-address-book ",
          href: "./insta",
          // level: "4.2",
          onclick: () => {
            console.log("message");
          },
        },
        {
          label: "FB Profile",
          icon: "fa fa- ",
          href: "./fb",
          // level: "4.3",
          onclick: () => {
            console.log("message");
          },
        },
      ],
    },
  ],
];
