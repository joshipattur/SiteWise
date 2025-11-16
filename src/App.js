import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Single-file React component for a small prototype of SiteWise
// Tailwind CSS is used for layout and spacing. Framer Motion for morphing animations.
// To preview: create a React app (Vite or CRA), add Tailwind + Framer Motion, then paste this component in App.jsx.

export default function SiteWiseApp() {
  const [view, setView] = useState("home"); // home | login | signup
  const [role, setRole] = useState(null); // client | professional | contractor
  const [theme, setTheme] = useState("base"); // base | client | professional | contractor

  // form state (shared for demo)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);
  const [otherText, setOtherText] = useState("");


  const professions = [
    "Architect",
    "Interior Designer",
    "Landscape Designers",
    "Civil Engineer",
    "Structural Engineer",
    "Planners",
    "Town planners",
    "Urban planners",
    "City planners",
    "Country planners",
    "Interior Decorations",
    "Project Manager",
    "Surveyor",
    "Real Estate Agents",
    "Other",
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
    "Painters",
    "Concrete",
    "Speciality services",
    "Other",
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
  "Doors and Windows",
  "Hardware",
  "Concrete",
  "Other",
];

const serviceOptions = [
  "Trash",
  "Pest",
  "Weed and Fertilizers (Lawn Care)",
  "Waterproofing",
  "Electrical Testing",
  "Smoke Testing",
  "Construction Cleaning",
  "Water Damage Restoration",
  "Specialities",
  "Tool Rentals",
  "Equipment Rentals",
  "Vehicle Rentals",
  "Dumpster",
  "Trash",
  "Restorations",
  "Lab Tests",
  "Surveyors",
  "Other",
];

  // password validation: uppercase, lowercase, number, special, length > 8
  function validatePassword(pw) {
    const checks = [];
    if (pw.length <= 8) checks.push("must be longer than 8 characters");
    if (!/[A-Z]/.test(pw)) checks.push("must include an uppercase letter");
    if (!/[a-z]/.test(pw)) checks.push("must include a lowercase letter");
    if (!/[0-9]/.test(pw)) checks.push("must include a number");
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(pw))
      checks.push("must include a special character");
    return checks;
  }

  function handleSelectRole(r) {
    setRole(r);
    // set theme for morphing
    setTheme(r === "client" ? "client" : r === "professional" ? "professional" : "contractor");
  }

  function goTo(v) {
    setView(v);
  }

  function handleSignup(e) {
    e.preventDefault();
    const err = [];
    if (!email) err.push("Email is required");
    const pwChecks = validatePassword(password);
    if (pwChecks.length) err.push(...pwChecks);
    if (password !== confirmPassword) err.push("Passwords do not match");
    if (role === "professional" && !profession) err.push("Please select a profession");
    if (role === "contractor" && !category) err.push("Please select a contractor category");
    setErrors(err);
    if (!err.length) {
      // NOTE: This is a frontend prototype; replace with API call when you have a backend
      alert(`Would send signup payload:\nrole: ${role}\nemail: ${email}\nprofession/category: ${profession || category}`);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const err = [];
    if (!email) err.push("Email is required");
    if (!password) err.push("Password is required");
    setErrors(err);
    if (!err.length) {
      // NOTE: frontend-only prototype
      alert(`Would attempt login for ${role || "(no role selected)"} with ${email}`);
    }
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
      gradient: "bg-gradient-to-br from-purple-50 via-lavender-50 to-indigo-50",
      accent: "text-violet-800",
    },
    contractor: {
      gradient: "bg-gradient-to-br from-blue-50 via-sky-50 to-violet-50",
      accent: "text-sky-800",
    },
  };

  const currentTheme = themeMap[theme] || themeMap.base;

  // small helper for morph animation variants
  const morphVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.42 } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.28 } },
  };

  return (
  <div className={`${currentTheme.gradient} min-h-screen flex items-center justify-center p-6`}>
    {/* subtle gold splatter SVG overlay */}
    <svg className="pointer-events-none absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="grain" x="0" y="0" width="1" height="1">
          <feTurbulence baseFrequency="0.9" numOctaves="2" result="turb" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <g opacity="0.06" fill="gold">
        <circle cx="10%" cy="20%" r="120" />
        <circle cx="85%" cy="15%" r="80" />
        <circle cx="70%" cy="75%" r="140" />
      </g>
    </svg>

    <div className="relative z-10 w-full max-w-4xl">
      <AnimatePresence mode="wait">
        {view === "home" && (
          <motion.div key="home" variants={morphVariants} initial="hidden" animate="visible" exit="exit" className="rounded-3xl shadow-2xl p-10 bg-white/60 backdrop-blur-sm">
            <header className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: '"Calm", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
                SiteWise
              </h1>
              <div className="space-x-3">
                <button onClick={() => { goTo("login"); }} className="px-4 py-2 rounded-full border">Log in</button>
                <button onClick={() => { goTo("signup"); }} className="px-4 py-2 rounded-full bg-emerald-600 text-white">Sign up</button>
              </div>
            </header>

            <main className="space-y-6">
              <p className="text-gray-700">A hub that connects every professional and contractor involved in building projects. Choose to log in or sign up to begin.</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 rounded-xl border bg-white/80">Clients<br /><small className="text-xs text-gray-500">Project owners, developers</small></div>
                <div className="p-6 rounded-xl border bg-white/80">Professionals<br /><small className="text-xs text-gray-500">Architects, engineers, designers</small></div>
                <div className="p-6 rounded-xl border bg-white/80">Contractors<br /><small className="text-xs text-gray-500">Trades, material suppliers</small></div>
              </div>

              <footer className="text-xs text-gray-500">Prototype UI — no backend yet. I can wire up APIs or a database when you want.</footer>
            </main>
          </motion.div>
        )}

        {/* SIGNUP */}
        {view === "signup" && (
          <motion.div key="signup" variants={morphVariants} initial="hidden" animate="visible" exit="exit" className="rounded-3xl shadow-2xl p-8 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <button className="text-sm text-gray-600 underline" onClick={() => { setView("home"); setTheme("base"); setRole(null); }}>&larr; Back</button>
              <h2 className="text-2xl font-semibold">{role ? role[0].toUpperCase() + role.slice(1) : "Create Account"}</h2>
              <div className="w-20" />
            </div>

            {/* UPDATED ROLE BUTTONS */}
            <div className="mb-4 flex gap-3">
              <button onClick={() => handleSelectRole("client")} className={`flex-1 py-2 rounded-lg ${role === "client" ? "bg-pink-200" : "bg-white"}`}>Client</button>
              <button onClick={() => handleSelectRole("professional")} className={`flex-1 py-2 rounded-lg ${role === "professional" ? "bg-violet-200" : "bg-white"}`}>Professional</button>
              <button onClick={() => handleSelectRole("contractor")} className={`flex-1 py-2 rounded-lg ${role === "contractor" ? "bg-sky-200" : "bg-white"}`}>Contractor</button>
              <button onClick={() => handleSelectRole("supplier")} className={`flex-1 py-2 rounded-lg ${role === "supplier" ? "bg-green-200" : "bg-white"}`}>Supplier</button>
              <button onClick={() => handleSelectRole("service")} className={`flex-1 py-2 rounded-lg ${role === "service" ? "bg-yellow-200" : "bg-white"}`}>Service</button>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-md border" placeholder="you@domain.com" />
              </div>

             {/* PROFESSIONAL DROPDOWN */}
{role === "professional" && (
  <div>
    <label className="block text-sm">Select profession</label>

    <select
      value={profession}
      onChange={(e) => {
        setProfession(e.target.value);
        if (e.target.value !== "Other") setOtherText("");
      }}
      className="w-full p-3 rounded-md border"
    >
      <option value="">-- choose profession --</option>
      {professions.map((p) => (
        <option key={p} value={p}>{p}</option>
      ))}
      <option value="Other">Other (type manually)</option>
    </select>

    {profession === "Other" && (
      <input
        type="text"
        className="mt-2 w-full p-3 rounded-md border"
        placeholder="Enter your profession"
        value={otherText}
        onChange={(e) => setOtherText(e.target.value)}
      />
    )}
  </div>
)}

{/* CONTRACTOR DROPDOWN */}
{role === "contractor" && (
  <div>
    <label className="block text-sm">Select category</label>

    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        if (e.target.value !== "Other") setOtherText("");
      }}
      className="w-full p-3 rounded-md border"
    >
      <option value="">-- choose category --</option>
      {contractorCategories.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
      <option value="Other">Other (type manually)</option>
    </select>

    {category === "Other" && (
      <input
        type="text"
        className="mt-2 w-full p-3 rounded-md border"
        placeholder="Enter your category"
        value={otherText}
        onChange={(e) => setOtherText(e.target.value)}
      />
    )}
  </div>
)}

{/* SUPPLIER DROPDOWN */}
{role === "supplier" && (
  <div>
    <label className="block text-sm">Select supplier type</label>

    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        if (e.target.value !== "Other") setOtherText("");
      }}
      className="w-full p-3 rounded-md border"
    >
      <option value="">-- choose category --</option>
      {supplierOptions.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
      <option value="Other">Other (type manually)</option>
    </select>

    {category === "Other" && (
      <input
        type="text"
        className="mt-2 w-full p-3 rounded-md border"
        placeholder="Enter supplier category"
        value={otherText}
        onChange={(e) => setOtherText(e.target.value)}
      />
    )}
  </div>
)}

{/* SERVICE DROPDOWN */}
{role === "service" && (
  <div>
    <label className="block text-sm">Select service</label>

    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        if (e.target.value !== "Other") setOtherText("");
      }}
      className="w-full p-3 rounded-md border"
    >
      <option value="">-- choose service --</option>
      {serviceOptions.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
      <option value="Other">Other (type manually)</option>
    </select>

    {category === "Other" && (
      <input
        type="text"
        className="mt-2 w-full p-3 rounded-md border"
        placeholder="Enter service"
        value={otherText}
        onChange={(e) => setOtherText(e.target.value)}
      />
    )}
  </div>
)}
              <div>
                <label className="block text-sm">Create password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-md border" placeholder="Create a strong password" />
                <small className="text-xs text-gray-500">Must include uppercase, lowercase, number, special character and be longer than 8 characters.</small>
              </div>

              <div>
                <label className="block text-sm">Confirm password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-3 rounded-md border" placeholder="Confirm password" />
              </div>

              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 p-3 rounded">
                  <ul className="text-sm text-red-700">
                    {errors.map((er, i) => (
                      <li key={i}>• {er}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button type="submit" className="px-6 py-3 rounded-md bg-emerald-600 text-white">Create account</button>
                <button type="button" className="px-4 py-2 rounded-md border" onClick={() => { setView("login"); }}>Go to Login</button>
              </div>
            </form>
          </motion.div>
        )}

        {/* LOGIN */}
        {view === "login" && (
          <motion.div key="login" variants={morphVariants} initial="hidden" animate="visible" exit="exit" className="rounded-3xl shadow-2xl p-8 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <button className="text-sm text-gray-600 underline" onClick={() => { setView("home"); setTheme("base"); setRole(null); }}>&larr; Back</button>
              <h2 className="text-2xl font-semibold">{role ? `${role[0].toUpperCase() + role.slice(1)} Login` : "Sign in"}</h2>
              <div className="w-20" />
            </div>

            <div className="mb-4 flex gap-3">
              <button onClick={() => handleSelectRole("client")} className={`flex-1 py-2 rounded-lg ${role === "client" ? "bg-pink-200" : "bg-white"}`}>Client</button>
              <button onClick={() => handleSelectRole("professional")} className={`flex-1 py-2 rounded-lg ${role === "professional" ? "bg-violet-200" : "bg-white"}`}>Professional</button>
              <button onClick={() => handleSelectRole("contractor")} className={`flex-1 py-2 rounded-lg ${role === "contractor" ? "bg-sky-200" : "bg-white"}`}>Contractor</button>
              <button onClick={() => handleSelectRole("supplier")} className={`flex-1 py-2 rounded-lg ${role === "supplier" ? "bg-green-200" : "bg-white"}`}>Supplier</button>
              <button onClick={() => handleSelectRole("service")} className={`flex-1 py-2 rounded-lg ${role === "service" ? "bg-yellow-200" : "bg-white"}`}>Service</button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-md border" placeholder="you@domain.com" />
              </div>

              <div>
                <label className="block text-sm">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-md border" placeholder="Your password" />
              </div>

              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 p-3 rounded">
                  <ul className="text-sm text-red-700">
                    {errors.map((er, i) => (
                      <li key={i}>• {er}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button type="submit" className="px-6 py-3 rounded-md bg-emerald-600 text-white">Sign in</button>
                <button type="button" className="px-4 py-2 rounded-md border" onClick={() => { setView("signup"); }}>Go to Sign up</button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);
