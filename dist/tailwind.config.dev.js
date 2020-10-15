"use strict";

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: function backgroundImage(theme) {
        return {
          "version-control": "url('vc.jpeg')"
        };
      }
    }
  },
  variants: {},
  plugins: []
};