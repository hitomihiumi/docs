# Cards

`discord-cards` has these cards:
- Rank Card
- Profile Card
- LevelUP Card
- Welcome Card
- Goodbye Card

## Styles

All styles are available in this [repository](https://github.com/hitomihiumi/discord-cards-styles). You don't need to download styles manually, the module will download them itself. You only need to specify the correct name in the `setStyle` function

## Rank Card

The `Rank` card has the following parameters:
- `style` - the style of the card
- `avatar` - the avatar of the user
- `name` - the name of the user
- `background` - the background of the card
- `font` - the font of the text
- `textColor` - the color of the text
- `decorationColor` - the color of the decoration
- `borderColor` - the color of the progress bar
- `progressColor` - the color of the progress bar
- `level` - the level of the user
- `nextLevel` - the next level of the user
- `xp` - the current xp of the user
- `neededXp` - the needed xp of the user
- `totalXp` - the total xp of the user
- `position` - the position of the user
- `levelFontSize` - the font size of the level

```ts
import { RankCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new RankCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the avatar
    .setBackground('https://www.sumadhwaseva.com/wp-content/uploads/2013/10/Grey-Background-Website-Wallpapers-600x200.jpg') // set the background
    .setLevel(10) // set the level
    .setCurrentXp(100) // set the current xp
    .setNeededXp(200) // set the needed xp
    .setProgressColor('#7289da') // set the progress color
    .setTextColor('#ffffff') // set the text color
    .setStyle('base') // set the style
    .setName('Hitomi') // set the name
    .setFont(fonts.opensansBold) // set the font
    .setLevelFontSize(27); // set the level font size


(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/rank.png)

## Profile Card

The `Profile` card has the following parameters:
- `style` - the style of the card
- `avatar` - the avatar of the user
- `name` - the name of the user
- `biography` - the biography of the user
- `background` - the background of the card
- `font` - the font of the text
- `textColor` - the color of the text
- `decorationColor` - the color of the decoration
- `borderColor` - the color of the progress bar
- `progressColor` - the color of the progress bar
- `level` - the level of the user
- `nextLevel` - the next level of the user
- `xp` - the current xp of the user
- `neededXp` - the needed xp of the user
- `totalXp` - the total xp of the user
- `position` - the position of the user
- `levelFontSize` - the font size of the level

```ts
import { ProfileCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new ProfileCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the avatar
    .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg') // set the background
    .setLevel(1) // set the level
    .setCurrentXp(100) // set the current xp
    .setNeededXp(200) // set the needed xp
    .setProgressColor('#7289da') // set the progress color
    .setTextColor('#ffffff') // set the text color
    .setStyle('base') // set the style
    .setName('Hitomi') // set the name
    .setFont(fonts.opensansBold) // set the font
    .setPosition('#1') // set the position
    .setBiography('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'); // set the biography

(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/profile.png)

## LevelUP Card

The `LevelUP` card has the following parameters:
- `style` - the style of the card
- `avatar` - the avatar of the user
- `name` - the name of the user
- `background` - the background of the card
- `font` - the font of the text
- `textColor` - the color of the text
- `decorationColor` - the color of the decoration
- `borderColor` - the color of the progress bar
- `level` - the level of the user
- `previousLevel` - the previous level of the user
- `levelFontSizes` - an array of the font sizes of the levels
- `position` - the position of the user

```ts
import { LevelUPCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new LevelUpCard()
    .setName("Hitomi") // set the name
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the avatar
    .setBackground('https://cs12.pikabu.ru/post_img/big/2021/09/16/10/1631813426193895567.png') // set the background
    .setStyle('base') // set the style 
    .setFont(fonts.opensansBold) // set the font
    .setCurrentLevel(2) // set the current level
    .setPreviousLevel(1) // set the previous level
    .setLevelFontSizes(50, 50) // set the level font sizes

(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/levelup.png)

## Welcome Card

The `Welcome` card has the following parameters:
- `style` - the style of the card
- `avatar` - the avatar of the user
- `name` - the name of the user
- `background` - the background of the card
- `font` - the font of the text
- `textColor` - the color of the text
- `decorationColor` - the color of the decoration
- `borderColor` - the color of the progress bar
- `guild` - the guild of the user
  - `name` - the name of the guild
  - `icon` - the icon of the guild

```ts
import { WelcomeCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new WelcomeCard()
    .setName('Hitomi') // set the name
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the avatar
    .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg') // set the background
    .setFont(fonts.opensansBold) // set the font
    .setStyle('base') // set the style
    .setBorderColor('#fff') // set the border color
    .setTextColor('#fff') // set the text color
    .setGuild('Test'); // set the guild

(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/welcome.png)

## Goodbye Card

The `Goodbye` card has the following parameters:
- `style` - the style of the card
- `avatar` - the avatar of the user
- `name` - the name of the user
- `background` - the background of the card
- `font` - the font of the text
- `textColor` - the color of the text
- `decorationColor` - the color of the decoration
- `borderColor` - the color of the progress bar
- `guild` - the guild of the user
    - `name` - the name of the guild
    - `icon` - the icon of the guild

```ts
import { GoodbyeCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new GoodbyeCard()
    .setName('Hitomi') // set the name
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the avatar
    .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg') // set the background
    .setFont(fonts.opensansBold) // set the font
    .setStyle('base') // set the style
    .setBorderColor('#fff') // set the border color
    .setTextColor('#fff') // set the text color
    .setGuild('Test'); // set the guild

(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```
![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/goodbye.png)