import { defineComponent, h, Fragment } from 'vue'
import { useRuntimeConfig } from '#imports'

export default defineComponent(
  () => {
    return () => {
      const { cookieConsent: config } = useRuntimeConfig().public

      // @ts-ignore
      const cbid = config.cbid

      if (!cbid) {
        return h(Fragment, { key: 'CookiePolicy' })
      }

      // @ts-ignore
      const culture = config.culture || 'EN'

      return h(Fragment, { key: 'CookiePolicy' }, [
        h('script', {
          id: 'CookieDeclaration',
          src: `https://consent.cookiebot.com/${cbid}/cd.js`,
          type: 'text/javascript',
          'data-culture': culture,
          async: true,
        }),
      ])
    }
  },
  {
    props: [],
  },
)
