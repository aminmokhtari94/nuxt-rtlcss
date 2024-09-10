import { defineNuxtModule, getNuxtVersion, installModule } from '@nuxt/kit'

export enum Mode {
  combined = 'combined',
  override = 'override',
  diff = 'diff',
}
export enum Source {
  ltr = 'ltr',
  rtl = 'rtl',
}
export enum Autorename {
  disabled = 'disabled',
  flexible = 'flexible',
  strict = 'strict',
}
type ModeValues = keyof typeof Mode
type SourceValues = keyof typeof Source
type AutorenameValues = keyof typeof Autorename
type strings = string | string[]
export interface PluginStringMap {
  name?: string
  search: strings
  replace: strings
}

export type PrefixSelectorTransformer = (
  prefix: string,
  selector: string,
) => string | undefined

export interface RtlcssOptions {
  mode?: ModeValues
  ltrPrefix?: strings
  rtlPrefix?: strings
  bothPrefix?: strings
  prefixSelectorTransformer?: PrefixSelectorTransformer
  safeBothPrefix?: boolean
  ignorePrefixedRules?: boolean
  source?: SourceValues
  processUrls?: boolean
  processKeyFrames?: boolean
  processEnv?: boolean
  useCalc?: boolean
  stringMap?: PluginStringMap[]
  autoRename?: AutorenameValues
  greedy?: boolean
  aliases?: Record<string, string>
  ignoreFromList?: RegExp[] | string[]
}

export default defineNuxtModule<RtlcssOptions>({
  meta: {
    name: 'rtlcss',
    configKey: 'rtlcss',
  },
  // Default configuration options of the Nuxt module
  defaults: { mode: 'override' },
  async setup(options, nuxt) {
    // Setup postcss plugin
    const postcssOptions
      = nuxt.options.postcss
      /* nuxt 3 */ /* @ts-expect-error: no build */
      || nuxt.options.build.postcss.postcssOptions
      /* older nuxt3 */ /* @ts-expect-error: no build */
      || nuxt.options.build.postcss
    postcssOptions.plugins = postcssOptions.plugins || {}
    postcssOptions.plugins['postcss-rtlcss'] = options || {}

    // install postcss8 module on nuxt < 2.16
    if (Number.parseFloat(getNuxtVersion()) < 2.16) {
      await installModule('@nuxt/postcss8')
    }
  },
})
