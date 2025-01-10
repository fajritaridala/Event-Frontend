import {
  CiBookmark,
  CiGrid41,
  CiSettings,
  CiShoppingTag,
  CiViewList,
  CiWallet,
} from "react-icons/ci";

// items sidebar for admin dashboard
const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <CiGrid41 />,
  },
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <CiViewList />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <CiBookmark />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <CiWallet />,
  },
  {
    key: "setting",
    label: "Setting",
    href: "/admin/setting",
    icon: <CiSettings />,
  },
];

// items sidebar for member dashboard
const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member/dashboard",
    icon: <CiGrid41 />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <CiWallet />,
  },
  {
    key: "setting",
    label: "Setting",
    href: "/member/setting",
    icon: <CiSettings />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };