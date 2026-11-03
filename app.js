/**
 * Adventure Rakaposhi - High-End Tourism Information Platform
 * Gilgit-Baltistan Dataset, Auto Hero Slideshow & Interactive Gallery Lightbox
 */

// Official WhatsApp Business Phone Number (+92 355 5133394)
const officialWhatsAppNumber = "923555133394";

// Clear legacy cached testing number if present
try {
  localStorage.removeItem("rakaposhi_wa_number");
} catch (e) {
  // localStorage may be unavailable in some restricted environments
}

/**
 * Hero Background Slideshow Images (Curated selection of 5 top highlights)
 */
const heroSlidesData = [
  {
    image: "images/hero/hero_fairy_meadows.jpg",
    title: "Journey Beyond The Clouds",
    subtitle: "Gilgit-Baltistan, Pakistan Premier Tour Operator"
  },
  {
    image: "images/hero/hero_golden_summit.png",
    title: "Conquer The Karakoram Summits",
    subtitle: "Licensed 5,000m to 8,000m Mountaineering Expeditions"
  },
  {
    image: "images/weddings/attabad.png",
    title: "Royal Himalayan Destination Weddings",
    subtitle: "Attabad Lake Turquoise Waters & Fairy Meadows Staging"
  },
  {
    image: "images/hero/hero_altit_fort.jpg",
    title: "Ancient Silk Route Forts & Valleys",
    subtitle: "Royal Heritage of Hunza, Skardu & Nagar"
  },
  {
    image: "images/hero/hero_blossom.jpg",
    title: "Enchanted Alpine Spring Blossom",
    subtitle: "Apricot & Cherry Blossom Season in Gilgit-Baltistan"
  }
];

let currentHeroIndex = 0;
let heroSlideTimer = null;

/**
 * Visual Gallery Dataset (Featuring all newly added authentic expedition & landscape photos)
 */
const galleryData = [
  // --- Authentic Rakaposhi Expeditions & Karakoram Mountains ---
  {
    id: "g-golden-summit",
    title: "Golden Hour Summit Glow on Karakoram Peak",
    location: "Spantik-Golden Peak Summit Ridge",
    category: "mountains",
    image: "images/hero/hero_golden_summit.png"
  },
  {
    id: "g-k2-summit",
    title: "K2 (8,611m) Savage Mountain of the Karakoram",
    location: "Baltoro Glacier, Skardu",
    category: "mountains",
    image: "images/gallery/mountains/K2.png"
  },
  {
    id: "g-nanga-parbat",
    title: "Nanga Parbat (8,126m) Raikot Glacier Wall",
    location: "Fairy Meadows, Diamer District",
    category: "mountains",
    image: "images/gallery/mountains/nanga_parbat.png"
  },
  {
    id: "g-laila-peak",
    title: "Laila Peak (6,096m) Technical Needle Spire",
    location: "Hushe Valley, Ghanche",
    category: "mountains",
    image: "images/districts/LAILA peak.JPG"
  },
  {
    id: "g-rakaposhi-peak",
    title: "Rakaposhi (7,788m) Majestic North Face",
    location: "Minapin, Nagar Valley",
    category: "mountains",
    image: "images/gallery/mountains/rakaposhi_peak.jpg"
  },
  {
    id: "g-diran-peak",
    title: "Diran Peak (7,266m) Pyramid Crest",
    location: "Minapin-Summayar, Nagar",
    category: "mountains",
    image: "images/gallery/mountains/diran_peak.png"
  },
  {
    id: "g-gosargang",
    title: "Khosar Gang Peak (6,400m) Snowfields",
    location: "Shigar Valley, Baltistan",
    category: "mountains",
    image: "images/districts/khosar Gang.png"
  },
  {
    id: "g-ultar-sar",
    title: "Ultar Sar (7,388m) & Ladyfinger Needle",
    location: "Karimabad, Hunza Valley",
    category: "mountains",
    image: "images/gallery/mountains/ultar_sar.png"
  },
  {
    id: "g-snow-lake",
    title: "Snow Lake (Lukpe Lawo) Basin & Hispar La Pass",
    location: "Biafo-Hispar Glacier Highway",
    category: "mountains",
    image: "images/gallery/mountains/snow_lake.png"
  },
  {
    id: "g-passu-cones",
    title: "Passu Cones Cathedral Spire Range",
    location: "Gojal, Upper Hunza",
    category: "mountains",
    image: "images/gallery/mountains/passu .png"
  },
  {
    id: "g-team-summit",
    title: "Rakaposhi Adventures Official Summit Team",
    location: "Karakoram High Summit Ridge",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6835.JPG"
  },
  {
    id: "g-guide-banner",
    title: "Official High-Altitude Mountain Guide",
    location: "Rakaposhi Ridge (7,788m)",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6833.JPG"
  },
  {
    id: "g-summit-climbers",
    title: "Summit Team High-Altitude Ridge Ascent",
    location: "Karakoram Glacial Ridge",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6306.JPG"
  },
  {
    id: "g-clouds-panorama",
    title: "Summit Sea of Clouds Panorama",
    location: "Rakaposhi High Ridge",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6343.JPG"
  },
  {
    id: "g-serac-ascent",
    title: "Glacial Serac & Ice Wall Ascent",
    location: "High Karakoram Glacier",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6491.JPG"
  },
  {
    id: "g-expedition-camp",
    title: "High Camp Staging & Summit Equipment",
    location: "Spantik-Rakaposhi Base",
    category: "mountains",
    image: "images/trophy/expedition.jpg"
  },
  {
    id: "g-valley-overlook",
    title: "Summit Ridge Valley Overlook",
    location: "Hunza-Nagar Valley Vista",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6346.JPG"
  },
  {
    id: "g-crest-descent",
    title: "High Alpine Crest Descent View",
    location: "Nagar Crest (7,000m+)",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6354.JPG"
  },
  {
    id: "g-snow-traverse",
    title: "Glacier Traverse in Fresh Alpine Snow",
    location: "Glacial Pass Route",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6336.JPG"
  },
  {
    id: "g-cloud-inversion",
    title: "Cloud Inversion Above Rocky Pinnacles",
    location: "High Altitude Ridge Pass",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6339.JPG"
  },
  {
    id: "g-ice-wall-route",
    title: "Ascent Alongside Glacial Ice Wall",
    location: "Upper Glacier Route",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6475.JPG"
  },
  {
    id: "g-midnight-push",
    title: "Midnight Summit Push on Steep Ice",
    location: "High Alpine Headlamp Ascent",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6478.JPG"
  },
  {
    id: "g-vertical-ice",
    title: "Technical Vertical Ice Climbing",
    location: "Glacial Ice Wall Route",
    category: "mountains",
    image: "images/gallery/mountains/IMG_6482.JPG"
  },

  // --- Valleys, Alpine Lakes & Cultural Heritage ---
  {
    id: "g-hero-fairy-meadows",
    title: "Fairy Meadows Lake Reflection & Nanga Parbat Face",
    location: "Raikot Glacier, Diamer District",
    category: "valleys",
    image: "images/hero/hero_fairy_meadows.jpg"
  },
  {
    id: "g-hero-altit-fort",
    title: "Historic Altit Fort Over Turquoise Hunza River",
    location: "Karimabad, Hunza Valley",
    category: "valleys",
    image: "images/hero/hero_altit_fort.jpg"
  },
  {
    id: "g-hero-blossom",
    title: "Spring Apricot Blossoms Under High Snow Slopes",
    location: "Nagar & Hunza Valleys",
    category: "valleys",
    image: "images/hero/hero_blossom.jpg"
  },
  {
    id: "g-rush-lake",
    title: "Rush Alpine Lake (4,694m) & Spantik Reflection",
    location: "Hoper, Nagar Valley",
    category: "valleys",
    image: "images/gallery/valleys/rush_lake.png"
  },
  {
    id: "g-kutwal-lake",
    title: "Pristine Kutwal Alpine Lake & Pine Forest",
    location: "Haramosh Valley, Gilgit",
    category: "valleys",
    image: "images/districts/kutwal_lake.png"
  },
  {
    id: "g-fairy-meadows",
    title: "Fairy Meadows Alpine Pasture & Cabins",
    location: "Raikot, Diamer District",
    category: "valleys",
    image: "images/districts/fairy_meadows.png"
  },
  {
    id: "g-naltar-lake",
    title: "Naltar Emerald Alpine Lake (Bashkiri)",
    location: "Naltar Valley, Gilgit",
    category: "valleys",
    image: "images/districts/Naltar lake.JPG"
  },
  {
    id: "g-deosai-plains",
    title: "Deosai High-Altitude Plateau & Wildflowers",
    location: "Deosai National Park, Skardu/Astore",
    category: "valleys",
    image: "images/districts/Deosai.JPG"
  },
  {
    id: "g-skardu-valley",
    title: "Skardu Valley & Indus River Confluence",
    location: "Skardu, Baltistan",
    category: "valleys",
    image: "images/districts/Skardu.JPG"
  },
  {
    id: "g-hunza-panorama",
    title: "Hunza Valley & Ancient Fort Terraces",
    location: "Karimabad, Hunza",
    category: "valleys",
    image: "images/districts/HUnza.JPG"
  },
  {
    id: "g-hunza-central",
    title: "Central Hunza Valley Mountain Vista",
    location: "Hunza District",
    category: "valleys",
    image: "images/gallery/valleys/hunza_2.jpg"
  },
  {
    id: "g-apricot-blossom",
    title: "Spring Apricot Blossom in Historic Orchards",
    location: "Hunza & Nagar Valleys",
    category: "valleys",
    image: "images/gallery/valleys/apricot_blossom.jpg"
  },
  {
    id: "g-cherry-blossom",
    title: "Radiant Pink Cherry Blossom Canopy",
    location: "Karimabad & Altit, Hunza",
    category: "valleys",
    image: "images/gallery/valleys/cherry blossom.JPG"
  },
  {
    id: "g-nagar-terraces",
    title: "Verdant Nagar Valley Terraces & Snow Slopes",
    location: "Nagar District",
    category: "valleys",
    image: "images/districts/nagar.JPG"
  },
  {
    id: "g-patundas-meadow",
    title: "Patundas High Pasture Between Dual Glaciers",
    location: "Passu, Upper Hunza",
    category: "valleys",
    image: "images/gallery/valleys/patundas.png"
  },
  {
    id: "g-shimshal-pass",
    title: "Shimshal Pass & High Wakhi Summer Pastures",
    location: "Upper Hunza, Karakoram",
    category: "valleys",
    image: "images/gallery/valleys/shimshal_pass.png"
  },
  {
    id: "g-masor-rock",
    title: "Ancient Sacred Rock Carvings Heritage",
    location: "Historic Silk Route, Gilgit-Baltistan",
    category: "valleys",
    image: "images/gallery/valleys/masor_rock.jpg"
  },

  // --- Destination Weddings & Ceremonies ---
  {
    id: "g-attabad-wedding",
    title: "Attabad Lake Floating Pavilion Wedding",
    location: "Attabad Lake, Gojal Hunza",
    category: "weddings",
    image: "images/weddings/attabad.png"
  },

  // --- 4x4 Fleet, Safaris & Group Tours ---
  {
    id: "g-prado-fleet",
    title: "4x4 Mountain Safari Toyota Prado Fleet",
    location: "Karakoram Highway (KKH)",
    category: "vehicles",
    image: "images/gallery/vehicles/prado.png"
  },
  {
    id: "g-cycling-safari",
    title: "Karakoram Highway High-Altitude Cycling Safari",
    location: "Khunjerab Pass to Hunza",
    category: "vehicles",
    image: "images/gallery/vehicles/bike_tour.jpg"
  },
  {
    id: "g-tour-group",
    title: "Adventure Rakaposhi Guided Tour Group",
    location: "Scenic Mountain Pass, Gilgit-Baltistan",
    category: "vehicles",
    image: "images/gallery/vehicles/tour_pic.jpg"
  },
  {
    id: "g-deluxe-tour",
    title: "Deluxe Tour Group Excursion in Hunza",
    location: "Attabad Lake Overlook",
    category: "vehicles",
    image: "images/gallery/vehicles/tours_pic.jpg"
  },
  // --- Newly Uploaded Karakoram & Extended Valleys Imagery ---
  {
    id: "g-basecamp-expedition",
    title: "High Karakoram Alpine Expedition Base Camp",
    location: "Glacial Base Camp Moraine",
    category: "mountains",
    image: "images/gallery/mountains/baseCAMP.JPG"
  },
  {
    id: "g-cherry-blossom-hires",
    title: "Cherry Blossom Orchard in Full Himalayan Bloom",
    location: "Hunza Valley Orchards",
    category: "valleys",
    image: "images/gallery/valleys/cherry blossom.JPG"
  },
  {
    id: "g-skardu-panorama",
    title: "Baltistan Valley & Skardu Basin Panoramic Vista",
    location: "Skardu, Gilgit-Baltistan",
    category: "valleys",
    image: "images/gallery/valleys/skardu copy.JPG"
  },
  {
    id: "g-kutwal-lake-view",
    title: "Kutwal Lake Mirrored Waters Beneath Haramosh",
    location: "Haramosh Valley, Gilgit",
    category: "valleys",
    image: "images/gallery/valleys/kutwal lake.JPG"
  },
  {
    id: "g-chitral-fort",
    title: "Historic Shahi Fort & Tirich Mir View",
    location: "Chitral, Khyber Pakhtunkhwa",
    category: "valleys",
    image: "images/districts/chitral.jpg"
  },
  {
    id: "g-lake-saifulmalook",
    title: "Legendary Lake Saif-ul-Malook Alpine Waters",
    location: "Naran Valley, Kaghan",
    category: "valleys",
    image: "images/districts/naran.jpg"
  },
  {
    id: "g-siri-paye",
    title: "Siri Paye Alpine Cloud Meadows & Pine Slopes",
    location: "Shogran, Kaghan Valley",
    category: "valleys",
    image: "images/districts/kaghan.jpg"
  },
  {
    id: "g-kalash-festival",
    title: "Chilam Joshi Spring Festival Celebrations",
    location: "Bumburet, Kalash Valleys",
    category: "weddings",
    image: "images/districts/kalash.jpg"
  },
];

let activeGalleryList = galleryData;
let currentLightboxIndex = 0;

/**
 * Gilgit-Baltistan Offerings Database
 */


const offeringsData = [
  // ==================== 16 TREKS & HIKES ====================
  {
    id: "diran-chumarbakor-trek",
    title: "Diran Peak BC, Chumar Bakor & Summayar Bowl Peak (5,050m)",
    category: "treks",
    categoryLabel: "Alpine & Mining Trek",
    district: "Nagar",
    image: "images/gallery/mountains/diran_peak.png",
    badge: "Gemstone & Summit",
    duration: "5 Days",
    altitude: "5,050m Summit",
    season: "June - Oct",
    difficulty: "Strenuous",
    shortDesc: "Trek to the world's highest gemstone mine at Chumar Bakor (4,500m) in Summayar Valley Nagar, summit Summayar Bowl Peak (5,050m), and explore Diran Peak Base Camp (7,266m).",
    highlights: ["Chumar Bakor Gemstone Mine (4500m)", "Summayar Bowl Peak 5050m Summit", "360° View of Rakaposhi & Diran Peaks", "Bagrot & Hoper Glacier Confluence"],
    itinerary: [
      { day: "Day 1", detail: "Karimabad to Summayar Valley off-road jeep drive (1.5 hrs), foot trek (3-4 hrs) to Chumarbakor mine camp." },
      { day: "Day 2", detail: "Explore world's highest gemstone mining site (4,430m) - Aquamarine, Fluorite & Quartz mines." },
      { day: "Day 3", detail: "Summit push to Summayar Bowl Peak (5,050m) for 360° views of Golden Peak, Lady Finger, Diran & Rakaposhi." },
      { day: "Day 4", detail: "Explore Diran Peak Base Camp, Bagrot glacier landscape & local gemstone trading." },
      { day: "Day 5", detail: "Descend Summayar Valley and return transfer to Karimabad, Hunza." }
    ],
    includes: ["4x4 Jeep Off-road Charters", "Licensed Mountain Guide", "Full High Camp Setup", "Mining Area Escort Permits"]
  },
  {
    id: "fairy-meadows-nanga-parbat",
    title: "Fairy Meadows & Nanga Parbat Base Camp Trek",
    category: "treks",
    categoryLabel: "Alpine Pasture Trek",
    district: "Diamer",
    image: "images/districts/fairy_meadows.png",
    badge: "Iconic Destination",
    duration: "4 - 5 Days",
    altitude: "3,300m - 4,000m",
    season: "May - Nov",
    difficulty: "Moderate",
    shortDesc: "Trek through pine forests to the legendary lush pastures directly underneath the massive Raikot Face of Nanga Parbat (8,126m).",
    highlights: ["Tato Off-road Jeep Track", "Fairy Meadows Alpine Cabins", "Beyal Camp Viewpoint", "Raikot Glacier & BC Wall"],
    itinerary: [
      { day: "Day 1", detail: "Drive Raikot Bridge -> 4x4 Jeep ride to Tato -> Hike up to Fairy Meadows huts." },
      { day: "Day 2", detail: "Day walk to Beyal Camp & Nanga Parbat view point." },
      { day: "Day 3", detail: "Full day hike to Nanga Parbat Base Camp (Raikot Face 4,000m)." },
      { day: "Day 4", detail: "Relax in Fairy Meadows pasture & return hike to Tato -> Raikot Bridge." }
    ],
    includes: ["Jeep Transport", "Log Cottage Accommodation", "Mountain Guide", "Meals Included"]
  },
  {
    id: "patundas-trek",
    title: "Patundas Pasture & Passu Glacier Trek",
    category: "treks",
    categoryLabel: "Ridge Meadow Trek",
    district: "Hunza",
    image: "images/gallery/valleys/patundas.png",
    badge: "Upper Hunza Gem",
    duration: "5 - 6 Days",
    altitude: "4,575m Pasture",
    season: "May - Oct",
    difficulty: "Moderate - Strenuous",
    shortDesc: "A high ridge pasture walk set between the Passu and Batura glaciers in Upper Hunza, delivering spectacular views of Shispar (7,611m) and Batura peaks.",
    highlights: ["Gulmit & Borith Lake", "Passu Glacier Traverse", "Patundas Plateau 4575m", "Passu Cones Panorama"],
    itinerary: [
      { day: "Day 1", detail: "Gulmit to Borith Lake & trek to Lazhdar pasture (3,400m)." },
      { day: "Day 2", detail: "Cross Passu Glacier & climb to Patundas Pasture (4,575m)." },
      { day: "Day 3", detail: "Rest and panorama viewing day at Patundas Ridge Camp." },
      { day: "Day 4", detail: "Trek back down to Borith Lake & return to Gulmit." }
    ],
    includes: ["Local Wakhi Guide", "Trekking Camp Setup", "Porter Services", "All Meals"]
  },
  {
    id: "rakaposhi-bc",
    title: "Rakaposhi Base Camp & Tagafari Trek",
    category: "treks",
    categoryLabel: "Signature Alpine Trek",
    district: "Nagar",
    image: "images/gallery/mountains/rakaposhi_peak.jpg",
    badge: "Signature Trek",
    duration: "4 - 5 Days",
    altitude: "3,500m",
    season: "May - Oct",
    difficulty: "Moderate",
    shortDesc: "Walk from Minapin village up to Tagafari meadow camp beneath the sheer 6,000m vertical face of Rakaposhi (7,788m).",
    highlights: ["Minapin Village", "Hapakunt Pastures", "Tagafari Ridge View", "Diran Peak Icefall View"],
    itinerary: [
      { day: "Day 1", detail: "Transfer to Minapin Village in Nagar Valley." },
      { day: "Day 2", detail: "Trek Minapin to Hapakunt grassy meadow (2,800m)." },
      { day: "Day 3", detail: "Ascend steep ridge to Tagafari Rakaposhi Base Camp (3,500m)." },
      { day: "Day 4", detail: "Day walk across Minapin glacier or descend to Minapin." }
    ],
    includes: ["Licensed Guide", "Camp Chef & Porters", "Tents & Gear", "Permits"]
  },
  {
    id: "rush-lake-peak",
    title: "Rush Lake & Rush Peak (5,098m) Trek",
    category: "treks",
    categoryLabel: "Alpine Lake & Peak",
    district: "Nagar",
    image: "images/gallery/valleys/rush_lake.png",
    badge: "High Alpine Lake",
    duration: "7 - 8 Days",
    altitude: "4,694m Lake / 5,098m Summit",
    season: "June - Sept",
    difficulty: "Strenuous",
    shortDesc: "Trek to one of the highest alpine lakes in the world (4,694m) in Hoper Valley Nagar and summit Rush Peak (5,098m) for views of K2 and Spantik.",
    highlights: ["Hoper Glacier Moraine", "Barpu Glacier Crossing", "Rush Alpine Lake Camp", "8000m Peaks Viewpoint"],
    itinerary: [
      { day: "Day 1", detail: "Drive to Hoper Valley Nagar -> Trek across Hoper glacier to Barir Chakor (3,200m)." },
      { day: "Day 2", detail: "Trek to Chidin Harai (4,300m)." },
      { day: "Day 3", detail: "Reach Rush Lake (4,694m) & summit push to Rush Peak (5,098m)." },
      { day: "Day 4", detail: "Descend via Phai Pheri to Hapakun and Hoper Valley." }
    ],
    includes: ["Mountain Guide", "Porters & Kitchen Crew", "Tents & Sleeping Pads", "Permits"]
  },
  {
    id: "khosar-gang-summit",
    title: "Khosar Gang Peak (6,400m) Summit Trek",
    category: "treks",
    categoryLabel: "6000m Summit Peak",
    district: "Shigar",
    image: "images/districts/khosar Gang.png",
    badge: "6400m Snow Peak",
    duration: "14 Days",
    altitude: "6,400m Summit",
    season: "June - Aug",
    difficulty: "Strenuous Snow Climb",
    shortDesc: "Located in Shigar Valley Skardu, Khosar Gang is a classic 6,400m snow peak climbing objective offering panoramic views of Karakoram peaks.",
    highlights: ["Shigar Valley Base", "Continuous Snow Slope Climb", "Kharpocho & Mango Gusor Views"],
    itinerary: [
      { day: "Day 1-4", detail: "Skardu to Shigar Valley -> Trek to Base Camp (4,000m)." },
      { day: "Day 5-9", detail: "Acclimatization & High Camp setup at 5,200m." },
      { day: "Day 10", detail: "Summit Push for Khosar Gang Peak (6,400m)." },
      { day: "Day 11-14", detail: "Descend to Shigar & transfer back to Skardu." }
    ],
    includes: ["Climbing Guide", "Fixed Ropes & High Camp Tents", "High Altitude Kitchen Crew"]
  },
  {
    id: "nanga-parbat-bc-trek",
    title: "Nanga Parbat Base Camp Trek (Raikot Face)",
    category: "treks",
    categoryLabel: "Himalayan Base Camp",
    district: "Diamer",
    image: "images/gallery/mountains/nanga_parbat.png",
    badge: "Himalayan Landmark",
    duration: "5 Days",
    altitude: "4,000m Base Camp",
    season: "June - Oct",
    difficulty: "Moderate",
    shortDesc: "Walk across alpine flower fields and moraine ridges directly to the base of the massive 8,126m Raikot Wall of Nanga Parbat.",
    highlights: ["Fairy Meadows Pastures", "Beyal Wilderness Camp", "Raikot Glacier Wall", "Himalayan Sunset View"],
    itinerary: [
      { day: "Day 1", detail: "Raikot Bridge -> 4x4 Jeep to Tato -> Hike to Fairy Meadows." },
      { day: "Day 2", detail: "Day trek to Beyal Camp & Nanga Parbat view point." },
      { day: "Day 3", detail: "Excursion hike to Nanga Parbat Base Camp (4,000m) & return to Fairy Meadows." },
      { day: "Day 4", detail: "Free day for leisure, photography & local walking." },
      { day: "Day 5", detail: "Trek back down to Tato village -> Jeep to Raikot Bridge." }
    ],
    includes: ["Jeep Shuttle", "Wooden Cabin / Tent Stay", "Escort Guide", "All Meals"]
  },
  {
    id: "snow-lake-hispar-la",
    title: "Snow Lake & Hispar La Pass Trek (Biafo Traverse)",
    category: "treks",
    categoryLabel: "Epic Glacier Traverse",
    district: "Skardu",
    image: "images/gallery/mountains/snow_lake.png",
    badge: "Ultimate Traverse",
    duration: "18 - 20 Days",
    altitude: "5,151m Pass",
    season: "July - August",
    difficulty: "Extreme Glacier Traverse",
    shortDesc: "Traverse 100km of continuous glacier from Askole over the vast 1.5km thick Snow Lake ice basin and cross Hispar La (5,151m) to Hunza.",
    highlights: ["Biafo Glacier Highway", "Snow Lake Basin (Lukpe Lawo)", "Hispar La Pass 5,151m", "Latok & Ogre Towers"],
    itinerary: [
      { day: "Day 1-4", detail: "Skardu -> Drive Askole -> Trek Namla & Shikonfon camps along Biafo Glacier." },
      { day: "Day 5-10", detail: "Trek Baintha, Marfogoro, Karpogoro to Snow Lake Base Camp (4,770m)." },
      { day: "Day 11-13", detail: "Cross Hispar La Pass (5,151m) down to Khani Bassa & Jutmal." },
      { day: "Day 14-18", detail: "Trek Red Star, Bitanmal, Hispar Village -> Drive Karimabad Hunza." }
    ],
    includes: ["High Altitude Mountaineering Guide", "Porter Allocation & Satellite Comm", "Base Camp Domes & Heated Tents", "NOC & Rescue Insurance"]
  },
  {
    id: "biafo-glacier-trek",
    title: "Biafo Glacier & Baintha Oasis Trek",
    category: "treks",
    categoryLabel: "Glacier Highway Trek",
    district: "Skardu",
    image: "images/trophy/expedition.jpg",
    badge: "Glacier Highway",
    duration: "10 - 12 Days",
    altitude: "4,400m",
    season: "June - Sept",
    difficulty: "Strenuous Glacier",
    shortDesc: "Explore the world's 3rd longest glacier outside polar regions, trekking from Askole past dramatic granite needles to Baintha green ablation valley.",
    highlights: ["Askole Village Starting Point", "Latok Peaks Vista", "Baintha Green Pasture Camp", "Wilderness Glacier Lakes"],
    itinerary: [
      { day: "Day 1-2", detail: "Islamabad flight/drive to Skardu -> Jeep to Askole village." },
      { day: "Day 3-6", detail: "Trek Askole to Namla, Shikonfon & Baintha (3,990m)." },
      { day: "Day 7", detail: "Rest and local exploration around Baintha green valley." },
      { day: "Day 8-10", detail: "Trek back via Korofung to Askole & jeep drive to Skardu." }
    ],
    includes: ["Glacier Guide", "Full Camping Outfit & Chef", "Porter Allocation", "Permits"]
  },
  {
    id: "shimshal-pass-trek",
    title: "Shimshal Pass & Shuwert Meadows Trek",
    category: "treks",
    categoryLabel: "Remote Wakhi Trek",
    district: "Hunza",
    image: "images/gallery/valleys/shimshal_pass.png",
    badge: "Wakhi High Pastures",
    duration: "10 - 12 Days",
    altitude: "4,735m Pass",
    season: "June - Sept",
    difficulty: "Strenuous Remote",
    shortDesc: "Journey through the dramatic Shimshal Gorge to remote Wakhi high-altitude summer pastures at Shimshal Pass (4,735m) and Shuwert twin lakes.",
    highlights: ["Shimshal Gorge Jeep Safari", "Furzin & Arbab Purien Camps", "Shimshal Pass Twin Lakes", "Minglik Sar Views"],
    itinerary: [
      { day: "Day 1-2", detail: "Drive Passu -> Thrilling Jeep ride through Shimshal Gorge to Shimshal Village." },
      { day: "Day 3-5", detail: "Trek Shimshal to Furzin, Arbab Purien, and Shimshal Pass (4,735m)." },
      { day: "Day 6-7", detail: "Explore Shuwert pasture lakes & local yak herding culture." },
      { day: "Day 8-10", detail: "Return trek to Shimshal Village -> Drive back to Hunza." }
    ],
    includes: ["Shimshal Native Guide", "Jeep Charters", "Porters & Kitchen Crew", "All Meals"]
  },
  {
    id: "ultar-sar-bc",
    title: "Ultar Sar Base Camp & Lady Finger Spire Trek",
    category: "treks",
    categoryLabel: "Hunza Valley Hike",
    district: "Hunza",
    image: "images/gallery/mountains/ultar_sar.png",
    badge: "Karimabad Classic",
    duration: "3 - 4 Days",
    altitude: "3,800m Base Camp",
    season: "May - Oct",
    difficulty: "Moderate",
    shortDesc: "A steep, rewarding trek straight up the narrow canyon behind Karimabad to Ultar Meadows beneath Ultar Sar (7,388m) and Lady Finger Needle (6,000m).",
    highlights: ["Ultar Canyon Gorge", "Lady Finger Spire View", "Ultar Glacier Moraine", "Karimabad Panorama View"],
    itinerary: [
      { day: "Day 1", detail: "Karimabad -> Hike up narrow Ultar canyon water channel." },
      { day: "Day 2", detail: "Ascend to Ultar Meadows Base Camp (3,800m)." },
      { day: "Day 3", detail: "Explore glacier moraine beneath Lady Finger spire & walk back down to Karimabad." }
    ],
    includes: ["Local Hunza Guide", "Day Pack Escort", "Meals & Camping Gear"]
  },
  {
    id: "batura-glacier-trek",
    title: "Batura Glacier & Yashpukht Pasture Trek",
    category: "treks",
    categoryLabel: "Upper Hunza Glacier",
    district: "Hunza",
    image: "images/gallery/mountains/passu .png",
    badge: "57km Batura Glacier",
    duration: "8 - 10 Days",
    altitude: "4,200m",
    season: "June - Sept",
    difficulty: "Moderate - Strenuous",
    shortDesc: "Trek along the 57km long Batura Glacier in Upper Hunza past summer pastures of Yashpukht and Yashpirt, surrounded by 7,000m white ice walls.",
    highlights: ["Passu Village Base", "Yashpukht & Yashpirt Pastures", "Batura Wall 7,785m View", "Passu Peak View"],
    itinerary: [
      { day: "Day 1", detail: "Drive to Passu -> Trek along lateral moraine to Yunzben pasture." },
      { day: "Day 2-4", detail: "Trek through Yashpukht, Yashpirt and Gutsilm camps." },
      { day: "Day 5-6", detail: "Day walk towards Batura Wall & return trek back to Passu." }
    ],
    includes: ["High Altitude Guide", "Trekking Crew & Porters", "Tents & Meals"]
  },
  {
    id: "masherbrum-bc",
    title: "Masherbrum Base Camp Trek (K1)",
    category: "treks",
    categoryLabel: "Ghanche Alpine Trek",
    district: "Ghanche",
    image: "images/districts/LAILA peak.JPG",
    badge: "Masherbrum K1 Wall",
    duration: "7 - 9 Days",
    altitude: "4,280m Base Camp",
    season: "June - Sept",
    difficulty: "Strenuous",
    shortDesc: "Trek up the pristine Hushe Valley in Ghanche district directly to the base camp of Masherbrum (7,821m / K1), featuring dramatic granite & ice walls.",
    highlights: ["Khaplu Fort Stopover", "Hushe Village Starting Point", "Masherbrum South Face Wall", "Hushe River Valley"],
    itinerary: [
      { day: "Day 1-2", detail: "Skardu -> Khaplu -> Drive to Hushe Village (3,050m)." },
      { day: "Day 3-4", detail: "Trek from Hushe up the valley to Masherbrum Base Camp (4,280m)." },
      { day: "Day 5-7", detail: "Explore South Masherbrum glacier & return trek to Hushe -> Skardu." }
    ],
    includes: ["Ghanche Native Guide", "Jeep Charters", "Kitchen & Camp Crew", "Permits"]
  },
  {
    id: "concordia-k2-bc",
    title: "Concordia & K2 Base Camp Trek",
    category: "treks",
    categoryLabel: "World Premier Glacier Trek",
    district: "Skardu",
    image: "images/gallery/mountains/K2.png",
    badge: "Throne Room of Gods",
    duration: "14 - 18 Days",
    altitude: "4,650m - 5,135m",
    season: "June - August",
    difficulty: "Challenging Glacier",
    shortDesc: "Trek along giant Baltoro Glacier to Concordia (Throne Room of the Mountain Gods) and visit K2 Base Camp (5,135m) under the gaze of K2, Broad Peak & Trango Towers.",
    highlights: ["Baltoro Glacier Moraine", "Concordia Amphitheatre", "K2 Base Camp & Gilkey Memorial", "Trango Towers Vista"],
    itinerary: [
      { day: "Day 1-4", detail: "Skardu arrival -> Jeep to Askole -> Trek Jhola, Paiju & Urdukas." },
      { day: "Day 5-8", detail: "Trek Goro II -> Reach Concordia (4,650m) surrounded by 8000m peaks." },
      { day: "Day 9", detail: "Excursion hike to K2 Base Camp (5,135m) & Broad Peak BC." },
      { day: "Day 10-14", detail: "Return trek via Baltoro Glacier to Askole -> Drive Skardu." }
    ],
    includes: ["Mountaineering Guide", "25kg Porter Allowance", "Heated Mess Tent & Kitchen Crew", "Rescue Coordination"]
  },
  {
    id: "haramoshi-kutwal-lake",
    title: "Haramoshi Kutwal Lake & Haramosh BC Trek",
    category: "treks",
    categoryLabel: "Gilgit Valley Alpine Trek",
    district: "Gilgit",
    image: "images/districts/kutwal_lake.png",
    badge: "Hidden Lake Gem",
    duration: "5 - 7 Days",
    altitude: "3,260m Lake",
    season: "May - Oct",
    difficulty: "Moderate",
    shortDesc: "Explore the serene, hidden Kutwal Alpine Lake in Haramosh Valley, surrounded by dense pine forests, summer settlements, and Haramosh Peak (7,409m).",
    highlights: ["Sassi & Dassu Jeep Route", "Isskere Pasture Camp", "Kutwal Lake Reflection", "Haramosh La Base View"],
    itinerary: [
      { day: "Day 1", detail: "Gilgit -> Drive Sassi -> 4x4 Jeep off-road to Dassu -> Trek to Isskere camp." },
      { day: "Day 2", detail: "Trek Isskere to Kutwal Lake (3,260m) and set up lakeside camp." },
      { day: "Day 3", detail: "Day hike towards Haramosh La Base Camp & summer pastures." },
      { day: "Day 4-5", detail: "Trek back down to Dassu -> Drive Sassi and Gilgit." }
    ],
    includes: ["Gilgit Valley Guide", "Off-road Jeeps", "Trekking Crew & Tents", "All Meals"]
  },
  {
    id: "hoper-glacier-trek",
    title: "Hoper Glacier & Diran Viewpoint Walk",
    category: "treks",
    categoryLabel: "Nagar Short Trek",
    district: "Nagar",
    image: "images/districts/nagar.JPG",
    badge: "Accessible Glacier",
    duration: "2 - 3 Days",
    altitude: "2,800m",
    season: "April - Nov",
    difficulty: "Easy - Moderate",
    shortDesc: "A short, accessible trek across the black moraine of Hoper Glacier in Nagar Valley, featuring breathtaking views of Spantik (7,027m) and Diran Peak.",
    highlights: ["Hoper Valley Terraced Fields", "Hoper Black Glacier Walk", "Spantik & Diran Viewpoints"],
    itinerary: [
      { day: "Day 1", detail: "Karimabad / Gilgit to Hoper Valley Nagar." },
      { day: "Day 2", detail: "Guided walk across Hoper glacier moraine to viewpoint & back." },
      { day: "Day 3", detail: "Return transfer to Karimabad or Gilgit airport." }
    ],
    includes: ["Local Guide", "Day Transportation", "Meals & Refreshments"]
  },

  // ==================== FEATURED 10-DAY TOUR ====================
  {
    id: "skardu-astore-10day-tour",
    title: "10 Days VIP By-Air / Land Skardu, Astore & Hunza Valley Safari",
    category: "mountain-escape",
    categoryLabel: "VIP Grand Tour",
    district: "Skardu",
    image: "images/districts/Skardu.JPG",
    badge: "10-Day VIP Explorer",
    duration: "10 Days / 9 Nights",
    altitude: "4,170m Pass / 4,733m Border",
    season: "May - Oct",
    difficulty: "Comfortable Travel",
    shortDesc: "The ultimate 10-day VIP luxury expedition covering Skardu, Deosai Plains, Astore Valley, Khaplu, Hunza Karimabad, Attabad Lake, and Pak-China Khunjerab Border.",
    highlights: [
      "Skardu City & Kharpocho Fort",
      "Shangrila Resort & Upper Kachura Lake",
      "Deosai Plains, Sheosar Lake & Chilim",
      "Minimarg Valley, Domel & Rainbow Lake",
      "Khaplu Fort & Sailing Fish Farm",
      "Hunza Karimabad, Baltit & Altit Forts",
      "Duikar Eagle's Nest Sunset Viewpoint",
      "Attabad Lake & Passu Cones",
      "Khunjerab Pass (Highest Road Border 4,733m)",
      "Hoper Glacier Nagar & Naran Valley"
    ],
    itinerary: [
      { day: "Day 1", detail: "Pickup Islamabad -> Drive Balakot/Mansehra -> Check-in Naran hotel -> Evening walk Naran Bazaar." },
      { day: "Day 2", detail: "Early drive Babusar Pass (4,170m) -> Stop Lulusar Lake -> Indus River drive -> Check-in Shangrila Resort Hotel Skardu." },
      { day: "Day 3", detail: "Upper Kachura Lake (7:30am) -> Deosai Plateau -> Sadpara Lake -> Picnic lunch Deosai -> Skardu Bazaar & hike Kharpocho Fort (40min)." },
      { day: "Day 4", detail: "Ghanche District -> Sailing Village & fish farm -> Khaplu Fort & Chaqchan Mosque -> Shigar Fort -> Shangrila Resort Skardu." },
      { day: "Day 5", detail: "Skardu to Karimabad, Hunza -> Alam Bridge & Danyor -> Rakaposhi Viewpoint -> Rest at Baltit Inn Serena Hotel." },
      { day: "Day 6", detail: "Baltit Fort (900+ yrs) -> Altit Fort (700+ yrs) & gardens -> Duikar Eagle's Nest sunset over white peaks -> Baltit Inn Serena." },
      { day: "Day 7", detail: "Khunjerab Pass Pak-China Border (4,733m) -> Attabad Lake -> Passu Cones & Batura view -> Sost Chinese goods market -> Baltit Inn Serena." },
      { day: "Day 8", detail: "Nagar District -> Hoper Glacier viewpoint -> Relaxation & Hunza De Café (famous walnut cake) -> Baltit Inn Serena." },
      { day: "Day 9", detail: "Morning drive Karimabad to Naran -> Rakaposhi viewpoint -> Ancient Silk Route view -> Shopping Naran -> Night stay Naran." },
      { day: "Day 10", detail: "Departure from Naran to Islamabad -> Arrival and drop off in Islamabad -> Dream your journey! 😉" }
    ],
    includes: [
      "VIP Hotel Accommodation (Shangrila Resort Skardu & Baltit Inn Serena Hotels)",
      "Luxury Transport (Toyota TZ Prado 4x4) with Chauffeur",
      "Dedicated Licensed Local Guide",
      "All Highway Tolls, Taxes & National Park Permits"
    ]
  },

  // ==================== MOUNTAIN ESCAPE TOURS ====================
  {
    id: "northern-explorer",
    title: "Northern Explorer (8 Days Skardu & Hunza)",
    category: "mountain-escape",
    categoryLabel: "Mountain Escape",
    district: "Skardu",
    image: "images/districts/Deosai.JPG",
    badge: "Popular Explorer",
    duration: "8 Days",
    altitude: "4,000m Deosai",
    season: "May - Oct",
    difficulty: "Comfortable",
    shortDesc: "Discover Northern Pakistan's most spectacular valleys: Skardu, Deosai National Park, Shigar Desert, and Hunza Karimabad in one comprehensive journey.",
    highlights: ["Shangrila & Kachura Lakes", "Deosai Plains & Sheosar Lake", "Attabad Lake Boat Ride", "Passu Cones View"],
    itinerary: [
      { day: "Day 1-2", detail: "Islamabad to Skardu flight/drive -> Kachura & Shangrila Lakes." },
      { day: "Day 3-4", detail: "Deosai Plains excursion & Shigar Cold Desert." },
      { day: "Day 5-6", detail: "Drive to Hunza Karimabad -> Baltit Fort & Altit Gardens." },
      { day: "Day 7-8", detail: "Attabad Lake, Passu Cones & return flight/drive to Islamabad." }
    ],
    includes: ["Private Vehicle", "3-Star & 4-Star Hotels", "Guide", "Breakfasts"]
  },
  {
    id: "hidden-valleys-tour",
    title: "Hidden Valleys Tour (7 Days Ghizer & Phander)",
    category: "mountain-escape",
    categoryLabel: "Mountain Escape",
    district: "Ghizer",
    image: "images/districts/Naltar lake.JPG",
    badge: "Off the Beaten Track",
    duration: "7 Days",
    altitude: "3,700m Shandur",
    season: "May - Oct",
    difficulty: "Relaxing",
    shortDesc: "Explore the serene, turquoise river valleys of Ghizer, Phander Lake trout fishing waters, Gupis, and Shandur Pass - the Roof of the World.",
    highlights: ["Phander Lake Turquoise Waters", "Shandur Polo Ground 3700m", "Khalti Lake", "Kargah Buddha Rock"],
    itinerary: [
      { day: "Day 1-2", detail: "Gilgit arrival -> Drive to Gahkuch & Gupis Valley." },
      { day: "Day 3-4", detail: "Phander Valley & Lake stay -> Trout fishing & village walk." },
      { day: "Day 5-6", detail: "Excursion to Shandur Pass & Langar meadows." },
      { day: "Day 7", detail: "Return drive to Gilgit Airport." }
    ],
    includes: ["Transport", "Lakeside Hotels", "Fishing Gear", "Local Escort"]
  },
  {
    id: "ultimate-adventure-trip",
    title: "Ultimate Adventure Trip (10 Days KKH & Fairy Meadows)",
    category: "mountain-escape",
    categoryLabel: "Mountain Escape",
    district: "Diamer",
    image: "images/districts/fairy_meadows.png",
    badge: "Grand Overland",
    duration: "10 Days",
    altitude: "4,733m Khunjerab",
    season: "June - Oct",
    difficulty: "Moderate Adventure",
    shortDesc: "An action-packed overland expedition along the Karakoram Highway, combining Fairy Meadows Nanga Parbat trek with Hunza and Khunjerab Pass.",
    highlights: ["Fairy Meadows & Nanga Parbat BC", "Attabad Lake & Friendship Tunnels", "Khunjerab Border 4733m", "Duikar Sunset"],
    itinerary: [
      { day: "Day 1-3", detail: "Islamabad -> KKH drive -> Raikot -> Fairy Meadows & Nanga Parbat BC." },
      { day: "Day 4-6", detail: "Trek down -> Drive to Karimabad Hunza -> Forts & Eagle's Nest." },
      { day: "Day 7-8", detail: "Attabad Lake, Passu Cones & Khunjerab Pass border." },
      { day: "Day 9-10", detail: "Drive back via Babusar Pass & Naran to Islamabad." }
    ],
    includes: ["4x4 Jeeps", "Cozy Huts & Hotels", "Guide", "All Transport"]
  },
  {
    id: "peaks-lakes-journey",
    title: "Peaks & Lakes Journey (6 Days Hunza & Passu)",
    category: "mountain-escape",
    categoryLabel: "Mountain Escape",
    district: "Hunza",
    image: "images/gallery/mountains/passu .png",
    badge: "Scenic Highlights",
    duration: "6 Days",
    altitude: "2,800m",
    season: "April - Nov",
    difficulty: "Easy - Moderate",
    shortDesc: "Immerse yourself in the jewel of Karakoram: turquoise Attabad Lake, cathedral peaks of Passu Cones, Borith Lake, and 900-year-old Baltit Fort.",
    highlights: ["Attabad Lake Speedboat", "Hussaini Suspension Bridge", "Passu Glacier View", "Duikar Panorama"],
    itinerary: [
      { day: "Day 1-2", detail: "Gilgit Airport pickup -> Drive Hunza Karimabad -> Baltit & Altit Forts." },
      { day: "Day 3-4", detail: "Attabad Lake, Passu Cones & Hussaini Bridge walk." },
      { day: "Day 5-6", detail: "Hoper Glacier Nagar excursion -> Return flight Gilgit." }
    ],
    includes: ["Chauffeur Car", "Boutique Hotels", "Entry Tickets", "Breakfasts"]
  },
  {
    id: "glacier-discovery-tour",
    title: "Glacier Discovery Tour (7 Days Batura & Hoper)",
    category: "mountain-escape",
    categoryLabel: "Mountain Escape",
    district: "Nagar",
    image: "images/gallery/valleys/diran.JPG",
    badge: "Glacier Explorer",
    duration: "7 Days",
    altitude: "3,500m",
    season: "May - Oct",
    difficulty: "Moderate",
    shortDesc: "Walk on legendary Karakoram ice: explore Hoper Black Glacier in Nagar Valley, Minapin Glacier at Rakaposhi Base, and Passu White Glacier.",
    highlights: ["Hoper Glacier Moraine", "Minapin Tagafari View", "Passu Glacier Walk", "Rakaposhi Viewpoint"],
    itinerary: [
      { day: "Day 1-2", detail: "Gilgit -> Minapin Nagar -> Day walk to Tagafari Rakaposhi view." },
      { day: "Day 3-4", detail: "Hoper Glacier Nagar excursion -> Karimabad Hunza." },
      { day: "Day 5-7", detail: "Passu & Batura glacier viewpoints -> Return transfer." }
    ],
    includes: ["Glacier Guide", "4x4 Vehicles", "Hotels", "Permits"]
  },

  // ==================== LUXURY & PREMIUM ====================
  {
    id: "royal-north-escape",
    title: "Royal North Escape (7 Days Serena Hotels & Prado)",
    category: "luxury-premium",
    categoryLabel: "Luxury & Premium",
    district: "Hunza",
    image: "images/districts/HUnza.JPG",
    badge: "5-Star Luxury",
    duration: "7 Days",
    altitude: "2,500m",
    season: "April - Oct",
    difficulty: "Luxury Comfort",
    shortDesc: "Stay in premier Serena Heritage Hotels (Baltit Inn & Gilgit Serena) with private chauffeur-driven Toyota Prado V8 and bespoke fine dining.",
    highlights: ["Serena Hotel Accommodations", "Private Prado V8 Transport", "Royal Altit Fort Garden Dinner", "Attabad Luxury Jetboat"],
    itinerary: [
      { day: "Day 1-3", detail: "Gilgit Airport pickup in Prado V8 -> Karimabad Serena Baltit Inn -> Private Fort Tours." },
      { day: "Day 4-5", detail: "Attabad Lake VIP Chalet -> Khunjerab Border private safari." },
      { day: "Day 6-7", detail: "Gilgit Serena Hotel -> Farewell gourmet banquet -> Airport transfer." }
    ],
    includes: ["Serena Hotels Stay", "Toyota Prado V8 & Fuel", "Personal Butler/Guide", "All Fine Meals"]
  },
  {
    id: "luxury-pakistan-tour",
    title: "Luxury Pakistan Tour (10 Days Heritage Fort Palaces)",
    category: "luxury-premium",
    categoryLabel: "Luxury & Premium",
    district: "Skardu",
    image: "images/weddings/attabad.png",
    badge: "Heritage Palaces",
    duration: "10 Days",
    altitude: "2,400m",
    season: "May - Oct",
    difficulty: "Luxury Comfort",
    shortDesc: "Experience the royal heritage of Gilgit-Baltistan: stay inside restored 17th-century Shigar Fort Residence, Khaplu Palace, and Shangrila Resort.",
    highlights: ["Shigar Fort Fong-Khar Palace", "Khaplu Palace Residence", "Shangrila Lake Executive Villa", "Attabad Turquoise Pavilion"],
    itinerary: [
      { day: "Day 1-3", detail: "Flight to Skardu -> Shangrila Executive Villa -> Shigar Fort Palace stay." },
      { day: "Day 4-6", detail: "Khaplu Palace stay -> Chaqchan & Sailing village Private Tour." },
      { day: "Day 7-10", detail: "Hunza Serena Baltit Inn -> Attabad Lake Yacht cruise -> Flight return." }
    ],
    includes: ["Aga Khan Cultural Heritage Stays", "Executive 4x4 Fleet", "Private Historian Guide", "Full Board Gourmet"]
  },
  {
    id: "elite-mountain-retreat",
    title: "Elite Mountain Retreat (5 Days VIP Helicopter/Air)",
    category: "luxury-premium",
    categoryLabel: "Luxury & Premium",
    district: "Skardu",
    image: "images/districts/Skardu.JPG",
    badge: "Elite VIP",
    duration: "5 Days",
    altitude: "2,300m",
    season: "Year Round",
    difficulty: "Ultimate Comfort",
    shortDesc: "Designed for high-net-worth travelers seeking privacy, quick air transfers, luxury lakeside chalets, and customized mountain retreats.",
    highlights: ["Direct By-Air Skardu Arrival", "Shangrila Presidential Suite", "Deosai Private Helicopter Safari", "Private Chef"],
    itinerary: [
      { day: "Day 1-2", detail: "By-air arrival Skardu -> Presidential Suite Shangrila -> Private Katpana Sand Dune Dinner." },
      { day: "Day 3-5", detail: "Deosai Plateau private safari & luxury chalet relaxation -> Return flight." }
    ],
    includes: ["VIP Suites", "Luxury Land Cruiser", "Private Chef & Butler", "Airfare Coordination"]
  },
  {
    id: "premium-northern-journey",
    title: "Premium Northern Journey (8 Days Private Chauffeur)",
    category: "luxury-premium",
    categoryLabel: "Luxury & Premium",
    district: "Hunza",
    image: "images/gallery/vehicles/prado.png",
    badge: "Bespoke Journey",
    duration: "8 Days",
    altitude: "2,800m",
    season: "April - Nov",
    difficulty: "Luxury Comfort",
    shortDesc: "A smooth, tailored journey across Hunza and Skardu with dedicated concierge, luxury 4x4 transport, and curated cultural experiences.",
    highlights: ["Private Prado Chauffeur", "Hunza Apricot Blossom/Autumn Gold", "Eagle's Nest Champagne Sunset", "Attabad Boating"],
    itinerary: [
      { day: "Day 1-4", detail: "Gilgit pickup -> Hunza Valley private resort -> Forts & Silk Route tour." },
      { day: "Day 5-8", detail: "Attabad Lake chalet -> Skardu Shangrila Resort -> Flight departure." }
    ],
    includes: ["Boutique Resorts", "Luxury 4x4 Prado", "Concierge Guide", "Gourmet Meals"]
  },
  {
    id: "signature-travel-experience",
    title: "Signature Travel Experience (9 Days Yacht & Heritage)",
    category: "luxury-premium",
    categoryLabel: "Luxury & Premium",
    district: "Hunza",
    image: "images/weddings/attabad.png",
    badge: "Signature Edition",
    duration: "9 Days",
    altitude: "2,500m",
    season: "May - Oct",
    difficulty: "Luxury Comfort",
    shortDesc: "Our flagship luxury offering featuring private lake yacht charters on Attabad, high-altitude dining, royal fort access, and photography escort.",
    highlights: ["Attabad Lake Private Yacht Charter", "Shigar Fort Palace", "Duikar Eagle's Nest Sunset VIP Staging", "Karakoram Aerial Views"],
    itinerary: [
      { day: "Day 1-3", detail: "Skardu Shigar Fort Palace stay -> Cold Desert private sunset setup." },
      { day: "Day 4-6", detail: "Hunza Serena Baltit Inn -> Attabad Lake private yacht charter & gala." },
      { day: "Day 7-9", detail: "Khunjerab National Park VIP safari -> Gilgit departure flight." }
    ],
    includes: ["Palace & Serena Stays", "Private Yacht Charter", "Full VIP Transport", "Concierge"]
  },

  // ==================== FAMILY & RELAXING ====================
  {
    id: "family-fun-getaway",
    title: "Family Fun Getaway (6 Days Skardu & Shigar)",
    category: "family-relaxing",
    categoryLabel: "Family & Relaxing",
    district: "Skardu",
    image: "images/gallery/vehicles/tours_pic.jpg",
    badge: "Family Favorite",
    duration: "6 Days",
    altitude: "2,228m",
    season: "May - Oct",
    difficulty: "Easy Family Travel",
    shortDesc: "Gentle family itinerary featuring paddle boating at Shangrila Lake, playing in Sarfaranga sand dunes, and gentle walks in Upper Kachura.",
    highlights: ["Shangrila Heart Lake Boating", "Sarfaranga Sand Dunes", "Upper Kachura Lake Picnic", "Kharpocho Fort Light Hike"],
    itinerary: [
      { day: "Day 1-2", detail: "Flight to Skardu -> Check-in resort -> Shangrila Lake boating." },
      { day: "Day 3-4", detail: "Shigar Valley day trip -> Sand dune ATV rides & fort garden walk." },
      { day: "Day 5-6", detail: "Upper Kachura Lake picnic & shopping in Skardu Bazaar -> Return flight." }
    ],
    includes: ["Family Van / Prado", "Family Rooms", "Kid-Friendly Meals", "Guide"]
  },
  {
    id: "peaceful-northern-retreat",
    title: "Peaceful Northern Retreat (5 Days Phander Lake)",
    category: "family-relaxing",
    categoryLabel: "Family & Relaxing",
    district: "Ghizer",
    image: "images/districts/kutwal_lake.png",
    badge: "Tranquil Meadows",
    duration: "5 Days",
    altitude: "2,800m",
    season: "May - Oct",
    difficulty: "Easy",
    shortDesc: "Escape the noise in the peaceful green valley of Phander Ghizer. Ideal for couples and families looking to relax by crystalline waters.",
    highlights: ["Phander Lake Fishing & Boating", "Gupis Valley Meadows", "Khalti Lake Rest Stop", "Gentle Nature Walks"],
    itinerary: [
      { day: "Day 1-2", detail: "Gilgit pickup -> Drive through Ghizer valley to Phander Lake hotel." },
      { day: "Day 3-4", detail: "Relaxing days by Phander Lake -> Fresh trout dinner & orchard walks." },
      { day: "Day 5", detail: "Return drive to Gilgit airport." }
    ],
    includes: ["Cozy Resort", "Comfortable Transport", "Trout Meals", "Guide"]
  },
  {
    id: "nature-comfort-tour",
    title: "Nature & Comfort Tour (7 Days Blossom & Gardens)",
    category: "family-relaxing",
    categoryLabel: "Family & Relaxing",
    district: "Hunza",
    image: "images/gallery/valleys/apricot_blossom.jpg",
    badge: "Orchard Blossom",
    duration: "7 Days",
    altitude: "2,500m",
    season: "March - Nov",
    difficulty: "Easy",
    shortDesc: "Experience the colorful spring blossom or golden autumn foliage in Hunza Valley with relaxed pacing, comfortable hotels, and scenic valley walks.",
    highlights: ["Karimabad Apricot Orchards", "Altit Royal Gardens", "Attabad Lake Scenic Drive", "Rakaposhi Viewpoint Cafe"],
    itinerary: [
      { day: "Day 1-3", detail: "Gilgit to Karimabad Hunza -> Altit & Baltit Fort garden strolls." },
      { day: "Day 4-5", detail: "Attabad Lake scenic boat ride & Passu Cones photo stops." },
      { day: "Day 6-7", detail: "Relax in Karimabad cafes & return drive to Gilgit." }
    ],
    includes: ["Heritage Hotels", "Private Van/Car", "All Breakfasts", "Guide"]
  },
  {
    id: "relaxing-valley-escape",
    title: "Relaxing Valley Escape (6 Days Hunza & Nagar)",
    category: "family-relaxing",
    categoryLabel: "Family & Relaxing",
    district: "Hunza",
    image: "images/gallery/valleys/hunza_2.jpg",
    badge: "Relaxing Escapes",
    duration: "6 Days",
    altitude: "2,500m",
    season: "April - Nov",
    difficulty: "Easy",
    shortDesc: "Unwind surrounded by towering 7,000m peaks. Enjoy sunrise at Eagle's Nest Duikar, walnut cake at Hunza De Cafe, and peaceful valley strolls.",
    highlights: ["Duikar Sunrise Viewpoint", "Hunza De Café Walnut Cake", "Minapin Village Walk", "Attabad Lake"],
    itinerary: [
      { day: "Day 1-3", detail: "Arrive Gilgit -> Transfer Karimabad -> Relaxing hotel with mountain balcony view." },
      { day: "Day 4-6", detail: "Duikar Eagle's Nest sunset -> Hoper Valley Nagar tea break -> Return airport transfer." }
    ],
    includes: ["Deluxe Hotels", "Private Vehicle", "Guide", "Breakfasts"]
  },
  {
    id: "scenic-family-adventure",
    title: "Scenic Family Adventure (8 Days Babusar & Hunza Safari)",
    category: "family-relaxing",
    categoryLabel: "Family & Relaxing",
    district: "Hunza",
    image: "images/gallery/vehicles/tour_pic.jpg",
    badge: "Family Roadtrip",
    duration: "8 Days",
    altitude: "4,170m Babusar",
    season: "June - Oct",
    difficulty: "Easy - Moderate",
    shortDesc: "A memorable family road trip from Islamabad via Babusar Pass and Naran Valley to Hunza, Passu Cones, and Attabad Lake.",
    highlights: ["Babusar Pass 4,170m Stop", "Lulusar Lake Photo Stop", "Attabad Lake Boat Safari", "Passu Cones View"],
    itinerary: [
      { day: "Day 1-2", detail: "Islamabad -> Naran -> Babusar Pass -> Hunza Karimabad." },
      { day: "Day 3-5", detail: "Baltit Fort, Altit Village & Attabad Lake family boat ride." },
      { day: "Day 6-8", detail: "Khunjerab Border excursion -> Naran stay -> Return Islamabad." }
    ],
    includes: ["Spacious Family Coaster / Prado", "Hotels", "Driver & Guide", "Breakfasts"]
  },

  // ==================== 5000m - 8000m EXPEDITIONS ====================
  {
    id: "k2-expedition",
    title: "K2 (8,611m) Summit Mountaineering Expedition",
    category: "expeditions",
    categoryLabel: "8000m Summit",
    district: "Skardu",
    image: "images/gallery/mountains/K2.png",
    badge: "World #2 Peak (8,611m)",
    duration: "55 - 60 Days",
    altitude: "8,611m Summit",
    season: "June - August",
    difficulty: "Extreme 8000m",
    shortDesc: "The Savage Mountain. Fully logistically supported summit expedition via Abruzzi Spur for elite international mountaineers.",
    highlights: ["Savage Mountain Summit", "Abruzzi Spur & Bottleneck", "High Altitude Oxygen Support", "World Class Sherpa / HAP Crew"],
    itinerary: [
      { day: "Day 1-10", detail: "Briefing Alpine Club Islamabad, flight to Skardu, trek to Concordia & K2 Base Camp." },
      { day: "Day 11-45", detail: "Acclimatization, rope fixing, C1-C4 rotations & summit attempt." },
      { day: "Day 46-60", detail: "Base Camp packing & return via Concordia -> Skardu -> Islamabad." }
    ],
    includes: ["Royalty Permits & LO", "HAP Crew & Oxygen Cylinders", "Satellite Comms & Heated Domes"]
  },
  {
    id: "nanga-parbat-8126",
    title: "Nanga Parbat (8,126m) Summit Expedition",
    category: "expeditions",
    categoryLabel: "8000m Summit",
    district: "Diamer",
    image: "images/gallery/mountains/nanga_parbat.png",
    badge: "Killer Mountain (8,126m)",
    duration: "45 Days",
    altitude: "8,126m Summit",
    season: "June - July",
    difficulty: "Extreme 8000m",
    shortDesc: "Climb Nanga Parbat (8,126m), the 9th highest mountain on Earth, via the Diamir Face Kinshofer Route.",
    highlights: ["Diamir Face Vertical Wall", "Kinshofer Route Fixed Lines", "Western Himalayan Anchor"],
    itinerary: [
      { day: "Day 1-8", detail: "Chilas -> Bunar Das -> Diamir Base Camp." },
      { day: "Day 9-38", detail: "Camp 1 to Camp 4 rotations & summit push." },
      { day: "Day 39-45", detail: "Return transfer to Islamabad." }
    ],
    includes: ["8000m Permit & LO", "Kinshofer Fixed Ropes", "Sat-Com & Full Catering"]
  },
  {
    id: "spantik-golden-peak",
    title: "Spantik Peak / Golden Peak (7,027m) Expedition",
    category: "expeditions",
    categoryLabel: "7000m Expedition",
    district: "Nagar",
    image: "images/trophy/expedition.jpg",
    badge: "7000m Golden Peak",
    duration: "25 - 30 Days",
    altitude: "7,027m Summit",
    season: "June - August",
    difficulty: "Strenuous Technical",
    shortDesc: "Known as Golden Peak in Nagar Valley, Spantik's Southeast Ridge is renowned as the classic entry 7,000m summit in Karakoram.",
    highlights: ["Golden Wall Face", "Southeast Ridge Route", "Arandu & Chogolisa Glacier Views"],
    itinerary: [
      { day: "Day 1-5", detail: "Drive to Skardu/Arandu -> Trek to Spantik Base Camp." },
      { day: "Day 6-22", detail: "Camp 1-3 rotations & Summit push." },
      { day: "Day 23-30", detail: "Return to Gilgit/Islamabad." }
    ],
    includes: ["7000m Royalty Permit", "Fixed Ropes & High Camp Tents", "Base Camp Chef"]
  },
  {
    id: "laila-peak-6096",
    title: "Laila Peak (6,096m) Spear Expedition",
    category: "expeditions",
    categoryLabel: "6000m Expedition",
    district: "Ghanche",
    image: "images/districts/LAILA peak.JPG",
    badge: "6096m Needle Spire",
    duration: "20 Days",
    altitude: "6,096m Summit",
    season: "June - July",
    difficulty: "Technical Steep Ice (55°)",
    shortDesc: "Climb the needle spire of Laila Peak in Hushe Valley, featuring dramatic 55-degree snow and ice slopes.",
    highlights: ["Laila Peak West Face", "Gondogoro Glacier High Camp", "Steep Technical Ice Climb"],
    itinerary: [
      { day: "Day 1-5", detail: "Skardu -> Drive Hushe -> Trek to Laila Base Camp." },
      { day: "Day 6-15", detail: "Camp 1 setup & fixing ropes on 55° ice face." },
      { day: "Day 16-20", detail: "Summit attempt & return to Skardu." }
    ],
    includes: ["6000m Permit", "HAP Climbing Crew", "Ice Screws & Fixed Ropes"]
  },

  // ==================== DESTINATION WEDDINGS & RENTALS ====================
  {
    id: "attabad-turquoise-wedding",
    title: "Attabad Lake Turquoise Waters Royal Wedding",
    category: "weddings",
    categoryLabel: "Destination Wedding",
    district: "Hunza",
    image: "images/weddings/attabad.png",
    badge: "Ultra Luxury",
    duration: "3 - 7 Days",
    altitude: "2,438m",
    season: "April - October",
    difficulty: "Luxury Experience",
    shortDesc: "Host your dream wedding ceremony on luxury floating pavilions surrounded by turquoise waters of Attabad Lake and Karakoram peaks.",
    highlights: ["Floating Floral Archways", "Sunset Boat Escorts", "Traditional Hunza Folk Ensemble", "Gourmet Outdoor Banquets"],
    itinerary: [
      { day: "Day 1", detail: "Executive Prado Transfer for Bride, Groom & Guests." },
      { day: "Day 2", detail: "Pre-wedding Shoot at Passu Cones & Altit Fort Royal Gardens." },
      { day: "Day 3", detail: "Sunset Wedding Ceremony at Attabad Lake Pavilion followed by Fireworks." },
      { day: "Day 4", detail: "Post-wedding Lake Safari Gala." }
    ],
    includes: ["Complete Luxury Stage & Floral Design", "5-Star Catering Crew", "Professional Drone & Editorial Photography Team"]
  },
  {
    id: "prado-landcruiser-rental",
    title: "4x4 Prado & Land Cruiser Safari Vehicle Rental",
    category: "rentals",
    categoryLabel: "Vehicle Fleet",
    district: "Gilgit",
    image: "images/gallery/vehicles/prado.png",
    badge: "Top Rated Fleet",
    duration: "Daily / Weekly",
    altitude: "All GB Terrain",
    season: "Year Round",
    difficulty: "Comfortable Travel",
    shortDesc: "Chauffeur-driven luxury Toyota Land Cruiser V8, Prado TX/TZ, and custom 4x4 Willys Jeeps tailored for rugged Karakoram terrain.",
    highlights: ["Licensed High-Mountain Drivers", "Fuel Included / Custom Route Options", "Heated & Air-Conditioned Comfort", "Roof Racks for Expedition Bags"],
    itinerary: [
      { day: "Service", detail: "Airport Pickup from Gilgit or Skardu." },
      { day: "Routes", detail: "KKH, Babusar Pass, Deosai Plains, Shimshal Valley, Fairy Meadows Tato Track." }
    ],
    includes: ["Fuel & Driver Allowances", "Vehicle Insurance", "Toolkits & Spare Tires"]
  },

  // ==================== EXTENDED VALLEYS: CHITRAL, KALASH, NARAN & KAGHAN ====================
  {
    id: "chitral-kalash-discovery",
    title: "Chitral, Shandur Pass & Kalash Valleys Cultural Discovery",
    category: "mountain-escape",
    categoryLabel: "Hindukush & Heritage Tour",
    district: "Chitral",
    image: "images/districts/chitral.jpg",
    badge: "Hindukush Heritage",
    duration: "7 - 8 Days",
    altitude: "1,500m - 3,700m (Shandur)",
    season: "April - November",
    difficulty: "Moderate",
    shortDesc: "Explore the majestic Hindukush range, Tirich Mir (7,708m), historic Chitral Shahi Fort, Shandur Pass (Highest Polo Ground), and the ancient indigenous animist culture of the Kalash Valleys (Bumburet, Rumbur, Birir).",
    highlights: ["Chitral Shahi Fort & Mosque", "Kalash Valleys (Bumburet & Rumbur)", "Shandur Pass 3700m", "Tirich Mir Viewpoint"],
    itinerary: [
      { day: "Day 1", detail: "Islamabad to Chitral via Lowari Tunnel -> Check-in Chitral hotel." },
      { day: "Day 2", detail: "Explore Chitral Shahi Fort, Shahi Mosque, and local handicrafts bazaar." },
      { day: "Day 3-4", detail: "Drive to Kalash Valleys -> Bumburet & Rumbur. Experience Chilam Joshi / traditional festivals and wooden architectural sanctuaries." },
      { day: "Day 5", detail: "Ascend to Shandur Pass (3,700m) - the world's highest polo ground connecting Chitral with Gilgit-Baltistan." },
      { day: "Day 6", detail: "Excursion towards Tirich Mir base viewpoint in upper Chitral." },
      { day: "Day 7", detail: "Return drive towards Islamabad or proceed across Shandur to Gilgit-Baltistan." }
    ],
    includes: ["4x4 Prado/Coaster Transport", "Local Kalash Escort Guide", "Heritage Hotel Stays", "All Road Permits & Tolls"]
  },
  {
    id: "naran-kaghan-alpine-safari",
    title: "Naran & Kaghan Valley Alpine Lakes Safari (Saif-ul-Malook & Babusar)",
    category: "family-relaxing",
    categoryLabel: "Alpine Lakes Safari",
    district: "Naran",
    image: "images/districts/naran.jpg",
    badge: "Fairy Lake Tour",
    duration: "5 - 6 Days",
    altitude: "2,400m - 4,170m (Babusar)",
    season: "May - October",
    difficulty: "Easy - Moderate",
    shortDesc: "Experience the fairy-tale waters of Lake Saif-ul-Malook, panoramic views from Babusar Top (4,170m gateway to GB), trout fishing along Kunhar River, and lush pine plateaus at Shogran & Siri Paye.",
    highlights: ["Lake Saif-ul-Malook Boat Safari", "Babusar Top (4,170m)", "Shogran & Siri Paye Meadows", "Lulusar Alpine Lake"],
    itinerary: [
      { day: "Day 1", detail: "Islamabad to Kaghan Valley via Hazara Motorway & Balakot -> Shogran." },
      { day: "Day 2", detail: "Jeep excursion to Siri Paye alpine meadows -> Continue along Kunhar River to Naran." },
      { day: "Day 3", detail: "4x4 Willys Jeep excursion to Lake Saif-ul-Malook -> Boating & Malika Parbat reflections." },
      { day: "Day 4", detail: "Drive through Upper Kaghan -> Jalkhad, pristine Lulusar Lake, and Babusar Pass (4,170m)." },
      { day: "Day 5", detail: "Riverside relaxation along Kunhar River, trout dinner, and return transfer." }
    ],
    includes: ["Dedicated 4x4 Jeeps for Lake & Siri Paye", "Luxury Riverside Hotel", "Professional Tour Guide", "All Meals Included"]
  }
];

/**
 * Featured Curation Lists for Landing Page (6 items each)
 */
const featuredOfferingIds = [
  "rakaposhi-bc",
  "concordia-k2-bc",
  "spantik-golden-peak",
  "attabad-turquoise-wedding",
  "skardu-astore-10day-tour",
  "prado-landcruiser-rental"
];

const featuredGalleryIds = [
  "g-golden-summit",
  "g-k2-summit",
  "g-nanga-parbat",
  "g-basecamp-expedition",
  "g-attabad-wedding",
  "g-prado-fleet"
];

/**
 * Initialize Web App & Event Listeners
 */
document.addEventListener("DOMContentLoaded", () => {
  setupHeroSlideshow();

  // Landing Page: Featured Offerings (6 items)
  const homeOfferings = document.getElementById("offerings-grid");
  if (homeOfferings) {
    const featuredItems = offeringsData.filter(item => featuredOfferingIds.includes(item.id));
    renderOfferings(featuredItems.length === 6 ? featuredItems : offeringsData.slice(0, 6), "offerings-grid");
  }

  // Dedicated Experiences Page: All Offerings
  const allOfferings = document.getElementById("all-offerings-grid");
  if (allOfferings) {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category") || "all";
    const searchParam = urlParams.get("search") || "";

    if (searchParam) {
      const searchEl = document.getElementById("search-input");
      if (searchEl) searchEl.value = searchParam;
    }

    if (catParam !== "all") {
      const activeTab = document.querySelector(`.category-tabs .tab-btn[data-category="${catParam}"]`);
      if (activeTab) {
        document.querySelectorAll(".category-tabs .tab-btn").forEach(t => t.classList.remove("active"));
        activeTab.classList.add("active");
      }
    }

    filterAndRender(catParam, searchParam, "all-offerings-grid");
    setupFilterTabs("all-offerings-grid");
    setupSearchInput("all-offerings-grid");
  }

  // Landing Page: Featured Gallery (6 items)
  const homeGallery = document.getElementById("gallery-grid");
  if (homeGallery) {
    const featuredPhotos = galleryData.filter(item => featuredGalleryIds.includes(item.id));
    renderGallery(featuredPhotos.length === 6 ? featuredPhotos : galleryData.slice(0, 6), "gallery-grid");
  }

  // Dedicated Gallery Page: All Gallery Photos
  const allGallery = document.getElementById("all-gallery-grid");
  if (allGallery) {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category") || "all";

    if (catParam !== "all") {
      const activeTab = document.querySelector(`.gallery-tab-btn[data-category="${catParam}"]`);
      if (activeTab) {
        document.querySelectorAll(".gallery-tab-btn").forEach(t => t.classList.remove("active"));
        activeTab.classList.add("active");
      }
      const filtered = galleryData.filter(g => g.category === catParam);
      renderGallery(filtered, "all-gallery-grid");
    } else {
      renderGallery(galleryData, "all-gallery-grid");
    }

    setupGalleryFilters("all-gallery-grid");
  }

  setupModalHandlers();
  setupNavbarScroll();
  setupWhatsAppConfigControls();
});

/**
 * Setup Dynamic Hero Auto Slideshow
 */
function webImage(path) {
  return path.replace(/^images\//, "images/web/").replace(/\.(png|jpe?g)$/i, ".jpg");
}

function setupHeroSlideshow() {
  const container = document.getElementById("hero-slides-wrapper");
  const dotsContainer = document.getElementById("hero-dots-container");
  if (!container || !dotsContainer) return;

  container.innerHTML = heroSlidesData.map((slide, i) => {
    const src = webImage(slide.image);
    const priority = i === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    return `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}" style="--hero-image: url('${src}')">
      <img src="${src}" alt="${slide.title}" class="hero-img" ${priority} decoding="async" onError="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80'">
    </div>
  `;
  }).join('');

  dotsContainer.innerHTML = heroSlidesData.map((_, i) => `
    <span class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goToHeroSlide(${i})"></span>
  `).join('');

  startHeroAutoPlay();

  const heroSection = document.getElementById("hero");
  heroSection?.addEventListener("mouseenter", () => clearInterval(heroSlideTimer));
  heroSection?.addEventListener("mouseleave", () => startHeroAutoPlay());
}

function startHeroAutoPlay() {
  clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, 5000);
}

function nextHeroSlide() {
  currentHeroIndex = (currentHeroIndex + 1) % heroSlidesData.length;
  updateHeroSlideUI();
}

function prevHeroSlide() {
  currentHeroIndex = (currentHeroIndex - 1 + heroSlidesData.length) % heroSlidesData.length;
  updateHeroSlideUI();
}

function goToHeroSlide(index) {
  currentHeroIndex = index;
  updateHeroSlideUI();
}

function updateHeroSlideUI() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  slides.forEach((slide, i) => {
    if (i === currentHeroIndex) slide.classList.add("active");
    else slide.classList.remove("active");
  });

  dots.forEach((dot, i) => {
    if (i === currentHeroIndex) dot.classList.add("active");
    else dot.classList.remove("active");
  });

  const slideObj = heroSlidesData[currentHeroIndex];
  const titleEl = document.getElementById("hero-dynamic-title");
  const subEl = document.getElementById("hero-dynamic-sub");

  if (titleEl && slideObj.title) titleEl.textContent = slideObj.title;
  if (subEl && slideObj.subtitle) subEl.textContent = slideObj.subtitle;
}

/**
 * Render Gallery Items Grid
 */
function renderGallery(items, containerId = "gallery-grid") {
  activeGalleryList = items || [];
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p>No photos available in this category.</p>
      </div>
    `;
    return;
  }

  const useOptimized = containerId === "gallery-grid";
  container.innerHTML = items.map((item, index) => {
    const imgSrc = useOptimized ? webImage(item.image) : item.image;
    return `
      <div class="gallery-item" onclick="openLightbox(${index})" data-category="${item.category}">
        <img src="${imgSrc}" alt="${item.title}" class="gallery-img" loading="lazy" onError="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'">
        <div class="gallery-overlay">
          <span class="gallery-sub"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
          <h4 class="gallery-title">${item.title}</h4>
        </div>
      </div>
    `;
  }).join('');
}

function setupGalleryFilters(containerId = "all-gallery-grid") {
  const tabs = document.querySelectorAll(".gallery-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const cat = tab.getAttribute("data-category");
      let filtered = galleryData;
      if (cat && cat !== "all") {
        filtered = galleryData.filter(g => g.category === cat);
      }
      renderGallery(filtered, containerId);
    });
  });
}

/**
 * Lightbox Modal Controls
 */
function openLightbox(index) {
  if (!activeGalleryList || !activeGalleryList.length) return;
  currentLightboxIndex = index;
  updateLightboxUI();
  document.getElementById("lightbox-modal")?.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox-modal")?.classList.remove("active");
}

function nextLightbox() {
  if (!activeGalleryList || !activeGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryList.length;
  updateLightboxUI();
}

function prevLightbox() {
  if (!activeGalleryList || !activeGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
  updateLightboxUI();
}

function updateLightboxUI() {
  if (!activeGalleryList || !activeGalleryList.length) return;
  const item = activeGalleryList[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const subEl = document.getElementById("lightbox-subcaption");
  const waBtn = document.getElementById("lightbox-wa-btn");

  let imgSrc = item.image;
  if (imgEl) imgEl.src = imgSrc;
  if (captionEl) captionEl.textContent = item.title;
  if (subEl) subEl.textContent = item.location;

  if (waBtn) {
    const waText = encodeURIComponent(`Hi Adventure Rakaposhi! I saw your gallery photo *${item.title}* (${item.location}). I would like to inquire about visiting/booking.`);
    waBtn.href = `https://wa.me/${officialWhatsAppNumber}?text=${waText}`;
  }
}

/**
 * Render Offerings Cards Grid
 */
function renderOfferings(items, containerId = "offerings-grid") {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: 16px; border: 1px solid var(--border-subtle);">
        <i class="fa-solid fa-compass" style="font-size: 3rem; color: var(--gold-accent); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; margin-bottom: 8px; font-family: var(--font-heading);">No matching experiences found</h3>
        <p style="color: var(--text-muted);">Try selecting a different category tab or clear your search query.</p>
      </div>
    `;
    return;
  }

  const useOptimized = containerId === "offerings-grid";
  container.innerHTML = items.map(item => {
    const imgSrc = useOptimized ? webImage(item.image) : item.image;
    const waText = encodeURIComponent(
      `Hi Adventure Rakaposhi! 👋 I am interested in getting a custom quote and information for the *${item.title}* (${item.categoryLabel}). Please share details.`
    );
    const waLink = `https://wa.me/${officialWhatsAppNumber}?text=${waText}`;

    return `
      <div class="card" data-category="${item.category}" id="card-${item.id}">
        <div class="card-image-wrapper">
          <img src="${imgSrc}" alt="${item.title}" class="card-image" loading="lazy" onError="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'" />
          <span class="card-badge">${item.badge || item.categoryLabel}</span>
          <span class="card-season"><i class="fa-regular fa-calendar"></i> ${item.season}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-specs">
            <span class="spec-item"><i class="fa-regular fa-clock text-gold"></i> ${item.duration}</span>
            <span class="spec-item"><i class="fa-solid fa-mountain text-forest"></i> ${item.altitude}</span>
            <span class="spec-item"><i class="fa-solid fa-gauge-high text-gold"></i> ${item.difficulty}</span>
          </div>
          <p class="card-description">${item.shortDesc}</p>
          <div class="card-highlights">
            ${item.highlights.slice(0, 3).map(h => `<span class="tag-pill"># ${h}</span>`).join('')}
          </div>
          <div class="card-footer">
            <button class="btn-details" onclick="openDetailModal('${item.id}')">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-wa-card">
              <i class="fa-brands fa-whatsapp"></i> Get Quote
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Filter Tabs Setup
 */
function setupFilterTabs(containerId = "all-offerings-grid") {
  const tabs = document.querySelectorAll(".category-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const selectedCategory = tab.getAttribute("data-category");
      filterAndRender(selectedCategory, document.getElementById("search-input")?.value || "", containerId);
    });
  });
}

/**
 * Search Input Setup
 */
function setupSearchInput(containerId = "all-offerings-grid") {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const activeTab = document.querySelector(".category-tabs .tab-btn.active")?.getAttribute("data-category") || "all";
    filterAndRender(activeTab, query, containerId);
  });
}

function filterAndRender(category, query, containerId = "all-offerings-grid") {
  let filtered = offeringsData;

  if (category && category !== "all") {
    filtered = filtered.filter(item => item.category === category);
  }

  if (query && query.trim() !== "") {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      (item.district && item.district.toLowerCase().includes(q)) ||
      item.highlights.some(h => h.toLowerCase().includes(q))
    );
  }

  renderOfferings(filtered, containerId);
}

function filterByDistrict(districtName) {
  const allOfferings = document.getElementById("all-offerings-grid");
  if (allOfferings) {
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = districtName;
    const tabs = document.querySelectorAll(".category-tabs .tab-btn");
    tabs.forEach(t => t.classList.remove("active"));
    const allTab = document.querySelector('.category-tabs .tab-btn[data-category="all"]');
    if (allTab) allTab.classList.add("active");
    filterAndRender("all", districtName, "all-offerings-grid");
    document.getElementById("all-offerings")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `experiences.html?search=${encodeURIComponent(districtName)}`;
  }
}

/**
 * Open Detail Modal / Drawer
 */
function openDetailModal(id) {
  const item = offeringsData.find(o => o.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById("detail-modal");
  const modalBody = document.getElementById("detail-modal-content");
  if (!modalOverlay || !modalBody) return;

  let imgSrc = item.image;
  if (imgSrc === 'rakaposhi_hero') imgSrc = 'images/hero/hero.jpg';
  else if (imgSrc === 'k2_expedition') imgSrc = 'k2_expedition_1788685379080.png';
  else if (imgSrc === 'attabad_wedding') imgSrc = 'images/weddings/attabad.png';
  else if (imgSrc === 'safari_prado') imgSrc = 'safari_prado_1788685447921.png';

  const waText = encodeURIComponent(
    `Hi Adventure Rakaposhi! I would like to request detailed itinerary & quotation for *${item.title}* (${item.duration}).`
  );
  const waLink = `https://wa.me/${officialWhatsAppNumber}?text=${waText}`;

  modalBody.innerHTML = `
    <div style="position: relative; height: 260px; margin: -36px -36px 24px -36px; border-radius: 20px 20px 0 0; overflow: hidden;">
      <img src="${imgSrc}" style="width: 100%; height: 100%; object-fit: cover;" onError="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'"/>
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to bottom, transparent 30%, var(--bg-primary) 100%);"></div>
      <div style="position: absolute; bottom: 16px; left: 24px; right: 24px;">
        <span class="card-badge" style="position: static; display: inline-block; margin-bottom: 8px;">${item.categoryLabel}</span>
        <h2 style="font-size: 1.8rem; font-family: var(--font-heading); color: var(--text-main); line-height: 1.2;">${item.title}</h2>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 24px; background: var(--bg-surface); padding: 16px; border-radius: 12px; border: 1px solid var(--border-subtle);">
      <div><span style="font-size: 0.72rem; color: var(--text-muted); display: block; letter-spacing: 1px; font-weight: 600;">DURATION</span><strong>${item.duration}</strong></div>
      <div><span style="font-size: 0.72rem; color: var(--text-muted); display: block; letter-spacing: 1px; font-weight: 600;">ALTITUDE</span><strong class="text-gold">${item.altitude}</strong></div>
      <div><span style="font-size: 0.72rem; color: var(--text-muted); display: block; letter-spacing: 1px; font-weight: 600;">SEASON</span><strong class="text-forest">${item.season}</strong></div>
      <div><span style="font-size: 0.72rem; color: var(--text-muted); display: block; letter-spacing: 1px; font-weight: 600;">DIFFICULTY</span><strong>${item.difficulty}</strong></div>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--text-main); font-family: var(--font-heading);">Overview</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${item.shortDesc}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-main); font-family: var(--font-heading);">Itinerary Highlights</h3>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${item.itinerary.map(step => `
          <div style="display: flex; gap: 12px; background: var(--bg-surface); padding: 12px 16px; border-radius: 8px; border-left: 3px solid var(--gold-accent); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
            <span style="font-weight: 700; color: var(--gold-accent); min-width: 60px;">${step.day}:</span>
            <span style="color: var(--text-main); font-size: 0.9rem;">${step.detail}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom: 28px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 10px; color: var(--text-main); font-family: var(--font-heading);">Included Services</h3>
      <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
        ${item.includes.map(inc => `
          <li style="font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-check text-forest"></i> ${inc}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button onclick="openCustomQuoteModal('${item.title}')" class="btn-details" style="flex: 1; justify-content: center; padding: 14px;">
        <i class="fa-solid fa-sliders"></i> Customize Inquiry
      </button>
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-primary-wa" style="flex: 1.2; justify-content: center; padding: 14px;">
        <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Instant WhatsApp Quote
      </a>
    </div>
  `;

  modalOverlay.classList.add("active");
}

function openCustomQuoteModal(offeringTitle = "Gilgit-Baltistan Tourism Experience") {
  closeModal("detail-modal");
  const modalOverlay = document.getElementById("quote-modal");
  if (!modalOverlay) return;

  document.getElementById("quote-offering-name").value = offeringTitle;
  modalOverlay.classList.add("active");
}

function handleQuoteFormSubmit(event) {
  event.preventDefault();
  
  const offering = document.getElementById("quote-offering-name").value;
  const name = document.getElementById("quote-user-name").value;
  const month = document.getElementById("quote-travel-month").value;
  const group = document.getElementById("quote-group-size").value;
  const notes = document.getElementById("quote-special-notes").value;

  const msgText = `Hi Adventure Rakaposhi! 👋
My name is *${name}*.
I am inquiring about: *${offering}*
- Planned Travel Month: ${month}
- Group Size: ${group}
- Special Notes / Requirements: ${notes || "None"}

Please provide customized quotation, itinerary & availability!`;

  const waLink = `https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(msgText)}`;
  window.open(waLink, "_blank");
  closeModal("quote-modal");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function setupModalHandlers() {
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  const lightbox = document.getElementById("lightbox-modal");
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeModal("detail-modal");
      closeModal("quote-modal");
    } else if (lightbox?.classList.contains("active")) {
      if (e.key === "ArrowRight") nextLightbox();
      else if (e.key === "ArrowLeft") prevLightbox();
    }
  });
}

function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const toggleIcon = mobileToggle?.querySelector("i");

  const setMenuOpen = (open) => {
    navMenu?.classList.toggle("active", open);
    navbar?.classList.toggle("menu-open", open);
    mobileToggle?.setAttribute("aria-expanded", open ? "true" : "false");
    mobileToggle?.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    toggleIcon?.classList.toggle("fa-bars", !open);
    toggleIcon?.classList.toggle("fa-xmark", open);
  };

  mobileToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuOpen(!navMenu?.classList.contains("active"));
  });

  document.addEventListener("click", (event) => {
    if (!navbar?.contains(event.target)) setMenuOpen(false);
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const leavesThisPage = href && link.target !== "_blank" && !href.startsWith("http");
      setMenuOpen(false);
      if (!leavesThisPage) return;
      event.preventDefault();
      window.location.assign(href);
    });
  });

  navMenu?.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setMenuOpen(false));
  });
}

function setupWhatsAppConfigControls() {
  const display = document.getElementById("wa-number-display");
  const floatBtn = document.getElementById("floating-wa-btn");

  if (display) display.textContent = "+92 355 5133394";

  if (floatBtn) {
    floatBtn.href = `https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent("Hi Adventure Rakaposhi! I am looking for information regarding tours in Gilgit-Baltistan.")}`;
  }
}

// Global Exports
window.openDetailModal = openDetailModal;
window.openCustomQuoteModal = openCustomQuoteModal;
window.handleQuoteFormSubmit = handleQuoteFormSubmit;
window.closeModal = closeModal;
window.nextHeroSlide = nextHeroSlide;
window.prevHeroSlide = prevHeroSlide;
window.goToHeroSlide = goToHeroSlide;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightbox = nextLightbox;
window.prevLightbox = prevLightbox;
window.filterByDistrict = filterByDistrict;

