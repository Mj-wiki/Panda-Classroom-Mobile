import { gql } from '@apollo/client';

export const GET_PRODUCT_TYPES = gql`
query getProductTypes{
  getProductTypes{
    data {
      key
      title
    }
  }
}
`;

export const GET_PRODUCTS = gql`
  query getProductsForH5($page: PageInput!, $name: String, $type: String) {
    getProductsForH5(page: $page, name: $name, type: $type){
      code
      message
      page {
        total
        pageNum
        pageSize
      }
      data {
        id
        limitBuyNumber
        name
        coverUrl
        bannerUrl
        desc
        originalPrice
        stock
        status
        preferentialPrice
        org {
          id
          name
        }
      }
    }
  }
`;
