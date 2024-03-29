import styled from 'styled-components'
import { flexCenter, jellyAnimation } from '../../../style'

const RootBox = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  align-items: center;

  color: ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey1)};

  .tabs_box {
    margin-top: 30px;
  }
`
const BackBarBox = styled.div`
  width: 1170px;
  .title_row {
    flex-direction: row;
    .line {
      border: 1px solid ${(prop: any) => prop.theme.primaryColor};
      margin-right: 10px;
    }
  }
  .chain_box {
    flex-direction: row;
  }
  .chain_row {
    color: ${(prop: any) => prop.theme.primaryColor};
    background-color: ${(prop: any) => prop.theme.grey3};
    padding: 10px 15px;
    width: auto;
    text-align: center;
    margin-top: 15px;
    border-radius: 5px;
    font-size: ${(prop: any) => prop.theme.fontSmall};
  }
  .chain_msg {
    margin-top: 20px;
    font-size: ${(prop: any) => prop.theme.fontSmall};
  }
  .address_row {
    flex-direction: row;
  }
  .address_row_text {
    margin-top: 30px;
    flex-direction: row;
    font-size: 14px;
    p {
      color: ${(prop: any) => prop.theme.primaryColor};
      margin-right: 5px;
    }
    img {
      margin-left: 5px;
      width: 14px;
      height: 14px;
    }
  }
  .address_row_input {
    width: 180px;
    margin-top: 10px;
  }
  .address_row_right {
    /* margin-left: 15px; */
  }
  .text_row {
    /* color: #ababab; */
    color: ${(prop: any) => prop.theme.grey3};
    margin-top: 15px;
    font-size: 14px;
    line-height: 14px;
    div {
      margin-top: 8px;
    }
    .text_row_box {
      flex-direction: row;
    }
    .text_row_token {
      color: ${(prop: any) => prop.theme.primaryColor};
    }
  }
  .key_row {
    margin-top: 20px;
    font-size: 14px;
    .key_row_text {
      flex-direction: row;
      .key_row_red_text {
        flex-direction: row;
      }
      .key_row_address_text {
        flex-direction: row;
        color: ${(prop: any) => prop.theme.primaryColor};
        img {
          width: 14px;
          height: 14px;
          margin-left: 10px;
          margin-right: 5px;
        }
        :hover {
          cursor: pointer;
        }
      }
    }

    p {
      color: ${(prop: any) => prop.theme.primaryColor};
      margin-right: 5px;
    }
    .key_row_TextArea {
      margin-top: 10px;
      max-width: 820px;
      textarea {
        width: 100%;
        min-height: 280px;
        color: ${(prop: any) => prop.theme.primaryColor} !important;
      }
    }
  }
  .Detail_box {
    width: 820px;
    margin-top: 30px;
  }
  .left {
    margin-left: 10px;
  }
  .btn_row {
    margin-top: 30px;
    flex-direction: row;
    font-size: 14px;
    .btn_row_box {
      flex-direction: row;
      .button {
        display: flex;
        flex-direction: row;
        ${flexCenter}
        border: unset;
        padding: 10px 15px;
        /* background-color: #fdeaf1; */
        color: ${(prop: any) => prop.theme.primaryColor} !important;

        border: 1px solid ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.primaryColor)};
        width: auto;
        border-radius: 5px;
        :hover {
          animation: ${jellyAnimation} 0.5s;
        }
      }

      img {
        height: 14px;
        width: 14px;
        margin-right: 10px;
      }
    }
  }
`
export { RootBox, BackBarBox }
