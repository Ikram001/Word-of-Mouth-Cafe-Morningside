import type { CafeData, ParsedHours, MenuItem } from "../types";

export const cafeData: CafeData = {
  name: "Word of Mouth Morningside",
  rating: "4.8",
  reviewCount: "191",
  address: "41 Morningside Rd, Edinburgh EH10 4DR, United Kingdom",
  phone: "+441316297759",
  website: "",
  category: "Cafe",
  hours: [
    "Tuesday9 AM–4:30 PM",
    "Wednesday9 AM–4:30 PM",
    "Thursday9 AM–4:30 PM",
    "Friday9 AM–4:30 PM",
    "Saturday9 AM–4:30 PM",
    "Sunday9 AM–4:30 PM",
    "Monday9 AM–4:30 PM",
  ],
  description:
    "A beloved neighbourhood café in the heart of Morningside, Edinburgh. Known for exceptional coffee, homemade food, and staff that treat every guest like family.",
  google_map_link: "https://maps.app.goo.gl/WCxFnxE621RjjNib7",
  google_map_embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.9861350956285!2d-3.2124409232421596!3d55.932278273151184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c70badeeae7b%3A0x8f397437bfcb6691!2sWord%20of%20Mouth%20Morningside!5e0!3m2!1sen!2s!4v1773779849499!5m2!1sen!2s",
  socials: [
    "https://www.instagram.com/wordofmouthcafemorningside/",
    "https://www.facebook.com/profile.php?id=100063675036205#",
  ],
  // All reviews from JSON — deduplication and filtering handled per-page
  reviews: [
    {
      reviewer: "Lou",
      stars: "5",
      date: "2 months ago",
      text: "Lovely little cafe where the staff treat you like family.  Simple menu but has something for everyone.",
      ownerReply:
        "Hi Lou.\nThank you so much for writing an review for our Cafe. What you said  is true, and we always will treat our customer like they are family to us.",
      localGuide: "Local Guide · 59 reviews · 2 photos",
    },
    {
      reviewer: "Keith Bell",
      stars: "5",
      date: "2 months ago",
      text: "Always great coffee, eats, bites and cakes. Very chilled very friendly\nAlways feel welcome",
      ownerReply:
        "Hi Keith .\nThank you so much for writing  review for our Cafe. \nYour always welcome to our Cafe.",
      localGuide: "2 reviews",
    },
    {
      reviewer: "Dennis Cheung",
      stars: "4",
      date: "2 months ago",
      text: "This coffee shop has a warm and relaxing atmosphere, perfect for brunch or a leisurely coffee break.",
      ownerReply:
        "Hi Dennis .\nThank you so much for finding the time on this festive days and writing for our little Cafe such a nice review.",
      localGuide: "Local Guide · 109 reviews · 499 photos",
    },
    {
      reviewer: "Jimmy",
      stars: "5",
      date: "Edited 4 months ago",
      text: "Word of mouth  cafe is the place for a delicious  coffee, breakfast  and lunch. I had the best coffee ever today and they do also iced coffee. Nice friendly staff, nice atmosphere.",
      ownerReply: "",
      localGuide: "Local Guide · 11 reviews · 22 photos",
    },
    {
      reviewer: "Aleena Ahmad",
      stars: "5",
      date: "4 months ago",
      text: "Amazing vegetarian breakfast and coffee, highly recommend this wonderful cafe! So clean and the staff are so nice",
      ownerReply:
        "Thank you for your kindness Aleena for taking the time and writing an review for our Cafe. Looking forward seeing you soon.",
      localGuide: "9 reviews",
    },
    {
      reviewer: "Benjamin MacDonald",
      stars: "5",
      date: "4 months ago",
      text: "Really enjoyable",
      ownerReply:
        "Thank you so much Benjamin \nThat's very kind of you for taking the time and writing an review for our Cafe. Hope to see you soon again.",
      localGuide: "2 reviews",
    },
    {
      reviewer: "louise shaw",
      stars: "5",
      date: "6 months ago",
      text: "Absolute gem of a cafe. Beautiful freshly made food the soup is incredible. Lovely friendly owners",
      ownerReply:
        "Thank you Louise for such sweet review. You are always welcome at our Cafe. Looking forward seeing you soon",
      localGuide: "2 reviews",
    },
    {
      reviewer: "Afua Owusu-Ansah",
      stars: "5",
      date: "6 months ago",
      text: "Lovely cosy cafe in the heart of Morningside. My partner and I were looking for a quick breakfast/lunch before heading up to the Pentlands and this was perfect. Staff were incredibly warm and the food was delicious.",
      ownerReply:
        "Hi Ansah.\nWe are very happy that you enjoyed the time being in our Cafe and enjoyed the food and our company.",
      localGuide: "Local Guide · 55 reviews · 98 photos",
    },
    {
      reviewer: "Saiqa B",
      stars: "5",
      date: "7 months ago",
      text: "Absolutely lovely cafe, with friendly and attentive staff, and a good breakfast menu! I booked a large group and they were very helpful in making us as comfortable as possible. Would highly recommend",
      ownerReply:
        "Hi Saiqa.\nThank you so much for taking the time write up an review for our Cafe. You more than welcome anytime to our Cafe. It was a pleasure to serve you all.",
      localGuide: "Local Guide · 21 reviews",
    },
    {
      reviewer: "Jonathan Hunter",
      stars: "5",
      date: "7 months ago",
      text: "Very fair prices, good feed, nice people running it.",
      ownerReply:
        "Hi Jonathan. Very kind of you, for taking the time and writing an review for our Cafe. Looking forward seeing you soon.",
      localGuide: "Local Guide · 11 reviews · 87 photos",
    },
    {
      reviewer: "zoe :P",
      stars: "5",
      date: "7 months ago",
      text: "Best poached eggs in edinburgh, really sweet staff and cute decor",
      ownerReply:
        "Hi Zoe. Thank you for taking the time and writing an review for our Cafe.",
      localGuide: "3 reviews · 1 photo",
    },
    {
      reviewer: "Nihal Smith",
      stars: "5",
      date: "9 months ago",
      text: "Super cozy place, service was great and cake and smoothie delicious, I recommend!",
      ownerReply:
        "Thank you so much Nihal for taking the time and writing a review for our Cafe. Very kind of you. Looking forward seeing you soon",
      localGuide: "Local Guide · 26 reviews · 15 photos",
    },
    {
      reviewer: "Scott",
      stars: "5",
      date: "10 months ago",
      text: "Excellent coffee. Victoria sponge unforgettable, so good! Service was brilliant too. Highly recommended.",
      ownerReply:
        "Thank you so much Scott for leaving as such nice comment. Looking forward seeing you again.",
      localGuide: "3 reviews",
    },
    {
      reviewer: "Cameron",
      stars: "5",
      date: "11 months ago",
      text: "Consistently friendly staff and an excellent cup of coffee.",
      ownerReply:
        "Thank you Cameron for this nice review. Looking forward seeing you soon",
      localGuide: "Local Guide · 23 reviews",
    },
    {
      reviewer: "Saranjeet Kaur",
      stars: "5",
      date: "11 months ago",
      text: "Nice cozy cafe with very kind staff!",
      ownerReply:
        "Hi Saranjeet.\nThank you very much for such a nice comment and 5 star rating. That's very kind of you",
      localGuide: "14 reviews · 6 photos",
    },
    {
      reviewer: "Niels Gloudemans",
      stars: "5",
      date: "Edited a year ago",
      text: "The breakfast was grand, super nice service. Hosts are working very hard to make you feel welcome (and even speak a little bit Dutch!). A truly welcoming neighbourhood spot.",
      ownerReply:
        "Thank you guys for the comment. Danke danke and looking forward seeing you again",
      localGuide: "Local Guide · 27 reviews · 20 photos",
    },
    {
      reviewer: "Alan Smith",
      stars: "5",
      date: "a year ago",
      text: "Perfect wee cafe. It ticks all the boxes and never disappoints.",
      ownerReply:
        "Thank you Alan for your lovely comment. Looking forward seeing you soon.",
      localGuide: "10 reviews",
    },
    {
      reviewer: "Silviu Ciobanu",
      stars: "5",
      date: "a year ago",
      text: "Very tasty and very friendly",
      ownerReply:
        "Hi Silviu.\nThank you for the 5 star review and for a nice comment. \nLooking forward seeing you again",
      localGuide: "7 reviews · 1 photo",
    },
    {
      reviewer: "M. J.",
      stars: "5",
      date: "a year ago",
      text: "Very kind service and nice ambience. Good vegan and also decaf coffee.\n\n10/10 would come again.",
      ownerReply:
        "Thank you M.J for the 5 star rate and for the nice comment. Looking forward to seeing you again.",
      localGuide: "Local Guide · 166 reviews · 40 photos",
    },
    {
      reviewer: "Charlie",
      stars: "4",
      date: "a year ago",
      text: "Fast and great breakfast. Eggs Benny is absolutely on point.",
      ownerReply: "",
      localGuide: "Local Guide · 703 reviews · 592 photos",
    },
    {
      reviewer: "Carrie Quinn",
      stars: "5",
      date: "a year ago",
      text: "Best coffee in Morningside and the staff are all so welcoming and friendly!",
      ownerReply: "",
      localGuide: "3 reviews",
    },
    {
      reviewer: "Mhairi Horsburgh",
      stars: "5",
      date: "a year ago",
      text: "Such a lovely cafe, prices are amazing for the quality of food, good service.",
      ownerReply: "",
      localGuide: "2 reviews",
    },
    {
      reviewer: "Robert M",
      stars: "5",
      date: "a year ago",
      text: "We had a lovely lunch today with great service and a huge selection of soft drinks. Thank you folks",
      ownerReply: "",
      localGuide: "Local Guide · 18 reviews · 1 photo",
    },
    {
      reviewer: "Letetia Grant",
      stars: "5",
      date: "Edited a year ago",
      text: "I want to say a massive massive thank you to the kind staff who assisted me with a lady who I was looking after and needed a chair to rest for a while. They gave her a glass of water and let her sit on one of their chairs in the street. Such genuine kindness from the whole team.",
      ownerReply: "",
      localGuide: "Local Guide · 131 reviews · 91 photos",
    },
    {
      reviewer: "Jacek Budzynski",
      stars: "2",
      date: "2 years ago",
      text: "Used to come there frequently under the previous management (back when it was The Rocket Cafe) and unfortunately, I have to say it really went downhill having visited for the first time since the change of name & ownership.",
      ownerReply:
        "Hi there guys first of all thank you for the 2 star review. \nAnd sorry that you were not satisfied with our services at our Cafe today. Just to clarify that you have ordered 2 different meals which are Fresh Mozzarella…",
      localGuide: "Local Guide · 16 reviews · 4 photos",
    },
    {
      reviewer: "Paul Churchill",
      stars: "5",
      date: "2 years ago",
      text: "Drove passed this Sunday morning and Word of mouth looked so inviting. The food was delicious. The service and warm & friendly atmosphere.",
      ownerReply: "",
      localGuide: "Local Guide · 110 reviews · 146 photos",
    },
    {
      reviewer: "Santiago de Riquer Masiá",
      stars: "5",
      date: "2 years ago",
      text: "I have been in Edinburgh for a week visiting. Almost every day I have had breakfast with my best friend at this homely brunch. Everything was delicious, especially the waffles — I have become addicted to those. The staff are wonderful.",
      ownerReply: "",
      localGuide: "Local Guide · 39 reviews · 54 photos",
    },
    {
      reviewer: "Sami",
      stars: "5",
      date: "2 years ago",
      text: "I loved this place, staff was very welcoming, food was delicious and coffee was great. Lovely place to read book or catch up with a friend. I also tried the portokalopita and it was the most authentic version I have had in Edinburgh. I will come back for the baklava for sure, it is good to see real homemade products.",
      ownerReply: "",
      localGuide: "Local Guide · 122 reviews · 288 photos",
    },
    {
      reviewer: "Michelle Scott",
      stars: "4",
      date: "2 years ago",
      text: "Really tasty eggs benedicts which are cooked fresh. Great coffee too",
      ownerReply: "",
      localGuide: "Local Guide · 100 reviews · 37 photos",
    },
    {
      reviewer: "Steven M",
      stars: "3",
      date: "2 years ago",
      text: "Had a coffee it was average",
      ownerReply:
        "Hi Steven. Sorry to hear that our coffee wasn't as good as you wanted. We always trying to serve our coffees as fresh as possible. Come back and get another coffee on the house and we will make sure you will like it this time.",
      localGuide: "Local Guide · 253 reviews · 345 photos",
    },
    {
      reviewer: "Laura",
      stars: "5",
      date: "2 years ago",
      text: "One of my favorite brunches of all times, my friend and I had breakfast at this cafe on our first morning in Edinburgh. We loved this cafe, the servers were extremely nice and welcoming and even gave us practical information we needed for our trip.",
      ownerReply: "",
      localGuide: "Local Guide · 19 reviews · 33 photos",
    },
    {
      reviewer: "Lea Christensen",
      stars: "5",
      date: "2 years ago",
      text: "Cosy cafe and good breakfast",
      ownerReply: "",
      localGuide: "Local Guide · 34 reviews · 26 photos",
    },
    {
      reviewer: "Emma M",
      stars: "5",
      date: "2 years ago",
      text: "Tried here for the first time today and enjoyed our visit. The Croque tuna was delicious and my husband loved the soup and steak ciabatta. Service was super friendly too, will definitely be back :)",
      ownerReply: "",
      localGuide: "13 reviews · 1 photo",
    },
    {
      reviewer: "Julia Mcglew",
      stars: "5",
      date: "2 years ago",
      text: "The spanakopita is delicious. Warm service and atmosphere- highly recommend a visit.",
      ownerReply: "",
      localGuide: "3 reviews",
    },
    {
      reviewer: "Emma Straughan",
      stars: "5",
      date: "2 years ago",
      text: "Great little spot. Staff were very friendly and the food was really tasty",
      ownerReply: "",
      localGuide: "Local Guide · 17 reviews",
    },
    {
      reviewer: "Chris A",
      stars: "5",
      date: "2 years ago",
      text: "An amazing place for coffee, brunch or desserts. The people who run the store are very polite and friendly and most definitely make you feel welcome. The food is well prepared with fresh ingredients and good portions. The value for money is excellent.",
      ownerReply:
        "Thank you Chris for such nice comment for our Cafe. Hopefully see you soon.",
      localGuide: "Local Guide · 117 reviews · 665 photos",
    },
    {
      reviewer: "Pat Lok",
      stars: "5",
      date: "2 years ago",
      text: "Lovely coffee and cakes!",
      ownerReply: "",
      localGuide: "Local Guide · 71 reviews · 221 photos",
    },
    {
      reviewer: "Oxana Munteanu",
      stars: "5",
      date: "2 years ago",
      text: "It's so cozy at their place! Very good breakfast! I recommend!",
      ownerReply: "",
      localGuide: "8 reviews · 1 photo",
    },
    {
      reviewer: "Jean Bukata",
      stars: "5",
      date: "2 years ago",
      text: "Amazing food, well cooked and generous portions. Friendly, professional staff and lovely relaxed ambiance. Cannot recommend highly enough.",
      ownerReply: "",
      localGuide: "Local Guide · 27 reviews · 1 photo",
    },
    {
      reviewer: "Cate Garrow",
      stars: "5",
      date: "2 years ago",
      text: "Nice friendly staff, great food, gluten free no problem. A good morning!",
      ownerReply: "",
      localGuide: "5 reviews",
    },
    {
      reviewer: "ClaireB",
      stars: "5",
      date: "2 years ago",
      text: "Enjoyed tasty toasty drinks & cake in the Word of Mouth cafe in Morningside on a very wet Saturday last weekend. Great atmosphere and very flavoursome cake/drinks. Outstanding cafe, highly recommend.",
      ownerReply: "",
      localGuide: "Local Guide · 19 reviews · 41 photos",
    },
    {
      reviewer: "Tou Design",
      stars: "5",
      date: "2 years ago",
      text: "Very lovely and cosy place, everyone was very friendly",
      ownerReply: "",
      localGuide: "2 reviews · 2 photos",
    },
    {
      reviewer: "Triona Clarke",
      stars: "5",
      date: "2 years ago",
      text: "Just tried for first time, and my husband and I LOVED it. We will definitely be back as lots to try on menu. Service was brilliant and so friendly too. Thank You!",
      ownerReply: "",
      localGuide: "Local Guide · 22 reviews · 25 photos",
    },
    {
      reviewer: "Sophie Sutton",
      stars: "5",
      date: "2 years ago",
      text: "Perfect spot for lunch, delicious food and coffee, really friendly staff. Lovely!",
      ownerReply: "",
      localGuide: "Local Guide · 28 reviews · 26 photos",
    },
    {
      reviewer: "Tom Perman",
      stars: "5",
      date: "2 years ago",
      text: "We came here for lunch and had the Lemon Chicken Flatbread and Croque Veggie - both delicious and generous portions!",
      ownerReply: "",
      localGuide: "Local Guide · 60 reviews · 330 photos",
    },
    {
      reviewer: "Nico Aguillón",
      stars: "5",
      date: "a year ago",
      text: "What a lovely experience! We went to this place because we could not find a table in our first option and we are so glad we did. The food was excellent, portions generous and staff delightful.",
      ownerReply: "",
      localGuide: "Local Guide · 101 reviews · 250 photos",
    },
  ],
  // All photoUrls from JSON — all 45 images
  photoUrls: Array.from({ length: 147 }, (_, i) => {
    // i starts at 0, which matches our new "photo-000.jpg"
    const photoNumber = String(i).padStart(3, "0");
    return `/gallery/photo-${photoNumber}.jpg`;
  }),
};

export const parsedHours: ParsedHours[] = [
  { day: "Monday", hours: "9 AM – 4:30 PM" },
  { day: "Tuesday", hours: "9 AM – 4:30 PM" },
  { day: "Wednesday", hours: "9 AM – 4:30 PM" },
  { day: "Thursday", hours: "9 AM – 4:30 PM" },
  { day: "Friday", hours: "9 AM – 4:30 PM" },
  { day: "Saturday", hours: "9 AM – 4:30 PM" },
  { day: "Sunday", hours: "9 AM – 4:30 PM" },
];

// ── Menu — updated from JSON menu data ──
export const menuItems: MenuItem[] = [
  // ── Coffee (all two shots) ──
  {
    name: "Latte",
    description: "Espresso with silky steamed milk",
    category: "Coffee",
    price: "£3.70",
  },
  {
    name: "Cappuccino",
    description: "Classic Italian espresso with thick foam",
    category: "Coffee",
    price: "£3.70",
  },
  {
    name: "Flat White",
    description: "Double ristretto with velvety steamed milk",
    category: "Coffee",
    price: "£3.50",
  },
  {
    name: "Americano",
    description: "Espresso with hot water, smooth and rich",
    category: "Coffee",
    price: "£3.30",
  },
  {
    name: "Espresso",
    description: "Short and intense, straight from the machine",
    category: "Coffee",
    price: "£2.90",
  },
  {
    name: "Macchiato",
    description: "Espresso with a dash of steamed milk foam",
    category: "Coffee",
    price: "£3.30",
  },
  {
    name: "Cortado",
    description: "Equal parts espresso and warm milk",
    category: "Coffee",
    price: "£3.30",
  },
  {
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    category: "Coffee",
    price: "£3.90",
  },
  {
    name: "Chai Latte",
    description: "Spiced chai blend with steamed milk",
    category: "Coffee",
    price: "£3.90",
  },
  {
    name: "Mumbai Chai",
    description: "Traditional spiced Indian tea preparation",
    category: "Coffee",
    price: "£3.90",
  },
  {
    name: "Hot Chocolate",
    description: "Rich and creamy hot chocolate",
    category: "Coffee",
    price: "£3.90",
  },
  {
    name: "Dirty Chai",
    description: "Chai latte with an espresso shot",
    category: "Coffee",
    price: "£4.50",
  },
  {
    name: "Orange Hot Chocolate",
    description: "Hot chocolate with a hint of orange",
    category: "Coffee",
    price: "£4.50",
  },
  {
    name: "Iced Latte / Iced Chai Latte",
    description: "Espresso or chai over ice, your choice of milk",
    category: "Coffee",
    price: "£4.50",
    badge: "Popular",
  },
  {
    name: "Iced Mocha",
    description: "Espresso, chocolate and milk over ice",
    category: "Coffee",
    price: "£4.60",
  },
  {
    name: "Freddo Cappuccino",
    description: "Greek-style iced frothy cappuccino",
    category: "Coffee",
    price: "£4.80",
  },
  {
    name: "Freddo Espresso",
    description: "Greek-style iced espresso with cold foam",
    category: "Coffee",
    price: "£4.50",
  },
  {
    name: "Frappe",
    description: "Classic blended iced coffee",
    category: "Coffee",
    price: "£4.50",
  },
  {
    name: "Iced Americano",
    description: "Espresso over ice with cold water",
    category: "Coffee",
    price: "£3.70",
  },
  // ── Coffee Beans ──
  {
    name: "Coffee Beans — 250g",
    description: "Freshly roasted coffee beans — see display for options",
    category: "Coffee",
    price: "£8.95",
  },
  {
    name: "Coffee Beans — 500g",
    description: "Freshly roasted coffee beans — see display for options",
    category: "Coffee",
    price: "£16.00",
  },
  {
    name: "Coffee Beans — 1kg",
    description: "Freshly roasted coffee beans — see display for options",
    category: "Coffee",
    price: "£30.00",
  },

  // ── Breakfast (served all day — no swaps) ──
  {
    name: "Full Breakfast",
    description:
      "Cumberland sausage, bacon, black pudding, free range fried egg, mushroom, tomato, beans, potato scone and toast",
    category: "Food",
    price: "£12.95",
    badge: "Signature",
  },
  {
    name: "Veggie Breakfast",
    description:
      "Sausages, free range fried egg, tomato, mushrooms, beans, potato scone and toast",
    category: "Food",
    price: "£11.95",
    badge: "Loved",
  },
  {
    name: "Eggs Benedict",
    description:
      "Free range poached eggs with bacon, English muffin and hollandaise sauce",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Eggs Florentine",
    description:
      "Free range poached eggs with wilted spinach, English muffin and hollandaise sauce",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Eggs Royale",
    description:
      "Free range poached eggs with Scottish smoked salmon, English muffin and hollandaise sauce",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Poached Eggs",
    description: "Served with grilled bacon and thick cut toast",
    category: "Food",
    price: "£9.95",
  },
  {
    name: "Croissant",
    description: "Honey roasted ham and cheddar cheese, served warm",
    category: "Food",
    price: "£5.95",
  },
  {
    name: "Yoghurt",
    description: "Greek natural yoghurt with berry compote, granola and honey",
    category: "Food",
    price: "£6.95",
  },
  {
    name: "Belgium Waffles",
    description:
      "Served hot with honey or golden syrup — add bacon or mixed berry for £9.95",
    category: "Food",
    price: "£6.50",
    badge: "House Favourite",
  },
  {
    name: "Ciabatta",
    description:
      "One filling included — choose from Bacon, Egg, Sausage or Black Pudding. Extra fillings £3.00 each",
    category: "Food",
    price: "£4.95",
  },

  // ── Lunch (served all day) ──
  {
    name: "Soup of the Day",
    description: "Served with bread and butter — ask staff for today's option",
    category: "Food",
    price: "£5.95",
  },
  {
    name: "Croque Monsieur",
    description:
      "Grilled French sandwich with honey roast ham and mature cheddar cheese, served with mixed green salad",
    category: "Food",
    price: "£9.95",
  },
  {
    name: "Croque Madame",
    description:
      "As Monsieur with a free range egg added, served with mixed green salad",
    category: "Food",
    price: "£11.95",
  },
  {
    name: "Croque Veggie",
    description: "With roasted vegetables, served with mixed green salad",
    category: "Food",
    price: "£9.95",
  },
  {
    name: "Croque Chicken",
    description: "Grilled chicken croque, served with mixed green salad",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Croque Bacon",
    description: "Bacon croque, served with mixed green salad",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Croque Tuna",
    description: "Tuna croque, served with mixed green salad",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Steak Sandwich",
    description:
      "4oz steak with spinach, caramelised onions, tomato and horseradish on ciabatta",
    category: "Food",
    price: "£12.95",
  },
  {
    name: "Fresh Mozzarella Sandwich",
    description: "Tomato, green salad, basil pesto and yoghurt sauce",
    category: "Food",
    price: "£7.95",
  },
  {
    name: "Lemon Chicken Flatbread",
    description:
      "Grilled chicken with roast vegetables and garlic yoghurt sauce on Turkish flatbread",
    category: "Food",
    price: "£10.95",
  },
  {
    name: "Spanakopita",
    description:
      "Greek spinach pie — filo pastry filled with spinach, feta cheese & spring onions, served with mixed green salad",
    category: "Food",
    price: "£8.95",
  },

  // ── Cakes & Pastries ──
  {
    name: "Victoria Sponge",
    description: "Classic British sponge, strawberry jam, fresh cream",
    category: "Cakes",
    badge: "House Favourite",
  },
  {
    name: "Portokalopita",
    description: "Greek orange syrup cake — authentic homemade recipe",
    category: "Cakes",
    badge: "Unique",
  },
  {
    name: "Baklava",
    description: "Layered pastry with honey, walnuts and spice",
    category: "Cakes",
  },
  {
    name: "Carrot Cake",
    description: "Spiced cake with cream cheese frosting",
    category: "Cakes",
  },
  {
    name: "Brownie",
    description: "Dense dark chocolate, slightly gooey centre",
    category: "Cakes",
  },
  {
    name: "Seasonal Tart",
    description: "Rotating selection — ask your server today",
    category: "Cakes",
  },

  // ── Drinks ──
  {
    name: "Breakfast Tea",
    description: "Classic black tea",
    category: "Drinks",
    price: "£2.60",
  },
  {
    name: "Loose Herbal Tea",
    description:
      "Choose from Peppermint, Green Tea, Camomile, Mint & Apple, Earl Grey or Red Berry",
    category: "Drinks",
    price: "£3.20",
  },
  {
    name: "Fresh Orange Juice",
    description: "Squeezed to order",
    category: "Drinks",
    price: "£3.90",
  },
  {
    name: "Smoothie",
    description: "Mixed Berry or Strawberry & Banana",
    category: "Drinks",
    price: "£4.50",
    badge: "Popular",
  },
  {
    name: "Milkshake",
    description: "Chocolate, Vanilla or Coconut",
    category: "Drinks",
    price: "£4.50",
  },
  {
    name: "Fentimans",
    description: "Victoria Lemonade, Ginger Beer or Mandarine & Orange",
    category: "Drinks",
    price: "£3.50",
  },
  {
    name: "Sanpellegrino",
    description: "Sparkling Orange or Lemon",
    category: "Drinks",
    price: "£2.95",
  },
  {
    name: "Coca Cola / Diet Coca Cola",
    description: "Chilled bottled Coke",
    category: "Drinks",
    price: "£2.95",
  },
  {
    name: "Irn Bru / Diet Irn Bru",
    description: "Scotland's other national drink",
    category: "Drinks",
    price: "£2.95",
  },
  {
    name: "Appletiser / Elderflower",
    description: "Refreshing bottled fruit drinks",
    category: "Drinks",
    price: "£3.50",
  },
  {
    name: "Bottled Water",
    description: "Still water",
    category: "Drinks",
    price: "£2.50",
  },
];

// ── Menu notes ──
export const menuNotes = {
  breakfastNote: "No swaps, thank you.",
  sweetTreats:
    "See our display case for a large selection of home baked cakes.",
  dietaryOptions:
    "Gluten-Free options available (ask the staff for more information)",
};

// ── Coffee customizations ──
export const coffeeCustomizations = {
  alternativeMilk: {
    options: ["Soya", "Almond", "Coconut", "Oat"],
    price: "£0.50",
  },
  extraShot: "£0.50",
};

export const menuCategories = [
  "All",
  "Coffee",
  "Food",
  "Cakes",
  "Drinks",
] as const;
export type MenuCategory = (typeof menuCategories)[number];
