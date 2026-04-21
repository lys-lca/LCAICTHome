/**
 * glossary-data.js
 * ─────────────────────────────────────────────────────────────
 * LCA ICT — Glossary data: terms, abbreviations, definitions,
 * categories and category metadata.
 *
 * To add a new term:
 *   { term: "Full Name", abbr: "ABBR", def: "Definition here.", tags: ["category"] }
 *   Set abbr: null if the term has no abbreviation.
 *   Tags must match a key in CATEGORIES below.
 *
 * To add a new category:
 *   Add an entry to CATEGORIES with label, color, border, bg.
 *   The filter button will appear automatically — no other changes needed.
 * ─────────────────────────────────────────────────────────────
 */

// ── CATEGORY DEFINITIONS ─────────────────────────────────────
const CATEGORIES = {
  hardware: {
    label: "Hardware",
    color: "#ff9f6b",
    border: "rgba(255,159,107,0.25)",
    bg:     "rgba(255,159,107,0.08)"
  },
  software: {
    label: "Software",
    color: "#6b8cff",
    border: "rgba(107,140,255,0.25)",
    bg:     "rgba(107,140,255,0.08)"
  },
  networking: {
    label: "Networking",
    color: "#b06bff",
    border: "rgba(176,107,255,0.25)",
    bg:     "rgba(176,107,255,0.08)"
  },
  internet: {
    label: "Internet",
    color: "#0ea5e9",
    border: "rgba(14,165,233,0.3)",
    bg:     "rgba(14,165,233,0.08)"
  },
  storage: {
    label: "Storage",
    color: "#d4a017",
    border: "rgba(212,160,23,0.3)",
    bg:     "rgba(212,160,23,0.08)"
  },
  input: {
    label: "Input",
    color: "#4fffb0",
    border: "rgba(79,255,176,0.25)",
    bg:     "rgba(79,255,176,0.08)"
  },
  output: {
    label: "Output",
    color: "#ff6b6b",
    border: "rgba(255,107,107,0.25)",
    bg:     "rgba(255,107,107,0.08)"
  },
  security: {
    label: "Security",
    color: "#ef4444",
    border: "rgba(239,68,68,0.25)",
    bg:     "rgba(239,68,68,0.08)"
  },
  data: {
    label: "Data",
    color: "#22c55e",
    border: "rgba(34,197,94,0.3)",
    bg:     "rgba(34,197,94,0.08)"
  },
  cloud: {
    label: "Cloud",
    color: "#38bdf8",
    border: "rgba(56,189,248,0.3)",
    bg:     "rgba(56,189,248,0.08)"
  },
  wordprocessing: {
    label: "Word Processing",
    color: "#e8973a",
    border: "rgba(232,151,58,0.3)",
    bg:     "rgba(232,151,58,0.08)"
  },
  emerging: {
    label: "Emerging Tech",
    color: "#c084fc",
    border: "rgba(192,132,252,0.3)",
    bg:     "rgba(192,132,252,0.08)"
  },
  management: {
    label: "IT Management",
    color: "#94a3b8",
    border: "rgba(148,163,184,0.3)",
    bg:     "rgba(148,163,184,0.08)"
  },
  units: {
    label: "Units",
    color: "#94a3b8",
    border: "rgba(148,163,184,0.2)",
    bg:     "rgba(148,163,184,0.06)"
  }
};

// ── GLOSSARY TERMS ────────────────────────────────────────────

const GLOSSARY = [

  // ── HARDWARE / GENERAL COMPUTING ──────────────────────────
  {
    term: "Central Processing Unit",
    abbr: "CPU",
    def:  "The main chip in a computer that carries out instructions and processes data. Often called the 'brain' of the computer.",
    tags: ["hardware"]
  },
  {
    term: "Personal Computer",
    abbr: "PC",
    def:  "A general-purpose computer designed for individual use, typically running an operating system like Windows or macOS.",
    tags: ["hardware"]
  },
  {
    term: "Visual Display Unit",
    abbr: "VDU",
    def:  "The screen or monitor used to display output from a computer. Also called a monitor.",
    tags: ["hardware", "output"]
  },
  {
    term: "Monitor",
    abbr: null,
    def:  "The screen device that displays text, images and video output from a computer. Modern monitors are LCD or OLED.",
    tags: ["hardware", "output"]
  },
  {
    term: "Cathode Ray Tube",
    abbr: "CRT",
    def:  "An older type of monitor that used a vacuum tube to project images on screen. Now replaced by flat-panel LCD/OLED displays.",
    tags: ["hardware", "output"]
  },
  {
    term: "Pixel",
    abbr: null,
    def:  "The smallest individual element of a digital image or screen display. Short for 'picture element'. Screen resolution is measured in pixels.",
    tags: ["hardware", "output"]
  },
  {
    term: "Resolution",
    abbr: null,
    def:  "The number of pixels on a screen, measured as width × height (e.g. 1920×1080). Higher resolution means sharper, more detailed images.",
    tags: ["hardware", "output"]
  },
  {
    term: "Dots Per Inch",
    abbr: "DPI",
    def:  "A measure of print or screen resolution — how many individual dots fit in one inch. Higher DPI means sharper output.",
    tags: ["hardware", "output"]
  },
  {
    term: "Computer Speed",
    abbr: null,
    def:  "How fast a computer can process instructions, measured in MHz (megahertz) or GHz (gigahertz). Affected by CPU speed and RAM.",
    tags: ["hardware"]
  },
  {
    term: "Ergonomics",
    abbr: null,
    def:  "The study of designing computer equipment and workspaces to suit the human body, reducing strain and injury for users.",
    tags: ["hardware"]
  },
  {
    term: "Personal Digital Assistant",
    abbr: "PDA",
    def:  "A handheld device that combined calendar, contacts and basic computing functions. The forerunner of modern smartphones.",
    tags: ["hardware"]
  },
  {
    term: "Megahertz",
    abbr: "MHz",
    def:  "A unit of processor clock speed equal to one million cycles per second. Modern computers are measured in GHz (gigahertz).",
    tags: ["hardware", "units"]
  },
  {
    term: "Million Instructions Per Second",
    abbr: "MIPS",
    def:  "A measure of a processor's performance — how many million simple instructions it can execute every second.",
    tags: ["hardware", "units"]
  },
  {
    term: "Hardware",
    abbr: null,
    def:  "The physical components of a computer system that you can touch — CPU, RAM, keyboard, monitor, hard drive etc.",
    tags: ["hardware"]
  },
  {
    term: "Uninterruptible Power Supply",
    abbr: "UPS",
    def:  "A battery backup providing emergency power to computers and networking equipment during power outages or surges, giving time to save work and shut down safely.",
    tags: ["hardware"]
  },
  {
    term: "Network Attached Storage",
    abbr: "NAS",
    def:  "A dedicated file storage device connected to a network, allowing multiple users to store and access data from a centralised location. Cost-effective shared storage for small to medium offices.",
    tags: ["hardware", "storage", "networking"]
  },

  // ── MEMORY & STORAGE ──────────────────────────────────────
  {
    term: "Random Access Memory",
    abbr: "RAM",
    def:  "Temporary (volatile) memory that a computer uses to store data currently in use. Contents are lost when the computer is switched off. More RAM allows running more applications simultaneously.",
    tags: ["hardware", "storage"]
  },
  {
    term: "Read Only Memory",
    abbr: "ROM",
    def:  "Non-volatile memory that holds permanent instructions (like startup code). Contents are kept when power is off and cannot normally be changed.",
    tags: ["hardware", "storage"]
  },
  {
    term: "Memory",
    abbr: null,
    def:  "The storage space inside a computer for holding data and programs. Includes RAM (temporary) and ROM (permanent).",
    tags: ["hardware", "storage"]
  },
  {
    term: "Main Memory",
    abbr: null,
    def:  "The primary working memory of a computer, usually RAM. Directly accessible by the CPU for currently running programs.",
    tags: ["hardware", "storage"]
  },
  {
    term: "Volatile / Non-Volatile",
    abbr: null,
    def:  "Volatile memory (e.g. RAM) loses its data when power is off. Non-volatile memory (e.g. ROM, SSD, hard disk) keeps data without power.",
    tags: ["storage"]
  },
  {
    term: "Bit",
    abbr: "b",
    def:  "The smallest unit of digital data — either a 0 or a 1 (binary digit).",
    tags: ["storage", "units"]
  },
  {
    term: "Kilobyte",
    abbr: "KB",
    def:  "A unit of digital storage equal to 1,024 bytes. Used to measure small files.",
    tags: ["storage", "units"]
  },
  {
    term: "Megabyte",
    abbr: "MB",
    def:  "A unit of digital storage equal to approximately one million bytes (1,024 KB). Used for documents and images.",
    tags: ["storage", "units"]
  },
  {
    term: "Gigabyte",
    abbr: "GB",
    def:  "A unit of digital storage equal to approximately one billion bytes (1,024 MB). Used for hard drives and USB sticks.",
    tags: ["storage", "units"]
  },
  {
    term: "Terabyte",
    abbr: "TB",
    def:  "A unit of digital storage equal to 1,024 GB. Used for large hard drives and cloud storage.",
    tags: ["storage", "units"]
  },
  {
    term: "Storage Device",
    abbr: null,
    def:  "Any device used to store data permanently, such as a hard drive, SSD, USB stick, or optical disc.",
    tags: ["storage"]
  },
  {
    term: "Hard Disk Drive",
    abbr: "HDD",
    def:  "A traditional magnetic storage device using spinning disks. Slower than SSDs but offers higher capacity for lower cost. Widely used for backups and bulk storage.",
    tags: ["storage", "hardware"]
  },
  {
    term: "Solid State Drive",
    abbr: "SSD",
    def:  "A modern storage device with no moving parts that uses flash memory. Significantly faster than HDDs, improving boot times and application loading. The preferred choice for business computers.",
    tags: ["storage", "hardware"]
  },
  {
    term: "CD-ROM",
    abbr: "CD-ROM",
    def:  "Compact Disc Read-Only Memory. An optical disc that stores data and can be read but not written to by standard drives.",
    tags: ["storage"]
  },
  {
    term: "WORM CD",
    abbr: "WORM",
    def:  "Write Once, Read Many. An optical disc where data can be written once and then only read. Used for archiving.",
    tags: ["storage"]
  },
  {
    term: "USB Flash Drive",
    abbr: "USB",
    def:  "A portable storage device that plugs into a USB port. Also called a memory stick or pen drive. Replaced floppy disks for portable storage.",
    tags: ["storage"]
  },
  {
    term: "Cloud Storage",
    abbr: null,
    def:  "Storing files on remote servers accessed over the internet (e.g. Google Drive, OneDrive, iCloud). Files are available from any device and protected against local hardware failure.",
    tags: ["storage", "cloud"]
  },
  {
    term: "Computer Backup",
    abbr: null,
    def:  "A copy of important data stored separately (e.g. on an external drive or cloud) to protect against data loss from hardware failure, ransomware or accidental deletion.",
    tags: ["storage"]
  },
  {
    term: "Format",
    abbr: null,
    def:  "To prepare a storage device for use by creating a file system, which erases all existing data. Also refers to the layout and presentation of a document.",
    tags: ["storage", "software"]
  },

  // ── SOFTWARE & OPERATING SYSTEM ───────────────────────────
  {
    term: "Operating System",
    abbr: "OS",
    def:  "The core software that manages all hardware and other software on a computer. The foundation everything else runs on. Examples: Windows, macOS, Android, iOS, Linux.",
    tags: ["software"]
  },
  {
    term: "Disk Operating System",
    abbr: "DOS",
    def:  "An early text-based operating system that users controlled by typing commands. Now largely historical, though command-line tools based on it still exist in Windows.",
    tags: ["software"]
  },
  {
    term: "Software",
    abbr: null,
    def:  "Programs and applications that run on a computer. Divided into system software (OS) and application software (Word, Excel etc.).",
    tags: ["software"]
  },
  {
    term: "Programme / Application",
    abbr: null,
    def:  "A set of instructions written in a programming language that tells the computer what to do. Also called software or an app.",
    tags: ["software"]
  },
  {
    term: "Custom Programs",
    abbr: null,
    def:  "Software written specifically for one organisation's needs rather than bought off-the-shelf. Also called bespoke software. More expensive but fits exact requirements.",
    tags: ["software"]
  },
  {
    term: "What You See Is What You Get",
    abbr: "WYSIWYG",
    def:  "A word-processing feature where the screen shows exactly how the printed document will look, including fonts, sizes and layout.",
    tags: ["software", "wordprocessing"]
  },
  {
    term: "Compatible / Incompatible",
    abbr: null,
    def:  "Compatible devices or software can work together. Incompatible items cannot work with each other without conversion or adaptation.",
    tags: ["software"]
  },
  {
    term: "App / Mobile Application",
    abbr: null,
    def:  "Software designed for smartphones and tablets. Apps are downloaded from stores like the Apple App Store or Google Play.",
    tags: ["software"]
  },
  {
    term: "Open Source",
    abbr: null,
    def:  "Software with source code freely available for anyone to view, modify and distribute. Often free or low-cost, with community-driven development. Examples: Linux, WordPress, Firefox.",
    tags: ["software"]
  },
  {
    term: "Proprietary Software",
    abbr: null,
    def:  "Software owned by a company with restricted access to source code, typically requiring paid licences to use. Usually includes vendor support. Examples: Microsoft Windows, Adobe Creative Suite.",
    tags: ["software"]
  },
  {
    term: "Legacy System",
    abbr: null,
    def:  "Outdated technology, software or hardware still in use because it performs critical functions, despite being old or unsupported. Creates security risks and limits integration with modern tools.",
    tags: ["software", "management"]
  },
  {
    term: "Application Programming Interface",
    abbr: "API",
    def:  "A set of rules and protocols allowing different software applications to communicate and share data with each other. Enables integrations between business tools, e.g. connecting a CRM to an email marketing platform.",
    tags: ["software", "internet"]
  },
  {
    term: "Customer Relationship Management",
    abbr: "CRM",
    def:  "Software for managing interactions with customers, tracking sales, communications and customer data. Centralises information to improve sales and service. Examples: Salesforce, HubSpot, Microsoft Dynamics.",
    tags: ["software", "data"]
  },
  {
    term: "Enterprise Resource Planning",
    abbr: "ERP",
    def:  "Integrated software managing core business processes like accounting, inventory, HR and supply chain in one system. Eliminates data silos and provides real-time organisational visibility. Examples: SAP, Oracle NetSuite.",
    tags: ["software", "data"]
  },
  {
    term: "Security Patch",
    abbr: null,
    def:  "A software update released by a vendor to fix security vulnerabilities or bugs. Unpatched systems are a top entry point for cyberattacks — regular patching is essential.",
    tags: ["software", "security"]
  },

  // ── INPUT DEVICES ─────────────────────────────────────────
  {
    term: "Input Device",
    abbr: null,
    def:  "Any hardware used to enter data into a computer. Examples: keyboard, mouse, touchscreen, scanner, microphone, webcam.",
    tags: ["input", "hardware"]
  },
  {
    term: "Keyboard",
    abbr: null,
    def:  "The most common input device, used to type text and commands into a computer. Can be physical or on-screen (virtual).",
    tags: ["input", "hardware"]
  },
  {
    term: "Mouse",
    abbr: null,
    def:  "A pointing device used to move a cursor on screen and select items by clicking. Can be wired, wireless or a trackpad.",
    tags: ["input", "hardware"]
  },
  {
    term: "Touchscreen",
    abbr: null,
    def:  "A display screen that acts as both output and input — the user interacts directly by touching the screen with fingers or a stylus.",
    tags: ["input", "hardware"]
  },
  {
    term: "Light Pen",
    abbr: null,
    def:  "An input device shaped like a pen that can detect light on a screen, used to draw or select items directly on a monitor.",
    tags: ["input", "hardware"]
  },
  {
    term: "Scanner",
    abbr: null,
    def:  "An input device that converts a physical document or image into digital format so it can be stored or edited on a computer.",
    tags: ["input", "hardware"]
  },
  {
    term: "Barcode / Wand Reader",
    abbr: null,
    def:  "An input device that reads the black and white stripes (barcode) on products to retrieve stored information about price or stock.",
    tags: ["input", "hardware"]
  },
  {
    term: "Microphone",
    abbr: null,
    def:  "An input device that converts sound into digital data. Used for voice calls, voice recognition, recording audio and online meetings.",
    tags: ["input", "hardware"]
  },
  {
    term: "Webcam",
    abbr: null,
    def:  "A camera connected to or built into a computer used to capture video and images, commonly for video conferencing.",
    tags: ["input", "hardware"]
  },
  {
    term: "Optical Character Recognition",
    abbr: "OCR",
    def:  "Software that reads printed or handwritten text from a scanned image and converts it into editable digital text.",
    tags: ["input", "software"]
  },
  {
    term: "Magnetic Ink Character Recognition",
    abbr: "MICR",
    def:  "A technology that reads special magnetic ink characters, commonly found on bank cheques to identify account numbers.",
    tags: ["input", "hardware"]
  },
  {
    term: "Multiple Choice Question",
    abbr: "MCQ",
    def:  "A type of question with several possible answers to choose from. Common in computerised tests and assessments.",
    tags: ["input"]
  },
  {
    term: "Point of Sale Terminal",
    abbr: "POS",
    def:  "The electronic system at a shop checkout used to process sales, including card payments and stock management.",
    tags: ["input", "hardware"]
  },

  // ── OUTPUT DEVICES ────────────────────────────────────────
  {
    term: "Output Device",
    abbr: null,
    def:  "Any hardware that presents processed data to the user. Examples: monitor, printer, speakers, projector.",
    tags: ["output", "hardware"]
  },
  {
    term: "Impact Printer",
    abbr: null,
    def:  "A printer that forms characters by physically striking an ink ribbon against paper. Example: dot matrix printer. Noisy but cheap to run.",
    tags: ["output", "hardware"]
  },
  {
    term: "Non-Impact Printer",
    abbr: null,
    def:  "A printer that forms images without striking the paper. Examples: inkjet and laser printers. Quieter and higher quality.",
    tags: ["output", "hardware"]
  },
  {
    term: "Dot Matrix Printer",
    abbr: null,
    def:  "An impact printer that creates characters from a grid of dots using tiny pins. Can print multi-part forms. Now mostly obsolete.",
    tags: ["output", "hardware"]
  },
  {
    term: "Inkjet Printer",
    abbr: null,
    def:  "A printer that sprays tiny droplets of ink onto paper. Affordable and good for colour printing at home.",
    tags: ["output", "hardware"]
  },
  {
    term: "Laser Printer",
    abbr: null,
    def:  "A high-speed printer that uses a laser beam and toner powder to produce sharp, high-quality output. Common in offices.",
    tags: ["output", "hardware"]
  },
  {
    term: "Thermal Printer",
    abbr: null,
    def:  "A printer that uses heat to produce an image on special heat-sensitive paper. Used for receipts and labels.",
    tags: ["output", "hardware"]
  },
  {
    term: "3D Printer",
    abbr: null,
    def:  "A device that creates three-dimensional solid objects layer by layer from a digital design. Used in engineering, medicine and design.",
    tags: ["output", "hardware"]
  },
  {
    term: "Plotter",
    abbr: null,
    def:  "An output device that draws vector graphics using a pen moving over paper. Used for large technical drawings and engineering plans.",
    tags: ["output", "hardware"]
  },
  {
    term: "Pages Per Minute",
    abbr: "PPM",
    def:  "A measure of printer speed — how many pages a printer can produce in one minute.",
    tags: ["output", "units"]
  },
  {
    term: "Speakers",
    abbr: null,
    def:  "Output devices that convert digital audio signals into sound. Built into most laptops, phones and monitors.",
    tags: ["output", "hardware"]
  },
  {
    term: "Projector",
    abbr: null,
    def:  "An output device that projects a computer screen image onto a wall or screen. Widely used in classrooms and presentations.",
    tags: ["output", "hardware"]
  },

  // ── DATA & INFORMATION ────────────────────────────────────
  {
    term: "Data",
    abbr: null,
    def:  "Raw facts and figures that have no meaning on their own, e.g. '27, Red, 9'. Data becomes information when given context.",
    tags: ["data"]
  },
  {
    term: "Information",
    abbr: null,
    def:  "Data that has been processed and given context so it is meaningful and useful, e.g. 'Order No. 27: 9 red items'.",
    tags: ["data"]
  },
  {
    term: "Information Processing",
    abbr: null,
    def:  "The cycle of collecting data (input), performing operations on it (process) and producing results (output).",
    tags: ["data"]
  },
  {
    term: "Database",
    abbr: null,
    def:  "An organised collection of structured data stored electronically, managed by software to allow easy access, management and updating. Foundation of most business applications.",
    tags: ["data", "software"]
  },
  {
    term: "Spreadsheet",
    abbr: null,
    def:  "A software application (e.g. Microsoft Excel) that organises data in rows and columns, used for calculations, charts and analysis.",
    tags: ["data", "software"]
  },
  {
    term: "Big Data",
    abbr: null,
    def:  "Extremely large datasets that require specialised tools to store, process and analyse. Used by organisations to understand customer behaviour, optimise operations and make data-driven decisions.",
    tags: ["data", "emerging"]
  },
  {
    term: "Business Intelligence",
    abbr: "BI",
    def:  "Technologies and strategies for analysing business data to support better decision-making. Transforms raw data into meaningful insights through dashboards and reports. Examples: Power BI, Tableau.",
    tags: ["data", "software"]
  },
  {
    term: "Data Migration",
    abbr: null,
    def:  "The process of transferring data from one system, format or location to another. Critical when upgrading systems or moving to the cloud, but carries risks if not carefully planned.",
    tags: ["data", "management"]
  },
  {
    term: "Data Breach",
    abbr: null,
    def:  "Unauthorised access to confidential data, resulting in information being viewed, stolen or used without permission. Can cause major financial loss, legal liability and reputational damage.",
    tags: ["data", "security"]
  },
  {
    term: "General Data Protection Regulation",
    abbr: "GDPR",
    def:  "European Union regulation governing how businesses collect, store and use personal data. Affects any organisation dealing with EU customers, with significant fines for non-compliance.",
    tags: ["data", "security"]
  },
  {
    term: "Universal Product Code",
    abbr: "UPC",
    def:  "A barcode standard used on retail products worldwide to uniquely identify items for checkout scanning and stock control.",
    tags: ["data"]
  },

  // ── NETWORKING ────────────────────────────────────────────
  {
    term: "Network",
    abbr: null,
    def:  "Two or more computers connected together to share resources, files and an internet connection.",
    tags: ["networking"]
  },
  {
    term: "Local Area Network",
    abbr: "LAN",
    def:  "A network connecting computers in a small area such as a school, home or office building.",
    tags: ["networking"]
  },
  {
    term: "Wide Area Network",
    abbr: "WAN",
    def:  "A network connecting computers over a large geographical area, such as different cities or countries. The internet is the largest WAN.",
    tags: ["networking"]
  },
  {
    term: "Bus Network",
    abbr: null,
    def:  "A network layout where all computers connect to a single central cable (the bus). If the cable fails, the whole network goes down.",
    tags: ["networking"]
  },
  {
    term: "Ring Network",
    abbr: null,
    def:  "A network layout where computers are connected in a closed loop. Data travels around the ring in one direction.",
    tags: ["networking"]
  },
  {
    term: "Star Network",
    abbr: null,
    def:  "A network layout where all computers connect to a central hub or switch. The most common type in schools and offices. If one device fails, only that device is affected.",
    tags: ["networking"]
  },
  {
    term: "Server",
    abbr: null,
    def:  "A powerful computer that processes requests and delivers data to other computers over a network. Hosts websites, stores files, runs applications and manages network resources.",
    tags: ["networking", "hardware"]
  },
  {
    term: "Router",
    abbr: null,
    def:  "A networking device that connects your local network to the internet and directs data between networks. The central hub for home and office internet connections.",
    tags: ["networking", "hardware"]
  },
  {
    term: "Switch",
    abbr: null,
    def:  "A networking device that connects multiple devices on a local network and forwards data only to the specific device that needs it. More efficient than older hubs.",
    tags: ["networking", "hardware"]
  },
  {
    term: "Wi-Fi",
    abbr: null,
    def:  "A wireless networking technology that allows devices to connect to a network and the internet without cables, using radio waves. Common standards include Wi-Fi 5 and Wi-Fi 6.",
    tags: ["networking"]
  },
  {
    term: "Bluetooth",
    abbr: null,
    def:  "A short-range wireless technology used to connect devices (e.g. phones to headphones, keyboards to computers) over about 10 metres.",
    tags: ["networking"]
  },
  {
    term: "Connectivity",
    abbr: null,
    def:  "The ability of devices or systems to link and communicate with each other, either through cables or wirelessly.",
    tags: ["networking"]
  },
  {
    term: "Video Conferencing",
    abbr: null,
    def:  "Using the internet to hold real-time meetings with video and audio between people in different locations. Examples: Zoom, Microsoft Teams, Google Meet.",
    tags: ["networking", "internet"]
  },
  {
    term: "Bandwidth",
    abbr: null,
    def:  "The maximum amount of data that can be transmitted over an internet connection in a given time, measured in Mbps or Gbps. Determines how fast data is downloaded or uploaded.",
    tags: ["networking", "units"]
  },
  {
    term: "IP Address",
    abbr: "IP",
    def:  "A unique numerical label assigned to every device connected to a network, like a mailing address for internet communications. Allows devices to find and communicate with each other.",
    tags: ["networking", "internet"]
  },
  {
    term: "Domain Name System",
    abbr: "DNS",
    def:  "The 'phone book' of the internet, translating human-readable domain names (like google.com) into IP addresses that computers use. Makes the internet usable without memorising numbers.",
    tags: ["networking", "internet"]
  },
  {
    term: "Latency",
    abbr: null,
    def:  "The delay between sending a request and receiving a response, measured in milliseconds. Low latency is critical for video conferencing, gaming and online collaboration tools.",
    tags: ["networking", "units"]
  },
  {
    term: "Virtual Local Area Network",
    abbr: "VLAN",
    def:  "A logical grouping of devices on a network that behave as if they are on the same physical network, even if they are not. Improves security by separating traffic (e.g. guest Wi-Fi from staff network).",
    tags: ["networking"]
  },
  {
    term: "Virtual Private Network",
    abbr: "VPN",
    def:  "A secure, encrypted connection between your device and the internet, routing traffic through a private server. Protects sensitive data when employees work remotely or use public Wi-Fi.",
    tags: ["networking", "security"]
  },

  // ── INTERNET ──────────────────────────────────────────────
  {
    term: "Internet",
    abbr: null,
    def:  "A global network of networks connecting billions of computers worldwide, allowing data, email, websites and services to be shared.",
    tags: ["internet"]
  },
  {
    term: "World Wide Web",
    abbr: "WWW",
    def:  "A system of web pages and websites accessed through the internet using a web browser. The web is part of the internet — not the same thing.",
    tags: ["internet"]
  },
  {
    term: "HyperText Markup Language",
    abbr: "HTML",
    def:  "The standard language used to create and structure web pages. Defines headings, paragraphs, links and images on a page.",
    tags: ["internet", "software"]
  },
  {
    term: "HyperText Transfer Protocol",
    abbr: "HTTP / HTTPS",
    def:  "The set of rules (protocol) used to transfer web pages from a server to a browser. HTTPS is the secure encrypted version — indicated by a padlock in your browser.",
    tags: ["internet", "security"]
  },
  {
    term: "Uniform Resource Locator",
    abbr: "URL",
    def:  "The complete web address of a page on the internet, e.g. https://www.scoilnet.ie. Tells a browser exactly where to find a resource.",
    tags: ["internet"]
  },
  {
    term: "Internet Service Provider",
    abbr: "ISP",
    def:  "A company that provides customers with access to the internet, e.g. Eir, Virgin Media, Three. You pay them for a broadband or mobile data plan.",
    tags: ["internet"]
  },
  {
    term: "Modem",
    abbr: "MODEM",
    def:  "A device that connects a computer to the internet through a telephone line. Stands for Modulator-Demodulator. Modern broadband routers typically include modem functionality.",
    tags: ["internet", "hardware", "networking"]
  },
  {
    term: "Integrated Services Digital Network",
    abbr: "ISDN",
    def:  "An older digital telephone network standard that allowed data and voice transmission. Now largely replaced by broadband and fibre connections.",
    tags: ["internet"]
  },
  {
    term: "Uploading",
    abbr: null,
    def:  "Sending a file from your device to a server or website on the internet, e.g. uploading a photo to social media or submitting an assignment online.",
    tags: ["internet"]
  },
  {
    term: "Downloading",
    abbr: null,
    def:  "Copying or receiving a file from a server or the internet onto your device, e.g. downloading a song, app or document.",
    tags: ["internet"]
  },
  {
    term: "Email",
    abbr: null,
    def:  "Electronic mail. Messages sent and received over the internet. Can include attachments like documents or images. One of the most widely used internet services.",
    tags: ["internet"]
  },
  {
    term: "Social Media",
    abbr: null,
    def:  "Online platforms where users create, share and interact with content. Examples: Instagram, TikTok, X (Twitter), Facebook, LinkedIn.",
    tags: ["internet"]
  },
  {
    term: "Podcast",
    abbr: null,
    def:  "A digital audio programme available on the internet for streaming or download. Often released as a series of episodes on topics from education to entertainment.",
    tags: ["internet"]
  },
  {
    term: "Streaming",
    abbr: null,
    def:  "Playing audio or video content directly from the internet without fully downloading it first. Examples: Netflix, Spotify, YouTube.",
    tags: ["internet"]
  },
  {
    term: "Search Engine",
    abbr: null,
    def:  "A web service that indexes the internet and returns relevant results to a user's query. Examples: Google, Bing, DuckDuckGo.",
    tags: ["internet"]
  },
  {
    term: "Cookie",
    abbr: null,
    def:  "A small file stored on your device by a website to remember preferences, login details or browsing behaviour. Under GDPR, websites must ask permission before storing non-essential cookies.",
    tags: ["internet", "security"]
  },

  // ── CLOUD COMPUTING ───────────────────────────────────────
  {
    term: "Cloud Computing",
    abbr: null,
    def:  "Delivering computing services (servers, storage, databases, software) over the internet instead of from local computers. Allows businesses to access technology without major upfront hardware investment.",
    tags: ["cloud"]
  },
  {
    term: "Software as a Service",
    abbr: "SaaS",
    def:  "Software delivered over the internet on a subscription basis, rather than installed on individual computers. Eliminates installation and maintenance hassles — accessible from any device. Examples: Microsoft 365, Slack.",
    tags: ["cloud", "software"]
  },
  {
    term: "Infrastructure as a Service",
    abbr: "IaaS",
    def:  "Renting IT infrastructure (servers, storage, networks) from a cloud provider instead of owning physical data centres. Provides enterprise infrastructure without capital expenses. Examples: Amazon Web Services, Microsoft Azure.",
    tags: ["cloud"]
  },
  {
    term: "Platform as a Service",
    abbr: "PaaS",
    def:  "A cloud platform providing tools and services for developers to build, test and deploy applications without managing underlying infrastructure. Examples: Heroku, Google App Engine.",
    tags: ["cloud", "software"]
  },
  {
    term: "Hybrid Cloud",
    abbr: null,
    def:  "A combination of on-premises infrastructure, private cloud and public cloud services working together. Lets organisations keep sensitive data on-premises while using public cloud for other workloads.",
    tags: ["cloud"]
  },
  {
    term: "Virtual Machine",
    abbr: "VM",
    def:  "A software-based computer running inside a physical computer, with its own operating system and applications isolated from other VMs. Allows multiple 'computers' to run on one physical server.",
    tags: ["cloud", "software"]
  },
  {
    term: "Backup and Disaster Recovery",
    abbr: "BDR",
    def:  "Systems and processes for copying data (backup) and restoring operations (disaster recovery) after data loss, system failure or disaster. Protects businesses from ransomware and prolonged downtime.",
    tags: ["cloud", "storage", "security"]
  },
  {
    term: "Data Centre",
    abbr: null,
    def:  "A physical facility housing servers, storage systems and networking equipment that store and process large amounts of data. The backbone of internet services and cloud computing.",
    tags: ["cloud", "hardware"]
  },
  {
    term: "Recovery Time Objective",
    abbr: "RTO",
    def:  "The maximum acceptable time to restore systems after a disaster. An RTO of 4 hours means systems must be back online within 4 hours of an outage.",
    tags: ["cloud", "management"]
  },
  {
    term: "Recovery Point Objective",
    abbr: "RPO",
    def:  "The maximum acceptable amount of data loss measured in time. An RPO of 1 hour means no more than 1 hour of data can be lost in a disaster.",
    tags: ["cloud", "management"]
  },

  // ── SECURITY ──────────────────────────────────────────────
  {
    term: "Virus",
    abbr: null,
    def:  "Malicious software that attaches itself to files and spreads between computers, corrupting data or causing damage.",
    tags: ["security", "software"]
  },
  {
    term: "Malware",
    abbr: null,
    def:  "Short for malicious software — any program intentionally designed to cause damage, steal data or gain unauthorised access. Includes viruses, ransomware, spyware and trojans.",
    tags: ["security", "software"]
  },
  {
    term: "Ransomware",
    abbr: null,
    def:  "Malicious software that encrypts your files and demands payment to restore access. One of the most damaging cyber threats, potentially locking businesses out of critical data for days or weeks.",
    tags: ["security", "software"]
  },
  {
    term: "Phishing",
    abbr: null,
    def:  "Fraudulent emails, texts or messages designed to trick people into revealing passwords or financial details. The number one method cybercriminals use to breach organisations.",
    tags: ["security"]
  },
  {
    term: "Firewall",
    abbr: null,
    def:  "A security system that monitors and controls incoming and outgoing network traffic. Acts as a barrier between your trusted internal network and untrusted external networks like the internet.",
    tags: ["security", "networking"]
  },
  {
    term: "Encryption",
    abbr: null,
    def:  "Converting data into a coded format that can only be read by someone with the decryption key. Ensures that even if data is stolen, it remains unreadable. Used in HTTPS, emails and stored files.",
    tags: ["security"]
  },
  {
    term: "Password",
    abbr: null,
    def:  "A secret string of characters used to verify identity and control access to systems, accounts or devices.",
    tags: ["security"]
  },
  {
    term: "Two-Factor Authentication",
    abbr: "2FA",
    def:  "A security process requiring two verification methods — something you know (password) plus something you have (phone code) or are (fingerprint). Dramatically reduces the risk of unauthorised access.",
    tags: ["security"]
  },
  {
    term: "Multi-Factor Authentication",
    abbr: "MFA",
    def:  "A security process requiring two or more verification methods before granting access. Similar to 2FA but can involve more than two factors. Significantly reduces breach risk.",
    tags: ["security"]
  },
  {
    term: "Zero Trust Security",
    abbr: null,
    def:  "A security model that assumes no user or device should be automatically trusted, requiring verification for every access request regardless of location. Suited to modern distributed work environments.",
    tags: ["security"]
  },
  {
    term: "Endpoint Protection",
    abbr: null,
    def:  "Security software protecting individual devices (laptops, phones, tablets) connected to your network from cyber threats. Critical for remote workers as endpoints are often the weakest security link.",
    tags: ["security", "hardware"]
  },
  {
    term: "Security Information and Event Management",
    abbr: "SIEM",
    def:  "Software that aggregates and analyses security data from across an IT environment to detect threats and respond to incidents. Provides centralised visibility into security events.",
    tags: ["security", "software"]
  },

  // ── IT MANAGEMENT ─────────────────────────────────────────
  {
    term: "Managed Service Provider",
    abbr: "MSP",
    def:  "A company that remotely manages a customer's IT infrastructure on a proactive basis, typically for a monthly fee. Provides enterprise-level IT capabilities without hiring full-time staff.",
    tags: ["management"]
  },
  {
    term: "Service Level Agreement",
    abbr: "SLA",
    def:  "A formal contract defining the level of service expected from a vendor, including response time, uptime and resolution time. Sets clear expectations and holds vendors accountable.",
    tags: ["management"]
  },
  {
    term: "Ticketing System",
    abbr: null,
    def:  "Software for managing IT support requests, tracking issues from submission through resolution. Ensures no request is forgotten and enables tracking of support performance.",
    tags: ["management", "software"]
  },
  {
    term: "Remote Monitoring and Management",
    abbr: "RMM",
    def:  "Software allowing IT providers to monitor and manage client systems remotely, detecting and often fixing issues before users notice. Enables proactive IT support and reduces downtime.",
    tags: ["management", "software"]
  },
  {
    term: "Help Desk",
    abbr: null,
    def:  "A resource providing information and IT support to users, handling technical problems and questions. A single point of contact for IT issues, improving response times and user satisfaction.",
    tags: ["management"]
  },
  {
    term: "IT Audit",
    abbr: null,
    def:  "A comprehensive review of an organisation's IT infrastructure, policies and operations to assess security, compliance and efficiency. Identifies vulnerabilities and ensures regulatory compliance.",
    tags: ["management", "security"]
  },

  // ── WORD PROCESSING ───────────────────────────────────────
  {
    term: "Word Processor",
    abbr: null,
    def:  "Software used to create, edit and format text documents. Examples include Microsoft Word and Google Docs.",
    tags: ["software", "wordprocessing"]
  },
  {
    term: "Word Wrap",
    abbr: null,
    def:  "A feature of word processors that automatically moves text to the next line when it reaches the right margin.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Spell Check",
    abbr: null,
    def:  "A word-processing tool that checks text for spelling errors and suggests corrections.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Mail Merge",
    abbr: null,
    def:  "A feature that combines a standard document (like a letter) with a data list (like addresses) to produce personalised copies automatically.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Justify",
    abbr: null,
    def:  "A text alignment setting that spaces words so both the left and right edges of a paragraph form a straight, even line.",
    tags: ["wordprocessing"]
  },
  {
    term: "Font",
    abbr: null,
    def:  "A set of characters in a particular design or typeface, e.g. Arial, Times New Roman. Can be changed in size, style and colour.",
    tags: ["wordprocessing"]
  },
  {
    term: "Bold / Italic / Underline",
    abbr: "B / I / U",
    def:  "Text formatting styles: bold makes text heavier, italic slants it, underline adds a line below. Used for emphasis.",
    tags: ["wordprocessing"]
  },
  {
    term: "Copy and Paste",
    abbr: null,
    def:  "A function that duplicates selected text or objects and places them elsewhere in a document or another application.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Cut and Paste",
    abbr: null,
    def:  "A function that removes selected text or objects from one location and places them in another.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Find and Replace",
    abbr: null,
    def:  "A word-processing tool that searches for a specific word and replaces it with another throughout a document automatically.",
    tags: ["wordprocessing", "software"]
  },
  {
    term: "Footer / Header",
    abbr: null,
    def:  "Text or images that appear automatically at the bottom (footer) or top (header) of every page in a document.",
    tags: ["wordprocessing"]
  },
  {
    term: "Portrait / Landscape",
    abbr: null,
    def:  "Page orientations: portrait is taller than wide (standard for documents), landscape is wider than tall (useful for tables and images).",
    tags: ["wordprocessing"]
  },

  // ── EMERGING TECHNOLOGY ───────────────────────────────────
  {
    term: "Artificial Intelligence",
    abbr: "AI",
    def:  "Computer systems capable of performing tasks that typically require human intelligence, such as learning, reasoning and problem-solving. Transforming business operations through automation. Examples: ChatGPT, Microsoft Copilot.",
    tags: ["emerging", "software"]
  },
  {
    term: "Machine Learning",
    abbr: "ML",
    def:  "A subset of AI allowing systems to learn and improve from experience without being explicitly programmed. Powers recommendation engines, fraud detection and predictive maintenance.",
    tags: ["emerging", "software"]
  },
  {
    term: "Internet of Things",
    abbr: "IoT",
    def:  "A network of physical devices embedded with sensors and software that connect and exchange data over the internet. Enables smart buildings, asset tracking and predictive maintenance. Examples: smart thermostats, security cameras.",
    tags: ["emerging", "networking"]
  },
  {
    term: "Blockchain",
    abbr: null,
    def:  "A decentralised, distributed digital ledger recording transactions across many computers, making records nearly impossible to alter. Provides transparency and security without intermediaries. Best known use: cryptocurrency.",
    tags: ["emerging", "security"]
  }

];
