export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/add.svg",
    route: "/add-node",
    label: "Add node",
  },
];

export const utilLinks = [
  {
    imgURL: "/assets/router.svg",
    route:
      "http://wiki.trion.mk.ua/index.php?title=%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0_%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2",
    label: "Routers",
  },
  {
    imgURL: "/assets/prise.svg",
    route: "http://nktv.mk.ua/index.php/ua/internet/tseny",
    label: "Тарифы",
  },
  {
    imgURL: "/assets/user.svg",
    route: "https://stat.nktv.mk.ua/",
    label: "Кабинет",
  },
  {
    imgURL: "/assets/settings.svg",
    route: "http://192.168.1.1",
    label: "192.168.1.1",
  },
  {
    imgURL: "/assets/settings.svg",
    route: "http://192.168.0.1",
    label: "192.168.0.1",
  },
  {
    imgURL: "/assets/settings.svg",
    route: "http://192.168.1.254",
    label: "192.168.1.254",
  },
];

export const burgerLinks = [
  ...utilLinks,
  {
    imgURL: "/assets/zabbix.svg",
    route: `http://${process.env.ZABBIX_URL}`,
    label: "Карты сетей",
  },
  {
    imgURL: "/assets/orders.svg",
    route: `https://${process.env.PBS_URL}`,
    label: "Заявки",
  },
];

export const gwList = [
  { gw: "01" },
  { gw: "02" },
  { gw: "03" },
  { gw: "04" },
  { gw: "05" },
  { gw: "06" },
  { gw: "07" },
  { gw: "08" },
  { gw: "09" },
  { gw: "10" },
  { gw: "11" },
  { gw: "12" },
  { gw: "13" },
  { gw: "14" },
];
