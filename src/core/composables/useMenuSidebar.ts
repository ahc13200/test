import type { ItemType, MenuProps } from 'ant-design-vue'
import menuJson from '../layouts/components/Sidebar/menu.json'

export function useSidebarMenu() {
  const router = useRouter()

  const state = reactive({
    openKeys: [] as string[],
    selectedKeys: [] as string[],
    rootSubmenuKeys: [] as string[],
    collapsed: false,
  })

  const menuItems = computed<ItemType[]>(() => {
    return menuJson
      .map((e, index) => {
        const key = `m-${index + 1}`
        const icon = h('span', { class: `${e.icon} h-6 w-6` })

        if (e.children?.length) {
          const children = e.children
            .map((child, cIndex) => ({
              label: child.caption,
              key: `s-${index + 1}-${cIndex + 1}`,
              target: child.name,
            }))

          if (children.length === 0)
            return null

          state.rootSubmenuKeys.push(key)
          return { label: e.caption, key, icon, children, target: e.name }
        }
        return { label: e.caption, key, icon, target: e.name }
      })
      .filter(Boolean)
  })

  const handleClick: MenuProps['onClick'] = (e) => {
    const target = e.item?.target
    if (target)
      router.push({ name: target })
  }

  function onOpenChange(openKeys: any[]) {
    const latestOpenKey = openKeys.find(key => !state.openKeys.includes(key))
    if (state.rootSubmenuKeys.includes(latestOpenKey!)) {
      state.openKeys = [latestOpenKey!]
    }
    else {
      state.openKeys = openKeys
    }
  }

  return {
    state,
    menuItems,
    handleClick,
    onOpenChange,
  }
}
