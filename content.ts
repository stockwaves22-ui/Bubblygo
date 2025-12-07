// =================================================================================
// 🛠️ MASTER EDITABLE FILE - CHANGE YOUR WEBSITE CONTENT HERE
// =================================================================================

export const CONTENT = {
  // 1. GLOBAL INFO (Contact, Logo, Socials)
  global: {
    name: "BubblyGo",
    // Paste your Google Drive Thumbnail URL or any Image URL here
    logoUrl: "https://drive.google.com/thumbnail?id=1vVHYdO2LTKzbzxsE_aj2QGZZJW7-aa99",
    
    contact: {
      // Format: Country code + Number (e.g., 919076052901) for WhatsApp link
      whatsappNumber: "919076052901", 
      // How the phone number looks on screen
      displayPhone: "+91 90760 52901",
      email: "stockwaves22@gmail.com",
      address: "#42, 1st Main Road, Vidya Nagar, Mandya - 571401",
      
      // WhatsApp predefined message
      whatsappMessage: "Hello! I would like to schedule a laundry pickup.",
    },

    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    }
  },

  // 2. HERO SECTION (Top of the page)
  hero: {
    badge: "Serving Sugar City", // The small popping pill at the top
    titlePart1: "Freshness", // Colored Text
    titlePart2: "On The Go.", // Black Text
    subtitle: "Professional Wash & Fold, Steam Ironing, and Dry Cleaning in Mandya. Schedule a pickup in seconds.",
    buttonText: "Book Pickup Now",
    
    // The large image on the right side
    mainImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop",
    
    // Small features listed below the button
    features: [
      "Hygienic Wash",
      "Express Delivery",
      "Affordable Rates"
    ]
  },

  // 3. SERVICES & PRICING
  // iconName options: 'Shirt', 'Wind' (Iron), 'Sparkles' (Dry Clean), 'Clock' (Express)
  services: [
    {
      id: '1',
      title: 'Wash & Fold',
      description: 'Everyday laundry. Washed with premium detergent, dried, and neatly folded.',
      price: '₹60 / kg',
      iconName: 'Shirt',
      isExpress: false
    },
    {
      id: '2',
      title: 'Wash & Iron',
      description: 'Complete care. Washing plus steam ironing for a crisp, wrinkle-free finish.',
      price: '₹90 / kg',
      iconName: 'Sparkles',
      isExpress: false
    },
    {
      id: '3',
      title: 'Steam Ironing',
      description: 'Just need the creases out? Professional steam ironing for delicate fabrics.',
      price: '₹30 / pc',
      iconName: 'Wind',
      isExpress: false
    },
    {
      id: '4',
      title: 'Dry Cleaning',
      description: 'Special care for Mysore Silk, Suits, and heavy blankets using gentle chemicals.',
      price: 'From ₹200',
      iconName: 'Sparkles',
      isExpress: false
    },
    {
      id: '5',
      title: 'Express Wash & Fold',
      description: 'Urgent requirement? Get your clean laundry back in record time.',
      price: '₹120 / kg',
      iconName: 'Clock',
      isExpress: true
    },
    {
      id: '6',
      title: 'Express Wash & Iron',
      description: 'Quick turnaround for your urgent meetings and events.',
      price: '₹150 / kg',
      iconName: 'Clock',
      isExpress: true
    }
  ],

  // 4. HOW IT WORKS STEPS
  howItWorks: [
    { id: 1, title: 'Book', description: 'Online', iconName: 'Phone' },
    { id: 2, title: 'Pickup', description: 'We Come', iconName: 'Truck' },
    { id: 3, title: 'Washing', description: 'We Clean', iconName: 'Droplet' },
    { id: 4, title: 'Delivery', description: 'To You', iconName: 'CheckCircle' },
  ],

  // 5. ABOUT US SECTION
  about: {
    sectionTitle: "Our Story",
    headline: "Bringing Professional Laundry Care to Mandya",
    paragraph1: "Started right here in **Sugar City**, BubblyGo was born from a simple desire: to give families in our city more free time. We know that between work, traffic, and family, doing laundry is the last thing you want to worry about.",
    paragraph2: "Whether it's the red soil stains from the field, coffee spills on your office shirt, or your delicate **Mysore Silk** sarees, our expert team uses advanced technology and eco-friendly detergents to make your clothes look brand new."
  },

  // 6. REVIEWS / PROMISE SECTION
  reviews: {
    title: "Promise",
    text: "Mandya's newest premium laundry service is here. We are committed to delivering 5-star care for your clothes.",
    badge1: "Trusted Choice",
    badge2: "Premium Quality Guaranteed"
  }
} as const;