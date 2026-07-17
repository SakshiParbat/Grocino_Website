import Butter from '../../assets/butter.png'
import Strawberry from '../../assets/strawberry.png'
import Eggs from '../../assets/eggs.png'
import Cabbage from '../../assets/cabbage.png'
import Eggplant from '../../assets/eggplant.png'
import Shrimp from '../../assets/shrimp.png'
import Kiwi from '../../assets/kiwi.png'
import Capsicum from '../../assets/capsicum.png'
import Broccoli from '../../assets/broccoli.png'
import Yogurt from '../../assets/yogurt.png'
import Beef from '../../assets/beef.png'
import ChikenBreast from '../../assets/chicken-breast.png'
import Kale from '../../assets/kale.png'
import Cheese from '../../assets/cheese.png'
import CondensedMilk from '../../assets/condensed-milk.png'
import Salmon from '../../assets/salmon.png'
import Banana from '../../assets/banana.png'
import Milk from '../../assets/milk.png'
import Pineapple from '../../assets/pineapple.png'
import Tofu from '../../assets/tofu.png'
import Tilapia from '../../assets/tilapia.png'
import SliceCheese from '../../assets/slice-cheese.png'
import RicottaCheese from '../../assets/ricotta-cheese.png'
import Grapes from '../../assets/grapes.png'
import Lettuce from '../../assets/lettuce.png'
import BabyOctopus from '../../assets/Baby_Octopus-removebg-preview.png'
import Beetroot from '../../assets/Beetroot-removebg-preview.png'
import BotanicalMoringaLeaves from '../../assets/Botanical_Moringa_Leaves-removebg-preview.png'
import Coriender from '../../assets/Coriender-removebg-preview.png'
import EdibleCrab from '../../assets/Edible_Crab-removebg-preview.png'
import OpenShells from '../../assets/Fresh_Sea_River_Mussels_With_Open_Shells-removebg-preview.png'
import Garlic from '../../assets/Garlic-removebg-preview.png'
import Ginger from '../../assets/Ginger-removebg-preview.png'
import GreenChilli from '../../assets/Green_Chilli-removebg-preview.png'
import Mango from '../../assets/Mango-removebg-preview.png'
import Matar from '../../assets/Matar-removebg-preview.png'
import RedChilli from '../../assets/Red_Chilli-removebg-preview.png'
import MintLeaves from "../../assets/Mint-Leaves-removebg-preview.png";
import Mussel from '../../assets/Mussel-removebg-preview.png'
import Onion from '../../assets/Onion-removebg-preview.png'
import Palak from '../../assets/Palak-removebg-preview.png'
import Prawns from '../../assets/Prawns-removebg-preview.png'
import RedSpinach from '../../assets/Red_Spinach-removebg-preview.png'
import Papaya from '../../assets/Papaya-removebg-preview.png'
import RawFish from '../../assets/Raw_Fish-removebg-preview.png'
import SquidRings from "../../assets/squid-rings-removebg-preview.png";
import Sugarcane from "../../assets/sugar-cane-removebg-preview.png";
import Lemon from "../../assets/Lemon-removebg-preview.png";
import BabySquid from '../../assets/Baby-Squid-removebg-preview.png'
import BombilBombayDuck from '../../assets/Bombil-Bombay_Duck-removebg-preview.png'
import CarideaPrawnsShrimp from '../../assets/Caridea-Prawns-Shrimp-removebg-preview.png'
import PrawnsRemovebg from '../../assets/Prawns-removebg-preview.png'
import PuntillaBabySquid from '../../assets/Puntilla-Baby-Squid-removebg-preview.png'
import Shellfish from '../../assets/Shellfish-removebg-preview.png'
import SilverPomfret from '../../assets/Silver-Pomfret-removebg-preview.png'
import TheBombayDuck from '../../assets/The-Bombay-Duck-removebg-preview.png'




const Products = [
  {
    id: 1,
    title: 'Strawberry',
    price: '3.0',
    category: 'Fruits',
    image: Strawberry,
  },

  {
    id: 2,
    title: 'Butter',
    price: '3.5',
    category: 'Dairy',
    image: Butter,
  },

  {
    id: 3,
    title: 'Eggs',
    price: '2.05',
    category: 'Dairy',
    image: Eggs,
  },

  {
    id: 4,
    title: 'Cabbage',
    price: '3.0',
    category: 'Vegetables',
    image: Cabbage,
  },

  {
    id: 5,
    title: 'Eggplant',
    price: '2.5',
    category: 'Vegetables',
    image: Eggplant,
  },

  {
    id: 6,
    title: 'Shrimp',
    price: '8.0',
    category: 'SeaFood',
    image: Shrimp,
  },

  {
    id: 7,
    title: 'Kiwi',
    price: '4.0',
    category: 'Fruits',
    image: Kiwi,
  },

  {
    id: 8,
    title: 'Capsicum',
    price: '2.0',
    category: 'Vegetables',
    image: Capsicum,
  },

  {
    id: 9,
    title: 'Broccoli',
    price: '3.0',
    category: 'Vegetables',
    image: Broccoli,
  },

  {
    id: 10,
    title: 'Yogurt',
    price: '2.5',
    category: 'Dairy',
    image: Yogurt,
  },

  {
    id: 11,
    title: 'Beef',
    price: '10.0',
    category: 'Meat',
    image: Beef,
  },

  {
    id: 12,
    title: 'Chicken Breast',
    price: '8.0',
    category: 'Meat',
    image: ChikenBreast,
  },

  {
    id: 13,
    title: 'Kale',
    price: '3.0',
    category: 'Vegetables',
    image: Kale,
  },

  {
    id: 14,
    title: 'Cheese',
    price: '4.0',
    category: 'Dairy',
    image: Cheese,
  },

  {
    id: 15,
    title: 'Condensed Milk',
    price: '3.5',
    category: 'Dairy',
    image: CondensedMilk,
  },

  {
    id: 16,
    title: 'Salmon',
    price: '12.0',
    category: 'SeaFood',
    image: Salmon,
  },

  {
    id: 17,
    title: 'Banana',
    price: '2.0',
    category: 'Fruits',
    image: Banana,
  },

  {
    id: 18,
    title: 'Milk',
    price: '2.5',
    category: 'Dairy',
    image: Milk,
  },

  {
    id: 19,
    title: 'Pineapple',
    price: '4.0',
    category: 'Fruits',
    image: Pineapple,
  },

  {
    id: 20,
    title: 'Tofu',
    price: '3.0',
    category: 'Protein',
    image: Tofu,
  },

  {
    id: 21,
    title: 'Tilapia',
    price: '6.0',
    category: 'SeaFood',
    image: Tilapia,
  },

  {
    id: 22,
    title: 'Slice Cheese',
    price: '3.5',
    category: 'Dairy',
    image: SliceCheese,
  },

  {
    id: 23,
    title: 'Ricotta Cheese',
    price: '4.0',
    category: 'Dairy',
    image: RicottaCheese,
  },

  {
    id: 24,
    title: 'Grapes',
    price: '3.0',
    category: 'Fruits',
    image: Grapes,
  },

  {
    id: 25,
    title: 'Lettuce',
    price: '2.0',
    category: 'Vegetables',
    image: Lettuce,
  },

  {
    id: 26,
    title: 'BabyOctopus',
    price: '5.0',
    category: 'SeaFood',
    image: BabyOctopus,
  },

  {
    id: 27,
    title: 'Beetroot',
    price: '2.5',
    category: 'Vegetables',
    image: Beetroot,
  },

  {
    id: 28,
    title: 'Botanical Moringa Leaves',
    price: '3.0',
    category: 'Vegetables',
    image: BotanicalMoringaLeaves,
  },

  {
    id: 29,
    title: 'Coriender',
    price: '1.5',
    category: 'Vegetables',
    image: Coriender,
  },

  {
    id: 30,
    title: 'Edible Crab',
    price: '7.0',
    category: 'SeaFood',
    image: EdibleCrab,
  },

  {
    id: 31,
    title: 'Open Shells',
    price: '6.0',
    category: 'SeaFood',
    image: OpenShells,
  },

  {
    id: 32,
    title: 'Garlic',
    price: '1.0',
    category: 'Vegetables',
    image: Garlic,
  },

  {
    id: 33,
    title: 'Ginger',
    price: '1.5',
    category: 'Vegetables',
    image: Ginger,
  },

  {
    id: 34,
    title: 'Green Chilli',
    price: '1.0',
    category: 'Vegetables',
    image: GreenChilli,
  },

  {
    id: 35,
    title: 'Mango',
    price: '3.0',
    category: 'Fruits',
    image: Mango,
  },

  {
    id: 36,
    title: 'Matar',
    price: '2.0',
    category: 'Vegetables',
    image: Matar,
  },

  {
    id: 37,
    title: 'Red Chilli',
    price: '1.0',
    category: 'Vegetables',
    image: RedChilli,
  },

  {
    id: 38,
    title: 'Mint Leaves',
    price: '1.5',
    category: 'Vegetables',
    image: MintLeaves,
  },

  {
    id: 39,
    title: 'Mussel',
    price: '5.0',
    category: 'SeaFood',
    image: Mussel,
  },

  {
    id: 40,
    title: 'Onion',
    price: '1.0',
    category: 'Vegetables',
    image: Onion,
  },

  {
    id: 41,
    title: 'Palak',
    price: '2.0',
    category: 'Vegetables',
    image: Palak,
  },

  {
    id: 42,
    title: 'Prawns',
    price: '8.0',
    category: 'SeaFood',
    image: Prawns,
  },

  {
    id: 43,
    title: 'Red Spinach',
    price: '2.5',
    category: 'Vegetables',
    image: RedSpinach,
  },

  {
    id: 44,
    title: 'Papaya',
    price: '3.0',
    category: 'Fruits',
    image: Papaya,
  },

  {
    id: 45,
    title: 'Raw Fish',
    price: '7.0',
    category: 'SeaFood',
    image: RawFish,
  },

  {
    id: 46,
    title: 'Squid Rings',
    price: '6.0',
    category: 'SeaFood',
    image: SquidRings,
  },

  {
    id: 47,
    title: 'Sugarcane',
    price: '2.0',
    category: 'Fruits',
    image: Sugarcane,
  },

  {
    id: 48,
    title: 'Lemon',
    price: '1.0',
    category: 'Fruits',
    image: Lemon,
  },

  {
    id: 49,
    title: 'Baby Squid',
    price: '5.0',
    category: 'SeaFood',
    image: BabySquid,
  },

  {
    id: 50,
    title: 'Bombil Bombay Duck',
    price: '6.0',
    category: 'SeaFood',
    image: BombilBombayDuck,
  },

  {
    id: 51,
    title: 'Caridea Prawns Shrimp',
    price: '8.0',
    category: 'SeaFood',
    image: CarideaPrawnsShrimp,
  },

  {
    id: 52,
    title: 'Prawns',
    price: '8.0',
    category: 'SeaFood',
    image: PrawnsRemovebg,
  },

  {
    id: 53,
    title: 'Puntilla Baby Squid',
    price: '5.0',
    category: 'SeaFood',
    image: PuntillaBabySquid,
  },

  {
    id: 54,
    title: 'Shellfish',
    price: '7.0',
    category: 'SeaFood',
    image: Shellfish,
  },

  {
    id: 55,
    title: 'Silver Pomfret',
    price: '9.0',
    category: 'SeaFood',
    image: SilverPomfret,
  },

  {
    id: 56,
    title: 'The Bombay Duck',
    price: '6.0',
    category: 'SeaFood',
    image: TheBombayDuck,
  },


]
  
export default Products;