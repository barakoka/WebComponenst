import { a as patchEsm, b as bootstrapLazy } from './core-db7150c2.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["keepit-banner-container_2",[[1,"keepit-banner-container",{"showFullBanner":[1540,"show-full-banner"],"text1":[1],"text2":[1],"text3":[1],"text4":[1]}],[1,"keepit-side-drawer",{"titleName":[513,"title"],"open":[1540],"showContact":[32],"makeOpen":[64]}]]]], options);
  });
};

export { defineCustomElements };
