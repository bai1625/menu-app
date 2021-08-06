const Menu = [
  {
    id: 1,
    image: "image/maggie.jpg",
    name: "maggi",
    catagory: "Breakfast",
    price: "12",
    description:
      "The company originated in Switzerland in 1884, when Julius Maggi took over his father's mill. He quickly became a pioneer of industrial food production, aiming to improve the nutritional intake of worker families. Maggi was the first to bring protein-rich legume meals to the market, and followed up with a ready-made soup based on legume meals in 1886. After that Julius Maggi introduced bouillon concentrates, first in capsules, then in cubes. In 1897, Julius Maggi founded the company Maggi GmbH in Singen, Germany",
  },
  {
    id: 2,
    image: "image/allupakodia.jpg",
    name: "alu pakoda",
    catagory: "Breakfast",
    price: 25,
    description:
      "Pakoras are made by coating ingredients, usually vegetables, in a spiced batter, then deep frying them.Common varieties of pakora use onion, eggplant, potato, spinach, plantain, paneer, cauliflower, tomato, or chili pepper,[5] but other foodstuffs can be made into pakoras such as meat or fish.The batter is most commonly made with gram flour but variants can use other flours, such as buckwheat flour. The spices used in the batter are up to the cook and may be chosen due to local tradition or availability; often these include fresh and dried spices such as chilli, fenugreek and coriander.",
  },
  {
    id: 3,
    image: "image/cornchat.jpg",
    name: "corn chat",
    catagory: "evening snacks",
    price: 30,
    description:
      "Sweet corn occurs as a spontaneous mutation in field corn and was grown by several Native American tribes. The Iroquois gave the first recorded sweet corn (called 'Papoon') to European settlers in 1779.[3] It soon became a popular food in the southern and central regions of the United States",
  },

  {
    id: 4,
    image: "image/pizza.jpg",
    name: "pizza",
    catagory: "evening snacks",
    price: 150,
    description:
      "Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo",
  },
  {
    id: 5,
    image: "image/cold.jpg",
    name: "cold coffee",
    catagory: "evening snacks",
    price: 50,
    description:
      "Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee in the normal way and then serving it over ice or in cold milk, or by brewing the coffee cold. In hot brewing, sweeteners and flavoring may be added before cooling, as they dissolve faster. Iced coffee can also be sweetened with pre-dissolved sugar in water.",
  },
  {
    id: 6,
    image: "image/burger.jpg",
    name: "burger",
    catagory: "evening snacks",
    price: 50,
    description:
      "A recipe for toast sandwiches is included in the invalid cookery section of the 1861 Book of Household Management by Isabella Beeton, who adds, This sandwich may be varied by adding a little pulled meat, or very fine slices of cold ",
  },
  {
    id: 7,
    image: "image/bread.jpg",
    name: "bread toast",
    catagory: "Breakfast",
    price: 50,
    description:
      "A recipe for toast sandwiches is included in the invalid cookery section of the 1861 Book of Household Management by Isabella Beeton, who adds, This sandwich may be varied by adding a little pulled meat, or very fine slices of cold meat, to the toast, and in any of these forms will be found very tempting to the appetite of an invalid",
  },
  {
    id: 8,
    image: "image/paratha.jpg",
    name: "Alu paratha",
    catagory: "Breakfast",
    price: 50,
    description:
      "Aloo Paratha  is a bread dish originating from the Indian subcontinent.[1] It is a breakfast dish originated from the Punjab region.[2] The recipe is one of the most popular breakfast dishes throughout the western, central and northern regions of India as well as the eastern regions of Pakistan.[3] Aloo parathas consist of unleavened dough rolled with a mixture of mashed potato and spices, which is cooked on a hot tawa with butter or ghee.[4] Aloo paratha[5] is usually served with butter, chutney, or Indian pickles in different parts of northern and western India",
  },
  {
    id: 9,
    image: "image/chole.jpg",
    name: "Chole bhature",
    catagory: "lunch",
    price: 150,
    description:
      "Chole bhature (Hindi: छोले भटूरे) is a food dish popular in the Northern areas of the Indian subcontinent.[1] It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida.[2][3] Although it is known as a typical Punjabi dish,[4] there are varied claims around the origin of dish",
  },
  {
    id: 10,
    image: "image/rajma.jpg",
    name: "Rajma chawal",
    catagory: "lunch",
    price: 150,
    description:
      "Rājmā[2] [raːdʒmaː] (Hindi: राजमा, Urdu: راجما‎), also known as Rāzmā or Lal Lobia, is a vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice. It is a part of regular diet in Northern India and Pakistan.[1] The dish developed after the red kidney bean was brought to the Indian subcontinent from Mexico.[3] Rajma chawal is kidney beans served with boiled rice",
  },
  {
    id: 11,
    image: "image/hakka.jpg",
    name: "Hakka noodles",
    catagory: "dinner",
    price: 150,
    description:
      "akka cuisine is the cooking style of the Hakka people, and it may also be found in parts of Taiwan and in countries with significant overseas Hakka communities.[1] There are numerous restaurants in Taiwan, Hong Kong, Indonesia, Malaysia, Singapore, India and Thailand serving Hakka cuisine. Hakka cuisine was listed in 2014 on the first Hong Kong Inventory of Intangible Cultural Heritage",
  },
  {
    id: 12,
    image: "image/chilli.jpg",
    name: "chilli panner",
    catagory: "dinner",
    price: 150,
    description:
      "Indian Chinese cuisine, Indo-Chinese cuisine, Desi-Chinese cuisine, Sino-Indian cuisine, Chindian cuisine or Chindi cuisine is a distinct culinary style which combines aspects of both Indian and Chinese foods and flavours. Though the cuisines have mixed throughout history both through trade and geographical influence, the most popular origin story of the fusion food resides with the original Chinese ethnic community of Kolkata, who immigrated to India looking for better prospects and a better life around 250 years ago.[1] Opening restaurant businesses in the area, these early Chinese immigrants adapted their culinary styles to suit the tastes of their Indian patrons.",
  },
  {
    id: 13,
    image: "image/kabab.jpg",
    name: "kabab",
    catagory: "dinner",
    price: 150,
    description:
      "In many parts of Asia, the Muslim world, and in Indian English[1][2] and the languages of the Middle East, a kebab is any of a wide variety of grilled meat dishes. Some dishes ultimately derived from Middle Eastern kebab may have different names in their local languages, such as the Chinese chuan. In North America, a kebab is commonly the classic Turkish shish kebab or shashlik – small cubes of meat cooked on a skewer[3][4] – or, outside of North America where it is better known as gyros,[5] the more recent and now-ubiquitous fast-food doner kebab.",
  },
  {
    id: 14,
    image: "image/ll.jpg",
    name: "lassi",
    catagory: "drinks",
    price: 150,
    description:
      "Lassi (pronounced [ləsːi]) is a regional name for buttermilk, the traditional dahi (yogurt)-based drink in the Uttar Pradesh. Lassi is a blend of yogurt, water, spices and sometimes fruit. Namkeen (salty) lassi is similar to doogh, while sweet and mango lassis are like milkshakes. Lassi may be infused with cannabis in the form of bhang.",
  },
  {
    id: 15,
    image: "image/pp.jpg",
    name: "lemonade",
    catagory: "dinner",
    price: 150,
    description:
      "here are varieties of lemonade found throughout the world.[1] In North America and South Asia, cloudy lemonade dominates. It is traditionally a homemade drink using lemon juice, water, and a sweetener such as cane sugar, simple syrup or honey.[2] In the United Kingdom and Australia, clear lemonade and yellow lemonade, a carbonated drink, is more common.[3][self-published source?] Despite the differences between the drinks, each is known simply as  in countries where it is dominant",
  },
  {
    id: 11,
    image: "image/dal.jpg",
    name: "Dal tadka",
    catagory: "lunch",
    price: 150,
    description:
      "Dal (also spelled daal; pronunciation: [d̪aːl]) is a term originating in the South Asia for dried, split pulses (e.g., lentils, peas, and beans) that do not require soaking before cooking. Certain regions in Bangladesh and India are the largest producers of pulses in the world.[1][2] The term is also used for various soups prepared from these pulses. These pulses are among the most important staple foods in South Asian countries, and form an important part of the cuisines of South Asia.[",
  },
];
export default Menu;
