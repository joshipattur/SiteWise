const contractorsContent = [
    {
      title: "Builder",
      desc:
        "Builders turn raw land into livable reality, shaping walls, rooms, and entire stories out of stone, steel, and sweat. They bring together every trade, every detail, and every vision with unwavering precision. If you want to see how a dream becomes a structure, go ahead and ",
        image: "/contractors/builder.jpg",
    },
    {
      title: "General Contractor",
      desc:
        "The generals of the jobsite, they coordinate timelines, teams, materials, and risks with expert discipline. They turn chaos into choreography, ensuring every phase of construction flows seamlessly. Curious who keeps big projects on track? Simply ",
        image: "/contractors/general contractor.jpg",
      },
    {
      title: "Remodeler",
      desc:
        "Remodelers breathe new life into old spaces, transforming outdated rooms into fresh, modern environments with character and purpose. They see potential where others see problems. Ready for reinvention? ",
        image: "/contractors/remodeler.jpeg",
      },
    {
      title: "Painters",
      desc:
        "Painters bring emotion into architecture, layering color, depth, and finish to define mood and identity. Their craft is the final stroke that makes a space feel complete. Want to see how color changes everything? ",
        image: "/contractors/painter.jpg",
      },
    {
      title: "Flooring Contractor",
      desc:
        "They lay the foundation of movement — steps, stories, and everyday living. From hardwood to tile to carpet, they shape the feeling under your feet. Interested in what supports every moment? Go ",
        image: "/contractors/flooring.jpg",
      },
    {
      title: "Electricians",
      desc:
        "Electricians power the heartbeat of every building, wiring intelligence, safety, and convenience into the walls. Light, energy, automation — nothing works without them. Want to meet the ones who keep everything running? ",
        image: "/contractors/electrician.jpg",
      },
    {
      title: "Plumber",
      desc:
        "Plumbers create the invisible comfort we rely on daily — clean water, drainage, efficiency, and reliability. Their systems keep a building healthy from the inside out. Curious who makes life flow smoothly? You’ll want to ",
        image: "/contractors/plumber.jpg",
      },
    {
      title: "HVAC",
      desc:
        "They craft comfort — air that moves, cools, warms, and breathes life into interiors. HVAC specialists balance mechanics with atmosphere, making spaces truly livable. If comfort matters to you, go ",
        image: "/contractors/havc.jpeg",
      },
    {
      title: "Mechanical",
      desc:
        "Mechanical contractors integrate motion, systems, and function into the core of a building. They design the machinery of everyday life. Want to understand the hidden forces behind modern infrastructure? ",
        image: "/contractors/mechanical.jpg",
      },
    {
      title: "Pool Contractors",
      desc:
        "They shape water into luxury, relaxation, and lifestyle. From serene backyard pools to dramatic commercial designs, they craft refreshing escapes. Dreaming in blue? It’s time to ",
        image: "/contractors/pool.jpg",
      },
    {
      title: "Roofing",
      desc:
        "Roofers protect everything beneath them, creating shields that withstand weather, time, and unpredictability. Strength above, security below. Want the ones who keep you covered? ",
        image: "/contractors/roof.jpeg",
      },
    {
      title: "Deck",
      desc:
        "Deck builders create outdoor stages for life — gatherings, sunsets, conversations, and calm. They turn backyards into living extensions of home. Ready to step outside? Simply ",
        image: "/contractors/deck.jpg",
      },
    {
      title: "Patio",
      desc:
        "Patio specialists design grounded, beautiful terraces that host relaxation, dining, and connection. They craft the heart of outdoor living. Curious who elevates the outdoors? ",
        image: "/contractors/patio.jpeg",
      },
    {
      title: "Landscape",
      desc:
        "Landscape crews sculpt the environment itself — terrain, plants, textures, and flow. They bring nature into harmony with design. If you love spaces that breathe, go ",
        image: "/contractors/landscape.jpeg",
      },
    {
      title: "Irrigation",
      desc:
        "Irrigation experts give landscapes life, nurturing green spaces through precise, sustainable water systems. They balance nature with technology. Want to meet the ones who help things grow? ",
        image: "/contractors/irrigation.png",
      },
    {
      title: "Fire Alarm",
      desc:
        "These specialists design detection systems that save lives, integrating technology that reacts before anyone else can. Safety starts with them. Looking for peace of mind? Just ",
        image: "/contractors/fire.jpg",  
      },
    {
      title: "Fire Sprinkler",
      desc:
        "Fire sprinkler experts create active protection — systems that respond instantly, minimizing damage and safeguarding people. Quiet guardians of every building. It’s time to ",
        image: "/contractors/sprinkler.jpeg",
      },
    {
      title: "Fence Contractor",
      desc:
        "Fence contractors shape boundaries with purpose, privacy, and protection. From decorative to durable, they define perimeters with precision. Need a line drawn right? ",
        image: "/contractors/fence.jpg",
      },
    {
      title: "Framer",
      desc:
        "Framers raise the skeleton of a structure, giving every building its shape, strength, and stance. Without them, nothing stands. Curious about the first form of every project? ",
        image: "/contractors/framer.jpg",
      },
    {
      title: "Drywall Hangers",
      desc:
        "They close in spaces, creating the canvas for every interior finish. Clean lines, smooth surfaces, solid walls — their work frames your daily life. Want to meet the ones who make rooms real? ",
        image: "/contractors/drywall.jpg",
      },
    {
      title: "Doors and Windows",
      desc:
        "They craft the openings that bring light, access, airflow, and presence. Doors and windows define how a building connects with its surroundings. If transparency and transition matter to you, ",
        image: "/contractors/doors.jpg",
      },
    {
      title: "Glass and Glazing",
      desc:
        "Glaziers turn glass into architecture — expansive facades, precise panels, and artistic transparency. They shape reflections and light with incredible skill. Want to see clarity differently? ",
        image: "/contractors/glazing.jpg",
      },
    {
      title: "Cabinets",
      desc:
        "Cabinet makers design organized beauty — storage that blends craftsmanship with style. Kitchens, closets, workspaces — they elevate them all. Ready for smart, stunning spaces? ",
        image: "/contractors/cabinets.jpg",
      },
    {
      title: "Countertops",
      desc:
        "They shape the surfaces we use every day, from stone to composite to custom finishes. Aesthetic, durable, essential — their work grounds every room. Want to see what good craftsmanship feels like? ",
        image: "/contractors/counter.jpg",
      },
    {
      title: "Painters (Specialist)",
      desc:
        "Some painters don’t just cover walls — they craft ambiance, personality, and tone with every stroke. Their finishes complete the identity of a space. Curious to see transformation in color? ",
        image: "/contractors/painter.jpg",
      },
    {
      title: "Concrete",
      desc:
        "Concrete contractors build strength from the ground up — foundations, slabs, walls, and structures that last lifetimes. Solid, precise, fundamental. Want to witness true durability at work? ",
        image: "/contractors/concrete.jpg",
      },
    {
      title: "Blacksmith",
      desc:
        "Forged in fire and shaped with precision, their craft strengthens the very skeleton of a structure—whether it’s custom metalwork, reinforced joints, gates, or architectural details. Their skill ensures durability where it matters most! Go",
        image: "/contractors/blacksmith.jpg",
      },
  ];
  export default contractorsContent;