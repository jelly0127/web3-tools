import { flexCenter } from '@/style'
import styled from 'styled-components'
import ICON_SUN_LIGHT from './images/icon-sun-light.svg'
import ICON_SUN_DARK from './images/icon-sun-dark.svg'
import ICON_MOON_DARK from './images/icon-moon-dark.svg'
import ICON_MOON_LIGHT from './images/icon-moon-light.svg'
import ICON_WALLET_LOGO from '@/images/jelly.jpg'
import ICON_LOGO from './images/DOG3.svg'

const RootBox = styled.div`
  height: 58px;
  width: 100%;
  padding: 0 20px;
  z-index: 99999;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(prop: any) => (prop.theme.isDark ? '#7a4add ' : prop.theme.grey3)};
  position: sticky;
  top: 0;
  .logo_box {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 180px;
  }
  .logo_box_a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .logo_box_text {
    margin-left: 10px;
  }
  .right_box {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    line-height: ${(prop: any) => prop.theme.fontNormal};
    height: 100%;
  }

  .right_box_Theme {
    height: 28px;
    width: 28px;
    ${flexCenter}

    button {
      ${flexCenter}
      width: 100%;
      height: 100%;
      background-color: unset;
      border: unset;
    }
  }
`
const Logo = styled.img`
  height: 40px;
  width: 40px;
  content: url(${ICON_LOGO});
`
const WalletLogo = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  content: url(${ICON_WALLET_LOGO});
`
const ThemeLogo = styled.img`
  height: 28px;
  width: 28px;
  content: url(${(prop: any) => (prop.theme.isDark ? ICON_SUN_LIGHT : ICON_MOON_DARK)});
  :hover {
    content: url(${(prop: any) => (prop.theme.isDark ? ICON_SUN_DARK : ICON_MOON_LIGHT)});
  }
`
export { RootBox, ThemeLogo, Logo, WalletLogo }
