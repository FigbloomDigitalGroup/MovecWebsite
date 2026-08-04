import {
  FaMoneyCheckAlt,
  FaBell,
  FaNetworkWired,
  FaChartLine,
  FaTachometerAlt,
  FaShieldAlt,
} from "react-icons/fa";


  export const Features = [
    {
      icon: <FaMoneyCheckAlt />,
      title: "Automated Billing",
      description:
        "Instant M-Pesa Daraja connection. When a customer pays, the system automatically reconnects them automatically.",
    },

    {
      icon: <FaBell />,
      title: "Smart Reminders",
      description:
        "Send billing and suspension alerts via SMS and WhatsApp to improve collections.",
    },

    {
      icon: <FaNetworkWired />,
      title: "Works With Any Router",
      description:
        "Supports MikroTik, Ruijie, TP-Link, Huawei and built-in RADIUS integration.",
    },

    {
      icon: <FaChartLine />,
      title: "Live Dashboards",
      description:
        "Monitor PPPoE sessions, Hotspots, bandwidth usage and customer activity in real time.",
    },

    {
      icon: <FaTachometerAlt />,
      title: "Traffic Control",
      description:
        "Control bandwidth, queues and firewall policies for reliable internet delivery.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure Remote Access",
      description:
        "Access remote routers securely through encrypted WireGuard VPN tunnels.",
    },
  ];
