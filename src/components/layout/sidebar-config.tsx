import {
  DashboardIcon,
  AnalyticIcon,
  SurveyIcon,
  InformationIcon,
  ProfileIcon,
  PermissionIcon,
} from "@/assets/icons";

export const SidebarMenu = [
  {
    key: "1",
    title: "",
    menu: [
      {
        label: "แดชบอร์ด",
        key: "dashbaord",
        icon: <DashboardIcon />,
        element: "",
      },
      {
        label: "วิเคราะห์ผล",
        key: "analytics",
        icon: <AnalyticIcon />,
      },
    ],
  },
  {
    key: "2",
    title: "การจัดการข้อมูล",
    menu: [
      {
        label: "การสำรวจ",
        path: "",
        key: "survey",
        icon: <SurveyIcon />,
      },
      {
        label: "ข้อมูลอื่นๆ",
        path: "",
        key: "information",
        icon: <InformationIcon />,
        children: [
          {
            label: "เส้นทางวิกฤต",
            path: "",
            key: "information-1",
          },
          {
            label: "ข้อมูลถนน",
            path: "",
            key: "information-2",
          },
          {
            label: "ข้อมูลผู้ประกอบการ",
            path: "",
            key: "information-3",
          },
          {
            label: "ข้อมูลหน่วยงาน",
            path: "",
            key: "information-4",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "การจัดการบัญชี",
    menu: [
      {
        label: "จัดการผู้ใช้",
        path: "",
        key: "management",
        icon: <ProfileIcon />,
      },
      {
        label: "การจัดการสิทธิ์",
        path: "",
        key: "permission",
        icon: <PermissionIcon />,
      },
    ],
  },
];
