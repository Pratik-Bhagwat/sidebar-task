import { SidebarMenuItemI } from "./types";

const sidebarItems: SidebarMenuItemI[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Products",
    subMenu: [
      {
        title: "All Products",
        link: "/products/all",
      },
      {
        title: "Add Product",
        link: "/products/add",
      },
      {
        title: "Categories",
        link: "/products/categories",
        subMenu: [
          {
            title: "Electronics",
            link: "/products/categories/electronics",
          },
          {
            title: "Clothing",
            link: "/products/categories/clothing",
          },
        ],
      },
    ],
  },
  {
    title: "Orders",
    link: "/orders",
  },
  {
    title: "Customers",
    link: "/customers",
  },
];

export { sidebarItems };
