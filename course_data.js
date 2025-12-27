const courseData = [
    {
        code: "F9613",
        type: "Functional",
        title: "Intercompany Matching and Elimination in Group Reporting",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Intercompany Matching and Elimination in Group Reporting.",
        level: "Intermediate"
    },
    {
        code: "ADM100",
        type: "Technical",
        title: "System Administration I of SAP S/4HANA and SAP Business Suite",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in System Administration I of SAP S/4HANA and SAP Business Suite.",
        level: "Intermediate"
    },
    {
        code: "HA100",
        type: "Technical",
        title: "SAP HANA® – 360° Introduction",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in SAP HANA® – 360° Introduction. Designed for professionals seeking in-depth knowledge.",
        level: "Beginner"
    },
    {
        code: "ADM940",
        type: "Technical",
        title: "Authorization Concept for SAP S/4HANA and SAP Business Suite",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in Authorization Concept for SAP S/4HANA and SAP Business Suite.",
        level: "Intermediate"
    },
    {
        code: "SAPTEC",
        type: "Technical",
        title: "Technology Fundamentals of SAP S/4HANA and SAP Business Suite",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Technology Fundamentals of SAP S/4HANA and SAP Business Suite.",
        level: "Beginner"
    },
    {
        code: "TS421",
        type: "Functional",
        title: "SAP S/4HANA Production Planning and Manufacturing I",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP S/4HANA Production Planning and Manufacturing I.",
        level: "Intermediate"
    },
    {
        code: "S46050",
        type: "Technical",
        title: "Customizing Fundamentals in SAP S/4HANA Sales",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Customizing Fundamentals in SAP S/4HANA Sales.",
        level: "Advanced"
    },
    {
        code: "AR231",
        type: "Functional",
        title: "SAP Ariba Contracts: Preparing Main Agreement Templates",
        category: "Ariba",
        description: "This functional course covers essential concepts and practical skills in SAP Ariba Contracts: Preparing Main Agreement Templates with Enhanced Contract Authoring.",
        level: "Intermediate"
    },
    {
        code: "S4H00",
        type: "Functional",
        title: "SAP S/4HANA Overview",
        category: "S4hana",
        description: "This comprehensive overview course provides a solid foundation in SAP S/4HANA for learners who are new to the SAP ecosystem.",
        level: "Beginner"
    },
    {
        code: "ADM945",
        type: "Technical",
        title: "Authorization Concept for SAP Fiori on SAP S/4HANA",
        category: "Fiori",
        description: "This technical course covers essential concepts and practical skills in Authorization Concept for SAP Fiori on SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "AR330",
        type: "Functional",
        title: "SAP Ariba Supplier Management: Supplier Lifecycle Management",
        category: "Ariba",
        description: "This functional course covers essential concepts and practical skills in SAP Ariba Supplier Management: Supplier Lifecycle Management.",
        level: "Intermediate"
    },
    {
        code: "S46100",
        type: "Technical",
        title: "Configuring Delivery Processing in SAP S/4HANA Sales",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Configuring Delivery Processing in SAP S/4HANA Sales.",
        level: "Advanced"
    },
    {
        code: "ADM415",
        type: "Technical",
        title: "SAP S/4HANA – Performance Analysis",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in SAP S/4HANA – Performance Analysis.",
        level: "Advanced"
    },
    {
        code: "UX410",
        type: "Technical",
        title: "Developing SAP Fiori UIs",
        category: "Fiori",
        description: "This technical course covers essential concepts and practical skills in Developing SAP Fiori UIs.",
        level: "Intermediate"
    },
    {
        code: "GTS200",
        type: "Technical",
        title: "Configuring SAP Global Trade Services",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Configuring SAP Global Trade Services.",
        level: "Advanced"
    },
    {
        code: "HA200",
        type: "Technical",
        title: "SAP HANA Installing and administering",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in SAP HANA Installing and administering.",
        level: "Intermediate"
    },
    {
        code: "TS4F02",
        type: "Functional",
        title: "Financial Accounting in SAP S/4HANA - Academy Part II",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Financial Accounting in SAP S/4HANA - Academy Part II.",
        level: "Advanced"
    },
    {
        code: "TS410",
        type: "Functional",
        title: "Integrated Business Processes in SAP S/4HANA",
        category: "S4hana",
        description: "This course provides hands-on experience with integrated business processes in SAP S/4HANA, demonstrating how different modules interact.",
        level: "Intermediate"
    },
    {
        code: "S4210",
        type: "Functional",
        title: "Basic Data for Manufacturing and Product Management",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Basic Data for Manufacturing and Product Management.",
        level: "Intermediate"
    },
    {
        code: "S4200",
        type: "Functional",
        title: "Business Processes in SAP S/4HANA Manufacturing",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Business Processes in SAP S/4HANA Manufacturing.",
        level: "Intermediate"
    },
    {
        code: "F1140",
        type: "Functional",
        title: "Describing the Receivables Management Process in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Describing the Receivables Management Process in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "ADM103",
        type: "Technical",
        title: "System Administration II of SAP S/4HANA and SAP Business Suite",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in System Administration II of SAP S/4HANA and SAP Business Suite.",
        level: "Advanced"
    },
    {
        code: "EWM110",
        type: "Technical",
        title: "Basic Customizing in SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This technical course covers essential concepts and practical skills in Basic Customizing in SAP Extended Warehouse Management.",
        level: "Intermediate"
    },
    {
        code: "TS422",
        type: "Functional",
        title: "SAP S/4HANA Production Planning and Manufacturing II",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP S/4HANA Production Planning and Manufacturing II.",
        level: "Advanced"
    },
    {
        code: "S4F60",
        type: "Functional",
        title: "Overview SAP S/4HANA for central finance",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Overview SAP S/4HANA for central finance.",
        level: "Intermediate"
    },
    {
        code: "S4C03",
        type: "Technical",
        title: "Implementing SAP S/4HANA Cloud Private Edition",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Implementing SAP S/4HANA Cloud Private Edition.",
        level: "Advanced"
    },
    {
        code: "S4F24",
        type: "Functional",
        title: "Actual Costing with the Material Ledger in SAP S/4HANA",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Actual Costing with the Material Ledger in SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "SACP23",
        type: "Functional",
        title: "Performing Manual Planning with SAP Analytics Cloud",
        category: "Analytics",
        description: "This functional course covers essential concepts and practical skills in Performing Manual Planning with SAP Analytics Cloud.",
        level: "Intermediate"
    },
    {
        code: "TADM12",
        type: "Technical",
        title: "Technical Implementation and Operation II of SAP S/4HANA",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in Technical Implementation and Operation II of SAP S/4HANA and SAP Business Suite.",
        level: "Advanced"
    },
    {
        code: "S4D400",
        type: "Technical",
        title: "Basic ABAP Programming",
        category: "Development",
        description: "This course provides a comprehensive introduction to ABAP programming on any ABAP platform.",
        level: "Beginner"
    },
    {
        code: "S46200",
        type: "Functional",
        title: "Pricing in SAP S/4HANA Sales",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Pricing in SAP S/4HANA Sales.",
        level: "Intermediate"
    },
    {
        code: "SACP34",
        type: "Functional",
        title: "Leveraging Advanced Features in SAP Analytics Cloud for Planning",
        category: "Analytics",
        description: "This functional course covers essential concepts and practical skills in Leveraging Advanced Features in SAP Analytics Cloud for Planning.",
        level: "Advanced"
    },
    {
        code: "F1151",
        type: "Functional",
        title: "Explaining Asset Accounting Process in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Explaining Asset Accounting Process in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "ADM325",
        type: "Technical",
        title: "Software Logistics of SAP S/4HANA and SAP Business Suite",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in Software Logistics of SAP S/4HANA and SAP Business Suite.",
        level: "Advanced"
    },
    {
        code: "MDG100",
        type: "Technical",
        title: "SAP Master Data Governance on SAP S/4HANA",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in SAP Master Data Governance on SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "UX403",
        type: "Technical",
        title: "SAP Fiori Elements Development",
        category: "Fiori",
        description: "This technical course covers essential concepts and practical skills in SAP Fiori Elements Development.",
        level: "Advanced"
    },
    {
        code: "S4F12",
        type: "Technical",
        title: "Basics of Customizing for Financial Accounting: GL, AP, AR",
        category: "Finance",
        description: "This technical course covers essential concepts and practical skills in Basics of Customizing for Financial Accounting: GL, AP, AR in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "S4650",
        type: "Functional",
        title: "Cross-Functional Topics in SAP S/4HANA Sales",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Cross-Functional Topics in SAP S/4HANA Sales.",
        level: "Intermediate"
    },
    {
        code: "S4F25",
        type: "Functional",
        title: "Cost Object Controlling in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Cost Object Controlling in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "BW405",
        type: "Technical",
        title: "SAP BW/4HANA Query Design and Analysis",
        category: "Analytics",
        description: "This technical course covers essential concepts and practical skills in SAP BW/4HANA Query Design and Analysis.",
        level: "Intermediate"
    },
    {
        code: "HA201",
        type: "Technical",
        title: "SAP HANA High Availability and Disaster Tolerance Administration",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in SAP HANA High Availability and Disaster Tolerance Administration.",
        level: "Advanced"
    },
    {
        code: "S4222",
        type: "Functional",
        title: "Production Planning in SAP S/4HANA – Fiori-based",
        category: "Fiori",
        description: "This functional course covers essential concepts and practical skills in Production Planning in SAP S/4HANA – Fiori-based.",
        level: "Intermediate"
    },
    {
        code: "S4D401",
        type: "Technical",
        title: "Intermediate ABAP Programming",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in Intermediate ABAP Programming.",
        level: "Intermediate"
    },
    {
        code: "S49010",
        type: "Functional",
        title: "Exploring Investment Projects in SAP S/4HANA",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Exploring Investment Projects in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "IBP100",
        type: "Functional",
        title: "Discover SAP Integrated Business Planning for Supply Chain",
        category: "Planning",
        description: "This functional course covers essential concepts and practical skills in Discover SAP Integrated Business Planning for Supply Chain.",
        level: "Beginner"
    },
    {
        code: "IDS10",
        type: "Functional",
        title: "Introducing SAP S/4HANA Defense & Security",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Introducing SAP S/4HANA Defense & Security.",
        level: "Intermediate"
    },
    {
        code: "EWM115",
        type: "Functional",
        title: "Resource Management in SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This functional course covers essential concepts and practical skills in Resource Management in SAP Extended Warehouse Management.",
        level: "Intermediate"
    },
    {
        code: "S49020",
        type: "Functional",
        title: "Exploring Logistics Projects in SAP S/4HANA",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Exploring Logistics Projects in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "S4PR1",
        type: "Functional",
        title: "SAP S/4HANA Sourcing and Procurement - Functions and Innovations",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP S/4HANA Sourcing and Procurement - Functions and Innovations.",
        level: "Intermediate"
    },
    {
        code: "HA215",
        type: "Technical",
        title: "SAP HANA Using Monitoring and Performance Tools",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in SAP HANA Using Monitoring and Performance Tools.",
        level: "Advanced"
    },
    {
        code: "S4F28",
        type: "Functional",
        title: "Profit Center Accounting in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Profit Center Accounting in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "BTP100",
        type: "Technical",
        title: "SAP Business Technology Platform Foundation",
        category: "Platform",
        description: "This technical course covers essential concepts and practical skills in SAP Business Technology Platform Foundation.",
        level: "Beginner"
    },
    {
        code: "TS450",
        type: "Functional",
        title: "Sourcing and Procurement in SAP S/4HANA - Academy Part I",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Sourcing and Procurement in SAP S/4HANA - Academy Part I.",
        level: "Intermediate"
    },
    {
        code: "BW410",
        type: "Technical",
        title: "SAP BW/4HANA Data Warehousing",
        category: "Analytics",
        description: "This technical course covers essential concepts and practical skills in SAP BW/4HANA Data Warehousing.",
        level: "Intermediate"
    },
    {
        code: "S49100",
        type: "Technical",
        title: "Carrying out the Basic Configuration of SAP S/4HANA Project System",
        category: "S4hana",
        description: "This technical course covers essential concepts and practical skills in Carrying out the Basic Configuration of SAP S/4HANA Project System.",
        level: "Intermediate"
    },
    {
        code: "EWM120",
        type: "Technical",
        title: "Customizing Additional Topics in SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This technical course covers essential concepts and practical skills in Customizing Additional Topics in SAP Extended Warehouse Management.",
        level: "Advanced"
    },
    {
        code: "ADM110",
        type: "Technical",
        title: "Installing and Updating SAP S/4HANA and SAP Business Suite Systems",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in Installing and Updating SAP S/4HANA and SAP Business Suite Systems.",
        level: "Advanced"
    },
    {
        code: "S47000",
        type: "Functional",
        title: "Business Processes in SAP S/4HANA Service",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Business Processes in SAP S/4HANA Service.",
        level: "Intermediate"
    },
    {
        code: "HA250",
        type: "Technical",
        title: "Database Migration using DMO - SAP HANA 2.0 SPS07",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in Database Migration using DMO - SAP HANA 2.0 SPS07.",
        level: "Advanced"
    },
    {
        code: "IDS30",
        type: "Functional",
        title: "Exploring Logistics and Maintenance in SAP S/4HANA Defense & Security",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Exploring Logistics and Maintenance in SAP S/4HANA Defense & Security.",
        level: "Intermediate"
    },
    {
        code: "ACT100",
        type: "Functional",
        title: "Discovering SAP Activate - Implementation Tools and Methodology",
        category: "Methodology",
        description: "This functional course covers essential concepts and practical skills in Discovering SAP Activate - Implementation Tools and Methodology.",
        level: "Beginner"
    },
    {
        code: "ADM328",
        type: "Technical",
        title: "SAP S/4HANA Conversion and SAP System Upgrade",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in SAP S/4HANA Conversion and SAP System Upgrade.",
        level: "Advanced"
    },
    {
        code: "F12T0",
        type: "Functional",
        title: "Financial Accounting in SAP S/4HANA Cloud - Academy",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Financial Accounting in SAP S/4HANA Cloud - Academy.",
        level: "Advanced"
    },
    {
        code: "S4F29",
        type: "Functional",
        title: "Profitability Analysis in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Profitability Analysis in SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "HA300",
        type: "Technical",
        title: "SAP HANA 2.0 SPS07 Modeling",
        category: "Hana",
        description: "This technical course covers essential concepts and practical skills in SAP HANA 2.0 SPS07 Modeling.",
        level: "Advanced"
    },
    {
        code: "S4270",
        type: "Functional",
        title: "Advanced Available-to-Promise in SAP S/4HANA",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Advanced Available-to-Promise in SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "S4122",
        type: "Functional",
        title: "Project Logistics Control in SAP S/4HANA",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Project Logistics Control in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "BW430",
        type: "Technical",
        title: "SAP BW/4HANA Data Modeling",
        category: "Analytics",
        description: "This technical course covers essential concepts and practical skills in SAP BW/4HANA Data Modeling.",
        level: "Advanced"
    },
    {
        code: "THR87",
        type: "Functional",
        title: "SAP SuccessFactors Variable Pay Academy",
        category: "Successfactors",
        description: "This functional course covers essential concepts and practical skills in SAP SuccessFactors Variable Pay Academy.",
        level: "Advanced"
    },
    {
        code: "THR81",
        type: "Functional",
        title: "SAP SuccessFactors Employee Central Core Academy",
        category: "Successfactors",
        description: "This functional course covers essential concepts and practical skills in SAP SuccessFactors Employee Central Core Academy.",
        level: "Advanced"
    },
    {
        code: "THR88",
        type: "Functional",
        title: "SAP SuccessFactors Learning Academy",
        category: "Successfactors",
        description: "This functional course covers essential concepts and practical skills in SAP SuccessFactors Learning Academy.",
        level: "Advanced"
    },
    {
        code: "IBP300",
        type: "Technical",
        title: "SAP IBP Advanced Configuration",
        category: "Planning",
        description: "This technical course covers essential concepts and practical skills in SAP IBP Advanced Configuration.",
        level: "Advanced"
    },
    {
        code: "AR520",
        type: "Functional",
        title: "SAP Ariba Procurement: Contract Compliance",
        category: "Ariba",
        description: "This functional course covers essential concepts and practical skills in SAP Ariba Procurement: Contract Compliance.",
        level: "Intermediate"
    },
    {
        code: "S4F41",
        type: "Technical",
        title: "Customizing in Cash Management in SAP S/4HANA",
        category: "Finance",
        description: "This technical course covers essential concepts and practical skills in Customizing in Cash Management in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "S4F15",
        type: "Functional",
        title: "SAP Financial Closing in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in SAP Financial Closing in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "S4D430",
        type: "Technical",
        title: "Data Modelling in ABAP Dictionary and ABAP Core Data Services",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in Data Modelling in ABAP Dictionary and ABAP Core Data Services.",
        level: "Advanced"
    },
    {
        code: "EWM125",
        type: "Functional",
        title: "Labor Management in SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This functional course covers essential concepts and practical skills in Labor Management in SAP Extended Warehouse Management.",
        level: "Intermediate"
    },
    {
        code: "EWM130",
        type: "Technical",
        title: "Production Integration with SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This technical course covers essential concepts and practical skills in Production Integration with SAP Extended Warehouse Management.",
        level: "Advanced"
    },
    {
        code: "S47500",
        type: "Functional",
        title: "SAP S/4HANA Service - Service Processing",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP S/4HANA Service - Service Processing.",
        level: "Intermediate"
    },
    {
        code: "S42246",
        type: "Functional",
        title: "Advanced Production Planning Methods in SAP S/4HANA PP/DS",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Advanced Production Planning Methods in SAP S/4HANA PP/DS.",
        level: "Advanced"
    },
    {
        code: "ACT200",
        type: "Functional",
        title: "Agile Project Delivery",
        category: "Methodology",
        description: "This functional course covers essential concepts and practical skills in Agile Project Delivery.",
        level: "Intermediate"
    },
    {
        code: "AR530",
        type: "Functional",
        title: "SAP Ariba Procurement: Invoicing",
        category: "Ariba",
        description: "This functional course covers essential concepts and practical skills in SAP Ariba Procurement: Invoicing.",
        level: "Intermediate"
    },
    {
        code: "IBP400",
        type: "Functional",
        title: "SAP IBP for Inventory",
        category: "Planning",
        description: "This functional course covers essential concepts and practical skills in SAP IBP for Inventory.",
        level: "Advanced"
    },
    {
        code: "S4F17",
        type: "Functional",
        title: "Asset Accounting in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Asset Accounting in SAP S/4HANA.",
        level: "Intermediate"
    },
    {
        code: "S4F50",
        type: "Functional",
        title: "Business Processes in Treasury and Risk Management in SAP S/4HANA",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Business Processes in Treasury and Risk Management in SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "S4225",
        type: "Functional",
        title: "SAP S/4HANA Production Orders",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP S/4HANA Production Orders.",
        level: "Intermediate"
    },
    {
        code: "TS4F03",
        type: "Functional",
        title: "Management Accounting in SAP S/4HANA - Academy Part I",
        category: "Finance",
        description: "This functional course covers essential concepts and practical skills in Management Accounting in SAP S/4HANA - Academy Part I.",
        level: "Advanced"
    },
    {
        code: "DS10",
        type: "Technical",
        title: "SAP Data Services – Platform and Transforms",
        category: "Data",
        description: "This technical course covers essential concepts and practical skills in SAP Data Services – Platform and Transforms.",
        level: "Intermediate"
    },
    {
        code: "S4123",
        type: "Functional",
        title: "Project Controlling in SAP S/4HANA Project System",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Project Controlling in SAP S/4HANA Project System.",
        level: "Intermediate"
    },
    {
        code: "TS452",
        type: "Functional",
        title: "Sourcing and Procurement in SAP S/4HANA - Academy Part II",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Sourcing and Procurement in SAP S/4HANA - Academy Part II.",
        level: "Advanced"
    },
    {
        code: "EWM140",
        type: "Functional",
        title: "Quality Management with SAP Extended Warehouse Management",
        category: "Warehouse",
        description: "This functional course covers essential concepts and practical skills in Quality Management with SAP Extended Warehouse Management.",
        level: "Intermediate"
    },
    {
        code: "S4D425",
        type: "Technical",
        title: "Extensibility for SAP S/4HANA",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in Extensibility for SAP S/4HANA.",
        level: "Advanced"
    },
    {
        code: "S4H02",
        type: "Functional",
        title: "SAP Fiori Overview",
        category: "Fiori",
        description: "This functional course covers essential concepts and practical skills in SAP Fiori Overview.",
        level: "Beginner"
    },
    {
        code: "CLD200",
        type: "Technical",
        title: "Develop extensions with CAP following the SAP BTP Developer's Guide",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in Develop extensions with CAP following the SAP BTP Developer's Guide.",
        level: "Advanced"
    },
    {
        code: "ADM329",
        type: "Technical",
        title: "SAP S/4HANA Downtime Optimized Conversion",
        category: "Administration",
        description: "This technical course covers essential concepts and practical skills in SAP S/4HANA Downtime Optimized Conversion.",
        level: "Advanced"
    },
    {
        code: "DS30",
        type: "Technical",
        title: "SAP Data Services - Data Quality Management",
        category: "Data",
        description: "This technical course covers essential concepts and practical skills in SAP Data Services - Data Quality Management.",
        level: "Advanced"
    },
    {
        code: "IBP500",
        type: "Functional",
        title: "SAP Supply Chain Control Tower",
        category: "Planning",
        description: "This functional course covers essential concepts and practical skills in SAP Supply Chain Control Tower.",
        level: "Intermediate"
    },
    {
        code: "S4125",
        type: "Functional",
        title: "Business Processes in SAP S/4HANA Portfolio and Project Management",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in Business Processes in SAP S/4HANA Portfolio and Project Management.",
        level: "Intermediate"
    },
    {
        code: "S4D437",
        type: "Technical",
        title: "Building Transactional Apps with the ABAP RESTful Application Programming Model",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in Building Transactional Apps with the ABAP RESTful Application Programming Model.",
        level: "Advanced"
    },
    {
        code: "ARS412",
        type: "Functional",
        title: "SAP Ariba Strategic Sourcing: Advanced Features Part 1",
        category: "Ariba",
        description: "This functional course covers essential concepts and practical skills in SAP Ariba Strategic Sourcing: Advanced Features Part 1.",
        level: "Advanced"
    },
    {
        code: "S4H01",
        type: "Functional",
        title: "SAP Business Suite to SAP S/4HANA Delta - Overview",
        category: "S4hana",
        description: "This functional course covers essential concepts and practical skills in SAP Business Suite to SAP S/4HANA Delta - Overview.",
        level: "Intermediate"
    },
    {
        code: "THR80",
        type: "Functional",
        title: "SAP SuccessFactors Platform Introduction Academy",
        category: "Successfactors",
        description: "This functional course covers essential concepts and practical skills in SAP SuccessFactors Platform Introduction Academy.",
        level: "Beginner"
    },
    {
        code: "IBP600",
        type: "Functional",
        title: "SAP IBP for Demand",
        category: "Planning",
        description: "This functional course covers essential concepts and practical skills in SAP IBP for Demand.",
        level: "Intermediate"
    },
    {
        code: "C4H340",
        type: "Technical",
        title: "SAP Commerce Cloud Developer Part 1",
        category: "Development",
        description: "This technical course covers essential concepts and practical skills in SAP Commerce Cloud Developer Part 1.",
        level: "Intermediate"
    }
];
