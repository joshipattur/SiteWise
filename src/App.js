import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "./data/countries";
import { statesByCountry } from "./data/statesByCountry";

// Main SiteWise App
export default function SiteWiseApp() {
  const [view, setView] = useState("home"); // home | login | signup | professionals | contractors | suppliers | services
  const [role, setRole] = useState(null); // client | professional | contractor | supplier | service
  const [theme, setTheme] = useState("base");
  const [currentSlide, setCurrentSlide] = useState(0); // 0–4 for home page sections

  // Force scroll to top any time the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // form state (shared for demo)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);
  const [otherText, setOtherText] = useState("");

  // NEW: signup fields
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [clientProjectType, setClientProjectType] = useState("");
  const [workMode, setWorkMode] = useState(""); // freelancer / organisation
  const [organizationName, setOrganizationName] = useState("");

  // ================= DROPDOWN OPTIONS =================

  const professions = [
    "Architects",
    "Interior Designers",
    "Landscape Designers",
    "Civil Engineers",
    "Structural Engineers",
    "Planners",
    "Town planners",
    "Urban planners",
    "City Planners",
    "Country Planners",
    "Interior Decorators",
    "Project Managers",
    "Surveyors",
    "Real estate agents",
  ];

  const contractorCategories = [
    "Builder",
    "General Contractor",
    "Remodelor",
    "Painters",
    "Flooring contractor",
    "Electrical",
    "Plumber",
    "HVAC",
    "Mechanical",
    "Pool Contractors",
    "Roofing",
    "Deck",
    "Patio",
    "Landcape",
    "Irrigation",
    "Fire alarm",
    "Fire Sprinkler",
    "Fence contractor",
    "Framer",
    "Drywall hangers",
    "Doors and windows",
    "Glass and Glazing",
    "Cabinets",
    "Counter tops",
    "Concrete",
    "Speciality services",
  ];

  const supplierOptions = [
    "General Suppliers",
    "Plumbing",
    "Flooring",
    "Hardware",
    "Mechanical",
    "Electrical",
    "Roofing",
    "Gardening Supplies",
    "Irrigation Supplies",
    "Specialities",
    "Lumber",
    "Drywall",
    "Doors and windows",
    "Concrete",
  ];

  const serviceOptions = [
    "Trash",
    "Pest",
    "Weed and fertilizers (lawn care)",
    "Waterproofing",
    "Electrical Testing",
    "Smoke testing",
    "Construction Cleaning",
    "Water damage restoration",
    "Specialities",
    "Tool rentals",
    "Equipment rentals",
    "Vehcile rentals",
    "Dumpster",
    "Restorations",
    "Lab tests",
    "Surveyors",
  ];

  // ================= CONTENT LISTS FOR CATEGORY PAGES =================

  const professionalsContent = [
    {
      title: "Architects",
      desc:
        "The storytellers of space, architects turn lines on a page into forms that move people, cities, and cultures. They imagine possibilities long before anyone else can see them, shaping the world one structure at a time. Ready to meet the minds behind the skyline?",
    },
    {
      title: "Interior Designers",
      desc:
        "They craft the soul of a space — the warmth you feel, the flow you follow, the harmony you settle into. With an eye for balance and emotion, they transform empty shells into living experiences. Curious who designs the spaces you remember?",
    },
    {
      title: "Landscape Designers",
      desc:
        "These artists design the outdoors as carefully as others design rooms, blending nature, geometry, and meaning. They turn land into living art, making every breeze, shadow, and leaf part of the experience. Step into their world —",
    },
    {
      title: "Civil Engineers",
      desc:
        "The backbone of infrastructure, civil engineers shape the systems we rely on daily. They think in bridges, roads, foundations, and lifelines — always building for strength, safety, and longevity. Want to know who keeps the world standing?",
    },
    {
      title: "Structural Engineers",
      desc:
        "They understand how gravity negotiates with ambition, ensuring every daring idea stays firmly upright. By calculating forces and fortifying forms, they make the impossible structurally possible. Trust the science behind stability —",
    },
    {
      title: "Planners",
      desc:
        "Planners weave together people, spaces, and time, creating environments that function as smoothly as they look. Their work sets the rhythm for how communities move, grow, and thrive. If you want to understand the blueprint of organized living —",
    },
    {
      title: "Town Planners",
      desc:
        "Focused on smaller communities with big potential, town planners curate charm, order, and sustainability. They balance heritage with growth, ensuring towns evolve without losing their identity. Love well-designed towns?",
    },
    {
      title: "Urban Planners",
      desc:
        "The architects of entire cities, urban planners think in millions — millions of people, interactions, and possibilities. They create systems that keep complex societies moving smoothly every day. The pulse of a city starts with them —",
    },
    {
      title: "City Planners",
      desc:
        "City planners blend governance, design, and vision to orchestrate city life at a human level. They influence transport, zoning, public spaces, and long-term futures with strategic precision. Ever wondered who shapes the cities we live in?",
    },
    {
      title: "Country Planners",
      desc:
        "Responsible for the giant canvas — nations — they plan development across vast landscapes, cultures, and resources. Their insight guides everything from rural growth to national infrastructure. If scale inspires you, you’ll want to",
    },
    {
      title: "Interior Decorators",
      desc:
        "The finishers, polishers, mood-makers — they bring personality to a space through color, texture, and detail. Their craft elevates ordinary rooms into unique expressions of style. Feel like your space could speak louder?",
    },
    {
      title: "Project Managers",
      desc:
        "The orchestrators of chaos, project managers keep timelines tight, teams aligned, and budgets sane. They turn complex construction into coordinated action, one deadline at a time. Looking for the people who make everything run?",
    },
    {
      title: "Real Estate Agents",
      desc:
        "They understand value, vision, and opportunity like few others, connecting people with places that shape their lives. With insight into markets and human needs, they guide decisions that matter. Searching for the right space, or the right deal?",
    },
  ];

  const contractorsContent = [
    {
      title: "Builder",
      desc:
        "Builders turn raw land into livable reality, shaping walls, rooms, and entire stories out of stone, steel, and sweat. They bring together every trade, every detail, and every vision with unwavering precision. If you want to see how a dream becomes a structure, go ahead and ",
    },
    {
      title: "General Contractor",
      desc:
        "The generals of the jobsite, they coordinate timelines, teams, materials, and risks with expert discipline. They turn chaos into choreography, ensuring every phase of construction flows seamlessly. Curious who keeps big projects on track? Simply ",
    },
    {
      title: "Remodeler",
      desc:
        "Remodelers breathe new life into old spaces, transforming outdated rooms into fresh, modern environments with character and purpose. They see potential where others see problems. Ready for reinvention? ",
    },
    {
      title: "Painters",
      desc:
        "Painters bring emotion into architecture, layering color, depth, and finish to define mood and identity. Their craft is the final stroke that makes a space feel complete. Want to see how color changes everything? ",
    },
    {
      title: "Flooring Contractor",
      desc:
        "They lay the foundation of movement — steps, stories, and everyday living. From hardwood to tile to carpet, they shape the feeling under your feet. Interested in what supports every moment? Go ",
    },
    {
      title: "Electrical",
      desc:
        "Electricians power the heartbeat of every building, wiring intelligence, safety, and convenience into the walls. Light, energy, automation — nothing works without them. Want to meet the ones who keep everything running? ",
    },
    {
      title: "Plumber",
      desc:
        "Plumbers create the invisible comfort we rely on daily — clean water, drainage, efficiency, and reliability. Their systems keep a building healthy from the inside out. Curious who makes life flow smoothly? You’ll want to ",
    },
    {
      title: "HVAC",
      desc:
        "They craft comfort — air that moves, cools, warms, and breathes life into interiors. HVAC specialists balance mechanics with atmosphere, making spaces truly livable. If comfort matters to you, go ",
    },
    {
      title: "Mechanical",
      desc:
        "Mechanical contractors integrate motion, systems, and function into the core of a building. They design the machinery of everyday life. Want to understand the hidden forces behind modern infrastructure? ",
    },
    {
      title: "Pool Contractors",
      desc:
        "They shape water into luxury, relaxation, and lifestyle. From serene backyard pools to dramatic commercial designs, they craft refreshing escapes. Dreaming in blue? It’s time to ",
    },
    {
      title: "Roofing",
      desc:
        "Roofers protect everything beneath them, creating shields that withstand weather, time, and unpredictability. Strength above, security below. Want the ones who keep you covered? ",
    },
    {
      title: "Deck",
      desc:
        "Deck builders create outdoor stages for life — gatherings, sunsets, conversations, and calm. They turn backyards into living extensions of home. Ready to step outside? Simply ",
    },
    {
      title: "Patio",
      desc:
        "Patio specialists design grounded, beautiful terraces that host relaxation, dining, and connection. They craft the heart of outdoor living. Curious who elevates the outdoors? ",
    },
    {
      title: "Landscape",
      desc:
        "Landscape crews sculpt the environment itself — terrain, plants, textures, and flow. They bring nature into harmony with design. If you love spaces that breathe, go ",
    },
    {
      title: "Irrigation",
      desc:
        "Irrigation experts give landscapes life, nurturing green spaces through precise, sustainable water systems. They balance nature with technology. Want to meet the ones who help things grow? ",
    },
    {
      title: "Fire Alarm",
      desc:
        "These specialists design detection systems that save lives, integrating technology that reacts before anyone else can. Safety starts with them. Looking for peace of mind? Just ",
    },
    {
      title: "Fire Sprinkler",
      desc:
        "Fire sprinkler experts create active protection — systems that respond instantly, minimizing damage and safeguarding people. Quiet guardians of every building. It’s time to ",
    },
    {
      title: "Fence Contractor",
      desc:
        "Fence contractors shape boundaries with purpose, privacy, and protection. From decorative to durable, they define perimeters with precision. Need a line drawn right? ",
    },
    {
      title: "Framer",
      desc:
        "Framers raise the skeleton of a structure, giving every building its shape, strength, and stance. Without them, nothing stands. Curious about the first form of every project? ",
    },
    {
      title: "Drywall Hangers",
      desc:
        "They close in spaces, creating the canvas for every interior finish. Clean lines, smooth surfaces, solid walls — their work frames your daily life. Want to meet the ones who make rooms real? ",
    },
    {
      title: "Doors and Windows",
      desc:
        "They craft the openings that bring light, access, airflow, and presence. Doors and windows define how a building connects with its surroundings. If transparency and transition matter to you, ",
    },
    {
      title: "Glass and Glazing",
      desc:
        "Glaziers turn glass into architecture — expansive facades, precise panels, and artistic transparency. They shape reflections and light with incredible skill. Want to see clarity differently? ",
    },
    {
      title: "Cabinets",
      desc:
        "Cabinet makers design organized beauty — storage that blends craftsmanship with style. Kitchens, closets, workspaces — they elevate them all. Ready for smart, stunning spaces? ",
    },
    {
      title: "Countertops",
      desc:
        "They shape the surfaces we use every day, from stone to composite to custom finishes. Aesthetic, durable, essential — their work grounds every room. Want to see what good craftsmanship feels like? ",
    },
    {
      title: "Painters (Specialist)",
      desc:
        "Some painters don’t just cover walls — they craft ambiance, personality, and tone with every stroke. Their finishes complete the identity of a space. Curious to see transformation in color? ",
    },
    {
      title: "Concrete",
      desc:
        "Concrete contractors build strength from the ground up — foundations, slabs, walls, and structures that last lifetimes. Solid, precise, fundamental. Want to witness true durability at work? ",
    },
    {
      title: "Specialty Services",
      desc:
        "These experts handle the uncommon, the intricate, and the highly technical. From acoustics to steelwork to custom fabrication, they solve what others can’t. Need something extraordinary done right? Go ",
    },
  ];

  const suppliersContent = [
    {
      title: "General Suppliers",
      desc:
        "General suppliers handle the essentials that fuel day-to-day progress, delivering everything from tools to consumables with dependable speed. They keep sites stocked, prepared, and efficient. Need the ones who keep everything running smoothly? ",
    },
    {
      title: "Plumbing Supplies",
      desc:
        "These suppliers deliver the pipes, valves, fixtures, and systems that make modern living effortless. From water flow to sanitation, they empower reliability. Curious about the backbone of comfort? ",
    },
    {
      title: "Flooring Supplies",
      desc:
        "They provide the textures beneath every step — wood, laminate, tile, carpet, vinyl and more. Their materials define movement, comfort, and atmosphere. If great floors shape great spaces, then it’s time to ",
    },
    {
      title: "Hardware Supplies",
      desc:
        "Hardware suppliers offer the details that hold everything together — hinges, fasteners, locks, brackets, and thousands of small essentials. They’re the subtle strength behind every finish. Want to discover the magic of the ‘little things’? ",
    },
    {
      title: "Mechanical Supplies",
      desc:
        "From motors to ducts to industrial components, mechanical suppliers power the systems that keep buildings functional and efficient. They fuel the machinery behind modern infrastructure. Ready to dive into precision? ",
    },
    {
      title: "Electrical Supplies",
      desc:
        "These providers bring light, energy, and power to every structure through wires, controls, fixtures, and systems. Their products keep the world switched on. Want to meet the ones behind every bright idea? ",
    },
    {
      title: "Roofing Supplies",
      desc:
        "They deliver shingles, membranes, sealants, and systems that protect everything beneath. Their materials shape durability and defense against the elements. Want the best cover for every structure? It’s time to ",
    },
    {
      title: "Gardening Supplies",
      desc:
        "Gardening suppliers bring landscapes to life — tools, soil, plants, nutrients, and everything nature needs to flourish. They support the art of outdoor growth. Love seeing green thrive? ",
    },
    {
      title: "Irrigation Supplies",
      desc:
        "They offer the pipes, pumps, sprinklers, controls, and technology that keep landscapes healthy and sustainable. Precision watering starts with them. Want to see how life stays green? ",
    },
    {
      title: "Specialties",
      desc:
        "Specialty suppliers handle the unique, technical, or custom materials that make complex visions possible. When a project requires something rare or highly specific, they’re the experts who deliver. Looking for exceptional solutions? ",
    },
    {
      title: "Lumber",
      desc:
        "Lumber suppliers provide the framework of construction — beams, studs, panels, and wood materials that define strength and shape. Every build begins with their stock. Want to meet the backbone of the industry? ",
    },
    {
      title: "Drywall Supplies",
      desc:
        "They deliver the sheets, compounds, tapes, and tools that form the canvas of every interior. Smooth walls start with the right materials. Ready to build clean, perfect surfaces? ",
    },
    {
      title: "Doors and Windows Supplies",
      desc:
        "These suppliers bring openings to life — frames, glass panels, shutters, locking systems, and architectural finishes. They shape how a building breathes and connects. Searching for the perfect view or entry? ",
    },
    {
      title: "Hardware (Specialist)",
      desc:
        "Hardware specialists curate the essentials of performance and detail — knobs, latches, supports, and precision components that complete a space. The finishing touch often starts here. If detail matters to you, just ",
    },
    {
      title: "Concrete Supplies",
      desc:
        "They provide the mixes, reinforcements, forms, and additives that define strength itself. Concrete suppliers make foundations possible — literally. Want to know where solidity begins? ",
    },
  ];

  const servicesContent = [
    {
      title: "Trash Services",
      desc:
        "Trash service providers keep construction sites clean, safe, and efficient by removing debris and waste with reliability and speed. They’re the unsung heroes of progress. Want the ones who keep the chaos under control? ",
    },
    {
      title: "Pest Control",
      desc:
        "Pest control specialists protect buildings from hidden threats, preserving safety, hygiene, and long-term structural integrity. They solve problems you never want to see. If prevention matters, you should ",
    },
    {
      title: "Weed & Fertilizer (Lawn Care)",
      desc:
        "These experts shape healthy landscapes with precision care — nurturing lawns, controlling weeds, and supporting long-term growth. They turn greenery into beauty. Ready to keep nature in perfect balance? ",
    },
    {
      title: "Waterproofing",
      desc:
        "Waterproofing professionals defend structures against leaks, moisture, and damage, sealing buildings with expert precision. They protect longevity at its core. Curious who keeps water where it belongs? Just ",
    },
    {
      title: "Electrical Testing",
      desc:
        "They inspect, test, and certify electrical systems to ensure absolute safety and compliance. Their expertise prevents failures long before they happen. Trust in precision? Then ",
    },
    {
      title: "Smoke Testing",
      desc:
        "These specialists use controlled smoke systems to identify leaks, faults, and inefficiencies in plumbing and ventilation. They reveal the invisible. Want to see expertise in action? ",
    },
    {
      title: "Construction Cleaning",
      desc:
        "Construction cleaners turn dusty, chaotic job sites into spotless, ready-to-use spaces. Their finishing touch transforms a build into a welcoming environment. Want the final polish? ",
    },
    {
      title: "Water Damage Restoration",
      desc:
        "They restore structures affected by leaks, floods, or moisture, preserving safety and salvaging what matters. Their work brings buildings back to life. When recovery is needed, you’ll want to ",
    },
    {
      title: "Specialties",
      desc:
        "Specialty service providers tackle unique, technical, or high-skill tasks that elevate complex projects. They handle the work no one else can. Need something exceptional? ",
    },
    {
      title: "Tool Rentals",
      desc:
        "From drills to saws to specialty gear, tool rental providers equip builders with everything they need — without the cost of ownership. Ready to get the right tool at the right time? ",
    },
    {
      title: "Equipment Rentals",
      desc:
        "Heavy machinery, lifts, earthmovers, generators — equipment rental companies power large-scale progress. They make big tasks possible. Want to scale up your capabilities? ",
    },
    {
      title: "Vehicle Rentals",
      desc:
        "These providers offer trucks, vans, haulers, and work vehicles that keep teams mobile and efficient. Movement is part of the job — and they make it happen. When your project needs wheels, ",
    },
    {
      title: "Dumpster Services",
      desc:
        "Dumpsters keep sites organized, clean, and compliant by handling huge volumes of construction waste. They’re essential for fast, safe workflow. If tidy sites matter, go ",
    },
    {
      title: "Trash Services (Continuous)",
      desc:
        "Trash removal crews ensure continuous cleanliness so work never slows down. They’re the quiet rhythm behind productive sites. Want effortless site maintenance? ",
    },
    {
      title: "Restorations",
      desc:
        "Restoration experts revive damaged, aged, or worn structures with skill and care, blending repair with preservation. They give buildings a second life. If renewal speaks to you, ",
    },
    {
      title: "Lab Tests",
      desc:
        "Construction lab testers analyze materials — soil, concrete, steel, air quality — ensuring safety, compliance, and performance. They’re the science behind every strong decision. Want to see the data behind durability? ",
    },
    {
      title: "Surveyors",
      desc:
        "Surveyors map land, measure boundaries, and guide layouts with pinpoint accuracy. Every project begins with their precision. Want to meet the ones who define the starting line? ",
    },
  ];

  // ================= HOME PAGE SLIDES =================
  const slides = [
    {
      key: "main",
      title: "SiteWise",
      bg: "/main.jpeg",
      buttonTarget: null, // no button on main slide
      bodyBeforeButton: `
A construction project is never built by one person, and this platform exists to bring every essential mind and skill into one connected space. Here, architects share their visions, designers refine the experience, and engineers anchor every idea in precision and safety. Contractors and workers add strength through hands-on expertise, turning plans into structures that stand for decades. Suppliers contribute the materials and technologies that shape durability, aesthetics, and performance. Each professional becomes part of a larger ecosystem where communication flows, timelines tighten, and collaboration finally feels natural instead of fragmented. Whether you build, design, calculate, source, or craft, this space streamlines the way you work with others in the field. It’s a unified environment designed to make projects smoother, relationships stronger, and outcomes smarter. A place where every contributor can do their best work — together.
`,
    },
    {
      key: "design",
      title: "Design",
      bg: "/sketch.png",
      buttonTarget: "professionals",
      bodyBeforeButton:
        "The architecture and interior design stage is where a project’s true character begins to emerge, transforming structural frameworks into meaningful spaces. During this phase, architects refine the exterior form, integrating materials, contours, and glazing that define the building’s visual identity. At the same time, interior designers shape the user experience from within, crafting layouts, lighting concepts, and finishing details that enhance comfort, clarity, and purpose. Every decision is guided by both function and aesthetic intention, ensuring that each space feels intuitive, cohesive, and aligned with the project’s original vision. As surfaces take form and environments begin to flow together, the building transitions from a construction site into a fully designed environment ready to support the people who will move through it—ultimately helping them ",
    },
    {
      key: "build",
      title: "Build",
      bg: "/underwork.png",
      buttonTarget: "contractors",
      bodyBeforeButton:
        "The contractor and engineering phase is where technical expertise meets hands-on execution, turning complex plans into stable, high-performing structures. Engineers provide the analytical backbone, shaping the building’s safety, systems, and structural integrity, while contractors coordinate the teams who bring those calculations and details to life on-site. Together, they manage everything from foundation work to mechanical installations, ensuring each component aligns with design standards, regulatory requirements, and practical site conditions. Their collaboration keeps the project precise, efficient, and adaptable, resolving challenges with informed, real-time decision-making. As the framework strengthens and systems fall into place, this combined leadership creates a seamless path toward completion—building environments where people can thrive, collaborate, and ",
    },
    {
      key: "solidify",
      title: "Solidify",
      bg: "/final.jpg",
      buttonTarget: "suppliers",
      bodyBeforeButton:
        "Suppliers play a vital role in shaping the quality and performance of a building, providing the materials and technologies that bring every design decision to life. From structural components to finishing elements, they ensure that each product meets the project’s technical requirements and aesthetic goals. Reliable sourcing, timely delivery, and material expertise are key, allowing the wider team to maintain momentum without compromise. Whether supplying glass, steel, flooring, lighting, or specialized systems, their contributions directly influence durability, sustainability, and the overall feel of the finished environment. As materials arrive and the project takes form, suppliers become trusted partners in maintaining consistency and excellence—quietly supporting the creation of spaces where people can connect, innovate, and ",
    },
    {
      key: "utilise",
      title: "Utilise",
      bg: "/garbage.png",
      buttonTarget: "services",
      bodyBeforeButton:
        "Service infrastructure forms the operational backbone of any building, supporting everything that keeps the environment functional, safe, and efficient. This includes essential daily services—waste management, mail handling, cleaning routes, and utility networks—working quietly in the background to ensure seamless flow. Alongside these, integrated emergency systems such as fire suppression, alarms, evacuation pathways, and monitoring networks are designed with equal importance, woven smoothly into the building’s layout to enhance safety without disrupting its aesthetic intent. Together, these systems create a reliable rhythm that supports occupants every day, balancing practicality with protection. As the building transitions from construction to full operation, these interconnected services become the foundation of comfort, continuity, and wellbeing—shaping spaces where people can work, interact, and ",
    },
  ];

  // ================= HELPERS =================

  function validatePassword(pw) {
    const checks = [];
    if (pw.length <= 8) checks.push("must be longer than 8 characters");
    if (!/[A-Z]/.test(pw)) checks.push("must include an uppercase letter");
    if (!/[a-z]/.test(pw)) checks.push("must include a lowercase letter");
    if (!/[0-9]/.test(pw)) checks.push("must include a number");
    if (!/[!@#$%^&*()_+\-=[\]{};':\"\\|,.<>/?`~]/.test(pw))
      checks.push("must include a special character");
    return checks;
  }

  function handleSelectRole(r) {
    setRole(r);
    setTheme(
      r === "client"
        ? "client"
        : r === "professional"
        ? "professional"
        : "contractor"
    );
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    const err = [];

    if (!email) err.push("Email is required");

    const pwChecks = validatePassword(password);
    if (pwChecks.length) err.push(...pwChecks);

    if (password !== confirmPassword) err.push("Passwords do not match");

    if (role === "professional" && !profession && otherText === "") {
      err.push("Please select or enter a profession");
    }

    if (
      (role === "contractor" || role === "supplier" || role === "service") &&
      !category &&
      otherText === ""
    ) {
      err.push("Please select or enter a category/service");
    }

    setErrors(err);
    if (!err.length) {
      const finalValue =
        otherText || profession || category || "(no profession/category selected)";
      alert(
        `Would send signup payload:\nrole: ${role}\nemail: ${email}\nprofession/category: ${finalValue}`
      );
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    const err = [];
    if (!email) err.push("Email is required");
    if (!password) err.push("Password is required");
    setErrors(err);
    if (!err.length) {
      alert(`Would send login payload:\nrole: ${role}\nemail: ${email}`);
    }
  }

  // footer renderer (Home + main category buttons)
  function renderFooter(currentPage) {
    const baseBtn =
      "px-4 py-2 rounded-full text-sm mx-1 border border-blue-500 transition";

    const makeButton = (key, label, targetView) => {
      const isActive = currentPage === key;
      return (
        <button
          key={key}
          type="button"
          className={
            baseBtn +
            " " +
            (isActive
              ? "bg-blue-600 text-white cursor-default pointer-events-none"
              : "bg-blue-600/60 hover:bg-blue-600/80 text-white")
          }
          onClick={() => {
            if (isActive) return;
            if (targetView === "home") {
              setView("home");
              setTheme("base");
              setRole(null);
              setErrors([]);
            } else {
              setView(targetView);
              setErrors([]);
            }
          }}
        >
          {label}
        </button>
      );
    };

    return (
      <div className="%renderCategory">
        <div className="w-[95%] max-w-[1200px] mx-auto bg-black/40 backdrop-blur-sm rounded-full px-4 py-3 flex justify-center">
          {makeButton("home", "Home", "home")}
          {makeButton("professionals", "Professionals", "professionals")}
          {makeButton("contractors", "Contractors", "contractors")}
          {makeButton("suppliers", "Suppliers", "suppliers")}
          {makeButton("services", "Services", "services")}
        </div>
      </div>
    );
  }

  // reusable page renderer for each main category list
  function renderCategoryPage(pageKey, pageTitle, bgImage, items) {
    return (
      <motion.div
        key={pageKey}
        variants={morphVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative min-h-screen flex justify-center items-center pt-24"
      >
        {/* full-page background */}
        <div
          className="absolute inset-0 bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* centered 95% width content block */}
        <div className="relative z-20 w-[95%] bg-black/40 rounded-[35px] shadow-2xl px-12 py-10 mb-10 mx-auto text-center">
          <button
            onClick={() => setView("home")}
            className="text-white underline mb-6 text-lg"
          >
            ← Back
          </button>

          <h1 className="text-white text-5xl font-bold mb-10">{pageTitle}</h1>

          {/* 3 per row grid, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transition hover:border-white/40"
              >
                {/* Image (same bg as page, with translucent overlay) */}
                <div className="w-full h-40 relative">
                  <img
                    src={bgImage}
                    className="w-full h-full object-cover opacity-80"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-t-2xl"></div>
                </div>

                {/* Text */}
                <div className="p-5 text-white">
                  <h2 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-lg leading-relaxed inline">
                    {item.desc}{" "}
                  </p>

                  <button
                    className="inline-block ml-1 px-3 py-1 rounded-full bg-blue-400/50 hover:bg-blue-600/70 text-white text-base transition"
                    onClick={() =>
                      alert(
                        `Later this will open a more detailed page for ${item.title}.`
                      )
                    }
                  >
                    Meet them
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* gap before footer */}
          <div className="h-12"></div>
          {/* footer nav */}
          {renderFooter(pageKey)}
        </div>
      </motion.div>
    );
  }

  // theme gradients and overlays
  const themeMap = {
    base: {
      gradient: "bg-gradient-to-br from-green-50 via-blue-50 to-pink-50",
      accent: "text-emerald-800",
    },
    client: {
      gradient: "bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50",
      accent: "text-pink-700",
    },
    professional: {
      gradient:
        "bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50",
      accent: "text-violet-800",
    },
    contractor: {
      gradient: "bg-gradient-to-br from-blue-50 via-sky-50 to-violet-50",
      accent: "text-sky-800",
    },
  };

  const currentTheme = themeMap[theme] || themeMap.base;

  const morphVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.25 },
    },
  };

  const currentHomeSlide = slides[currentSlide];

  const availableStates =
    selectedCountry && statesByCountry[selectedCountry]
      ? statesByCountry[selectedCountry]
      : [];

  // ========= keep current view & slide on refresh (save only slide + view) =========
  useEffect(() => {
    const savedView = window.localStorage.getItem("sitewise_view");
    const savedSlide = window.localStorage.getItem("sitewise_slide");

    if (savedView) {
      setView(savedView);
    }
    if (savedSlide !== null) {
      const n = parseInt(savedSlide, 10);
      if (!Number.isNaN(n) && n >= 0 && n < slides.length) {
        setCurrentSlide(n);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("sitewise_view", view);
  }, [view]);

  useEffect(() => {
    window.localStorage.setItem("sitewise_slide", String(currentSlide));
  }, [currentSlide]);

  // ================= RENDER =================

  return (
    <div className={`${currentTheme.gradient} min-h-screen relative`}>
      {/* ===== Fixed Header ===== */}
      <header className="fixed top-0 left-0 right-0 z-30 h-[70px] bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center px-8">
        {/* left: logo + SiteWise text */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-600/80" />
          <span
            className="text-xl font-semibold tracking-tight"
            style={{
              fontFamily:
                '"Calm", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            }}
          >
            SiteWise
          </span>
        </div>

        {/* center: search bar placeholder */}
        <div className="flex-1 px-8">
          <div className="w-full h-10 rounded-full bg-black/5 border border-black/10 px-4 flex items-center text-sm text-gray-500">
            <span className="opacity-60">
              (Search bar reserved – we’ll wire this up later)
            </span>
          </div>
        </div>

        {/* right: login / signup */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setView("login");
              setErrors([]);
            }}
            className="px-4 py-2 rounded-full border border-black/30 text-sm hover:-translate-y-[1px] transition-transform"
          >
            Log in
          </button>
          <button
            onClick={() => {
              setView("signup");
              setErrors([]);
            }}
            className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow-sm hover:-translate-y-[1px] transition-transform"
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Main content area – padded for fixed header */}
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden flex flex-col items-center pt-[90px]">
        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait">
            {/* ==== HOME VIEW (5 SLIDES) ==== */}
            {view === "home" && (
              <motion.div
                key={`home-${currentHomeSlide.key}`}
                variants={morphVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10 w-[95%] mx-auto h-[87.3vh] overflow-hidden rounded-[35px]"
              >
                {/* background image */}
                <motion.div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${currentHomeSlide.bg})`,
                  }}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.18, delay: 0.05 }}
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* text content */}
                <motion.div
                  className="relative z-10 flex h-full items-center px-10 md:px-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  <div className="max-w-5xl space-y-8 text-white">
                    <h2 className="text-[48px] leading-tight font-semibold">
                      {currentHomeSlide.title}
                    </h2>
                    <p className="text-[24px] leading-relaxed text-gray-100/80 whitespace-pre-line">
                      {currentHomeSlide.bodyBeforeButton}
                      {currentHomeSlide.buttonTarget && (
                        <button
                          type="button"
                          onClick={() =>
                            setView(currentHomeSlide.buttonTarget)
                          }
                          className="inline-block align-baseline ml-2 px-4 py-1.5 rounded-full bg-blue-400/80 hover:bg-blue-400 text-xl font-medium text-white"
                        >
                          meet the right people
                        </button>
                      )}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* === SIGNUP & LOGIN CONTAINER (CENTERED) === */}
            {view !== "home" && (view === "signup" || view === "login") && (
              <div className="w-full flex justify-center items-center py-16">
                <AnimatePresence mode="wait">
                  {/* ===== SIGNUP VIEW (REPLACED) ===== */}
                  {view === "signup" && (
                    <motion.div
                      key="signup"
                      variants={morphVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-[65%] max-w-4xl min-w-[360px] bg-white/70 backdrop-blur-sm rounded-[35px] shadow-2xl p-10 mx-auto"
                    >
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-8">
                        <button
                          className="text-sm text-gray-700 underline"
                          onClick={() => {
                            setView("home");
                            setTheme("base");
                            setRole(null);
                            setErrors([]);
                          }}
                        >
                          ← Back
                        </button>

                        <h2 className="text-2xl font-semibold text-gray-900">
                          {role
                            ? role[0].toUpperCase() + role.slice(1)
                            : "Create Account"}
                        </h2>

                        <div className="w-16" />
                      </div>

                      {/* ROLE BUTTONS */}
                      <div className="mb-6 flex gap-3 flex-wrap">
                        {[
                          ["client", "bg-pink-200"],
                          ["professional", "bg-violet-200"],
                          ["contractor", "bg-sky-200"],
                          ["supplier", "bg-green-200"],
                          ["service", "bg-yellow-200"],
                        ].map(([key, color]) => (
                          <button
                            key={key}
                            onClick={() => handleSelectRole(key)}
                            className={`flex-1 min-w-[100px] py-2 rounded-lg ${
                              role === key ? color : "bg-white"
                            }`}
                          >
                            {key[0].toUpperCase() + key.slice(1)}
                          </button>
                        ))}
                      </div>

                      {/* SIGNUP FORM */}
                      <form
                        onSubmit={handleSignupSubmit}
                        className="space-y-6"
                      >
                        {/* NAMES ROW */}
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium">
                                First name <span className="text-red-500">*</span>
                              </label>
                              <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="First name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium">
                                Middle name
                              </label>
                              <input
                                value={middleName}
                                onChange={(e) =>
                                  setMiddleName(e.target.value)
                                }
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="Middle name (optional)"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium">
                                Last name <span className="text-red-500">*</span>
                              </label>
                              <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                        </div>

                        {/* CONTACT + EMAIL ROW */}
                        <div className="grid grid-cols-5 gap-4">
                          <div className="col-span-2">
                            <label className="block text-sm font-medium">
                              Contact number
                            </label>
                            <input
                              value={contactNumber}
                              onChange={(e) =>
                                setContactNumber(e.target.value)
                              }
                              className="w-full p-3 rounded-md border bg-white"
                              placeholder="Enter with country code (e.g. +91 98765...)"
                            />
                          </div>
                          <div className="col-span-3">
                            <label className="block text-sm font-medium">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full p-3 rounded-md border bg-white"
                              placeholder="you@domain.com"
                            />
                          </div>
                        </div>

                        {/* ROLE-SPECIFIC PROFESSION / CATEGORY / SERVICE DROPDOWN (ABOVE ADDRESS) */}
                        {role === "professional" && (
                          <div>
                            <label className="block text-sm font-medium">
                              Choose profession
                            </label>
                            <select
                              value={profession}
                              onChange={(e) => {
                                setProfession(e.target.value);
                                if (e.target.value !== "Other")
                                  setOtherText("");
                              }}
                              className="w-full p-3 rounded-md border bg-white"
                            >
                              <option value="">
                                -- choose profession --
                              </option>
                              {professions.map((p) => (
                                <option key={p} value={p}>
                                  {p}
                                </option>
                              ))}
                              <option value="Other">
                                Other (type manually)
                              </option>
                            </select>

                            {profession === "Other" && (
                              <input
                                className="mt-2 w-full p-3 rounded-md border bg-white"
                                placeholder="Enter your profession"
                                value={otherText}
                                onChange={(e) =>
                                  setOtherText(e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}

                        {role === "contractor" && (
                          <div>
                            <label className="block text-sm font-medium">
                              Choose contractor category
                            </label>
                            <select
                              value={category}
                              onChange={(e) => {
                                setCategory(e.target.value);
                                if (e.target.value !== "Other")
                                  setOtherText("");
                              }}
                              className="w-full p-3 rounded-md border bg-white"
                            >
                              <option value="">
                                -- choose category --
                              </option>
                              {contractorCategories.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                              <option value="Other">
                                Other (type manually)
                              </option>
                            </select>

                            {category === "Other" && (
                              <input
                                className="mt-2 w-full p-3 rounded-md border bg-white"
                                placeholder="Enter your category"
                                value={otherText}
                                onChange={(e) =>
                                  setOtherText(e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}

                        {role === "supplier" && (
                          <div>
                            <label className="block text-sm font-medium">
                              Choose supplier type
                            </label>
                            <select
                              value={category}
                              onChange={(e) => {
                                setCategory(e.target.value);
                                if (e.target.value !== "Other")
                                  setOtherText("");
                              }}
                              className="w-full p-3 rounded-md border bg-white"
                            >
                              <option value="">
                                -- choose category --
                              </option>
                              {supplierOptions.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                              <option value="Other">
                                Other (type manually)
                              </option>
                            </select>

                            {category === "Other" && (
                              <input
                                className="mt-2 w-full p-3 rounded-md border bg-white"
                                placeholder="Enter supplier category"
                                value={otherText}
                                onChange={(e) =>
                                  setOtherText(e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}

                        {role === "service" && (
                          <div>
                            <label className="block text-sm font-medium">
                              Choose service
                            </label>
                            <select
                              value={category}
                              onChange={(e) => {
                                setCategory(e.target.value);
                                if (e.target.value !== "Other")
                                  setOtherText("");
                              }}
                              className="w-full p-3 rounded-md border bg-white"
                            >
                              <option value="">
                                -- choose service --
                              </option>
                              {serviceOptions.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                              <option value="Other">
                                Other (type manually)
                              </option>
                            </select>

                            {category === "Other" && (
                              <input
                                className="mt-2 w-full p-3 rounded-md border bg-white"
                                placeholder="Enter service"
                                value={otherText}
                                onChange={(e) =>
                                  setOtherText(e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}

                        {/* ADDRESS SECTION */}
                        <div className="space-y-4">
                          {/* Row 1 */}
                          <div>
                            <label className="block text-sm font-medium">
                              Address{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              value={addressLine1}
                              onChange={(e) =>
                                setAddressLine1(e.target.value)
                              }
                              className="w-full p-3 rounded-md border bg-white"
                              placeholder="Apartment / Building number / Street / Colony / Area"
                            />
                          </div>

                          {/* Row 2: City, State, Country */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium">
                                City <span className="text-red-500">*</span>
                              </label>
                              <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="City"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium">
                                State <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={selectedState}
                                onChange={(e) =>
                                  setSelectedState(e.target.value)
                                }
                                className="w-full p-3 rounded-md border bg-white"
                              >
                                <option value="">Select state</option>
                                {availableStates.map((st) => (
                                  <option key={st} value={st}>
                                    {st}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium">
                                Country{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={selectedCountry}
                                onChange={(e) => {
                                  setSelectedCountry(e.target.value);
                                  setSelectedState("");
                                }}
                                className="w-full p-3 rounded-md border bg-white"
                              >
                                <option value="">Select country</option>
                                {countries.map((c) => (
                                  <option key={c} value={c}>
                                    {c}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Row 3: ZIP + Landmark (1:2 ratio) */}
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium">
                                ZIP / Postal code{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="ZIP / Postal code"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-sm font-medium">
                                Landmark (optional)
                              </label>
                              <input
                                value={landmark}
                                maxLength={100}
                                onChange={(e) => setLandmark(e.target.value)}
                                className="w-full p-3 rounded-md border bg-white"
                                placeholder="Nearby landmark (max 100 characters)"
                              />
                            </div>
                          </div>
                        </div>

                        {/* RADIO SECTIONS */}
                        {role === "client" && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium">
                              What are you looking for?
                            </p>
                            <div className="space-y-1 text-sm">
                              {[
                                ["personal", "Personal projects"],
                                ["pro-large", "Professional – large scale"],
                                ["pro-small", "Professional – small scale"],
                                ["open", "Open to all options"],
                              ].map(([value, label]) => (
                                <label
                                  key={value}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="radio"
                                    name="clientProjectType"
                                    value={value}
                                    checked={clientProjectType === value}
                                    onChange={(e) =>
                                      setClientProjectType(e.target.value)
                                    }
                                  />
                                  <span>{label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}

                        {role && role !== "client" && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium">
                              How are you working?
                            </p>
                            <div className="space-y-1 text-sm">
                              <label className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  name="workMode"
                                  value="freelancer"
                                  checked={workMode === "freelancer"}
                                  onChange={(e) =>
                                    setWorkMode(e.target.value)
                                  }
                                />
                                <span>Freelancer</span>
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  name="workMode"
                                  value="organisation"
                                  checked={workMode === "organisation"}
                                  onChange={(e) =>
                                    setWorkMode(e.target.value)
                                  }
                                />
                                <span>Part of an organisation / business</span>
                              </label>
                            </div>

                            {workMode === "organisation" && (
                              <div className="mt-2">
                                <label className="block text-sm font-medium">
                                  Organisation / Business name
                                </label>
                                <input
                                  value={organizationName}
                                  onChange={(e) =>
                                    setOrganizationName(e.target.value)
                                  }
                                  className="w-full p-3 rounded-md border bg-white"
                                  placeholder="Enter organisation or business name"
                                />
                              </div>
                            )}
                          </div>
                        )}

                        {/* PASSWORD */}
                        <div>
                          <label className="block text-sm font-medium">
                            Create password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-md border bg-white"
                            placeholder="Create a strong password"
                          />
                          <small className="text-xs text-gray-600">
                            Must include uppercase, lowercase, number,
                            special character, 8+ chars.
                          </small>
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div>
                          <label className="block text-sm font-medium">
                            Confirm password
                          </label>
                          <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                              setConfirmPassword(e.target.value)
                            }
                            className="w-full p-3 rounded-md border bg-white"
                            placeholder="Confirm password"
                          />
                        </div>

                        {/* ERRORS */}
                        {errors.length > 0 && (
                          <div className="bg-red-100 p-3 rounded border border-red-300">
                            <ul className="text-red-700 text-sm">
                              {errors.map((er, i) => (
                                <li key={i}>• {er}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* ACTION BUTTONS */}
                        <div className="flex items-center gap-4 pt-4">
                          <button
                            type="submit"
                            className="px-6 py-3 rounded-md bg-emerald-600 text-white"
                          >
                            Create account
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setView("login");
                              setErrors([]);
                            }}
                            className="px-5 py-2 rounded-md border bg-white"
                          >
                            Go to Login
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                    </AnimatePresence>   
                    </div>                 
                  
)} 

{/* ===== LOGIN VIEW ===== */}
{view === "login" && (
  <motion.div
    key="login"
    variants={morphVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="w-[40%] min-w-[360px] bg-white/70 backdrop-blur-sm rounded-[35px] shadow-2xl p-10 mx-auto"
  >
    {/* HEADER */}
    <div className="flex items-center justify-between mb-2">
      <button
        className="text-sm text-gray-700 underline"
        onClick={() => {
          setView("home");
          setTheme("base");
          setRole(null);
          setErrors([]);
        }}
      >
        ← Back
      </button>

      <h2 className="text-2xl font-semibold text-gray-900">
        {role ? `${role[0].toUpperCase() + role.slice(1)} Login` : "Sign in"}
      </h2>

      <div className="w-16" />
    </div>

    {/* ROLE BUTTONS */}
    <div className="mb-6 flex gap-3 flex-wrap">
      {[
        ["client", "bg-pink-200"],
        ["professional", "bg-violet-200"],
        ["contractor", "bg-sky-200"],
        ["supplier", "bg-green-200"],
        ["service", "bg-yellow-200"],
      ].map(([key, color]) => (
        <button
          key={key}
          onClick={() => handleSelectRole(key)}
          className={`flex-1 min-w-[100px] py-2 rounded-lg ${
            role === key ? color : "bg-white"
          }`}
        >
          {key[0].toUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>

    {/* LOGIN FORM */}
    <form onSubmit={handleLoginSubmit} className="space-y-4">
      {/* EMAIL */}
      <div>
        <label className="block text-sm">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md border bg-white"
          placeholder="you@domain.com"
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md border bg-white"
          placeholder="Your password"
        />
      </div>

      {/* ERRORS */}
      {errors.length > 0 && (
        <div className="bg-red-100 p-3 rounded border border-red-300">
          <ul className="text-red-700 text-sm">
            {errors.map((er, i) => (
              <li key={i}>• {er}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-emerald-600 text-white"
        >
          Sign in
        </button>

        <button
          type="button"
          onClick={() => {
            setView("signup");
            setErrors([]);
          }}
          className="px-5 py-2 rounded-md border bg-white"
        >
          Go to Sign up
        </button>
      </div>
    </form>
  </motion.div>
)}
</AnimatePresence>
</div>

        {/* ===== CATEGORY PAGES ===== */}
        {view === "professionals" &&
          renderCategoryPage(
            "professionals",
            "Professionals",
            "/sketch.png",
            professionalsContent
          )}

        {view === "contractors" &&
          renderCategoryPage(
            "contractors",
            "Contractors",
            "/underwork.png",
            contractorsContent
          )}

        {view === "suppliers" &&
          renderCategoryPage(
            "suppliers",
            "Suppliers",
            "/final.jpg",
            suppliersContent
          )}

        {view === "services" &&
          renderCategoryPage(
            "services",
            "Services",
            "/garbage.png",
            servicesContent
          )}

        {/* ===== ARROWS (only on home view) ===== */}
        {view === "home" && currentSlide > 0 && (
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => Math.max(prev - 1, 0))
            }
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-6 h-6 flex items-center justify-center"
          >
            <span
              className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-white"
            ></span>
          </button>
        )}
        {view === "home" && currentSlide < slides.length - 1 && (
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) =>
                Math.min(prev + 1, slides.length - 1)
              )
            }
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-6 h-6 flex items-center justify-center"
          >
            <span
              className="w-0 h-0 rotate-180 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-white"
            ></span>
          </button>
        )}
      </div>
    </div>
  );
}
