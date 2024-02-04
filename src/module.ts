import { defineNuxtModule, getNuxtVersion, installModule } from "@nuxt/kit";
import type { RTLCSSModuleOptions } from "postcss-rtlcss-extra";

export default defineNuxtModule<RTLCSSModuleOptions>({
  meta: {
    name: "rtlcss",
    configKey: "rtlcss",
  },
  // Default configuration options of the Nuxt module
  defaults: { mode: "override" },
  async setup(options, nuxt) {
    // Setup postcss plugin
    const postcssOptions =
      nuxt.options.postcss /* nuxt 3 */ /* @ts-ignore */ ||
      nuxt.options.build.postcss
        .postcssOptions /* older nuxt3 */ /* @ts-ignore */ ||
      (nuxt.options.build.postcss as any);
    postcssOptions.plugins = postcssOptions.plugins || {};
    postcssOptions.plugins["postcss-rtlcss-extra"] = options || {};

    // install postcss8 module on nuxt < 2.16
    if (parseFloat(getNuxtVersion()) < 2.16) {
      await installModule("@nuxt/postcss8");
    }
  },
});
