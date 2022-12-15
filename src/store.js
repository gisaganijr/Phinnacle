import create from 'zustand'
import { appBgColor, colors, smallMargin, margin } from 'variables';

const useStore = create(set => ({
  isNavMainOpen: false,
  isNavMobileOpen: false,
  mainMenuButtonColor: colors.white,
  isLogoColoured: false,
  showWelcome: false,
  showPreloader: false,
  scrollTop: 0,
  themeColor: '#00a4e4',
  appBarBgColor: appBgColor,
  toggleMenu: () => set(state => {
    return {
      isNavMainOpen: !state.isNavMobileOpen,
      isNavMobileOpen: !state.isNavMobileOpen,
    }
  }),
  toggleMenuMobile: () => set(state => {
    return {
      isNavMainOpen: !state.isNavMobileOpen,
      isNavMobileOpen: !state.isNavMobileOpen,
    }
  }),
  closeMenu: () => set(state => {
    return {
      isNavMainOpen: false,
      isNavMobileOpen: false,
    }
  }),
  changeLogoColoured: (payload) => set(state => {
    return {
      isLogoColoured: payload,
    }
  }),
  changeMenuButtonColor: (payload) => set(state => {
    return {
      mainMenuButtonColor: payload,
    }
  }),
  changeShowWelcome: (payload) => set(state => {
    return {
      showWelcome: payload,
    }
  }),
}))

export default useStore;