import { BlogPost } from './types';

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Secret to the Perfect Sourdough Starter',
    excerpt: 'Unlock the tangy, airy goodness of homemade sourdough with our head chef\'s proven fermentation guide.',
    content: `
# The Journey to the Perfect Loaf

Sourdough is more than just bread; it is a living, breathing entity that requires patience, care, and a little bit of science. At *Savor & Stories*, we believe that the soul of the kitchen lives in our starter, "Bubbly Bob".

## Why Wild Yeast?

Commercial yeast is consistent, fast, and easy. But wild yeast—captured from the very air we breathe—adds a complexity of flavor that cannot be replicated. The lactic acid bacteria produced during fermentation gives sourdough its characteristic tang and makes it easier to digest.

## The Feeding Schedule

consistency is key. We feed Bob twice a day:
1.  **Morning (8:00 AM):** A heavy feed to get him through the service prep.
2.  **Evening (8:00 PM):** A maintenance feed to keep him active overnight.

> "Bread baking is one of those almost hypnotic businesses, like a dance from some ancient ceremony." - *Chef Marco*

Join us next week for a workshop on shaping and scoring!
    `,
    author: 'Chef Marco',
    date: 'October 12, 2023',
    imageUrl: 'https://picsum.photos/id/1084/800/600',
    tags: ['Baking', 'Technique', 'Bread'],
  },
  {
    id: '2',
    title: 'Autumn Harvest: Pumpkin & Sage Risotto',
    excerpt: 'Embrace the cooling weather with this comforting, creamy Italian classic featuring roasted pumpkin.',
    content: `
# A Warm Hug in a Bowl

As the leaves turn golden, our menu shifts to embrace root vegetables and hearty grains. This week, we're spotlighting our Pumpkin & Sage Risotto.

## Ingredients Matter

We source our pumpkins from local farms just 20 miles away. The sweetness of the roasted pumpkin balances perfectly with the earthy, pine-like aroma of fresh sage.

### Tips for the Home Cook:
*   **Toast the Rice:** Never skip toasting your Arborio rice. It creates a shell around the grain that prevents it from turning to mush.
*   **Hot Stock:** Keep your vegetable stock simmering in a separate pot. Adding cold stock shocks the rice and slows down cooking.
*   **Mantecatura:** The final step involves vigorously stirring in cold butter and parmesan off the heat. This creates the signature creamy texture.

Come taste it this weekend!
    `,
    author: 'Sous Chef Elena',
    date: 'November 5, 2023',
    imageUrl: 'https://picsum.photos/id/292/800/600',
    tags: ['Seasonal', 'Recipe', 'Italian'],
  },
  {
    id: '3',
    title: 'Wine Pairing 101: Reds and Roasts',
    excerpt: 'Navigating the complex world of tannins and acidity to find the perfect bottle for your Sunday roast.',
    content: `
# Elevating the Roast

A Sunday roast is a tradition, but the right wine transforms it into an event. 

## Understanding Tannins

When eating rich, fatty meats like lamb or beef rib, you need a wine with structure. Tannins (found in red grape skins) bind to proteins and fats, cleansing the palate.

*   **Cabernet Sauvignon:** The classic choice. Bold, high tannins, notes of blackcurrant.
*   **Syrah/Shiraz:** Spicy and peppery. Fantastic with herb-crusted lamb.
*   **Pinot Noir:** If you're roasting a chicken or pork loin, this lighter red with high acidity is your best friend.

Don't be afraid to ask our sommelier for a recommendation next time you dine with us.
    `,
    author: 'Sommelier James',
    date: 'November 18, 2023',
    imageUrl: 'https://picsum.photos/id/431/800/600',
    tags: ['Wine', 'Education', 'Dinner'],
  },
  {
    id: '4',
    title: 'Farm to Table: A Visit to Green Valley',
    excerpt: 'We took a team trip to our primary vegetable supplier to see where the magic begins.',
    content: `
# Roots of Flavor

At *Savor & Stories*, "Farm to Table" isn't just a marketing slogan; it's our logistics strategy. Last Monday, we closed the kitchen and took the whole team to Green Valley Farms.

## The Soil

Farmer John showed us his composting methods. The richness of the soil directly translates to the nutrient density and flavor of the carrots and beets we serve. 

We even got to harvest some of the late-season kale that will be featured in tonight's special salad. Connecting with the source of our ingredients instills a sense of respect in our cooks. When you know how hard it was to grow that tomato, you're less likely to waste it.
    `,
    author: 'Chef Marco',
    date: 'December 1, 2023',
    imageUrl: 'https://picsum.photos/id/225/800/600',
    tags: ['Sustainability', 'Events', 'Team'],
  }
];