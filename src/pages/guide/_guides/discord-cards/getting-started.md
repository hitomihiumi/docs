# Getting Started

`discord-cards` is a module for creating cards for Discord bots. It is a simple module for using ready-made cards from other users.

## Installation

```sh
$ npm i @hitomihiumi/discord-cards@latest
```

## Basic Usage

```ts
import { RankCard, fonts } from "@hitomihiumi/discord-cards";
import { saveFile } from "@hitomihiumi/lazy-canvas";

const card = new RankCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://www.sumadhwaseva.com/wp-content/uploads/2013/10/Grey-Background-Website-Wallpapers-600x200.jpg')
    .setLevel(10)
    .setCurrentXp(100)
    .setNeededXp(200)
    .setProgressColor('#7289da')
    .setTextColor('#ffffff')
    .setStyle('base')
    .setName('Hitomi')
    .setFont(fonts.opensansBold)
    .setLevelFontSize(27);


(async () => {
    let buffer = await card.render();
    await saveFile(buffer, 'png', 'test');
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/cards/rank.png)