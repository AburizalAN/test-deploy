// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
import FilterIcons from 'components/icons/icon-filter';
import React from 'react';
import styled from 'styled-components';
import { TitleSection } from 'components/ui/TitleSection';
import SwipeableEdgeDrawer from 'components/ui/popup-drawer';
import { SlideWrapper } from 'components/ui/shopping/style';
import TextField from '@mui/material/TextField';
import { StyledButton } from 'components/ui/button';
import SortIcon from 'components/icons/icon-sort';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const MainWrapper = styled.div`
  position: fixed;
  width: 28rem;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px -0.97561px 0px #e0e0e0;

  .btnText {
    font-weight: 700;
    margin: 0;
    cursor: pointer;
    color: red;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  // border: 1px solid;

  div.childWrapper:first-child {
    border-color: #e0e0e0;
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  div.childWrapper:last-child {
    border-color: #e0e0e0;
    border-style: solid;
    border-width: 0px 1px 0px 0px;
  }

  div.childWrapper {
    width: 50%;
    display: flex;
    justify-content: center;

    div.textWrapper {
      display: flex;
      align-items: center;
      min-height: 62px;
      max-height: 62px;

      p {
        margin: 0;
      }
    }
  }
`;

const ModeWrapper = styled.div`
  padding-bottom: 80px;
`;

const HeaderFilter = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  justify-content: space-between;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);

  p.filterWord {
    font-weight: 700;
  }
  p.filterReset {
    font-weight: 700;
    color: #486140;
  }
`;

const SectionFilter = styled.div.attrs({ className: 'filterSec' })`
  // display: flex;
  width: 100%;
  margin: 12px 0 0;
  padding: 12px;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);

  p.filterWord {
    font-weight: 700;
  }
  p.filterReset {
    font-weight: 700;
    color: #486140;
  }
`;
const SectionSort = styled.div`
  // display: flex;
  width: 100%;
  margin: 12px 0 0;
  padding: 0 12px;

  // box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);

  p.filterWord {
    font-weight: 700;
  }
  p.filterReset {
    font-weight: 700;
    color: #486140;
  }
`;

const ChipFilter = styled.p`
  &&& {
    min-width: fit-content;
    background: #eeeeee;
    padding: 8px 12px;
    border-radius: 20px;
    color: #486140;
    margin-right: 8px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  text-align: center;
`;

const TextFieldWrapper = styled(TextField)`
  width: ${(props) => props.width};
  input {
    z-index: 1;
    text-align: center;
  }
  fieldset {
    border-radius: 50px;
    background: #eeeeee;
    border-width: 0px;
  }
`;

const RadioLabel = styled(FormControlLabel)`
  margin-left: 0;
  display: flex;
  justify-content: space-between;

  span {
    color: black;
    font-weight: 700;
  }
  span.Mui-checked {
    span {
      color: #a0c16b;
    }
  }
`;

const BottomFilter = () => {
  const [drawer, setDrawer] = React.useState({
    visible: false,
    mode: 'filter',
  });

  return (
    <MainWrapper>
      <SwipeableEdgeDrawer
        height={drawer.mode === 'filter' ? '80%' : '45%'}
        visible={drawer.visible}
        onVisible={() => setDrawer({ ...drawer, visible: true })}
        onDismiss={() => setDrawer({ ...drawer, visible: false })}
      >
        {drawer.mode === 'filter' ? (
          <ModeWrapper>
            <HeaderFilter>
              <p className="filterWord">Filter</p>
              <p className="filterReset">Reset</p>
            </HeaderFilter>
            <SectionFilter>
              <TitleSection title="Kategori" mb="8px" />

              <SlideWrapper>
                <ChipFilter>Food & Beverages</ChipFilter>
                <ChipFilter>Health & Wellness</ChipFilter>
                <ChipFilter>Lifestyle</ChipFilter>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Hello Panda</ChipFilter>
                <ChipFilter>Hello Hello Bandung</ChipFilter>
              </SlideWrapper>
            </SectionFilter>

            <SectionFilter>
              <TitleSection title="Brand" mb="8px" more />

              <SlideWrapper>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Hello Panda</ChipFilter>
                <ChipFilter>Hello Hello Bandung</ChipFilter>
              </SlideWrapper>
            </SectionFilter>

            <SectionFilter>
              <TitleSection title="Promo" mb="8px" />

              <SlideWrapper>
                <ChipFilter>Serba 30K</ChipFilter>
                <ChipFilter>Spesial 17an</ChipFilter>
                <ChipFilter>Buy 1 Get 1</ChipFilter>
                <ChipFilter>Realfood</ChipFilter>
                <ChipFilter>Hello Panda</ChipFilter>
                <ChipFilter>Hello Hello Bandung</ChipFilter>
              </SlideWrapper>
            </SectionFilter>

            <SectionFilter>
              <TitleSection title="Harga" mb="8px" />

              <InputWrap>
                <TextFieldWrapper placeholder="Minimum" width="45%" />
                <span style={{ width: '10%' }}>-</span>
                <TextFieldWrapper placeholder="Maximum" width="45%" />
              </InputWrap>

              <SlideWrapper>
                <ChipFilter>dibawah 30rb</ChipFilter>
                <ChipFilter>diatas 100k</ChipFilter>
                <ChipFilter>dibawah 30rb</ChipFilter>
                <ChipFilter>diatas 100k</ChipFilter>
              </SlideWrapper>
            </SectionFilter>

            <MainWrapper>
              <div style={{ padding: 12 }}>
                <StyledButton width="100%" mt="0">
                  Terapkan
                </StyledButton>
              </div>
            </MainWrapper>
          </ModeWrapper>
        ) : (
          <ModeWrapper>
            <SectionSort>
              <TitleSection title="SORT BY" />

              <RadioGroup
                defaultValue=""
                name="radio-buttons-group"
                style={{ marginTop: 24 }}
              >
                <RadioLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  labelPlacement="start"
                />
                <RadioLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  labelPlacement="start"
                />
                <RadioLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  labelPlacement="start"
                />
              </RadioGroup>
            </SectionSort>
            <MainWrapper>
              <div style={{ padding: 12 }}>
                <StyledButton
                  width="100%"
                  mt="0"
                  variant="text"
                  bgcolor="transparent"
                  onClick={() => setDrawer({ ...drawer, visible: false })}
                >
                  <p className="btnText">Batalkan</p>
                </StyledButton>
              </div>
            </MainWrapper>
          </ModeWrapper>
        )}
      </SwipeableEdgeDrawer>

      <FilterWrapper>
        <div
          className="childWrapper"
          onClick={() => setDrawer({ mode: 'filter', visible: true })}
        >
          <div className="textWrapper">
            <FilterIcons />
            <p>Filter</p>
          </div>
        </div>
        <div
          className="childWrapper"
          onClick={() => setDrawer({ mode: 'sort', visible: true })}
        >
          <div className="textWrapper">
            <SortIcon />
            <p>Sort</p>
          </div>
        </div>
      </FilterWrapper>
    </MainWrapper>
  );
};

export default BottomFilter;
