import { supabase } from './supabaseClient.js'
const classicTitle = document.getElementById("classic-title");
const alienForceTitle = document.getElementById("alienforce-title");
const ultimateTitle = document.getElementById("ultimate-title");
const omniverseTitle = document.getElementById("omniverse-title");
const rebootTitle = document.getElementById("reboot-title");
const aliens = [
  {
    name: "Heatblast",
    species: "Pyronite",
    planet: "Pyros",
    image: "/images/heatblastpfp.png",
    series: "classic",
    powers: ["Fire control", "Flight", "Heat resistance"],
    weaknesses: ["Water", "Extreme cold"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/heatblastos.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/heatblastua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/heatblastov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/heatblastreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/heatblastomnienhanced.png",
          powers: ["Enhanced fire blasts", "Energy-infused attacks", "Heat resistance"],
          weaknesses: ["Water", "Energy instability"]
        },
        {
          label: "Omni-Kix", image: "/images/heatblastomnikix.png",
          powers: ["Armored body", "Heavy fire attacks", "Greater durability"],
          weaknesses: ["Less speed", "Heavy movement"]
        },
        {
          label: "Omni-Naut", image: "/images/heatblastomninaut.png",
          powers: ["Space mobility", "Fire jets", "Vacuum resistance"],
          weaknesses: ["Lower agility", "Bulky suit"]
        }
      ]
    }
  },
  {
    name: "Wildmutt",
    species: "Vulpimancer",
    planet: "Vulpin",
    image: "/images/wildmuttpfp.png",
    series: "classic",
    powers: ["Enhanced senses", "Enhanced agility", "Sharp claws and teeth"],
    weaknesses: ["No eyesight or speech", "Senses can be overwhelmed"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/wildmuttos.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/wildmuttua.png" },
        {
          label: "Ultimate", image: "/images/wildmuttultimate.png",
          powers: ["Enhanced senses", "Spiked tail", "Greater strength"],
          weaknesses: ["Less agility", "Harder to maneuver in tight spaces"]
        }
      ],
      omniverse: [
        { label: "Base", image: "/images/wildmuttov.png" }
      ]
    }
  },
  {
    name: "Diamondhead",
    species: "Petrosapien",
    planet: "Petropia",
    image: "/images/diamondheadpfp.png",
    series: "classic",
    powers: ["Crystal generation", "Crystal weapons", "Regeneration"],
    weaknesses: ["Powerful sonic vibrations", "Extreme force can shatter him"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/diamondheados.png" }
      ],
      alienforce: [
        { label: "Base", image: "/images/diamondheadaf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/diamondheadov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/diamondheadreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/diamondheadomnienhanced.png",
          powers: ["Crystal manipulation", "Blue energy blasts", "Energy absorption", "Crystal weapon creation", "Enhanced durability"],
          weaknesses: ["Strong sonic vibrations"]
        },
        {
          label: "Omni-Kix", image: "/images/diamondheadomnikix.png",
          powers: ["Crystallokinesis", "Omni-Kix gauntlets", "Shield blades"],
          weaknesses: ["Can crack or shatter under enough force"]
        }
      ]
    }
  },
  {
    name: "XLR8",
    species: "Kineceleran",
    planet: "Kinet",
    image: "/images/xlr8pfp.png",
    series: "classic",
    powers: ["Super speed", "Enhanced reflexes", "Sharp tail"],
    weaknesses: ["Slippery or sticky surfaces", "Magnets and charged pulses"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/xlr8os.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/xlr8ua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/xlr8ov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/xlr8reboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/xlr8omnienhanced.png",
          powers: ["Enhanced speed", "Turbo-charged energy kicks", "Electric tail attacks"],
          weaknesses: ["Slippery or sticky surfaces", "Hard to stop at high speed"],
        },
        {
          label: "Omni-Kix", image: "/images/xlr8omnikix.png",
          powers: ["Hypersonic speed", "Omni-Kix armor", "Air dashes", "Enhanced durability"],
          weaknesses: ["Slippery or sticky surfaces", "Hard to stop at high speed"]
        }
      ]
    }
  },
  {
    name: "Grey Matter",
    species: "Galvan",
    planet: "Galvan Prime",
    image: "/images/greymatterpfp.png",
    series: "classic",
    powers: ["Super intelligence", "Small size", "Tech expertise"],
    weaknesses: ["Very low physical strength", "Tiny body is easy to grab"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/greymatteros.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/greymatterov.png" },
        {
          label: "Ultimate", image: "/images/greymatterultimate.png",
          powers: ["Enhanced intelligence", "Future scenario prediction", "Energy eye beams"],
          weaknesses: ["Dependent on on his hovercraft because of his oversized head and tiny limbs"]
        }
      ],
      reboot: [
        { label: "Base", image: "/images/greymatterreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/greymatteromnienhanced.png",
          powers: ["Enhanced intelligence", "Electric shocks", "Limb extension", "Electrical shockwaves", "Enhanced durability"],
          weaknesses: ["Loses his small size", "Still weak against heavy hitters"]
        }
      ]
    }
  },
  {
    name: "Fourarms",
    species: "Tetramand",
    planet: "Khoros",
    image: "/images/fourarmspfp.png",
    series: "classic",
    alias: "four arms",
    powers: ["Super strength", "Shockwave claps", "Enhanced jumping"],
    weaknesses: ["Large target"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/fourarmsos.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/fourarmsua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/fourarmsov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/fourarmsreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/fourarmsomnienhanced.png",
          powers: ["Enhanced strength", "Energy fists", "Shock waves", "Enhanced durability", "Enhanced jumping"],
          weaknesses: ["Bulky size"],
        },
        {
          label: "Omni-Kix", image: "/images/fourarmsomnikix.png",
          powers: ["Enhanced strength", "Omni-Kix armor", "Rocket fists", "Magnetic fist reattachment", "Intense punch power"],
          weaknesses: ["Large target", "Slow movement"],
        }

      ]
    }
  },
  {
    name: "Stinkfly",
    species: "Lepidopterran",
    planet: "Lepidopterra",
    image: "/images/stinkflypfp.png",
    series: "classic",
    powers: ["Flight", "Slime projectiles", "Sharp tail stinger"],
    weaknesses: ["Fragile wings", "Close-range attacks"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/stinkflyos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/stinkflyov.png" }
      ],
      reboot: [
        {
          label: "Base", image: "/images/stinkflyreboot.png",
          powers: ["Flight", "Slime projectiles", "Bioluminiescence"],
          weaknesses: ["Fragile wings", "Close-range attacks"]
        },
        {
          label: "Omni-Enhanced", image: "/images/stinkflyomnienhanced.png",
          powers: ["Flight", "Electric sticky goo/spit", "Shock power hands"],
          weaknesses: ["Can get trapped in his own goo", "External electricity"],
        }

      ]
    }
  },
  {
    name: "Ripjaws",
    species: "Piscciss Volann",
    planet: "Piscciss",
    image: "/images/ripjawspfp.png",
    series: "classic",
    powers: ["Underwater breathing", "Enhanced swimming", "Powerful bite"],
    weaknesses: ["Dehydration", "Dry environments"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/ripjawsos.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/ripjawsua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/ripjawsov.png" }
      ]
    }
  },
  {
    name: "Upgrade",
    species: "Galvanic Mechamorph",
    planet: "Galvan B",
    image: "/images/upgradepfp.png",
    series: "classic",
    powers: ["Technological merging", "Machine manipulation", "Liquid metal body"],
    weaknesses: ["Electromagnetic attacks", "Tech disruption"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/upgradeos.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/upgradeua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/upgradeov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/upgradereboot.png" }
      ]
    }
  },
  {
    name: "Ghostfreak",
    species: "Ectonurite",
    planet: "Anur Phaetos",
    image: "/images/ghostfreakpfp.png",
    series: "classic",
    powers: ["Invisibility", "Intangibility", "Possession"],
    weaknesses: ["Sunlight", "Energy attacks"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/ghostfreakos.png" }
      ],
      alienforce1: [
        { label: "Base", image: "/images/ghostfreakaf.png" }
      ],
      ultimate: [
        { label: "Base", image: "/images/ghostfreakua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/ghostfreakov.png" }
      ]
    }
  },
  {
    name: "Cannonbolt",
    species: "Arburian Pelarota",
    planet: "Arburia",
    image: "/images/cannonboltpfp.png",
    series: "classic",
    powers: ["Extreme durability", "Rolling attack", "Powerful momentum"],
    weaknesses: ["Loss of control", "Confined spaces"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/cannonboltos.png" }
      ],
      alienforce: [
        { label: "Base", image: "/images/cannonboltaf.png" },
        {
          label: "Ultimate", image: "/images/cannonboltultimate.png",
          powers: ["Spiked armor", "Extreme durability", "Explosive rolling attack"],
          weaknesses: ["Loss of control", "Confined spaces"]
        }
      ],
      omniverse: [
        { label: "Base", image: "/images/cannonboltov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/cannonboltreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/cannonboltomnienhanced.png",
          powers: ["Enhanced durability", "High-speed rolling attack", "Energy-charged impact"],
          weaknesses: ["Loss of control", "Confined spaces"]
        },
        {
          label: "Omni-Kix", image: "/images/cannonboltomnikix.png",
          powers: ["Heavy armor", "Extreme durability", "Powerful rolling attack"],
          weaknesses: ["Reduced agility", "Loss of control"]
        }
      ]
    }
  },
  {
    name: "Wildvine",
    species: "Florauna",
    planet: "Flors Verdance",
    image: "/images/wildvinepfp.png",
    series: "classic",
    powers: ["Plant regeneration", "Vine attacks", "Explosive seeds"],
    weaknesses: ["Fire", "Extreme cold"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/wildvineos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/wildvineov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/wildvinereboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/wildvineomnienhanced.png",
          powers: ["Enhanced plant regeneration", "Stronger vine attacks", "Energy-charged explosive seeds"],
          weaknesses: ["Fire", "Extreme cold"]
        }
      ]
    }
  },
  {
    name: "Blitzwolfer",
    species: "Loboan",
    planet: "Luna Lobo",
    image: "/images/benwolfpfp.png",
    series: "classic",
    alias: "benwolf",
    powers: ["Sonic howl", "Enhanced agility", "Sharp claws"],
    weaknesses: ["Sound-sensitive environments", "Close-range counters"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/benwolfos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/benwolfov.png" }
      ]
    }
  },
  {
    name: "Upchuck",
    species: "Gourmand",
    planet: "Peptos XI",
    image: "/images/upchuckpfp.png",
    series: "classic",
    powers: ["Matter ingestion", "Energy blasts", "Acid spit"],
    weaknesses: ["Overeating", "Physical restraint"],
    looksBySeries: {
      classic: [
        { label: "Base (Perk)", image: "/images/upchuckos.png" }
      ],
      alienforce: [
        { label: "Base (Murk)", image: "/images/upchuckaf.png" }
      ],
      omniverse: [
        { label: "Base (Perk)", image: "/images/upchuckov.png" },
        {
          label: "Base (Murk)", image: "/images/upchuckov2.png"
        }
      ]
    }
  },
  {
    name: "Snare-Oh",
    species: "Thep Khufan",
    planet: "Anur Khufos",
    image: "/images/benmummypfp.png",
    series: "classic",
    alias: "benmummy",
    powers: ["Elastic bandages", "Body wrapping", "Regeneration"],
    weaknesses: ["Fire", "Sharp cutting attacks"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/benmummyos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/benmummyov.png" }
      ]
    }
  },
  {
    name: "Frankenstrike",
    species: "Transylian",
    planet: "Anur Transyl",
    image: "/images/benviktorpfp.png",
    series: "classic",
    alias: "benviktor",
    powers: ["Electrical attacks", "Super strength", "Enhanced durability"],
    weaknesses: ["Insulation", "Energy overload"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/benviktoros.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/benviktorov.png" }
      ]
    }
  },
  {
    name: "Ditto",
    species: "Splixson",
    planet: "Hathor",
    image: "/images/dittopfp.png",
    series: "classic",
    powers: ["Duplication", "Enhanced agility", "Coordinated attacks"],
    weaknesses: ["Shared pain", "Low physical strength"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/dittoos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/dittoov.png" }
      ]
    }
  },
  {
    name: "Eye Guy",
    species: "Opticoid",
    planet: "Sightra",
    image: "/images/eyeguypfp.png",
    series: "classic",
    powers: ["Energy beams", "360-degree vision", "Multiple elemental attacks"],
    weaknesses: ["Sensitive eyes", "Vision obstruction"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/eyeguyos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/eyeguyov.png" }
      ]
    }
  },
  {
    name: "Way Big",
    species: "To'kustar",
    planet: "None; born in cosmic storms",
    image: "/images/waybigpfp.png",
    series: "classic",
    powers: ["Gigantic size", "Super strength", "Cosmic energy blasts", "Super speed"],
    weaknesses: ["Large target"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/waybigos.png" }
      ],
      alienforce: [
        { label: "Base", image: "/images/waybigaf.png" },
        {
          label: "Ultimate", image: "/images/waybigultimate.png",
          powers: ["Enhanced cosmic energy blasts", "Massive super strength", "Extreme durability"],
          weaknesses: ["Large target"]
        }
      ],
      omniverse: [
        { label: "Base", image: "/images/waybigov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/waybigreboot.png" }
      ]
    }
  },
  {
    name: "Ben/Eon",
    species: "Chronian",
    planet: "Chronia",
    image: "/images/beneonpfp.png",
    series: "classic",
    aliases: ["beneon", "eon"],
    powers: ["Time manipulation", "Energy blasts", "Flight"],
    weaknesses: ["Energy overload", "Physical disruption"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/beneonos.png" }
      ]
    }
  },
  {
    name: "Spitter",
    species: "Sphoeroid",
    planet: "Scalpasc",
    image: "/images/spitterpfp.png",
    series: "classic",
    powers: ["Slime blasts", "High-pressure spit", "Enhanced durability"],
    weaknesses: ["Limited mobility", "Close-range attacks"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/spitteros.png" }
      ]
    }
  },
  {
    name: "Buzzshock",
    species: "Nosedeenian",
    planet: "Nosideen quasar",
    image: "/images/buzzshockpfp.png",
    series: "classic",
    powers: ["Electricity manipulation", "Energy blasts", "Duplication"],
    weaknesses: ["Insulation", "Energy absorption"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/buzzshockos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/buzzshockov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/buzzshockreboot.png" }
      ]
    }
  },
  {
    name: "Arctiguana",
    species: "Polar Manzardill",
    planet: "X'Nelli",
    image: "/images/arctiguanapfp.png",
    series: "classic",
    powers: ["Ice breath", "Cryokinesis", "Enhanced agility"],
    weaknesses: ["Extreme heat", "Close-range attacks"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/arctiguanaos.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/arctiguanaov.png" },
        {
          label: "Ultimate", image: "/images/arctiguanaultimate.png",
          powers: ["Ice cannons"],
          weaknesses: ["Less agility"]
        }
      ]
    }
  },
  {
    name: "Swampfire",
    species: "Methanosian",
    planet: "Methanos",
    image: "/images/swampfirepfp.png",
    series: "alienforce",
    powers: ["Fire generation", "Plant control", "Regeneration"],
    weaknesses: ["Cold temperatures", "Water saturation"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/swampfireaf.png" },
        {
          label: "Ultimate", image: "/images/swampfireultimate.png",
          powers: ["Blue fire generation", "Enhanced regeneration", "Plant manipulation"],
          weaknesses: ["Extreme cold", "Water saturation"],
        }
      ],
      omniverse: [
        { label: "Blossomed", image: "/images/swampfireov4.png" },
        { label: "Pre-blossom", image: "/images/swampfireov1.png" },
        { label: "Blossoming 1", image: "/images/swampfireov2.png" },
        { label: "Blossoming 2", image: "/images/swampfireov3.png" }
      ]
    }
  },
  {
    name: "Echo Echo",
    species: "Sonorosian",
    planet: "Sonorosia",
    image: "/images/echoechopfp.png",
    series: "alienforce",
    powers: ["Sound duplication", "Sonic screams", "Audio shockwaves"],
    weaknesses: ["Sound dampening", "Fragile body"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/echoechoaf.png" },
        {
          label: "Ultimate", image: "/images/echoechoultimate.png",
          powers: ["Enhanced sonic screams", "Sound duplication", "Powerful shockwaves"],
          weaknesses: ["Sound dampening", "Fragile body"],
        }
      ],
      omniverse: [
        { label: "Base", image: "/images/echoechoov.png" },
        {
          label: "Ultimate", image: "/images/echoechoultimateov.png",
          powers: ["Enhanced sonic screams", "Sound duplication", "Powerful shockwaves"],
          weaknesses: ["Sound dampening", "Fragile body"],
        }
      ]
    }
  },
  {
    name: "Humungosaur",
    species: "Vaxasaurian",
    planet: "Terradino",
    image: "/images/humungosaurpfp.png",
    series: "alienforce",
    powers: ["Super strength", "Size growth", "Powerful tail attacks"],
    weaknesses: ["Large target", "Reduced agility when enlarged"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/humungosauraf.png" },
        {
          label: "Ultimate", image: "/images/humungosaurultimate.png",
          powers: ["Enhanced super strength", "Missile launchers", "Extreme durability"],
          weaknesses: ["Large target", "Reduced agility"]
        },
      ],
      omniverse: [
        { label: "Base", image: "/images/humungosaurov.png" },
        {
          label: "Ultimate", image: "/images/humungosaurultimateov.png",
          powers: ["Enhanced super strength", "Missile launchers", "Extreme durability"],
          weaknesses: ["Large target", "Reduced agility"]
        },
      ],
      reboot: [
        { label: "Base", image: "/images/humungosaurreboot.png" },
        {
          label: "Omni-Kix", image: "/images/humungosauromnikix.png",
          powers: ["Heavy armor", "Enhanced super strength", "Rocket-powered attacks"],
          weaknesses: ["Reduced agility", "Large target"]
        },
        {
          label: "Omni-Naut", image: "/images/humungosauromninaut.png",
          powers: ["Space combat", "Enhanced super strength", "Pressure resistance"],
          weaknesses: ["Reduced speed on land", "Large target"]
        }
      ]
    }
  },
  {
    name: "Jetray",
    species: "Aerophibian",
    planet: "Aeropela",
    image: "/images/jetraypfp.png",
    series: "alienforce",
    powers: ["Flight", "Neuroshock blasts", "High-speed travel"],
    weaknesses: ["Confined spaces", "Heavy impacts"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/jetrayaf.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/jetrayreboot.png" },
        {
          label: "Omni-Kix", image: "/images/jetrayomnikix.png",
          powers: ["Armored flight", "Neuroshock blasts", "High-speed attacks"],
          weaknesses: ["Reduced agility", "Confined spaces"]
        },
        {
          label: "Omni-Naut", image: "/images/jetrayomninaut.png",
          powers: ["Space flight", "Neuroshock blasts", "Pressure resistance"],
          weaknesses: ["Reduced speed on land", "Confined spaces"]
        }
      ]
    }
  },
  {
    name: "Big Chill",
    species: "Necrofriggian",
    planet: "Kylmyys",
    image: "/images/bigchillpfp.png",
    series: "alienforce",
    powers: ["Intangibility", "Ice breath", "Flight"],
    weaknesses: ["Extreme heat", "Energy attacks"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/bigchillaf.png" },
        {
          label: "Ultimate", image: "/images/bigchillultimate.png",
          powers: ["Enhanced ice breath", "Intangibility", "Flight"],
          weaknesses: ["Extreme heat", "Energy attacks"]
        },
      ],
      omniverse: [
        { label: "Base", image: "/images/bigchillov.png" }
      ]
    }
  },
  {
    name: "Chromastone",
    species: "Crystalsapien",
    planet: "Petropia",
    image: "/images/chromastonepfp.png",
    series: "alienforce",
    powers: ["Energy absorption", "Crystal durability", "Energy blasts"],
    weaknesses: ["Physical shattering", "Energy overload"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/chromastoneaf.png" },
      ],
      omniverse: [
        { label: "Base", image: "/images/chromastoneov.png" }
      ]
    }
  },
  {
    name: "Brainstorm",
    species: "Cerebrocrustacean",
    planet: "Encephalonus IV",
    image: "/images/brainstormpfp.png",
    series: "alienforce",
    powers: ["Electrokinesis", "Super intelligence", "Force fields"],
    weaknesses: ["Physical vulnerability", "Overreliance on intellect"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/brainstormaf.png" },
      ],
      omniverse: [
        { label: "Base", image: "/images/brainstormov.png" }
      ]
    }
  },
  {
    name: "Spidermonkey",
    species: "Arachnachimp",
    planet: "Aranhascimmia",
    image: "/images/spidermonkeypfp.png",
    series: "alienforce",
    powers: ["Enhanced agility", "Web attacks", "Wall crawling"],
    weaknesses: ["Fire", "Heavy impacts"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/spidermonkeyaf.png" },
        {
          label: "Ultimate", image: "/images/spidermonkeyultimate.png",
          powers: ["Gorilla-like strength", "Web projectiles", "Spider legs"],
          weaknesses: ["Sonic vibrations", "Sedative quills"]
        },
      ],
      omniverse: [
        { label: "Base", image: "/images/spidermonkeyov.png" },
        {
          label: "Ultimate", image: "/images/spidermonkeyultimateov.png",
          powers: ["Gorilla-like strength", "Web projectiles", "Extra arms"],
          weaknesses: ["Sonic vibrations", "Sedative quills"]
        },
      ],
      reboot: [
        { label: "Base", image: "/images/spidermonkeyreboot.png" }
      ]
    }
  },
  {
    name: "Goop",
    species: "Polymorph",
    planet: "Viscosia",
    image: "/images/gooppfp.png",
    series: "alienforce",
    powers: ["Acid body", "Shapeshifting", "Regeneration"],
    weaknesses: ["Gravity projector damage", "Freezing attacks"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/goopaf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/goopov.png" }
      ],
      reboot: [
        { label: "Base", image: "/images/goopreboot.png" }
      ]
    }
  },
  {
    name: "Alien X",
    species: "Celestialsapien",
    planet: "Forge of Creation",
    image: "/images/alienxpfp.png",
    series: "alienforce",
    powers: ["Reality warping", "Time manipulation", "Cosmic power"],
    weaknesses: ["Internal personalities", "Decision paralysis"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/alienxaf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/alienxov.png" }
      ]
    }
  },
  {
    name: "Nanomech",
    species: "Human/Microchip",
    planet: "Earth",
    image: "/images/nanomechpfp.png",
    series: "alienforce",
    alias: "benchip",
    powers: ["Microscopic size", "Flight", "Electric blasts"],
    weaknesses: ["Low physical strength", "Strong impacts"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/nanomechaf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/nanomechov.png" }
      ]
    }
  },
  {
    name: "Lodestar",
    species: "Biotsavartian",
    planet: "Maxwell",
    image: "/images/lodestarpfp.png",
    series: "alienforce",
    powers: ["Magnetism manipulation", "Metal control", "Levitation"],
    weaknesses: ["Non-metal opponents", "Energy disruption"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/lodestaraf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/lodestarov.png" }
      ]
    }
  },
  {
    name: "Rath",
    species: "Appoplexian",
    planet: "Appoplexia",
    image: "/images/rathpfp.png",
    series: "alienforce",
    powers: ["Super strength", "Sharp claws", "Enhanced agility", "Durability"],
    weaknesses: ["Anger and impulsiveness", "Poor strategy"],
    looksBySeries: {
      alienforce: [
        { label: "Base", image: "/images/rathaf.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/rathov.png" },
        {
          label: "Ultimate", image: "/images/rathultimate.png",
          powers: ["Enhanced strength", "Enhanced agility", "Two claws extended from his wrists"],
          weaknesses: ["Anger and impulsiveness"]
        }
      ],
      reboot: [
        { label: "Base", image: "/images/rathreboot.png" },
        {
          label: "Omni-Kix", image: "/images/rathomnikix.png",
          powers: ["Heavy armor", "Super strength", "Sharp claws", "Enhanced durability"],
          weaknesses: ["Reduced agility", "Anger and impulsiveness"]
        },
      ]
    }
  },
  {
    name: "Waterhazard",
    species: "Orishan",
    planet: "Kiusana",
    image: "/images/waterhazardpfp.png",
    series: "ultimate",
    powers: ["Water blasts", "Pressure resistance", "Enhanced durability", "Hydrokinesis"],
    weaknesses: ["Electricity", "Extreme heat"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/waterhazardua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/waterhazardov.png" }
      ]
    }
  },
  {
    name: "Ampfibian",
    species: "Amperi",
    planet: "Tesslos",
    image: "/images/ampfibianpfp.png",
    series: "ultimate",
    powers: ["Electricity manipulation", "Flight", "Intangibility", "Underwater breathing"],
    weaknesses: ["Insulation", "Energy absorption"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/ampfibianua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/ampfibianov.png" }
      ]
    }
  },
  {
    name: "Armodrillo",
    species: "Talpaedan",
    planet: "Poiana Lüncas",
    image: "/images/armodrillopfp.png",
    series: "ultimate",
    powers: ["Jackhammer arms", "Super strength", "Earth tremors", "Durability"],
    weaknesses: ["Water", "Limited ranged attacks"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/armodrilloua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/armodrilloov.png" }
      ]
    }
  },
  {
    name: "Terraspin",
    species: "Geochelone Aerios",
    planet: "Aldabra",
    image: "/images/terraspinpfp.png",
    series: "ultimate",
    powers: ["Flight", "Wind manipulation", "Durability", "Magic resistance"],
    weaknesses: ["Limited offensive power", "Heavy impacts"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/terraspinua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/terraspinov.png" }
      ]
    }
  },
  {
    name: "NRG",
    species: "Prypiatosian-B",
    planet: "Prypiatos",
    image: "/images/nrgpfp.png",
    series: "ultimate",
    powers: ["Radiation blasts", "Super strength", "Extreme heat", "Durability"],
    weaknesses: ["Containment suit restrictions"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/nrgua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/nrgov.png" },
        { label: "Uncontained", image: "/images/nrgov2.png" }
      ]
    }
  },
  {
    name: "Fasttrack",
    species: "Citrakayah",
    planet: "Chalybeas",
    image: "/images/fasttrackpfp.png",
    series: "ultimate",
    powers: ["Super speed", "Enhanced agility", "Quick reflexes", "Strong jumps"],
    weaknesses: ["Heavy impacts", "Physical traps"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/fasttrackua.png" }
      ]
    }
  },
  {
    name: "Chamalien",
    species: "Merlinisapien",
    planet: "Unknown",
    image: "/images/chamalienpfp.png",
    series: "ultimate",
    powers: ["Invisibility", "Enhanced agility", "Tail attacks", "Stealth"],
    weaknesses: ["Physical fragility", "Detection by sound or heat"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/chamalienua.png" }
      ]
    }
  },
  {
    name: "Shocksquatch",
    species: "Gimlinopithecus",
    planet: "Pattersonea",
    image: "/images/shocksquatchpfp.png",
    series: "ultimate",
    powers: ["Electricity manipulation", "Super strength", "Enhanced agility", "Durability"],
    weaknesses: ["Insulation", "Energy absorption"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/shocksquatchua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/shocksquatchov.png" }
      ]
    }
  },
  {
    name: "Eatle",
    species: "Oryctini",
    planet: "Coleop Terra",
    image: "/images/eatlepfp.png",
    series: "ultimate",
    powers: ["Super strength", "Matter consumption", "Energy horn blasts", "Durability"],
    weaknesses: ["Heavy impacts"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/eatleua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/eatleov.png" }
      ]
    }
  },
  {
    name: "Clockwork",
    species: "Chronosapien",
    planet: "Unknown",
    image: "/images/clockworkpfp.png",
    series: "ultimate",
    powers: ["Time manipulation", "Chrono beam", "Mechanical durability", "Enhanced perception"],
    weaknesses: ["Physical disruption"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/clockworkua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/clockworkov.png" }
      ],
      classic: [
        { label: "Base", image: "/images/clockworkov2.png" }
      ]
    }
  },
  {
    name: "Juryrigg",
    species: "Planchaküle",
    planet: "Aul-Turrhen",
    image: "/images/juryriggpfp.png",
    series: "ultimate",
    powers: ["Technological dismantling", "Rapid inventing", "Enhanced agility", "Sharp teeth and claws"],
    weaknesses: ["Impulsiveness", "Low physical durability"],
    looksBySeries: {
      ultimate: [
        { label: "Base", image: "/images/juryriggua.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/juryriggov.png" }
      ]
    }
  },
  {
    name: "Feedback",
    species: "Conductoid",
    planet: "Teslavorr nebula",
    image: "/images/feedbackpfp.png",
    series: "omniverse",
    powers: ["Energy absorption", "Energy redirection", "Electrical attacks", "Enhanced agility"],
    weaknesses: ["Physical restraint"],
    looksBySeries: {
      classic: [
        { label: "Base", image: "/images/feedbackov.png" }
      ],
      omniverse: [
        { label: "Base", image: "/images/feedbackov2.png" }
      ]
    }
  },
  {
    name: "Bloxx",
    species: "Segmentasapien",
    planet: "Polyominus",
    image: "/images/bloxxpfp.png",
    series: "omniverse",
    powers: ["Block construction", "Shape shifting", "Enhanced strength", "Durability"],
    weaknesses: ["Heavy impacts", "Loss of structure"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/bloxxov.png" }
      ]
    }
  },
  {
    name: "Gravattack",
    species: "Galilean",
    planet: "Keplorr",
    image: "/images/gravattackpfp.png",
    series: "omniverse",
    powers: ["Gravity manipulation", "Levitation", "Planetary-strength attacks", "Space survival"],
    weaknesses: ["Overexertion", "Disruption of concentration"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/gravattackov.png" },
        {
          label: "Ultimate", image: "/images/gravattackultimate.png",
          powers: ["Gravity manipulation", "Levitation", "Orbiting planetoids"],
          weaknesses: ["Large size", "Lack of legs"]
        }
      ]
    }
  },
  {
    name: "Crashhopper",
    species: "Orthopterran",
    planet: "Unknown",
    image: "/images/crashhopperpfp.png",
    series: "omniverse",
    powers: ["Powerful jumps", "Enhanced leg strength", "Durability", "Impact attacks"],
    weaknesses: ["Unstable landings", "Confined spaces"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/crashhopperov.png" }
      ]
    }
  },
  {
    name: "Ball Weevil",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/ballweevilpfp.png",
    series: "omniverse",
    powers: ["Bio-electric slime bombs", "Wall crawling", "Enhanced agility", "Rolling mobility"],
    weaknesses: ["Close-range attacks", "Heavy impacts"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/ballweevilov.png" }
      ]
    }
  },
  {
    name: "Walkatrout",
    species: "Ickthyperambuloid",
    planet: "Gilli-Perambulous Promenade",
    image: "/images/walkatroutpfp.png",
    series: "omniverse",
    powers: ["Extreme slipperiness", "Escape ability", "Underwater mobility"],
    weaknesses: ["Low physical strength", "No offensive powers"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/walkatroutov.png" }
      ]
    }
  },
  {
    name: "Pesky Dust",
    species: "Nemuina",
    planet: "Nemunimos IV",
    image: "/images/peskydustpfp.png",
    series: "omniverse",
    powers: ["Sleep dust", "Dream manipulation", "Flight", "Small size"],
    weaknesses: ["Low physical strength", "Fragility"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/peskydustov.png" }
      ]
    }
  },
  {
    name: "Mole-Stache",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/molestachepfp.png",
    series: "omniverse",
    powers: ["Prehensile mustache control", "Close-range combat"],
    weaknesses: ["Limited range", "Heavy impacts"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/molestacheov.png" }
      ]
    }
  },
  {
    name: "The Worst",
    species: "Atrocian",
    planet: "Atrocius 0",
    image: "/images/theworstpfp.png",
    series: "omniverse",
    powers: ["Extreme durability", "Damage absorption", "Survivability"],
    weaknesses: ["Very slow movement", "Feels pain despite it not affecting him"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/theworstov.png" }
      ]
    }
  },
  {
    name: "Kickin' Hawk",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/kickinhawkpfp.png",
    series: "omniverse",
    powers: ["Powerful kicks", "Enhanced agility", "Sharp claws", "Combat skill"],
    weaknesses: ["Limited ranged attacks", "Heavy impacts"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/kickinhawkov.png" }
      ]
    }
  },
  {
    name: "Toepick",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/toepickpfp.png",
    series: "omniverse",
    powers: ["Fear inducement", "Durability", "Intimidation"],
    weaknesses: ["Slow movement", "Limited offensive power"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/toepickov.png" }
      ]
    }
  },
  {
    name: "Astrodactyl",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/astrodactylpfp.png",
    series: "omniverse",
    powers: ["Flight", "Energy whips", "Jet propulsion", "Enhanced agility"],
    weaknesses: ["Confined spaces", "Heavy impacts"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/astrodactylov.png" }
      ]
    }
  },
  {
    name: "Bullfrag",
    species: "Incursean",
    planet: "Incursia",
    image: "/images/bullfragpfp.png",
    series: "omniverse",
    powers: ["Enhanced agility", "Powerful tongue", "Strong legs", "Combat skill"],
    weaknesses: ["Heavy impacts", "Limited ranged attacks"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/bullfragov.png" }
      ]
    }
  },
  {
    name: "Atomix",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/atomixpfp.png",
    series: "omniverse",
    powers: ["Nuclear energy blasts", "Flight", "Super strength", "Extreme durability", "Radiation generation"],
    weaknesses: ["Overload from excessive output"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/atomixov.png" }
      ]
    }
  },
  {
    name: "Gutrot",
    species: "Unknown",
    planet: "Unknown",
    image: "/images/gutrotpfp.png",
    series: "omniverse",
    powers: ["Gas generation", "Chemical manipulation", "Toxin resistance"],
    weaknesses: ["Wind dispersion"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/gutrotov.png" }
      ]
    }
  },
  {
    name: "Whampire",
    species: "Vladat",
    planet: "Anur Transyl",
    image: "/images/whampirepfp.png",
    series: "omniverse",
    powers: ["Hypnosis", "Flight", "Enhanced strength", "Darkness manipulation", "Life energy absorption"],
    weaknesses: ["Bright light", "Sun-based attacks"],
    looksBySeries: {
      omniverse: [
        { label: "Base", image: "/images/whampireov.png" }
      ]
    }
  },
  {
    name: "Overflow",
    species: "Cascan",
    planet: "Cascareau",
    image: "/images/overflowpfp.png",
    series: "reboot",
    powers: ["Water manipulation", "High-pressure blasts", "Durability", "Underwater mobility"],
    weaknesses: ["Electricity", "Extreme heat"],
    looksBySeries: {
      reboot: [
        { label: "Base", image: "/images/overflowreboot.png" },
        {
          label: "Omni-Enhanced", image: "/images/overflowomnienhanced.png",
          powers: ["Enhanced water manipulation", "High-pressure blasts", "Armored durability", "Underwater mobility"],
          weaknesses: ["Electricity", "Extreme heat"]
        }
      ]
    }
  },
  {
    name: "Gax",
    species: "Chimera Sui Generis",
    planet: "Vilgaxia",
    image: "/images/gaxpfp.png",
    series: "reboot",
    powers: ["Shape-shifting tentacles", "Regeneration", "Enhanced strength", "Laser eyes"],
    weaknesses: ["Fire", "Extreme cold"],
    looksBySeries: {
      reboot: [
        { label: "Base", image: "/images/gaxreboot.png" }
      ]
    }
  },
  {
    name: "Shock Rock",
    species: "Fulmini",
    planet: "Fulmas",
    image: "/images/shockrockpfp.png",
    series: "reboot",
    powers: ["Energy constructs", "Electricity manipulation", "Energy blasts", "Durability"],
    weaknesses: ["Energy absorption", "Overload from excessive power"],
    looksBySeries: {
      reboot: [
        { label: "Base", image: "/images/shockrockreboot.png" },
        {
          label: "Omni-Kix", image: "/images/shockrockomnikix.png",
          powers: ["Armored energy constructs", "Electricity manipulation", "Powerful energy blasts", "Enhanced durability"],
          weaknesses: ["Energy absorption", "Overload from excessive power"]
        },
        {
          label: "Omni-Naut", image: "/images/shockrockomninaut.png",
          powers: ["Space survivability", "Electricity manipulation", "Pressure resistance", "Enhanced durability"],
          weaknesses: ["Energy absorption", "Reduced speed on land"]
        }
      ]
    }
  },
  {
    name: "Slapback",
    species: "Ekoplektoid",
    planet: "Ekoplekton",
    image: "/images/slapbackpfp.png",
    series: "reboot",
    powers: ["Duplication", "Density increase", "Enhanced strength", "Impact attacks"],
    weaknesses: ["Flexibility limit"],
    looksBySeries: {
      reboot: [
        { label: "Base", image: "/images/slapbackreboot.png" },
        {
          label: "Omni-Kix", image: "/images/slapbackomnikix.png",
          powers: ["Armored duplication", "Density increase", "Enhanced strength", "Impact attacks"],
          weaknesses: ["Reduced agility"]
        }
      ]
    }
  },
  {
    name: "Surge",
    species: "Xerge",
    planet: "Unknown",
    image: "/images/surgepfp.png",
    series: "reboot",
    powers: ["Xerge fusion", "Flight", "Energy projection"],
    weaknesses: ["Weak when alone", "Limited physical strength"],
    looksBySeries: {
      reboot: [
        { label: "Base", image: "/images/surgereboot.png" }
      ]
    }
  },
];
const aliensFijos = [...aliens];
const prevSeries = document.getElementById("prev-series");
const nextSeries = document.getElementById("next-series");
const modalSeriesLabel = document.getElementById("modal-series-label");
const variantButtons = document.getElementById("variant-buttons");

let alienSeleccionado = null;
let varianteActual = 0;
let serieActual = "";
let indiceSerieActual = 0;
let aliensVisibles = [];
let indiceAlienActual = 0;
const classicContainer = document.getElementById("classic-container");
const alienForceContainer = document.getElementById("alienforce-container");
const ultimateContainer = document.getElementById("ultimate-container");
const omniverseContainer = document.getElementById("omniverse-container");
const rebootContainer = document.getElementById("reboot-container");
const buscador = document.getElementById("search-input");
const copyrightBtn = document.getElementById('copyrightBtn');
const copyrightModal = document.getElementById('copyrightModal');
const closeCopyrightModal = document.getElementById('closeCopyrightModal');

if (copyrightBtn) {
  copyrightBtn.addEventListener('click', function () {
    copyrightModal.style.display = 'flex';
	bloquearScrollFondo();
  });
}

if (closeCopyrightModal) {
  closeCopyrightModal.addEventListener('click', function () {
    copyrightModal.style.display = 'none';
	desbloquearScrollFondo();
  });
}
function ajustarTitulos() {
  const titulos = document.querySelectorAll(".alien-card h2");

  titulos.forEach(function (titulo) {
    let size = 28;
    titulo.style.fontSize = size + "px";

    while (titulo.scrollWidth > titulo.clientWidth && size > 12) {
      size--;
      titulo.style.fontSize = size + "px";
    }
  });
}
function mostrarAliens(lista) {

  classicContainer.innerHTML = "";
  alienForceContainer.innerHTML = "";
  ultimateContainer.innerHTML = "";
  omniverseContainer.innerHTML = "";
  rebootContainer.innerHTML = "";
  aliensVisibles = [...lista];
  for (let i = 0; i < lista.length; i++) {
    let container = null;
    let cardClass = "";

    if (lista[i].series === "classic") {
      container = classicContainer;
      cardClass = "classic-card";
    } else if (lista[i].series === "alienforce") {
      container = alienForceContainer;
      cardClass = "alienforce-card";
    } else if (lista[i].series === "ultimate") {
      container = ultimateContainer;
      cardClass = "ultimate-card";
    } else if (lista[i].series === "omniverse") {
      container = omniverseContainer;
      cardClass = "omniverse-card";
    } else if (lista[i].series === "reboot") {
      container = rebootContainer;
      cardClass = "reboot-card";
    }

    if (container !== null) {
      container.innerHTML += `
<div class="alien-card ${cardClass}" data-name="${lista[i].name}">
          <img src="${lista[i].image}" alt="${lista[i].name}" class="alien-image">
          <h2>${lista[i].name}</h2>
          <p><strong>Species:</strong> <span class="alien-value">${lista[i].species}</span></p>
		  <p><strong>Planet:</strong> <span class="alien-value">${lista[i].planet}</span></p>
        </div>
      `;
    }
  }
  const titulos = document.querySelectorAll(".alien-card h2");


  classicTitle.style.display = classicContainer.innerHTML === "" ? "none" : "block";
  alienForceTitle.style.display = alienForceContainer.innerHTML === "" ? "none" : "block";
  ultimateTitle.style.display = ultimateContainer.innerHTML === "" ? "none" : "block";
  omniverseTitle.style.display = omniverseContainer.innerHTML === "" ? "none" : "block";
  rebootTitle.style.display = rebootContainer.innerHTML === "" ? "none" : "block";
  ajustarTitulos();

  if (document.fonts) {
    document.fonts.ready.then(ajustarTitulos);
  }
  const cards = document.querySelectorAll(".alien-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      abrirModalAlien(card.dataset.name);
    });
  });
}

mostrarAliens(aliensFijos);
const clearSearch = document.getElementById("clear-search");
const alienModal = document.getElementById("alien-modal");
const closeModal = document.getElementById("close-modal");
const modalName = document.getElementById("modal-name");
const modalImage = document.getElementById("modal-image");
const modalLookLabel = document.getElementById("modal-look-label");
const modalSpecies = document.getElementById("modal-species");
const modalPlanet = document.getElementById("modal-planet");
const modalPowers = document.getElementById("modal-powers");
const modalWeaknesses = document.getElementById("modal-weaknesses");
const resetPasswordModal = document.getElementById('reset-password-modal');
const resetPasswordInput = document.getElementById('reset-password-input');
const resetPasswordConfirm = document.getElementById('reset-password-confirm');
const resetPasswordError = document.getElementById('reset-password-error');
const resetPasswordCancel = document.getElementById('reset-password-cancel');
const resetPasswordSave = document.getElementById('reset-password-save');
const messageModal = document.getElementById('message-modal');
const messageModalTitle = document.getElementById('message-modal-title');
const messageModalText = document.getElementById('message-modal-text');
const messageModalOk = document.getElementById('message-modal-ok');
const confirmModal = document.getElementById('confirm-modal');
const confirmModalTitle = document.getElementById('confirm-modal-title');
const confirmModalText = document.getElementById('confirm-modal-text');
const confirmModalCancel = document.getElementById('confirm-modal-cancel');
const confirmModalOk = document.getElementById('confirm-modal-ok');

function openMessageModal(title, text) {
  if (typeof text === 'undefined') {
    messageModalTitle.textContent = 'Message';
    messageModalText.textContent = title;
  } else {
    messageModalTitle.textContent = title;
    messageModalText.textContent = text;
  }

  messageModal.style.display = 'flex';
}

function closeMessageModal() {
  messageModal.style.display = 'none';
}

function abrirConfirmModal(titulo, mensaje, onConfirm) {
  confirmModalTitle.textContent = titulo;
  confirmModalText.textContent = mensaje;
  confirmModal.style.display = 'flex';

  const okBtn = document.getElementById('confirm-modal-ok');
  const cancelBtn = document.getElementById('confirm-modal-cancel');

  cancelBtn.onclick = function () {
    confirmModal.style.display = 'none';
  };

  okBtn.onclick = async function () {
    confirmModal.style.display = 'none';
    await onConfirm();
  };

  confirmModal.onclick = function (e) {
    if (e.target === confirmModal) {
      confirmModal.style.display = 'none';
    }
  };
}
messageModalOk.addEventListener('click', closeMessageModal);

messageModal.addEventListener('click', function (e) {
  if (e.target === messageModal) {
    closeMessageModal();
  }
});
function nombreSerieBonito(serie) {
  if (serie === "classic") return "Prototype Omnitrix";
  if (serie === "alienforce") return "Ultimatrix/Recalibrated prototype Omnitrix";
  if (serie === "alienforce1") return "Recalibrated prototype Omnitrix";
  if (serie === "ultimate") return "Ultimatrix";
  if (serie === "omniverse") return "Definitive Omnitrix";
  if (serie === "reboot") return "Dimension 27998.3 Omnitrix";
  return serie;
}

function actualizarSerieActual() {
  const series = obtenerSeriesDisponibles(alienSeleccionado);

  serieActual = series[indiceSerieActual];
  modalSeriesLabel.textContent = nombreSerieBonito(serieActual);

  if (series.length <= 1) {
    prevSeries.style.visibility = "hidden";
    nextSeries.style.visibility = "hidden";
  } else {
    prevSeries.style.visibility = "visible";
    nextSeries.style.visibility = "visible";
  }
}

function cambiarSerie(direccion) {
  const series = obtenerSeriesDisponibles(alienSeleccionado);

  indiceSerieActual += direccion;

  if (indiceSerieActual < 0) {
    indiceSerieActual = series.length - 1;
  }

  if (indiceSerieActual >= series.length) {
    indiceSerieActual = 0;
  }

  varianteActual = 0;
  actualizarSerieActual();
  actualizarLookModal();
}

function actualizarBotonBorrar() {
  if (buscador.value === "") {
    clearSearch.style.display = "none";
  } else {
    clearSearch.style.display = "block";
  }
}

actualizarBotonBorrar();

buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase();

  const filtrados = aliensFijos.filter(function (alien) {
    return (
      alien.name.toLowerCase().startsWith(texto) ||
      (alien.alias && alien.alias.toLowerCase().startsWith(texto)) ||
      (alien.aliases && alien.aliases.some(function (alias) {
        return alias.toLowerCase().startsWith(texto);
      }))
    );
  });

  mostrarAliens(filtrados);
  actualizarBotonBorrar();
});

clearSearch.addEventListener("click", function () {
  buscador.value = "";
  mostrarAliens(aliensFijos);
  buscador.focus();
  actualizarBotonBorrar();
});

function obtenerSeriesDisponibles(alien) {
  if (alien.looksBySeries) {
    return Object.keys(alien.looksBySeries);
  }

  return ["default"];
}

function obtenerVariantes(alien) {
  if (alien.looksBySeries && alien.looksBySeries[serieActual]) {
    return alien.looksBySeries[serieActual];
  }

  return [
    {
      label: "Base",
      image: alien.image
    }
  ];
}



function renderizarBotonesVariantes() {
  const variantes = obtenerVariantes(alienSeleccionado);

  variantButtons.innerHTML = "";

  variantButtons.style.display = "flex";

  variantes.forEach(function (variante, i) {
    const activa = i === varianteActual ? "active" : "";

    variantButtons.innerHTML += `
      <button class="variant-button ${activa}" data-index="${i}">
        ${variante.label}
      </button>
    `;
  });

  const botones = document.querySelectorAll(".variant-button");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      varianteActual = Number(boton.dataset.index);
      actualizarLookModal();
    });
  });
}

function actualizarLookModal() {
  const variantes = obtenerVariantes(alienSeleccionado);
  const variante = variantes[varianteActual];

  modalImage.src = variante.image;
  modalImage.alt = alienSeleccionado.name;
  modalLookLabel.textContent = "";
  const speciesBase = variante.species || alienSeleccionado.species || "Unknown";
  const esUltimate = (variante.label || "").toLowerCase() === "ultimate";

  if (esUltimate && !speciesBase.toLowerCase().startsWith("evolved ")) {
	modalSpecies.textContent = "Evolved " + speciesBase;
  } else {
	modalSpecies.textContent = speciesBase;
  }
  if ((serieActual === "alienforce" || serieActual === "omniverse") && variante.label.toLowerCase() === "ultimate") {
    modalSeriesLabel.textContent = "Ultimatrix";
  } else {
    modalSeriesLabel.textContent = nombreSerieBonito(serieActual);
  }
  const powers = variante.powers || alienSeleccionado.powers || ["Unknown"];
  const weaknesses = variante.weaknesses || alienSeleccionado.weaknesses || ["Unknown"];

  modalPowers.innerHTML = "";
  modalWeaknesses.innerHTML = "";

  powers.forEach(function (power) {
    modalPowers.innerHTML += `<li>${power}</li>`;
  });

  weaknesses.forEach(function (weakness) {
    modalWeaknesses.innerHTML += `<li>${weakness}</li>`;
  });

  renderizarBotonesVariantes();
}

function abrirModalAlien(name) {
  alienSeleccionado = aliens.find(function (alien) {
    return alien.name === name;
  });

  if (!alienSeleccionado) {
    return;
  }
  indiceAlienActual = aliensVisibles.findIndex(function (alien) {
    return alien.name === name;
  });
  indiceSerieActual = 0;

  varianteActual = 0;
  modalName.textContent = alienSeleccionado.name;
  modalSpecies.textContent = alienSeleccionado.species;
  modalPlanet.textContent = alienSeleccionado.planet;

  actualizarSerieActual();
  actualizarLookModal();
  alienModal.classList.add("show");
  bloquearScrollFondo();
}

function cerrarModalAlien() {
  alienModal.classList.remove("show");
  desbloquearScrollFondo();
}

closeModal.addEventListener("click", cerrarModalAlien);

alienModal.addEventListener("click", function (event) {
  if (event.target === alienModal) {
    cerrarModalAlien();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    cerrarModalAlien();
  }
});
document.addEventListener('contextmenu', function (e) {
  if (
    e.target.closest('.alien-card img') ||
    e.target.closest('.alien-card h2') ||
    e.target.closest('.playlist-slot img') ||
    e.target.closest('.playlist-slot .slot-name') ||
    e.target.closest('.playlist-alien-row img') ||
    e.target.closest('.playlist-alien-row .row-name') ||
	e.target.closest('#modal-image') ||
    e.target.closest('#modal-name')
  ) {
    e.preventDefault();
  }
});
document.addEventListener('dragstart', function (e) {
  if (
    e.target.matches('.alien-card img') ||
    e.target.matches('.playlist-slot img') ||
    e.target.matches('.playlist-alien-row img') ||
    e.target.matches('#modal-image')
  ) {
    e.preventDefault();
  }
});
prevSeries.addEventListener("click", function () {
  cambiarSerie(-1);
});

nextSeries.addEventListener("click", function () {
  cambiarSerie(1);
});
function cambiarAlien(direccion) {
  if (aliensVisibles.length === 0) {
    return;
  }

  indiceAlienActual += direccion;

  if (indiceAlienActual < 0) {
    indiceAlienActual = aliensVisibles.length - 1;
  }

  if (indiceAlienActual >= aliensVisibles.length) {
    indiceAlienActual = 0;
  }

  abrirModalAlien(aliensVisibles[indiceAlienActual].name);
}
const prevAlien = document.getElementById("prev-alien");
const nextAlien = document.getElementById("next-alien");

prevAlien.addEventListener("click", function () {
  cambiarAlien(-1);
});

nextAlien.addEventListener("click", function () {
  cambiarAlien(1);
});
function abrirMessageModal(titulo, texto, onSecondary) {
  const modal = document.getElementById('message-modal');
  const title = document.getElementById('message-modal-title');
  const text = document.getElementById('message-modal-text');
  const okBtn = document.getElementById('message-modal-ok');
  const secondaryBtn = document.getElementById('message-modal-secondary');

  title.textContent = titulo;
  text.textContent = texto;
  modal.style.display = 'flex';

  const newOk = okBtn.cloneNode(true);
  const newSecondary = secondaryBtn.cloneNode(true);

  okBtn.parentNode.replaceChild(newOk, okBtn);
  secondaryBtn.parentNode.replaceChild(newSecondary, secondaryBtn);

  newOk.onclick = function () {
    modal.style.display = 'none';
  };

  if (onSecondary) {
    newSecondary.style.display = 'block';
    newSecondary.onclick = function () {
      modal.style.display = 'none';
      onSecondary();
    };
  } else {
    newSecondary.style.display = 'none';
  }
}
function abrirNombreModal(valorInicial, onConfirm) {
  const nombreModal = document.getElementById('nombre-modal');
  const nombreInput = document.getElementById('nombre-input');
  const nombreConfirm = document.getElementById('nombre-confirm');
  const nombreCancel = document.getElementById('nombre-cancel');

  nombreInput.value = valorInicial || '';
  nombreModal.style.display = 'flex';
  nombreInput.focus();

  const nuevoConfirm = nombreConfirm.cloneNode(true);
  const nuevoCancel = nombreCancel.cloneNode(true);
  nombreConfirm.parentNode.replaceChild(nuevoConfirm, nombreConfirm);
  nombreCancel.parentNode.replaceChild(nuevoCancel, nombreCancel);

  nuevoCancel.onclick = function () { nombreModal.style.display = 'none'; };
  nuevoConfirm.onclick = function () {
    const nombre = document.getElementById('nombre-input').value.trim() || valorInicial || 'My Playlist';
    nombreModal.style.display = 'none';
    onConfirm(nombre);
  };
  document.getElementById('nombre-input').onkeydown = function (e) {
    if (e.key === 'Enter') nuevoConfirm.click();
    if (e.key === 'Escape') nuevoCancel.click();
  };
}
function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 2500);
}
let scrollGuardado = 0;

  function bloquearScrollFondo() {
	scrollGuardado = window.scrollY;
	document.body.classList.add("modal-open");
	document.body.style.top = `-${scrollGuardado}px`;
}

  function desbloquearScrollFondo() {
	document.body.classList.remove("modal-open");
	document.body.style.top = "";
	window.scrollTo(0, scrollGuardado);
}
// ===== PLAYLIST FEATURE =====
(function () {
  let playlistSelected = [];
  let editingPlaylist = null;
  let playlistAliens = [...aliens];
  const fab = document.getElementById("playlist-fab");
  const fabCount = document.getElementById("fab-count");
  const playlistModal = document.getElementById("playlist-modal");
  const closePlaylistModal = document.getElementById("close-playlist-modal");
  const playlistAlienList = document.getElementById("playlist-alien-list");
  const playlistSearch = document.getElementById("playlist-search");
  const playlistSlots = document.getElementById("playlist-slots");
  const playlistProgressText = document.getElementById("playlist-progress-text");
  const playlistClearBtn = document.getElementById("playlist-clear-btn");
  const playlistDoneBtn = document.getElementById("playlist-done-btn");
  const playlistResult = document.getElementById("playlist-result");
  const playlistResultGrid = document.getElementById("playlist-result-grid");
  const playlistRestartBtn = document.getElementById("playlist-restart-btn");
  const playlistModalBody = document.getElementById("playlist-modal-body");
  const playlistModalFooter = document.getElementById("playlist-modal-footer");
  const playlistBackBtn = document.getElementById("playlist-back-btn");

  function renderSlots() {
    playlistSlots.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      const alienName = playlistSelected[i] || null;
      const alien = alienName ? aliens.find(a => a.name === alienName) : null;
      const slot = document.createElement("div");
      slot.className = "playlist-slot" + (alien ? " filled" : "");

      if (alien) {
        slot.draggable = true;
        slot.dataset.index = i;
        slot.innerHTML = `
        <span class="slot-number active">${i + 1}</span>
        <img src="${alien.image}" alt="${alien.name}" />
        <span class="slot-name">${alien.name}</span>
        <button class="slot-remove" data-name="${alien.name}">×</button>
      `;

        // Drag events
        slot.addEventListener("dragstart", function (e) {
          e.dataTransfer.setData("text/plain", i);
          slot.style.opacity = "0.4";
        });

        slot.addEventListener("dragend", function () {
          slot.style.opacity = "1";
          document.querySelectorAll(".playlist-slot").forEach(s => s.classList.remove("drag-over"));
        });

        slot.addEventListener("dragover", function (e) {
          e.preventDefault();
          slot.classList.add("drag-over");
        });

        slot.addEventListener("dragleave", function () {
          slot.classList.remove("drag-over");
        });

        slot.addEventListener("drop", function (e) {
          e.preventDefault();
          slot.classList.remove("drag-over");
          const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
          const toIndex = i;
          if (fromIndex === toIndex) return;

          // Reordenar
          const moved = playlistSelected.splice(fromIndex, 1)[0];
          playlistSelected.splice(toIndex, 0, moved);
          renderSlots();
          updateProgress();
        });

      } else {
        slot.innerHTML = `
        <span class="slot-number">${i + 1}</span>
        <span class="slot-empty-label">empty slot</span>
      `;

        // Permitir drop en slots vacíos también
        slot.addEventListener("dragover", function (e) {
          e.preventDefault();
          slot.classList.add("drag-over");
        });

        slot.addEventListener("dragleave", function () {
          slot.classList.remove("drag-over");
        });

        slot.addEventListener("drop", function (e) {
          e.preventDefault();
          slot.classList.remove("drag-over");
          const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
          const toIndex = i;
          if (fromIndex === toIndex) return;
          const moved = playlistSelected.splice(fromIndex, 1)[0];
          playlistSelected.splice(toIndex, 0, moved);
          renderSlots();
          updateProgress();
        });
      }

      playlistSlots.appendChild(slot);
    }

    playlistSlots.querySelectorAll(".slot-remove").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        playlistSelected = playlistSelected.filter(n => n !== btn.dataset.name);
        refreshAll();
      });
    });
  }

  function renderAlienList(filter) {
    playlistAlienList.innerHTML = "";
    const filterLower = (filter || "").toLowerCase();
    const filtered = playlistAliens.filter(a =>
      !filter ||
      a.name.toLowerCase().startsWith(filterLower) ||
      (a.alias && a.alias.toLowerCase().startsWith(filterLower)) ||
      (a.aliases && a.aliases.some(alias => alias.toLowerCase().startsWith(filterLower)))
    );
    filtered.forEach(alien => {
      const isSelected = playlistSelected.includes(alien.name);
      const isLocked = alien.name === "Alien X";
      const isFull = (playlistSelected.length >= 10 && !isSelected) || isLocked;
      const row = document.createElement("div");
      row.className = "playlist-alien-row" +
        (isSelected ? " selected" : "") +
        (isFull ? " disabled" : "") +
        (isLocked ? " locked" : "");
      row.innerHTML = `
        <img src="${alien.image}" alt="${alien.name}" />
        <span class="row-name">${alien.name}</span>
		<div class="row-check">${isSelected ? "✓" : isLocked ? "🔒" : ""}</div>      `;
      if (!isFull) {
        row.addEventListener("click", function () {
          if (isSelected) {
            playlistSelected = playlistSelected.filter(n => n !== alien.name);
          } else {
            if (playlistSelected.length < 10) playlistSelected.push(alien.name);
          }
          refreshAll(playlistSearch.value);
        });
      }
      playlistAlienList.appendChild(row);
    });
  }
  function setPlaylistMode(mode) {
    if (mode === "edit") {
      playlistDoneBtn.textContent = "Update";
      playlistBackBtn.style.display = "inline-block";
    } else {
      editingPlaylist = null;
      playlistDoneBtn.textContent = "Done!";
      playlistBackBtn.style.display = "none";
    }
  }

  function updateProgress() {
    const count = playlistSelected.length;
    playlistProgressText.textContent = `${count} / 10 selected`;
    fabCount.textContent = `${count}/10`;
    playlistDoneBtn.disabled = count < 10;
  }

  function refreshAll(filter) {
    renderSlots();
    renderAlienList(filter);
    updateProgress();
  }


  function openPlaylistModal() {
  playlistSelected = [];
  setPlaylistMode("create");

  playlistModalBody.style.display = "flex";
  playlistModalFooter.style.display = "flex";
  playlistResult.style.display = "none";
  document.getElementById('close-playlist-modal').style.display = 'block';
  playlistAliens = [...aliensFijos].sort(() => Math.random() - 0.5);
  refreshAll();
  playlistSearch.value = "";
  playlistModal.classList.add("show");
  bloquearScrollFondo();
  bloquearScrollFondo;

}

  function closePlaylist() {
  playlistModal.classList.remove("show");

  playlistSelected = [];
  playlistSearch.value = "";

  playlistModalBody.style.display = "flex";
  playlistModalFooter.style.display = "flex";
  playlistResult.style.display = "none";
  document.getElementById('close-playlist-modal').style.display = 'block';

  setPlaylistMode("create");
  refreshAll();
  desbloquearScrollFondo();
}


  function showResult() {
    supabase.auth.getUser().then(({ data: { user } }) => {
      supabase.from('playlists').select('id').eq('user_id', user.id).then(({ data }) => {
        if (data && data.length >= 5) {
          abrirMessageModal(
            'Playlist limit',
            'You can only have 5 playlists maximum.',
            function () {
              closePlaylist();
              abrirMyPlaylists();
            }
          );
          return;
        }
        abrirNombreModal(null, function (nombre) {
          supabase.from('playlists').insert({
            user_id: user.id,
            nombre: nombre,
            aliens: playlistSelected
          }).then(({ error }) => {
            if (error) { openMessageModal('Error: ' + error.message); return; }
            mostrarToast('Playlist saved!');
            fabCount.textContent = "0/10";
            playlistProgressText.textContent = "0 / 10 selected";
            playlistModalBody.style.display = "none";
            playlistModalFooter.style.display = "none";
            playlistResult.style.display = "flex";
            document.getElementById('close-playlist-modal').style.display = 'none';
            playlistResultGrid.innerHTML = "";
            playlistSelected.forEach(name => {
              const alien = aliens.find(a => a.name === name);
              if (!alien) return;
              const card = document.createElement("div");
              card.className = "result-alien-card";
              card.innerHTML = `<img src="${alien.image}" alt="${alien.name}" /><span>${alien.name}</span>`;
              playlistResultGrid.appendChild(card);
            });
          });
        });
      });
    });
  }


  fab.addEventListener("click", openPlaylistModal);
  closePlaylistModal.addEventListener("click", closePlaylist);
  playlistModal.addEventListener("click", function (e) {
    if (e.target === playlistModal) closePlaylist();
  });
  playlistSearch.addEventListener("input", function () {
    renderAlienList(playlistSearch.value);
  });
  playlistClearBtn.addEventListener("click", function () {
    playlistSelected = [];
    refreshAll(playlistSearch.value);
  });
  playlistDoneBtn.addEventListener("click", async function () {
    if (playlistSelected.length < 10) return;

    if (editingPlaylist) {
      const { error } = await supabase
        .from('playlists')
        .update({
          aliens: playlistSelected
        })
        .eq('id', editingPlaylist.id);

      if (error) {
        openMessageModal('Error: ' + error.message);
        return;
      }

      mostrarToast('Playlist updated!');
      closePlaylist();
      abrirMyPlaylists();
      return;
    }

    showResult();
  });
  playlistRestartBtn.addEventListener("click", function () {
    closePlaylist();
  });
  playlistBackBtn.addEventListener("click", function () {
    closePlaylist();
    abrirMyPlaylists();
  });
  document.getElementById('playlist-ver-mis').addEventListener('click', function () {
    closePlaylist();
    abrirMyPlaylists();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePlaylist();
  });
  window.addEventListener('cargarPlaylistParaEditar', function (e) {
    editingPlaylist = e.detail.playlist;
    playlistSelected = [...e.detail.aliens];
    playlistSearch.value = "";
	playlistAliens = [...aliensFijos].sort(() => Math.random() - 0.5);
	refreshAll();
    setPlaylistMode("edit");
  });

  updateProgress();
})();

const authScreen = document.getElementById('auth-screen')
const mainContent = document.getElementById('main-content')
const authEmail = document.getElementById('auth-email')
const authPassword = document.getElementById('auth-password')
const authSubmit = document.getElementById('auth-submit')
const authSwitch = document.getElementById('auth-switch')
const authError = document.getElementById('auth-error')
const authTitle = document.getElementById('auth-title')
const authForgot = document.getElementById('auth-forgot')
const authMessage = document.getElementById('auth-message')
const authUsername = document.getElementById('auth-username')

let isLogin = true
let isUserLoggedIn = false

authSwitch.addEventListener('click', function () {
  isLogin = !isLogin
  authTitle.textContent = isLogin ? 'Login' : 'Sign up'
  authSubmit.textContent = isLogin ? 'Login' : 'Create account'
  authSwitch.textContent = isLogin ? 'Don´t have an account? Register now' : 'Already have an account? Login'
  authError.style.display = 'none'
  authUsername.style.display = isLogin ? 'none' : 'block'
})

authSubmit.addEventListener('click', async function () {
  const email = authEmail.value.trim();
  const password = authPassword.value.trim();

  authError.style.display = 'none';
  authMessage.style.display = 'none';

  if (!email || !password) {
    authError.textContent = 'Fill the blank';
    authError.style.display = 'block';
    return;
  }

  let result;

  if (isLogin) {
    result = await supabase.auth.signInWithPassword({ email, password });

    if (result.error) {
      authError.textContent = result.error.message;
      authError.style.display = 'block';
      return;
    }

    if (!result.data.session) {
      authError.textContent = 'No active session was created.';
      authError.style.display = 'block';
      mostrarLogin();
      return;
    }

    await mostrarApp(result.data.session);
    return;
  }

  const username = authUsername.value.trim();

  if (!username) {
    authError.textContent = 'Please enter a username';
    authError.style.display = 'block';
    return;
  }

  result = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username
      }
    }
  });

  if (result.error) {
    authError.textContent = result.error.message;
    authError.style.display = 'block';
    return;
  }

  if (!result.data.session) {
    authMessage.textContent = 'Account created. Check your email to confirm and then log in.';
    authMessage.style.display = 'block';
    mostrarLogin();
    return;
  }

  const { error: profileError } = await supabase
    .from('profiles')
    .upsert({
      id: result.data.user.id,
      username: username
    });

  if (profileError) {
    console.log('PROFILE UPSERT ERROR:', profileError);
  }

  await mostrarApp(result.data.session);
});

async function mostrarApp(sessionActual) {
  let session = sessionActual;

  if (!session) {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('GET SESSION ERROR:', error);
      mostrarLogin();
      return;
    }

    session = data.session;
  }

  if (!session) {
    mostrarLogin();
    return;
  }

  authScreen.style.display = 'none';
  mainContent.style.display = 'block';
  isUserLoggedIn = true;

  requestAnimationFrame(function () {
    ajustarTitulos();

    if (document.fonts) {
      document.fonts.ready.then(function () {
        ajustarTitulos();
      });
    }

    setTimeout(ajustarTitulos, 80);
  });

  if (sidebarToggle && !sidebarAbierto && isUserLoggedIn) {
  sidebarToggle.style.display = 'flex';
}

  updatePlaylistFabVisibility();

  const user = session.user;

  if (!user) {
    mostrarLogin();
    return;
  }

  const { data } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', user.id)
    .single();

  const welcomeMsg = document.getElementById('welcome-msg');
  if (!welcomeMsg) return;

  const username =
    (data && data.username) ||
    (user.user_metadata && user.user_metadata.username);

  welcomeMsg.textContent = username
    ? `Welcome back, ${username}`
    : 'Welcome back';
}


// Verificar si ya hay sesión activa
supabase.auth.onAuthStateChange(async function (event, session) {
  if (event === 'SIGNED_OUT' || !session) {
    mostrarLogin();
    return;
  }

  isUserLoggedIn = true;
  mostrarApp();
});

async function initAuth() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('INITIAL GET SESSION ERROR:', error);
    mostrarLogin();
    return;
  }

  if (data.session) {
    await mostrarApp(data.session);
  } else {
    mostrarLogin();
  }
}

initAuth();
authForgot.addEventListener('click', async function () {
  const email = authEmail.value.trim();

  authError.style.display = 'none';
  authMessage.style.display = 'none';

  if (!email) {
    authError.textContent = 'Enter your email first.';
    authError.style.display = 'block';
    return;
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname
  });

  if (error) {
    authError.textContent = error.message;
    authError.style.display = 'block';
  } else {
    authMessage.textContent = 'Recovery email sent. Check your inbox.';
    authMessage.style.display = 'block';
  }
});
resetPasswordCancel.addEventListener('click', function () {
  closeResetPasswordModal();
});

resetPasswordModal.addEventListener('click', function (e) {
  if (e.target === resetPasswordModal) {
    closeResetPasswordModal();
  }
});

resetPasswordSave.addEventListener('click', async function () {
  const password = resetPasswordInput.value.trim();
  const confirmPassword = resetPasswordConfirm.value.trim();

  resetPasswordError.style.display = 'none';
  resetPasswordError.textContent = '';

  if (!password || !confirmPassword) {
    resetPasswordError.textContent = 'Complete both fields.';
    resetPasswordError.style.display = 'block';
    return;
  }

  if (password.length < 6) {
    resetPasswordError.textContent = 'Password must be at least 6 characters.';
    resetPasswordError.style.display = 'block';
    return;
  }

  if (password !== confirmPassword) {
    resetPasswordError.textContent = 'Passwords do not match.';
    resetPasswordError.style.display = 'block';
    return;
  }

  const { error } = await supabase.auth.updateUser({
    password: password
  });

  if (error) {
    resetPasswordError.textContent = error.message;
    resetPasswordError.style.display = 'block';
    return;
  }

  await supabase.auth.signOut();
  closeResetPasswordModal();
  mainContent.style.display = 'none';
  authScreen.style.display = 'flex';
  openMessageModal('Password updated successfully. Now log in with your new password.');
});

// ===== SIDEBAR Y MY PLAYLISTS =====
const myPlaylistsBody = document.getElementById('my-playlists-body');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebar = document.getElementById('sidebar');
const btnMyPlaylists = document.getElementById('btn-my-playlists');
const btnLogout = document.getElementById('btn-logout');
const myPlaylistsModal = document.getElementById('my-playlists-modal');
const closeMyPlaylists = document.getElementById('close-my-playlists');
const playlistsList = document.getElementById('playlists-list');
const playlistDetail = document.getElementById('playlist-detail');
const myPlaylistsTitle = document.getElementById('my-playlists-title');
const myPlaylistsSubtitle = document.getElementById('my-playlists-subtitle');
const playlistFab = document.getElementById('playlist-fab');

function openResetPasswordModal() {
  resetPasswordInput.value = '';
  resetPasswordConfirm.value = '';
  resetPasswordError.style.display = 'none';
  resetPasswordError.textContent = '';
  resetPasswordModal.style.display = 'flex';
}

function closeResetPasswordModal() {
  resetPasswordModal.style.display = 'none';
}

function updatePlaylistFabVisibility() {
  const myPlaylistsOpen = myPlaylistsModal.style.display === 'flex';

  playlistFab.style.display =
    isUserLoggedIn && !myPlaylistsOpen
      ? 'flex'
      : 'none';
}
let sidebarAbierto = false;
let sidebarHistoryOpen = false;
// Mostrar el botón hamburguesa cuando el usuario está logueado
function mostrarSidebar() {
  if (!sidebarAbierto) {
    sidebarToggle.style.display = 'flex';
  }
}

// Abrir/cerrar sidebar
function abrirSidebar() {
  const isMobile = window.innerWidth <= 768;

  sidebarAbierto = true;
  sidebar.style.width = isMobile ? '100vw' : '280px';
  sidebar.style.left = '0';
  sidebarOverlay.style.display = 'block';
  sidebarOverlay.style.background = isMobile ? 'rgba(0,0,0,0.96)' : 'rgba(0,0,0,0.5)';
  sidebarToggle.style.display = 'none';

  playlistFab.classList.add('sidebar-blurred');
  
  if (isMobile && !sidebarHistoryOpen) {
    history.pushState({ sidebarOpen: true }, '');
    sidebarHistoryOpen = true;
  }
}

function cerrarSidebar() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile && sidebarHistoryOpen && !fromPopState) {
    history.back();
    return;
  }
  sidebarAbierto = false;
  sidebar.style.width = isMobile ? '100vw' : '280px';
  sidebar.style.left = isMobile ? '-100vw' : '-300px';
  sidebarOverlay.style.display = 'none';
  sidebarToggle.style.display = isUserLoggedIn ? 'flex' : 'none';

  playlistFab.classList.remove('sidebar-blurred');
}

sidebarToggle.addEventListener('click', abrirSidebar);
sidebarClose.addEventListener('click', cerrarSidebar);
sidebarOverlay.addEventListener('click', cerrarSidebar);
window.addEventListener('popstate', function () {
  if (sidebarAbierto) {
    cerrarSidebar(true);
  }
});
import {
  FunctionsHttpError,
  FunctionsRelayError,
  FunctionsFetchError
} from '@supabase/supabase-js'

async function deleteMyAccount() {
  const { data, error } = await supabase.functions.invoke('delete-account', {
    body: {}
  })

  if (error instanceof FunctionsHttpError) {
    let details

    try {
      details = await error.context.json()
    } catch {
      details = await error.context.text()
    }

    console.error('Edge Function error body:', details)
    openMessageModal(`Error deleting account: ${typeof details === 'string' ? details : (details.error || JSON.stringify(details))}`)
    return
  }

  if (error instanceof FunctionsRelayError) {
    console.error('Relay error:', error.message)
    openMessageModal(`Error deleting account: ${error.message}`)
    return
  }

  if (error instanceof FunctionsFetchError) {
    console.error('Fetch error:', error.message)
    openMessageModal(`Error deleting account: ${error.message}`)
    return
  }

  openMessageModal('Account deleted successfully')
}
// Logout
btnLogout.addEventListener('click', async function () {
  cerrarSidebar();
  await supabase.auth.signOut();
  mostrarLogin();
});
function mostrarLogin() {
  isUserLoggedIn = false;
  sidebarAbierto = false;

  authScreen.style.display = 'flex';
  mainContent.style.display = 'none';

  sidebar.style.left = window.innerWidth <= 768 ? '-100vw' : '-300px';
  sidebarOverlay.style.display = 'none';
  sidebarToggle.style.display = 'none';

  myPlaylistsModal.style.display = 'none';

  updatePlaylistFabVisibility();
  desbloquearScrollFondo();
}
document.getElementById('delete-account-btn').addEventListener('click', function () {
  abrirConfirmModal(
    'Delete account',
    'Are you sure you want to permanently delete your account?',
    async function () {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        openMessageModal('Error', 'No active session found.');
        return;
      }

      try {
        const { error } = await supabase.functions.invoke('delete-account', {
          body: {},
          headers: {
            Authorization: `Bearer ${session.access_token}`
          }
        });

        if (error) {
          throw error;
        }
      } catch (error) {
        if (error instanceof FunctionsHttpError) {
          let details;

          try {
            details = await error.context.json();
          } catch {
            details = await error.context.text();
          }

          console.error('Edge Function error body:', details);
          openMessageModal('Error', `Error deleting account: ${typeof details === 'string' ? details : (details.error || JSON.stringify(details))}`);
          return;
        }

        if (error instanceof FunctionsRelayError) {
          console.error('Relay error:', error.message);
          openMessageModal('Error', `Error deleting account: ${error.message}`);
          return;
        }

        if (error instanceof FunctionsFetchError) {
          console.error('Fetch error:', error.message);
          openMessageModal('Error', `Error deleting account: ${error.message}`);
          return;
        }

        openMessageModal('Error', 'Unknown error deleting account.');
        return;
      }

      await supabase.auth.signOut();
      location.reload();
    }
  );
});

// Abrir My Playlists
btnMyPlaylists.addEventListener('click', function () {
  cerrarSidebar();
  abrirMyPlaylists();
});

closeMyPlaylists.addEventListener('click', function () {
  myPlaylistsModal.style.display = 'none';
  desbloquearScrollFondo();
  updatePlaylistFabVisibility();
  document.body.classList.remove('modal-open');
});

myPlaylistsModal.addEventListener('click', function (e) {
  if (e.target === myPlaylistsModal) {
    myPlaylistsModal.style.display = 'none';
    desbloquearScrollFondo();
  }
  updatePlaylistFabVisibility();
});

async function abrirMyPlaylists() {
  myPlaylistsModal.style.display = "flex";

  myPlaylistsBody.style.display = "block";
  playlistDetail.style.display = "none";
  playlistsList.style.display = "block";
  playlistsList.innerHTML = "<p style='color:#aaa;'>Loading playlists...</p>";

  bloquearScrollFondo();
  await cargarPlaylists();
}

async function cargarPlaylists() {
  playlistsList.innerHTML = '<p style="color:#aaa;">Loading Primus Data...</p>';

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    playlistsList.innerHTML = '<p style="color:#ff4444;">No active session.</p>';
    return;
  }

  const { data, error } = await supabase
    .from('playlists')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    playlistsList.innerHTML = '<p style="color:#ff4444;">Error loading playlists.</p>';
    return;
  }

  if (!data || data.length === 0) {
    playlistsList.innerHTML = '<p style="color:#aaa; text-align:center; margin-top:40px;">You have no saved playlists yet.</p>';
    return;
  }

  playlistsList.innerHTML = '';

  data.forEach(function (playlist) {
    const div = document.createElement('div');
    div.style.cssText = 'background:#1e1e1e; border:1.5px solid #2e2e2e; border-radius:12px; padding:16px; margin-bottom:12px; cursor:pointer; transition:border-color 0.15s;';
    div.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div>
          <h3 style="font-family:'Ethnocentric',sans-serif; color:#7CFC00; margin:0 0 4px 0; font-size:14px;">${playlist.nombre}</h3>
          <p style="margin:0; color:#aaa; font-size:12px;">${new Date(playlist.created_at).toLocaleDateString()}</p>
        </div>
        <span style="color:#7CFC00; font-size:20px;">›</span>
      </div>
      <div style="display:flex; gap:6px; margin-top:10px; flex-wrap:wrap;">
        ${playlist.aliens.slice(0, 5).map(name => {
      const alien = aliens.find(a => a.name === name);
      return alien ? `<img src="${alien.image}" style="width:32px; height:32px; border-radius:6px; object-fit:cover; background:#111;" title="${alien.name}" />` : '';
    }).join('')}
        ${playlist.aliens.length > 5 ? `<span style="color:#aaa; font-size:12px; align-self:center;">+${playlist.aliens.length - 5} more</span>` : ''}
      </div>
    `;
    div.addEventListener('mouseenter', function () { div.style.borderColor = '#7CFC00'; });
    div.addEventListener('mouseleave', function () { div.style.borderColor = '#2e2e2e'; });
    div.addEventListener('click', function () { verPlaylist(playlist); });
    playlistsList.appendChild(div);
  });
}

function verPlaylist(playlist) {
  playlistsList.style.display = 'none';
  playlistDetail.style.display = 'block';
  myPlaylistsTitle.textContent = playlist.nombre;
  myPlaylistsSubtitle.textContent = `${playlist.aliens.length} aliens`;

  playlistDetail.innerHTML = `
      <!-- Botón volver -->
      <button id="btn-volver" style="background:transparent; border:1.5px solid #444; color:#aaa; border-radius:8px; padding:8px 16px; cursor:pointer; font-size:13px; margin-bottom:20px;">← Back</button>

      <!-- Grilla de aliens -->
      <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:24px;">
        ${playlist.aliens.map(name => {
    const alien = aliens.find(a => a.name === name);
    return alien ? `
            <div style="display:flex; flex-direction:column; align-items:center; gap:6px; background:#1e1e1e; border:1.5px solid #7CFC00; border-radius:10px; padding:10px; width:90px;">
              <img src="${alien.image}" style="width:60px; height:60px; object-fit:cover; border-radius:8px; background:#111;" />
              <span style="font-family:'Ethnocentric',sans-serif; font-size:9px; color:#7CFC00; text-align:center; line-height:1.2;">${alien.name}</span>
            </div>` : '';
  }).join('')}
      </div>

      <!-- Acciones -->
      <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button id="btn-renombrar" style="background:transparent; border:1.5px solid #7CFC00; color:#7CFC00; border-radius:8px; padding:10px 20px; cursor:pointer; font-family:'Ethnocentric',sans-serif; font-size:12px;">✏️ Rename</button>
        <button id="btn-modificar" style="background:transparent; border:1.5px solid #00BFFF; color:#00BFFF; border-radius:8px; padding:10px 20px; cursor:pointer; font-family:'Ethnocentric',sans-serif; font-size:12px;">🔄 Edit</button>
        <button id="btn-eliminar" style="background:transparent; border:1.5px solid #ff4444; color:#ff4444; border-radius:8px; padding:10px 20px; cursor:pointer; font-family:'Ethnocentric',sans-serif; font-size:12px;">🗑️ Delete</button>
      </div>
    `;

  document.getElementById('btn-volver').addEventListener('click', function () {
    playlistDetail.style.display = 'none';
    playlistsList.style.display = 'block';
    myPlaylistsTitle.textContent = 'My Playlists';
    myPlaylistsSubtitle.textContent = 'Your saved playlists';
    cargarPlaylists();
  });
 

  // Renombrar
  document.getElementById('btn-renombrar').addEventListener('click', function () {
    abrirNombreModal(playlist.nombre, async function (nuevoNombre) {
      console.log('Renombrando a:', nuevoNombre);
      console.log('ID de playlist:', playlist.id);
      const { data, error } = await supabase.from('playlists').update({ nombre: nuevoNombre }).eq('id', playlist.id);
      console.log('Resultado:', data, error);
      if (error) {
        openMessageModal('Error: ' + error.message);
        return;
      }
      playlist.nombre = nuevoNombre;
      mostrarToast('Playlist renamed!');
      verPlaylist(playlist);
    });
  });

  // Modificar (abre el modal de playlist con los aliens actuales cargados)
  document.getElementById('btn-modificar').addEventListener('click', function () {
    myPlaylistsModal.style.display = 'none';

    const pModal = document.getElementById('playlist-modal');
    const pBody = document.getElementById('playlist-modal-body');
    const pFooter = document.getElementById('playlist-modal-footer');
    const pResult = document.getElementById('playlist-result');
    const pSearch = document.getElementById('playlist-search');
    const pDoneBtn = document.getElementById('playlist-done-btn');

    pBody.style.display = 'flex';
    pFooter.style.display = 'flex';
    pResult.style.display = 'none';
    pSearch.value = '';
    pModal.classList.add('show');

    // Disparar evento para que el IIFE de playlist cargue los aliens
    window.dispatchEvent(new CustomEvent('cargarPlaylistParaEditar', {
      detail: { aliens: playlist.aliens, playlist: playlist }
    }));
  });

  // Eliminar
  const btnEliminar = document.getElementById('btn-eliminar');

  btnEliminar.onclick = function () {
    abrirConfirmModal(
      'Delete playlist',
      'Are you sure you want to delete "' + playlist.nombre + '"?',
      async function () {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          openMessageModal('Error', 'No active session.');
          return;
        }

        const { error } = await supabase
          .from('playlists')
          .delete()
          .eq('id', playlist.id)
          .eq('user_id', user.id);

        if (error) {
          openMessageModal('Error', error.message);
          return;
        }

        await cargarPlaylists();

        playlistDetail.style.display = 'none';
        playlistsList.style.display = 'block';
        myPlaylistsTitle.textContent = 'My Playlists';
        myPlaylistsSubtitle.textContent = 'Your saved playlists';

        mostrarToast('Playlist deleted!');
      }
    );
  };
}

// ===== JUMPSCARE GHOSTFREAK =====
(function () {
  let ghostfreakClicks = 0;

  const modalImage = document.getElementById('modal-image');

  modalImage.addEventListener('click', function () {
    const modalName = document.getElementById('modal-name');
    const modalSeriesLabel = document.getElementById('modal-series-label');
    if (modalName.textContent !== 'Ghostfreak') return;
    if (modalSeriesLabel.textContent === 'Definitive Omnitrix' || modalSeriesLabel.textContent === 'Ultimatrix') return;
    ghostfreakClicks++;
    if (ghostfreakClicks >= 10) {
      ghostfreakClicks = 0;
      triggerJumpscare();
    }
  });

  function triggerJumpscare() {
    // Sonido
    const audio = new Audio('/sounds/jumpscare.mp3');
    audio.play().catch(() => { });

    // Imagen
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: jumpscareShake 0.5s ease;
    `;

    const img = document.createElement('img');
    img.src = '/images/jumpscare.png';
    img.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // Desaparecer después de 1.5s
    setTimeout(function () {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(function () {
        overlay.remove();
      }, 300);
    }, 3000);
  }
})();
// ===== ALIEN X VR =====
(function () {
  // Flash verde de entrada

  let alienXClicks = 0;
  let vrActive = false;
  let exitClicks = 0;

  // Contar clicks en la imagen de Alien X en el modal
  const modalImage = document.getElementById('modal-image');
  modalImage.addEventListener('click', function () {
    const modalName = document.getElementById('modal-name');
    if (modalName.textContent !== 'Alien X') return;
    alienXClicks++;
    if (alienXClicks >= 10) {
      alienXClicks = 0;
      entrarVR();
    }
  });

  function entrarVR() {
    vrActive = true;
    exitClicks = 0;
    const flashEntrada = document.createElement('div');
    flashEntrada.style.cssText = `
  position: fixed;
  inset: 0;
  z-index: 9999998;
  background: radial-gradient(circle, white 0%, #7CFC00 60%, #39a800 100%);
  pointer-events: none;
  opacity: 1;
  transition: opacity 1.21s ease;
`;
    document.body.appendChild(flashEntrada);
    setTimeout(() => {
      flashEntrada.style.opacity = '0';
      setTimeout(() => flashEntrada.remove(), 400);
    }, 1210);

    // Audio "Alien X"
    const audioEntrada = new Audio('/sounds/alienx.mp3');
    audioEntrada.play().catch(() => { });
    document.getElementById('alien-modal').classList.remove('show');

    const vr = document.createElement('div');
    vr.id = 'vr-container';
    vr.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: #000;
      overflow: hidden;
      cursor: crosshair;
    `;

    const scene = document.createElement('div');
    scene.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      perspective: 800px;
    `;

    const world = document.createElement('div');
    world.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    `;

    // Bellicus a la izquierda, Serena a la derecha
    const bellicusEl = crearPersonaje('/images/bellicus.png', 'left');
    const serenaEl = crearPersonaje('/images/serena.png', 'right');

    world.appendChild(bellicusEl);
    world.appendChild(serenaEl);
    scene.appendChild(world);
    vr.appendChild(scene);
    document.body.appendChild(vr);

    // Click en el fondo para salir
    vr.addEventListener('click', function () {
      exitClicks++;
      if (exitClicks >= 10) {
        salirVR(vr);
      }
    });

    // Desktop: mover con mouse sin click
    vr.addEventListener('mousemove', function (e) {
      const cx = window.innerWidth / 2;
      const dx = (e.clientX - cx) / cx; // -1 a 1

      // Mover personajes en dirección opuesta al mouse (efecto parallax)
      const bellicus = vr.querySelector('[data-lado="left"]');
      const serena = vr.querySelector('[data-lado="right"]');
      if (bellicus) bellicus.style.transform = `translateY(-50%) translateX(${dx * -40}px)`;
      if (serena) serena.style.transform = `translateY(-50%) translateX(${dx * -40}px)`;
    });

    // Mobile: touch drag
    let lastX = null;
    let lastY = null;
    let rotX = 0;
    let rotY = 0;

    vr.addEventListener('touchstart', function (e) {
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    });

    vr.addEventListener('touchmove', function (e) {
      e.preventDefault();
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      rotY += dx * 0.3;
      rotX -= dy * 0.3;
      rotX = Math.max(-30, Math.min(30, rotX));
      world.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }, { passive: false });
  }

  function crearPersonaje(src, lado, nombre) {
    const esMobile = window.innerWidth <= 768;

    const ancho = esMobile
      ? Math.min(window.innerWidth * 0.30, 110)
      : 200;

    const alto = esMobile
      ? Math.round(ancho * 1.5)
      : 300;

    const separacionLateral = esMobile ? '4%' : '10%';
    const separacionVertical = esMobile ? '46%' : '50%';
    const gap = esMobile ? '6px' : '12px';

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
    position: absolute;
    top: ${separacionVertical};
    ${lado}: ${separacionLateral};
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${gap};
    max-width: ${ancho}px;
  `;
    wrapper.dataset.lado = lado;

    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
    width: ${ancho}px;
    height: ${alto}px;
    object-fit: contain;
    filter: drop-shadow(0 0 ${esMobile ? 12 : 20}px rgba(100,100,255,0.5));
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  `;

    const label = document.createElement('span');
    label.textContent = nombre || '';
    label.style.cssText = `
    color: rgba(255,255,255,0.4);
    font-family: 'Ethnocentric', sans-serif;
    font-size: ${esMobile ? 10 : 14}px;
    text-align: center;
    display: ${nombre ? 'block' : 'none'};
  `;

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    return wrapper;
  }

  function salirVR(vr) {
    vrActive = false;

    // Flash azul de salida
    const flashSalida = document.createElement('div');
    flashSalida.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999998;
    background: radial-gradient(circle, white 0%, #00BFFF 60%, #0077aa 100%);
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.4s ease;
  `;
    document.body.appendChild(flashSalida);
    setTimeout(() => {
      flashSalida.style.opacity = '0';
      setTimeout(() => flashSalida.remove(), 400);
    }, 100);

    vr.style.transition = 'opacity 0.5s';
    vr.style.opacity = '0';
    setTimeout(() => vr.remove(), 500);
  }
})();

function ajustarTitulosAlien() {
  const titulos = document.querySelectorAll(".alien-card h2");

  titulos.forEach((titulo) => {
    titulo.style.fontSize = "28px";

    while (titulo.scrollWidth > titulo.clientWidth && parseInt(titulo.style.fontSize) > 10) {
      titulo.style.fontSize = (parseInt(titulo.style.fontSize) - 1) + "px";
    }
  });
}

window.addEventListener("load", ajustarTitulosAlien);
window.addEventListener("resize", ajustarTitulosAlien);