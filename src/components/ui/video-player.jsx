import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DetailVideo = '/assets/img/detail.jpg';
const CatIcon1 = '/assets/img/catIcon-1.png';
const CatIcon2 = '/assets/img/catIcon-2.png';
const CatIcon3 = '/assets/img/catIcon-3.png';
const Product1 = '/assets/img/product1.jpg';
const Product2 = '/assets/img/product2.jpg';
const Step1 = '/assets/img/step-1.jpg';
const Step2 = '/assets/img/step-2.jpg';

const Styled = {
  VideoWrapper: styled.div`
    padding: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  VideoPlayer: styled.img`
    width: 100%;
  `,
  VideoDescription: styled.div`
    min-width: 270px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    position: absolute;
    bottom: 0px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  VideoDescriptionText: styled.p`
    font-size: 10px;
  `,
  ArticleWrapper: styled.div`
    padding: 12px;
  `,
  ArticleTitle: styled.h1`
    font-size: 13px;
    line-height: 18px;
    text-align: ${(props) => (props.centered ? 'center' : 'left')};
    letter-spacing: 0.1px;
    padding: 0 20px;
    margin-bottom: 8px;
  `,
  ArticleDate: styled.p`
    font-size: 10px;
    font-weight: 300;
    text-align: center;
    line-height: 13.64px;
  `,
  ArticleAuthor: styled.p`
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    line-height: 13.64px;
  `,
  ArticleCategory: styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;
  `,
  Category: styled.img`
    margin: 2px;
  `,
  ArticleText: styled.p`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.1px;
  `,
  RecipeWrapper: styled.div`
    padding: 12px;
    min-height: 200px;
  `,
  RecipeTitle: styled.h1`
    font-size: 15px;
    margin-bottom: 20px;
  `,
  ReceiptText: styled.p`
    font-size: 9px;
    letter-spacing: 0.1px;
    line-height: 12px;
    height: 50px;
  `,
  RecipeUl: styled.ul`
    list-style: none;
    /* margin-left:40px; */
    margin-bottom: 20px;
  `,
  RecipeLi: styled.li`
    font-size: 13px;
    margin-bottom: 2px;
  `,
  RecipeStepWrapper: styled.div`
    width: 170px;
    min-height: 30px;
  `,

  ItemWrapper: styled.div`
    padding: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
  `,
  ItemRecomendation: styled.div`
    flex: none;
    width: 49%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #d8d8d8;
    /* position:relative; */
    margin: 4px;
  `,
  ItemImageWrapper: styled.div`
    width: 100%;
    padding: 20px;
    height: 150px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  ItemImage: styled.img`
    max-width: 120px;
  `,
  ReceiptImage: styled.img`
    border-radius: 12px;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
  `,
  ItemDescription: styled.div`
    margin: 12px;
  `,
  ShopName: styled.h1`
    font-size: 13px;
    color: #ed8734;
    margin-bottom: 8px;
  `,
  ProductName: styled.h1`
    font-size: 13px;
    margin-bottom: 12px;
    /* min-height:40px; */
  `,
  ProductPrice: styled.h1`
    margin: 12px 0;
    font-size: 13px;
  `,
};
export default function VideoPlayer() {
  return (
    <Box>
      <Styled.VideoWrapper>
        <Styled.VideoPlayer src={DetailVideo} alt="hello" />
        <Styled.VideoDescription>
          <Styled.VideoDescriptionText>
            Waktu Penyajian : 15 Min
          </Styled.VideoDescriptionText>
          <Styled.VideoDescriptionText>
            Serving :2 People
          </Styled.VideoDescriptionText>
        </Styled.VideoDescription>
      </Styled.VideoWrapper>
      <Styled.ArticleWrapper>
        <Styled.ArticleTitle centered>
          Resep Jamu Beras Kencur yang Mudah Diikuti Beserta Manfaatnya
        </Styled.ArticleTitle>
        <Styled.ArticleAuthor>BY AWAL MULA</Styled.ArticleAuthor>
        <Styled.ArticleDate>October 19, 2021</Styled.ArticleDate>
        <Styled.ArticleCategory>
          <Styled.Category src={CatIcon1} />
          <Styled.Category src={CatIcon2} />
          <Styled.Category src={CatIcon3} />
        </Styled.ArticleCategory>
        <Styled.ArticleText>
          Cold. Creamy. Classic. Delicious. You can call HERSHEY’S Chocolate
          Milkshake recipe by quite a few names, and while you’re at it, you can
          add quick, easy and popular to the list. In just five minutes and with
          three simple ingredients — cold milk, HERSHEY’S syrup and vanilla or
          chocolate ice cream — you can make easy homemade milkshakes for two.
          You can even choose your favorite milkshake consistency by blending
          until it flows just right. The ingredients are in your kitchen calling
          your name right now. Just blend, pour, garnish if desired and enjoy
          with a loved one. You can even choose your favorite milkshake
          consistency by blending until it flows just right. The ingredients are
          in your kitchen calling your name right now. Just blend, pour, garnish
          if desired and enjoy with a loved one.You can even choose your
          favorite milkshake consistency by blending until it flows just right.
          The ingredients are in your kitchen calling your name right now. Just
          blend, pour, garnish if desired and enjoy with a loved one.You can
          even choose your favorite milkshake consistency by blending until it
          flows just right. The ingredients are in your kitchen calling your
          name right now. Just blend, pour, garnish if desired and enjoy with a
          loved one.You can even choose your favorite milkshake consistency by
          blending until it flows just right. The ingredients are in your
          kitchen calling your name right now. Just blend, pour, garnish if
          desired and enjoy with a loved one.You can even choose your favorite
          milkshake consistency by blending until it flows just right. The
          ingredients are in your kitchen calling your name right now. Just
          blend, pour, garnish if desired and enjoy with a loved one.
        </Styled.ArticleText>
      </Styled.ArticleWrapper>
      <Styled.RecipeWrapper>
        <Styled.RecipeTitle>Bahan</Styled.RecipeTitle>
        <Styled.RecipeUl>
          <Styled.RecipeLi>
            4 scoops Vanilla or chocolate ice cream (about 2 cups)
          </Styled.RecipeLi>
          <Styled.RecipeLi>1/2 cup milk (cold)</Styled.RecipeLi>
          <Styled.RecipeLi>1 Teh Singabera Jasmine</Styled.RecipeLi>
          <Styled.RecipeLi>1 Teh Singabera Java Breakfast</Styled.RecipeLi>
        </Styled.RecipeUl>
        <Styled.RecipeTitle>Langkah</Styled.RecipeTitle>
      </Styled.RecipeWrapper>
      <Styled.ItemWrapper>
        <Styled.ItemRecomendation>
          <Styled.ItemImageWrapper>
            <Styled.ReceiptImage src={Step1} />
          </Styled.ItemImageWrapper>
          <Styled.ItemDescription>
            <Styled.ProductName>Step 1</Styled.ProductName>
            <Styled.ReceiptText>
              Cuci dan rendam beras selama satu jam.
            </Styled.ReceiptText>
          </Styled.ItemDescription>
        </Styled.ItemRecomendation>
        <Styled.ItemRecomendation>
          <Styled.ItemImageWrapper>
            <Styled.ReceiptImage src={Step2} />
          </Styled.ItemImageWrapper>
          <Styled.ItemDescription>
            <Styled.ProductName>Step 2</Styled.ProductName>
            <Styled.ReceiptText>
              Siapkan air dalam panci untuk merebus semua bahan.
            </Styled.ReceiptText>
          </Styled.ItemDescription>
        </Styled.ItemRecomendation>
        <Styled.ItemRecomendation>
          <Styled.ItemImageWrapper>
            <Styled.ReceiptImage src={Step2} />
          </Styled.ItemImageWrapper>
          <Styled.ItemDescription>
            <Styled.ProductName>Step 2</Styled.ProductName>
            <Styled.ReceiptText>
              Siapkan air dalam panci untuk merebus semua bahan.
            </Styled.ReceiptText>
          </Styled.ItemDescription>
        </Styled.ItemRecomendation>
      </Styled.ItemWrapper>
      <Styled.ItemWrapper>
        <Styled.ItemRecomendation>
          <Styled.ItemImageWrapper>
            <Styled.ItemImage src={Product1} />
          </Styled.ItemImageWrapper>
          <Styled.ItemDescription>
            <Styled.ShopName>Singabera</Styled.ShopName>
            <Styled.ProductName>
              Jasmine Green <br /> Sencha
            </Styled.ProductName>
            <span>100gr</span>
            <Styled.ProductPrice>Rp 59.800</Styled.ProductPrice>
            <Button variant="contained" color="success">
              Lihat Produk
            </Button>
          </Styled.ItemDescription>
        </Styled.ItemRecomendation>
        <Styled.ItemRecomendation>
          <Styled.ItemImageWrapper>
            <Styled.ItemImage src={Product2} />
          </Styled.ItemImageWrapper>
          <Styled.ItemDescription>
            <Styled.ShopName>Singabera</Styled.ShopName>
            <Styled.ProductName>Java Breakfast</Styled.ProductName>
            <span>100gr</span>
            <Styled.ProductPrice>Rp 57.600</Styled.ProductPrice>
            <Button variant="contained" color="success">
              Lihat Produk
            </Button>
          </Styled.ItemDescription>
        </Styled.ItemRecomendation>
      </Styled.ItemWrapper>
    </Box>
  );
}
