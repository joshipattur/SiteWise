import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginView({
  view,
  setView,
  setTheme,
  setRole,
  setErrors,
  handleLoginSubmit,
  email,
  setEmail,
  password,
  setPassword,
  errors,
  morphVariants,
}) {
  const [showPassword, setShowPassword] = useState(false);

  if (view !== "login") return null;

  return (
    <div className="w-full flex justify-center py-[180px]">
      <motion.div
        key="login"
        variants={morphVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[420px] bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <button
            className="text-sm text-white/60 hover:text-white transition"
            onClick={() => {
              setView("home");
              setTheme("base");
              setRole(null);
              setErrors([]);
            }}
          >
            ← Back
          </button>

          <h2 className="text-3xl font-semibold text-white">
            Log in
          </h2>

          <div className="w-12" />
        </div>

        {/* FORM */}
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full p-3 rounded-lg 
                bg-white/10 
                border border-white/20 
                text-white 
                placeholder-white/40
                focus:outline-none 
                focus:border-emerald-400 
                focus:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                transition-all duration-300
              "
              placeholder="you@domain.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full p-3 pr-12 rounded-lg 
                  bg-white/10 
                  border border-white/20 
                  text-white 
                  placeholder-white/40
                  focus:outline-none 
                  focus:border-emerald-400 
                  focus:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                  transition-all duration-300
                "
                placeholder="Your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* ERRORS */}
          {errors.length > 0 && (
            <div className="bg-red-900/30 border border-red-500/40 p-3 rounded-lg">
              <ul className="text-red-300 text-sm">
                {errors.map((er, i) => (
                  <li key={i}>• {er}</li>
                ))}
              </ul>
            </div>
          )}

          {/* BUTTONS */}
          <div className="space-y-3 pt-4">
            <button
              type="submit"
              className="
                w-full py-3 rounded-lg 
                bg-emerald-600 
                hover:bg-emerald-500 
                text-white font-semibold
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]
                hover:scale-[1.02]
              "
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => {
                setView("signup");
                setErrors([]);
              }}
              className="
                w-full py-3 rounded-lg 
                bg-white/10 
                border border-white/20
                text-white
                transition-all duration-300
                hover:bg-white/20
                hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]
              "
            >
              Create an account
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}