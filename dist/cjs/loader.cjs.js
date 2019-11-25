'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7fc16906.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["keepit-banner-container_2.cjs",[[1,"keepit-banner-container",{"showFullBanner":[1540,"show-full-banner"],"text1":[1],"text2":[1],"text3":[1],"text4":[1]}],[1,"keepit-side-drawer",{"titleName":[513,"title"],"open":[1540],"showContact":[32],"makeOpen":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
