const homeService = [
    {
      name: "Haircut + beard grooming + relaxing head massage",
      description: "Haircut: Haircut for men, Beard grooming: Beard trimming & styling, Message: 10 min ",
      category_id:701,
      parent_id:[101,121,151,152,155,158],
      price: 499,
    }, 
    {
      name: "Haircut + beard grooming + Face Care",
      description: "Haircut: Haircut for men, Beard grooming: Beard trimming & styling, Face Care: Skin Brightening Facial.",
      category_id: 702,
      parent_id:[101,121,151,152,155,156,158],
      price: 1849
    }, {
      name: "Haircut + hair color",
      description: "Haircut: Haircut for men, Hair Color (CHOOSE SHADE AT HOME): Garnier color Naturals",
      category_id: 703,
      parent_id:[101,121,151,152,155,156,158],
      price: 549
    }, {
      name: "Haircut + Pedicure + Manicure",
      description: "Haircut: Haircut for men, Pedicure: Express Pedicure, Manicure: Manicure",
      category_id: 704,
      parent_id:[101,121,151,156],
      price: 1249
    },{
      "name": "Haircut for Men",
      description: "Haircut: Professional haircut that suits your face shape",
      category_id: 705,
      parent_id:[101,121,151,152,155,156,158],
      price: 249
    },{
      name: "Refresh & Groom",
      description: "Haircut and Styling,Beard Grooming,Manicure and Pedicure",
      category_id: 706,
      parent_id:[101,121,151,152,155,156,157,158],
      price: 1499
    },{
      name: "Clean Shave",
      description: "Smooth straight-razor shave for a fresh look",
      category_id: 707,
      parent_id:[101,151,152],
      price:249
    },{
      name: "Beard Trimming & styling",
      description: "Professional beard grooming that suits your face shape",
      category_id: 708,
      parent_id:[101,151,152],
      price:549
    },{
      name: "Cleanup + pedicure",
      description: "Cleanup, Pedicure",
      category_id: 709,
      parent_id:[101,151,152],
      price:549
    },{
      name: "Skin hydrating facial",
      description: "Professional beard grooming that suits your face shape",
      category_id: 710,
      parent_id:[101,154],
      price:999
    }, {
      "name": "Anti Pollution Cleanup",
      "description": "Revitalize your skin with an anti-pollution facial cleanup. Cleanse, exfoliate, and nourish for a radiant complexion.",
      "category_id": 711,
      "parent_id": [101,151,152],
      "price": 449
    },
    {
      "name": "Detan",
      "description": "Achieve an even skin tone with a detanning treatment. Reduce tan and blemishes for a refreshed appearance.",
      "category_id": 712,
      "parent_id": [101,151,152],
      "price": 449
    },
    {
      "name": "Pedicure + Massage",
      "description": "Indulge in a relaxing pedicure followed by a soothing foot and calf massage. Pamper your feet and unwind.",
      "category_id": 101,
      "parent_id": null,
      "price": 39.99
    },
    {
      "name": "Garnier Colours",
      "description": "Experience vibrant hair colors with Garnier products. Transform your look with a wide range of color options.",
      "category_id": 101,
      "parent_id": null,
      "price": 49.99
    },
    {
      "name": "Hair Color",
      "description": "Update your hairstyle with a professional hair coloring service. Choose from various shades to express your style.",
      "category_id": 101,
      "parent_id": null,
      "price": 34.99
    },
    {
      "name": "Face Massage",
      "description": "Relax and rejuvenate with a revitalizing face massage. Enhance circulation and promote a glowing complexion.",
      "category_id": 101,
      "parent_id": null,
      "price": 25.99
    },
    {
      "name": "Head Massage",
      "description": "Relieve stress and tension with a relaxing head massage. Enjoy a soothing experience that revitalizes your senses.",
      "category_id": 101,
      "parent_id": null,
      "price": 22.99
    },
    {
      "name": "Neck & Shoulder Massage",
      "description": "Alleviate tension with a targeted neck and shoulder massage. Release knots and enjoy renewed relaxation.",
      "category_id": 101,
      "parent_id": null,
      "price": 28.99
    },
    {
      "name": "Head, Neck & Shoulder Massage",
      "description": "Experience complete relaxation with a combination of head, neck, and shoulder massage. Unwind and destress.",
      "category_id": 101,
      "parent_id": null,
      "price": 35.99
    },
    {
      "name": "Foot + Calf Massage",
      "description": "Relieve tiredness with a soothing foot and calf massage. Enhance circulation and unwind after a long day.",
      "category_id": 101,
      "parent_id": null,
      "price": 31.99
    },{
      "name": "Face detox",
      "description": "A deep cleansing facial that removes impurities and toxins from the skin, leaving it feeling refreshed and revitalized.",
      "category_id": 1,
      "parent_id": null,
      "price": 500
    },
    {
      "name": "Full body indulgence",
      "description": "A luxurious treatment that combines a full-body massage with a variety of other pampering services, such as a facial, foot spa, and hand massage.",
      "category_id": 1,
      "parent_id": null,
      "price": 1000
    },
    {
      "name": "Wax & glow",
      "description": "A treatment that removes unwanted hair and leaves the skin feeling smooth and radiant.",
      "category_id": 2,
      "parent_id": null,
      "price": 300
    },
    {
      "name": "Mani pedi delight",
      "description": "A combination of a manicure and pedicure, this treatment leaves your hands and feet looking and feeling their best.",
      "category_id": 3,
      "parent_id": null,
      "price": 500
    },
    {
      "name": "Complete honey waxing",
      "description": "A full-body waxing treatment that uses honey to remove unwanted hair.",
      "category_id": 2,
      "parent_id": null,
      "price": 1000
    },
    {
      "name": "Full arms + full legs + underarms waxing",
      "description": "A waxing treatment that removes unwanted hair from the arms, legs, and underarms.",
      "category_id": 2,
      "parent_id": null,
      "price": 600
    },
    {
      "name": "Full arms + underarms waxing",
      "description": "A waxing treatment that removes unwanted hair from the arms and underarms.",
      "category_id": 2,
      "parent_id": null,
      "price": 400
    },
    {
      "name": "Full legs waxing",
      "description": "A waxing treatment that removes unwanted hair from the legs.",
      "category_id": 2,
      "parent_id": null,
      "price": 500
    },
    {
      "name": "03+ power brightening facial",
      "description": "A facial that uses a combination of three different peels to brighten and even out the skin tone.",
      "category_id": 1,
      "parent_id": null,
      "price": 700
    },
    {
      "name": "cut,file & polish",
      "description": "A basic manicure that includes cutting and filing the nails, and applying polish.",
      "category_id": 3,
      "parent_id": null,
      "price": 200
    },
    {
      "name": "elysian british rose manicure",
      "description": "A luxurious manicure that uses Elysian British Rose products to pamper your hands.",
      "category_id": 3,
      "parent_id": null,
      "price": 300
    },
    {
      "name": "elysian candle spa manicure",
      "description": "A relaxing manicure that uses aromatherapy candles to create a calming atmosphere.",
      "category_id": 3,
      "parent_id": null,
      "price": 400
    },
    {
      "name": "elysian british rose pedicure",
      "description": "A luxurious pedicure that uses Elysian British Rose products to pamper your feet.",
      "category_id": 3,
      "parent_id": null,
      "price": 300
    },
    {
      "name": "elysian candle spa pedicure",
      "description": "A relaxing pedicure that uses aromatherapy candles to create a calming atmosphere.",
      "category_id": 3,
      "parent_id": null,
      "price": 400
    },
    {
      "name": "Threading",
      "description": "A hair removal technique that uses a thread to remove unwanted hair from the face and body.",
      "category_id": 2,
      "parent_id":99,
    },
    {
      name: "Face wax",
      description: "A waxing service that removes unwanted facial hair, leaving the skin smooth and hair-free.",
      category_id: "Waxing",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Bleach",
      description: "A skin lightening treatment that helps to even out skin tone and reduce the appearance of dark spots.",
      category_id: "Skin Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Anti pollution cleanup",
      description: "A facial treatment that cleanses and detoxifies the skin, protecting it from environmental pollutants.",
      category_id: "Facial",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Detan",
      description: "A skin treatment that helps to remove tan and brighten the skin, giving it a more even complexion.",
      category_id: "Skin Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Hair color",
      description: "A hair coloring service that allows you to change or enhance your hair color.",
      category_id: "Hair Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "L'Oreal hair spa",
      description: "A deep conditioning treatment for the hair that nourishes and revitalizes damaged hair.",
      category_id: "Hair Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Pedicure + massage",
      description: "A combination service that includes a pedicure and a relaxing foot massage.",
      category_id: "Nail Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Garnier colours",
      description: "A hair coloring service using Garnier hair color products for vibrant and long-lasting color.",
      category_id: "Hair Care",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Face massage",
      description: "A relaxing massage for the face that helps to relieve tension and improve circulation.",
      category_id: "Massage",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Head massage",
      description: "A soothing massage for the head and scalp that helps to relax and relieve stress.",
      category_id: "Massage",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Neck & shoulder massage",
      description: "A massage that targets the neck and shoulder area to release tension and alleviate pain.",
      category_id: "Massage",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Head, neck & shoulder massage",
      description: "A comprehensive massage that covers the head, neck, and shoulder area for ultimate relaxation.",
      category_id: "Massage",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Foot + calf massage",
      description: "A massage that focuses on the feet and calf muscles to relieve tension and improve circulation.",
      category_id: "Massage",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Foam & Power Jet AC service (Split)",
      description: "Comprehensive AC service for split units using foam and power jet cleaning techniques.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Power Jet AC Service",
      description: "Effective AC service using power jet cleaning method to ensure optimal performance.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Foam & Power Jet AC Service (Window)",
      description: "AC service for window units combining foam and power jet cleaning for thorough cleaning.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Power Jet AC Service (Window)",
      description: "AC service for window units utilizing power jet cleaning technique to enhance efficiency.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Anti-rust Deep Clean AC Service",
      description: "Deep cleaning service for AC units with anti-rust treatment to prevent corrosion.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "AC Repair (Split/Window)",
      description: "Professional AC repair service for split and window units to address performance issues.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Gas Leak Fix & Refill",
      description: "Service to fix gas leaks in AC units and refill refrigerant for proper cooling.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "AC Install",
      description: "Expert installation service for AC units to ensure proper setup and functionality.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "AC Uninstall",
      description: "Professional AC unit uninstallation service for safe removal and relocation.",
      category_id: "AC Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Classic cleaning - 2 bathroom pack",
      description: "A classic cleaning service package for 2 bathrooms, providing thorough cleaning and sanitation.",
      category_id: "Cleaning",
      parent_id: "Bathroom",
      price: [   ],
    },
    {
      name: "Intense cleaning - 2 bathroom pack",
      description: "An intense cleaning service package for 2 bathrooms, offering deep cleaning and sanitization.",
      category_id: "Cleaning",
      parent_id: "Bathroom",
      price: [   ],
    },
    {
      name: "Classic cleaning - 3 bathroom pack",
      description: "A classic cleaning service package for 3 bathrooms, providing comprehensive cleaning and hygiene.",
      category_id: "Cleaning",
      parent_id: "Bathroom",
      price: [   ],
    },
    {
      name: "Intense cleaning - 3 bathroom pack",
      description: "An intense cleaning service package for 3 bathrooms, delivering thorough deep cleaning and disinfection.",
      category_id: "Cleaning",
      parent_id: "Bathroom",
      price: [   ],
    },
    {
      name: "Classic bathroom cleaning",
      description: "A classic cleaning service focused on thoroughly cleaning and sanitizing the bathroom.",
      category_id: "Cleaning",
      parent_id: "Bathroom",
      price: [   ],
    },
    {
      name: "Intense bathroom cleaning",
      description: "Thorough and detailed cleaning of the bathroom area to ensure cleanliness and hygiene.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Move-in bathroom cleaning",
      description: "Comprehensive cleaning of the bathroom area for a fresh and clean start in a new space.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Move-in kitchen cleaning",
      description: "Thorough cleaning of the kitchen area to ensure a clean and welcoming environment for moving in.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Complete kitchen cleaning",
      description: "Comprehensive cleaning of the entire kitchen space, including appliances and surfaces.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Chimney cleaning",
      description: "Cleaning and maintenance of the chimney to ensure efficient performance and safety.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Fridge deep cleaning",
      description: "Thorough cleaning of the refrigerator to remove dirt, odors, and ensure food safety.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Ceiling fan cleaning",
      description: "Cleaning and dusting of ceiling fans to maintain cleanliness and improve air quality.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Exhaust fan kitchen",
      description: "Cleaning and maintenance of kitchen exhaust fans to ensure efficient ventilation.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Exhaust fan cleaning",
      description: "Cleaning and maintenance of exhaust fans for improved air circulation and freshness.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Kitchen sink cleaning",
      description: "Thorough cleaning of the kitchen sink to remove stains, dirt, and maintain hygiene.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Gas stove cleaning",
      description: "Cleaning and degreasing of the gas stove to maintain cleanliness and safe cooking.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Microwave cleaning",
      description: "Cleaning and sanitization of the microwave to remove food residue and maintain hygiene.",
      category_id: "Cleaning",
      parent_id: "",
      price: [   ],
    },    
    {
      name: "Book An electrician",
      description: "Schedule an appointment with a skilled electrician for various electrical services.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Festival light installation",
      description: "Installation of festive lights for special occasions and celebrations.",
      category_id: "Lighting",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Geyser Installation",
      description: "Professional installation of geysers for hot water supply in homes.",
      category_id: "Appliance Installation",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Decorative light installation",
      description: "Installation of decorative lighting fixtures to enhance the ambiance.",
      category_id: "Lighting",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Decorative light uninstallation",
      description: "Removal of decorative lighting fixtures after their use or when needed.",
      category_id: "Lighting",
      parent_id: "",
      price: [   ],
    },
    {
      name: "AC switchbox installation",
      description: "Professional installation of AC switchbox for effective cooling control.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Switchboard installation",
      description: "Efficient installation of switchboards for electrical connections.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Switchboard repair",
      description: "Skilled repair of faulty switchboards to ensure safety and functionality.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Switch replacement",
      description: "Replacement of worn-out or non-functional switches for improved usability.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Socket replacement",
      description: "Replacement of electrical sockets for better connectivity and safety.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Fan repair",
      description: "Repair and troubleshooting of malfunctioning fans for optimal performance.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Ceiling fan installation",
      description: "Professional installation of ceiling fans for proper operation and cooling.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Fan replacement",
      description: "Replacement of old or non-functional fans with new and efficient ones.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Wall fan installation",
      description: "Installation of wall-mounted fans to improve air circulation and cooling.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Bulb holder installation",
      description: "Installation of bulb holders to securely hold light bulbs in place.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Wall light installation",
      description: "Installation of wall lights to enhance interior lighting and ambiance.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "False ceiling light installation",
      description: "Installation of lights in false ceilings to create an elegant and well-lit space.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Ceiling light installation",
      description: "Installation of ceiling lights for improved illumination and aesthetics.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Festive light installation",
      description: "Installation of decorative lights for special occasions and festive celebrations.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Tubelight installation/repair",
      description: "Installation and repair of tubelights to provide efficient and consistent lighting.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Single pole MCB installation",
      description: "Installation of a single-pole Miniature Circuit Breaker (MCB) for electrical safety.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Double pole MCB installation",
      description: "Installation of a double-pole Miniature Circuit Breaker (MCB) for enhanced electrical protection.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Sub meter installation",
      description: "Installation of sub meters to measure and manage electricity consumption.",
      category_id: "Electrical Services",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Inverter repair",
      description: "Repair and troubleshooting services for malfunctioning inverters.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Single battery inverter installation",
      description: "Installation of a single battery inverter system for power backup.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Inverter servicing",
      description: "Regular maintenance and servicing of inverters to ensure optimal performance.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Inverter servicing - double battery",
      description: "Maintenance and servicing for inverters with double battery setups.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Stabilizer installation",
      description: "Installation of voltage stabilizers to protect electrical appliances from fluctuations.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Mixer grinder check up/repair",
      description: "Diagnostic and repair services for malfunctioning mixer grinders.",
      category_id: "Appliance Repair",
      parent_id: "",
      price: [   ],
    },
    {
      name: "TV installation",
      description: "Professional installation of television sets for optimal viewing experience.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "TV uninstallation",
      description: "Safe and efficient removal of television sets.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Geyser installation",
      description: "Installation of water geysers for hot water supply.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "WIFI CCTV installation",
      description: "Installation of WIFI-connected CCTV camera systems for surveillance.",
      category_id: "Security",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Home video bell",
      description: "Installation of a video doorbell system for enhanced home security.",
      category_id: "Security",
      parent_id: "",
      price: [   ],
    },
    {
      name: "New internal wiring",
      description: "Installation of new internal electrical wiring for homes or offices.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Door bell installation",
      description: "Installation of traditional doorbell systems for door notifications.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Door bell uninstallation",
      description: "Safe and efficient removal of traditional doorbell systems.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "EV charger installation",
      description: "Installation of electric vehicle (EV) chargers for convenient charging at home.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "EV charger uninstallation",
      description: "Safe removal of electric vehicle (EV) chargers.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },
    {
      name: "Book an electrician",
      description: "Convenient booking of professional electricians for various electrical services.",
      category_id:    " ",
      parent_id: "",
      price: [   ],
    },{
      name: "Full home painting (1/2/3/4 BHK & above)",
      description: "Team of 2-5 painters delivering high-quality work",
      category_id:    " ",
      parent_id: "",
      price: 49,
    },{
      name: "Partial home painting (1/2/3/4 rooms only)",
      description: "Team of 1-2 painters delivering high-quality work",
      category_id: " ",
      parent_id: "",
      price:49,
    },{
      name: "Wall panels",
      description: "Our professional will reach you. Select your design & we'll do the rest.",
      category_id: " ",
      parent_id: "",
      price:49,
    },
    {
      name: "Bedroom wallpapers",
      description: "Our professional will reach you. Select your design & we'll do the rest.",
      category_id: " ",
      parent_id: "",
      price:4999,
    },
    {
      name: "Living room wallpapers",
      description: "Reliable quality & smooth finnish , One price any wall size, New Designs with High quality wallpapers",
      parent_id: "",
      price:4999,
    },
    
  ];
  