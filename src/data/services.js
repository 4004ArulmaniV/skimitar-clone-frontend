import {
  FaMicrochip,
  FaIndustry,
  FaLaptopCode,
  FaRobot,
  FaNetworkWired,
  FaCogs,
  FaServer,
  FaBolt,
  FaShieldAlt,
  FaGlobe,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: "plc-programming",
    title: "PLC Programming",
    icon: FaMicrochip,
    shortDescription:
      "Professional PLC programming and industrial automation solutions.",
    features: [
      "Siemens PLC",
      "Delta PLC",
      "Mitsubishi PLC",
      "Allen Bradley PLC",
      "Machine Automation",
      "Industrial Process Automation",
    ],
  },

  {
    id: "scada-development",
    title: "SCADA Development",
    icon: FaServer,
    shortDescription:
      "Real-time industrial monitoring and supervisory control systems.",
    features: [
      "SCADA Design",
      "Real-time Monitoring",
      "Alarm Management",
      "Data Logging",
      "Remote Monitoring",
      "Industrial Reporting",
    ],
  },

  {
    id: "hmi-design",
    title: "HMI Design",
    icon: FaLaptopCode,
    shortDescription:
      "Modern Human Machine Interface development.",
    features: [
      "Touch Screen HMI",
      "Industrial Displays",
      "Operator Panels",
      "Dashboard Design",
      "Alarm Screens",
      "Production Monitoring",
    ],
  },

  {
    id: "vfd-programming",
    title: "VFD Programming",
    icon: FaBolt,
    shortDescription:
      "Variable Frequency Drive programming and commissioning.",
    features: [
      "Motor Speed Control",
      "Energy Saving",
      "Drive Configuration",
      "Commissioning",
      "Troubleshooting",
      "Maintenance",
    ],
  },

  {
    id: "industrial-automation",
    title: "Industrial Automation",
    icon: FaIndustry,
    shortDescription:
      "Complete factory and process automation solutions.",
    features: [
      "Factory Automation",
      "Production Line Automation",
      "Industrial Control",
      "Panel Design",
      "Commissioning",
      "Support",
    ],
  },

  {
    id: "embedded-systems",
    title: "Embedded Systems",
    icon: FaRobot,
    shortDescription:
      "Embedded hardware and firmware development.",
    features: [
      "Arduino",
      "Raspberry Pi",
      "Microcontrollers",
      "PCB Interfacing",
      "Sensor Integration",
      "Embedded C",
    ],
  },

  {
    id: "iot-solutions",
    title: "IoT Solutions",
    icon: FaGlobe,
    shortDescription:
      "Smart IoT solutions for industrial and commercial applications.",
    features: [
      "Cloud Connectivity",
      "Smart Monitoring",
      "Remote Control",
      "Industrial IoT",
      "Sensors",
      "Analytics",
    ],
  },

  {
    id: "control-panel",
    title: "Control Panel Design",
    icon: FaCogs,
    shortDescription:
      "Industrial electrical control panel design and manufacturing.",
    features: [
      "PLC Panels",
      "MCC Panels",
      "PCC Panels",
      "Control Wiring",
      "Panel Testing",
      "Installation",
    ],
  },

  {
    id: "electrical-solutions",
    title: "Industrial Electrical Solutions",
    icon: FaNetworkWired,
    shortDescription:
      "Electrical installation and industrial power solutions.",
    features: [
      "Power Distribution",
      "Electrical Maintenance",
      "Cable Routing",
      "Testing",
      "Troubleshooting",
      "Commissioning",
    ],
  },

  {
    id: "cctv",
    title: "CCTV & Surveillance",
    icon: FaShieldAlt,
    shortDescription:
      "Professional CCTV installation and security monitoring.",
    features: [
      "IP Cameras",
      "DVR",
      "NVR",
      "Remote Monitoring",
      "Access Control",
      "Maintenance",
    ],
  },

  {
    id: "web-development",
    title: "Web Development",
    icon: FaCode,
    shortDescription:
      "Responsive websites and modern web applications.",
    features: [
      "React",
      "Node.js",
      "MongoDB",
      "Responsive Design",
      "Admin Panel",
      "Deployment",
    ],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: FaChartLine,
    shortDescription:
      "SEO, social media and online marketing services.",
    features: [
      "SEO",
      "Google Ads",
      "Facebook Ads",
      "Instagram Marketing",
      "Content Marketing",
      "Analytics",
    ],
  },
];

export default services;