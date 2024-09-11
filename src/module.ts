import { defineNuxtModule, getNuxtVersion, installModule } from '@nuxt/kit'
import postcssRTLCSS from 'postcss-rtlcss'

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

const plugin = (options: RtlcssOptions) => {
  return (root: any, result: any) => {
    if (root) {
      if (
        result.opts.from
        && options?.ignoreFromList?.some(i =>
          new RegExp(i).test(result.opts.from),
        )
      )
        return
      else
        return postcssRTLCSS({
          mode: 'override',
          ...options,
        }).Once!(root, undefined as any)
    }
  }
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
    const css = nuxt.options.vite.css
    if (css) {
      if (css.postcss) {
        if (typeof css.postcss === 'string') {
          throw 'nuxt-rtlcss: vite.css.postcss in nuxt config file cant`t be string, not supporting!'
        }
        else {
          if (css.postcss.plugins) {
            css.postcss.plugins.push(plugin(options))
          }
          else {
            css.postcss.plugins = [plugin(options)]
          }
        }
      }
      else {
        Object.assign(css, {
          postcss: {
            plugins: [
              plugin(options),
            ],
          },
        })
      }
    }
    else
      Object.assign(nuxt.options.vite, {
        css: {
          postcss: {
            plugins: [
              plugin(options),
            ],
          },
        },
      })
    // install postcss8 module on nuxt < 2.16
    if (Number.parseFloat(getNuxtVersion()) < 2.16) {
      await installModule('@nuxt/postcss8')
    }
  },
})
