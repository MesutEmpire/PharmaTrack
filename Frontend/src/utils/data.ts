import IconDashboard from "../icons/IconDashboard";
import IconProduct from "../icons/IconProduct";
import IconUser from "../icons/IconUser";
import IconLogout from "../icons/IconLogout";
import {
  setErrorExpiringProducts,
  setErrorLowInventoryProducts,
  setErrorProducts, setExpiringProducts,
  setLowInventoryProducts,
  setProducts
} from "../stores/productSlice";
import { setErrorSuppliers, setSuppliers } from "../stores/supplierSlice";
import { setErrorOrders, setOrders } from "../stores/orderSlice";
import { setErrorSales, setSales } from "../stores/saleSlice";
import { setErrorUsers, setUsers } from "../stores/userSlice";
import IconSupplier from "../icons/IconSupplier";
import IconOrder from "../icons/IconOrder";
import IconSale from "../icons/IconSales";
import React from "react";
import IconReport from "../icons/IconReport";
import IconInventory from "../icons/IconInventory";
import IconContact from "../icons/IconContact";

export const navlinks = [
  {
    tag: "Dashboard",
    link: "/admin",
    icon: IconDashboard,
  },
  {
    tag: "Inventory",
    link: "/admin/products",
    icon: IconInventory,
  },
  {
    tag: "Purchase",
    link: "/admin/suppliers",
    icon: IconSupplier,
  },
  {
    tag: "Suppliers Return",
    link: "/admin/orders",
    icon: IconOrder,
  },
  {
    tag: "Invoice",
    link: "/admin/sales",
    icon: IconSale,
  },
  {
    tag: "Sales",
    link: "/admin/users",
    icon: IconUser,
  },
  {
    tag: "Bill",
    link: "/admin/users",
    icon: IconUser,
  },
  {
    tag: "Customers",
    link: "/admin/users",
    icon: IconUser,
  },
  {
    tag: "Suppliers",
    link: "/admin/users",
    icon: IconUser,
  }
  // {
  //   "tag" : "Invoices",
  //   "link":"/admin/invoices"
  // }
];


// export const navlinks = [
//   {
//     tag: "Dashboard",
//     link: "/admin",
//     icon: IconDashboard,
//   },
//   {
//     tag: "Products",
//     link: "/admin/products",
//     icon: IconProduct,
//   },
//   {
//     tag: "Suppliers",
//     link: "/admin/suppliers",
//     icon: IconSupplier,
//   },
//   {
//     tag: "Orders",
//     link: "/admin/orders",
//     icon: IconOrder,
//   },
//   {
//     tag: "Sales",
//     link: "/admin/sales",
//     icon: IconSale,
//   },
//   {
//     tag: "Users",
//     link: "/admin/users",
//     icon: IconUser,
//   },
//   // {
//   //   "tag" : "Invoices",
//   //   "link":"/admin/invoices"
//   // }
// ];

const dashboard = [
  {
    id: 0,
    name: "products",
    expire_medicine: "",
  },
];

export const fetchData = [
  {
    tag: "product",
    store: setProducts,
    error: setErrorProducts,
  },
  {
    tag: "supplier",
    store: setSuppliers,
    error: setErrorSuppliers,
  },
  {
    tag: "purchaseOrder",
    store: setOrders,
    error: setErrorOrders,
  },
  {
    tag: "sale",
    store: setSales,
    error: setErrorSales,
  },
  {
    tag: "user",
    store: setUsers,
    error: setErrorUsers,
  },
  {
    tag: "expiring_product",
    store: setExpiringProducts,
    error: setErrorExpiringProducts,
  },
  {
    tag: "low_product",
    store: setLowInventoryProducts,
    error: setErrorLowInventoryProducts,
  },
];

export const partners = [
  {
    id: 0,
    src: "transistor.svg",
    alt: "Transistor",
  },
  {
    id: 1,
    src: "tuple.svg",
    alt: "Tuple",
  },
  {
    id: 2,
    src: "statickit.svg",
    alt: "StaticKit",
  },
  {
    id: 3,
    src: "mirage.svg",
    alt: "Mirage",
  },
  {
    id: 4,
    src: "laravel.svg",
    alt: "Laravel",
  },
  {
    id: 5,
    src: "statamic.svg",
    alt: "Statamic",
  },
];

export const features = [
  {
    id: 1,
    type: "Reporting",
    title:
      "Stay on top of things with always\n" +
      "  up-to-date reporting features.",
    description:
      "We talked about\n" +
      "reporting in the section above but we needed three items here, so mentioning it one more\n" +
      "time for posterity.",
    img: "profit-loss.webp",
    icon: IconReport,
  },
  {
    id: 2,
    type: "Inventory",
    title:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    description:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    img: "inventory.webp",
    icon: IconInventory,
  },
  {
    id: 3,
    type: "Contacts",
    title:
      "Organize all of your contacts, service providers, and invoices in one place.",
    description:
      "This\n" +
      "also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that\n" +
      "you do this, you’ll feel really organized and professional.",
    img: "contacts.webp",
    icon: IconContact,
  },
];
export const testimonials = [
  {
    id: 1,
    comment:
      "Pharma Track is so easy to use I\n" +
      "can’t help but wonder if it’s really doing the things the government expects me\n" +
      "to do.",
    name: "Sheryl Berge",
    position: "CEO at Lynch LLC",
    img: "test1.jpg",
  },
  {
    id: 2,
    comment:
      "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    name: "Amy Hahn",
    position: "Director at Velocity\n" + "Industries",
    img: "test2.jpg",
  },
  {
    id: 3,
    comment:
      "The best part about Pharma Track is\n" +
      "                                        every time I pay my employees, my bank balance doesn’t go down like it used to.\n" +
      "                                        Looking forward to spending this extra cash when I figure out why my card is\n" +
      "                                        being declined.",
    name: " Leland Kiehn",
    position: "Founder of Kiehn and Sons",
    img: "test3.jpg",
  },
  {
    id: 4,
    comment:
      "    The best part about Pharma Track is\n" +
      "    every time I pay my employees, my bank balance doesn’t go down like it used to.\n" +
      "    Looking forward to spending this extra cash when I figure out why my card is\n" +
      "being declined.",
    name: " Leland Kiehn",
    position: "Founder of Kiehn and Sons",
    img: "test4.jpg",
  },
  {
    id: 5,
    comment:
      "  There are so many things I had\n" +
      "    to do with my old software that I just don’t do at all with Pharma Track. Suspicious\n" +
      "  but I can’t say I don’t love it.",
    name: " Erin Powlowski",
    position: "COO at Armstrong Inc",
    img: "test5.jpg",
  },
  {
    id: 6,
    comment:
      " I used to have to remit tax to the EU and with Pharma Track I somehow don’t have to do that anymore. Nervous to travel there now though.",
    name: "    Peter Renolds",
    position: "Founder of West Inc",
    img: "test6.jpg",
  },
  {
    id: 7,
    comment:
      " This is the fourth email I’ve\n" +
      "sent to your support team. I am literally being held in jail for tax fraud.\n" +
      "    Please answer your damn emails, this is important.",
    name: "     Amy Hahn",
    position: "Director at Velocity\n" + "Industries",
    img: "test7.jpg",
  },
];

export const subscriptions = [
  {
    id: 0,
    type: "Starter",
    color: "bg-slate-900",
    price: "$10",
    description:
      "Good for anyone who is self-employed and just getting\n" + "started.",
    packages: [
      "Send 10 quotes and invoices",
      "Connect up to 2 bank accounts",
      "Track up to 15 expenses per month",
      "Manual payroll support",
      "Export up to 3 reports",
    ],
  },
  {
    id: 1,
    type: "Small business",
    color: "bg-secondary text-white",
    price: "$15",
    description: "Perfect for small / medium sized businesses.",
    packages: [
      " Send 25 quotes and invoices",
      "Connect up to 5 bank accounts",
      "Track up to 50 expenses per month",
      "Automated payroll support",
      "Export up to 12 reports",
      "Bulk reconcile transactions",
      "Track in multiple currencies",
    ],
  },
  {
    id: 2,
    type: "Enterprise",
    description: "For even the biggest enterprise companies.",
    color: "bg-slate-900",
    price: "$40",
    packages: [
      "Send unlimited quotes and invoices",
      " Connect up to 15 bank accounts",
      "Track up to 200 expenses per month",
      "Automated payroll support",
      "Export up to 25 reports, including TPS",
    ],
  },
];
