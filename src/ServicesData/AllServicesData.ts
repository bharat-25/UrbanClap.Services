

export const ServicesData =   [

  // Salon Services
  {
  "name": "Salon",
  "description": "UrbanClap offers a range of salon services for men and women, including haircuts, facials, hair color, massages, manicures, pedicures, and more. Our expert professionals provide personalized care to enhance your grooming and well-being.",
  "category_id": 101
  }, 
  
  // Salon Category
  {
    "name": "Salon for Men",
    "description": "In the Salon Service there are multiple services provided for Men by the Company like Haircut,Shave/Beard/Grooming, Face Care, Hair Color, Massage, Manicure, Pedicure etc.",
    "category_id": 121,
    "parent_id":101
  },
  {
    "name": "Salon for Women",
    "description": "In the Salon Service there are multiple services provided for Men and Women by the Company like Haircut, Face Care, Hair Color, Massage, Manicure, Pedicure etc.",
    "category_id": 122,
    "parent_id":101
  },// Salon for men Subservices
  {
    "name": "Haircut and Styling",
    "description": "Expert haircut and styling services to revamp your look.",
    "category_id": 151,  
    "parent_id": [121,101] 
  },
  {
    "name": "Beard, Grooming and Shaving",
    "description": "Precise grooming and shaving to keep your beard on point.",
    "category_id": 152,  
    "parent_id": [101,121] 
  },
  {
    "name": "Hair Color and Highlights",
    "description": "Stylish hair coloring and highlighting to enhance your appearance.",
    "category_id": 153,  
    "parent_id": [101,121]  
  },
  {
    "name": "Facials and Skincare",
    "description": "Relaxing facials and skincare treatments for a rejuvenated glow.",
    "category_id": 154,  
    "parent_id": [101,121]   
  },
  {
    "name": "Massage Therapy",
    "description": "Therapeutic massage techniques to unwind and alleviate stress.",
    "category_id": 155,  
    "parent_id": [101,121]   
  },
  {
    "name": "Manicure and Pedicure",
    "description": "Expert manicure and pedicure services for well-groomed hands and feet.",
    "category_id": 156,  
    "parent_id": [101,121]  
  },
  {
    "name": "Waxing and Threading",
    "description": "Efficient waxing and threading for a polished and smooth look.",
    "category_id": 157,  
    "parent_id": [101,121]   
  },
  {
    "name": "Relaxation Treatments",
    "description": "Indulgent relaxation treatments to unwind and destress.",
    "category_id": 158, 
    "parent_id": [101,121]
  },

  //Salon for women Subservices
{
  "name": "Women's Haircut and Styling",
  "description": "Expert haircut and styling services tailored for women.",
  "category_id": 171, 
  "parent_id": [101,122]
},
{
  "name": "Facial Treatments and Skincare",
  "description": "Revitalizing facial treatments and skincare routines for a radiant complexion.",
  "category_id": 172, 
  "parent_id": [101,122]
},
{
  "name": "Hair Coloring and Highlights",
  "description": "Stunning hair coloring and highlighting options to enhance your look.",
  "category_id": 173,
  "parent_id": [101,122]
},
{
  "name": "Manicures and Pedicures",
  "description": "Elegant manicure and pedicure services to keep your nails well-groomed.",
  "category_id": 174, 
  "parent_id": [101,122]
},
{
  "name": "Makeup Application and Makeovers",
  "description": "Professional makeup application and transformative makeovers for any occasion.",
  "category_id": 175, 
  "parent_id": [101,122]
},
{
  "name": "Waxing and Threading",
  "description": "Efficient waxing and threading for smooth and hair-free skin.",
  "category_id": 176, 
  "parent_id": [101,122] 
},
{
  "name": "Body Massage and Relaxation",
  "description": "Indulgent body massage and relaxation therapies to unwind and rejuvenate.",
  "category_id": 177, 
  "parent_id": [101,122]
},
{
  "name": "Bridal and Special Occasion Styling",
  "description": "Exquisite styling services for brides and special occasions, ensuring you look your best.",
  "category_id": 178, 
  "parent_id": [101,122] 
},


  // Home Services
{
  "name": "Home Services",
  "description": "UrbanClap provides convenient home services, from appliance repair and home painting to cleaning and repairs. Skilled professionals ensure your home is well-maintained, making life easier and more comfortable.",
  "category_id": 201
},
 {
  "name": "Appliance Rapire",
  "description": "Experience efficient and reliable appliance services that ensure your household devices are in top-notch condition. Our skilled technicians provide comprehensive repair, maintenance, and installation solutions to keep your appliances running smoothly. Services:- AC Service, Microwave Repair, Refrigerator, Washing Machine Repair, Chimney Repair, Geyser Repair, Television Repair.",
  "category_id": 211,
  "parent_id":201
},
 {
  "name": "Home Painting",
  "description": "Transform your space with professional home painting services. Skilled painters bring color and life to your walls, enhancing your home's aesthetics with precision and care.",
  "category_id": 212,
  "parent_id":201
},
{
  "name": "Cleaning",
  "description": "Looking for a reliable and safe way to get your home painted? Look no further, Berger Express Painting Service offers our customers an extensive range of services, including interior and exterior home painting, deck painting and staining, wood finishing and faux finishing.A Painter applies various finishes to buildings, rooms, or other structures, including primers and sealers",
  "category_id": 213,
  "parent_id":201
},
{
  "name": "Home Repair",
  "description": "Reliable home repair solutions for various needs. Skilled craftsmen tackle repairs promptly, ensuring the safety and functionality of your home's systems and structures.",
  "category_id": 214,
  "parent_id":201
},


// Appliances Repair Subservices

{
  "name": "Refrigerator Repair",
  "description": "Expert repair services for refrigerators, restoring their cooling efficiency and functionality.",
  "category_id": 231,
  "parent_id": [201,211]

},
{
  "name": "Washing Machine Repair",
  "description": "Skilled technicians offer professional washing machine repair, ensuring smooth operation and cleanliness.",
  "category_id": 232,
  "parent_id": [201,211]
},
{
  "name": "Oven and Stove Repair",
  "description": "Repair services for ovens and stoves, restoring optimal cooking performance and safety.",
  "category_id": 233,
  "parent_id": [201,211]
},
{
  "name": "Dishwasher Repair",
  "description": "Comprehensive dishwasher repair services to maintain the cleanliness and efficiency of your kitchen.",
  "category_id": 234,
  "parent_id": [201,211]
},
{
  "name": "Microwave Repair",
  "description": "Skilled technicians provide expert microwave repair services, ensuring quick and efficient heating.",
  "category_id": 235,
  "parent_id": [201,211]
},
{
  "name": "Dryer Repair",
  "description": "Professional dryer repair to ensure efficient and effective drying of your clothes and fabrics.",
  "category_id": 236,
  "parent_id": [201,211]
},
{
  "name": "Small Appliance Repair",
  "description": "Repair services for small household appliances, ensuring they continue to serve your needs.",
  "category_id": 237,
  "parent_id": [201,211]
},
{
  "name": "Installation Services",
  "description": "Expert installation services for various appliances, ensuring they're set up safely and correctly.",
  "category_id": 238,
  "parent_id": [201,211]
},{
  "name": "AC Services & Repair",
  "description": "Expert installation services for various appliances, ensuring they're set up safely and correctly.",
  "category_id": 239,
  "parent_id": [201,211]
},


// Home Painting Subservices
{
  "name": "Interior Painting",
  "description": "Revitalize your living spaces with a fresh coat of paint...",
  "category_id": 251,
  "parent_id": [201,212]
},
{
  "name": "Exterior Painting",
  "description": "Enhance your home's curb appeal with expert exterior painting...",
  "category_id": 252,
  "parent_id": [201,212]
},
{
  "name": "Wall Texture Painting",
  "description": "Add depth and character to your walls with textured painting...",
  "category_id": 253,
  "parent_id": [201,212]
},
{
  "name": "Stencil and Mural Painting",
  "description": "Personalize your walls with intricate stencils or captivating murals...",
  "category_id": 254,
  "parent_id":[201,212]
},
{
  "name": "Door and Window Frame Painting",
  "description": "Give your doors and window frames a fresh look...",
  "category_id": 255,
  "parent_id": [201,212]
},
{
  "name": "Ceiling Painting",
  "description": "Elevate your ceilings with flawless painting...",
  "category_id": 256,
  "parent_id": [201,212]
},
{
  "name": "Cabinet and Furniture Painting",
  "description": "Transform cabinets and furniture pieces with a new coat of paint...",
  "category_id":257,
  "parent_id": [201,212]
},
{
  "name": "Specialty Finishes",
  "description": "Explore unique finishes such as faux wood, metallic, distressed...",
  "category_id": 258,
  "parent_id": [201,212]
},
{
  "name": "Color Consultation",
  "description": "Get professional advice on color choices that match your home's style...",
  "category_id": 259,
  "parent_id": [201,212]
},



//Cleaning Subservices
{
  "name": "Regular House Cleaning",
  "description": "Thorough cleaning of your home's surfaces, floors, and living spaces.",
  "category_id": 281, 
  "parent_id": [201,213]
},
{
  "name": "Deep Cleaning",
  "description": "Comprehensive cleaning targeting hidden and hard-to-reach areas.",
  "category_id": 282,
  "parent_id": [201,213]
},
{
  "name": "Carpet Cleaning",
  "description": "Expert cleaning to remove dirt and stains from carpets and rugs.",
  "category_id": 283,
  "parent_id": [201,213]
},
{
  "name": "Kitchen Cleaning",
  "description": "Thorough cleaning of kitchen surfaces, appliances, and fixtures.",
  "category_id": 284,
  "parent_id": [201,213]
},
{
  "name": "Bathroom Cleaning",
  "description": "Hygienic cleaning of bathroom fixtures, tiles, and surfaces.",
  "category_id": 285,
  "parent_id": [201,213]
},
{
  "name": "Window Cleaning",
  "description": "Professional cleaning of windows and glass surfaces.",
  "category_id": 286,
  "parent_id": [201,213]
},
{
  "name": "Move-In/Move-Out Cleaning",
  "description": "Cleaning services for a fresh start in a new home or a thorough cleaning before moving out.",
  "category_id": 287,
  "parent_id": [201,213]
},
{
  "name": "Office Cleaning",
  "description": "Maintain a clean and organized office environment for better productivity.",
  "category_id": 288, 
  "parent_id": [201,213]
},
{
  "name": "Commercial Space Cleaning",
  "description": "Cleaning solutions for commercial properties, ensuring a clean and welcoming atmosphere.",
  "category_id": 289,
  "parent_id": [201,213]
},
{
  "name": "Party Cleanup",
  "description": "Quick and efficient post-party cleaning to restore your space.",
  "category_id": 290,
  "parent_id": [201,213]
},

// Home repairing Subservices
{
  "name": "Plumbing",
  "description": "Expert plumbing services to ensure your water systems run smoothly.",
  "category_id": 301, 
  "parent_id":[201,214]
},{
    "name": "Electrical",
    "description": "Professional electrical services for a safe and well-functioning home.",
    "category_id": 302, 
    "parent_id": [201,214] 
},{
    "name": "Carpentry",
    "description": "Skilled carpentry services to address your woodwork and furniture needs.",
    "category_id": 303, 
    "parent_id": [201,214]   
  },{
    "name": "Furniture",
    "description": "Furniture repair and restoration services to bring new life to your pieces.",
    "category_id": 304, 
    "parent_id": [201,214]
  }

]

