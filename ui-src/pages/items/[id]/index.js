import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import axios from '../../../instances/graphql';
import BreadcrumbsNavigation from '../../../components/BreadcrumbsNavigation';
import Button from '../../../components/Button';
import LinkedList from '../../../utility/LinkedList';
import Meta from '../../../components/Meta';

import productDetailsStyles from '../../../styles/ProductDetails.module.scss';

const ProductDetails = ({ productData, errors }) => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    const categoriesList = new LinkedList({
      dataArg: 'name',
      nextArg: 'parentCategory',
      head: productData.category
    });

    categoriesList.reverseLinkedList();

    setCategories(categoriesList.toArray());
  }, [ productData.category ])

  const getDescription = () => `${ productData.description }`;
  const getFormattedPrice = (price) => Intl.NumberFormat({style: 'currency', currency: 'COP'}).format(price);
  const getProductPrice = ({ amount, decimals, currency }) => `$${getFormattedPrice(amount)}${decimals ? `.${decimals}` : '' } ${currency}`;
  const getProductStatus = () => `${productData.condition}${ productData.sold ? ` - ${productData.sold} vendidos` : '' }`;
  const getTitle = () => `${ productData.title } | Mercado Libre`;
  const getKeyWords = () => `${ productData.tags.join(', ') }`;

  const renderImage = (pictureData) => {
    if (!pictureData) {
      return null;
    }

    const { description, img: imgData } = pictureData;

    if (imgData) {
      const { contentType, data } = imgData;

      return (
        <img
          alt={description}
          src={`data:${contentType};base64, ${data}`} />
      )
    }

    return null;
  };

  const renderCarousel = (pictures) => (
    <Carousel>
      {pictures.map(pictureData => (
        <Carousel.Item>
          {renderImage(pictureData) }
        </Carousel.Item>
      ))}
    </Carousel>
  );

  return (
    <>
      <Meta
        title={getTitle()}
        keywords={getKeyWords()}
        description={getDescription()} />
      <div className={productDetailsStyles['product-details']}>
        <BreadcrumbsNavigation items={categories} />
        <section className={productDetailsStyles['product-details--content']}>
          <div className={productDetailsStyles['product-details--carousel']}>
            { renderCarousel(productData.pictures) }
          </div>
          <div className={productDetailsStyles['product-details--product-info']}>
            <p className={productDetailsStyles['product-info--status']}>{ getProductStatus() }</p>
            <h1 className={productDetailsStyles['product-info--title']}>{ productData.title }</h1>
            <p className={productDetailsStyles['product-info--price']}>{ getProductPrice(productData.price) }</p>
            <Button
              center
              label='Comprar' />
          </div>
          <div className={productDetailsStyles['product-details--product-description-container']}>
            <h3 className={productDetailsStyles['product-details--product-description-title']}>Descripción del producto</h3>
            <p className={productDetailsStyles['product-details--product-description']}>
              { productData.description }
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductDetails;

export const getServerSideProps = async (context) => {
  const productId = context.params?.id;

  const requestBody = {
    query: `
      query {
        getProductById(productId: "${productId}") {
          _id
          title
          description
          price {
            currency
            amount
            decimals
          }
          condition
          free_shipping
          sold
          tags
          category {
            name
            parentCategory {
              name
              parentCategory {
                name
                parentCategory {
                  name
                  parentCategory {
                    name
                  }
                }
              }
            }
          }
          author {
            name
            lastName
            email
          }
          pictures {
            _id
            name
            description
            img {
              data
              contentType
            }
          }
        }
      }
    `
  };

  try {
    const { status, data: { errors, data: responseData } } = await axios.post('', JSON.stringify(requestBody));

    if((status !== 200 && status !== 201)) {
      throw new Error('GraphQL Failed!');
    }

    if (errors) {
      return {
        props: {
          errors: errors
        }
      }
    } else {
      return {
        props: {
          productData: responseData.getProductById
        }
      }
    }
  } catch (err) {
    return {
      props: {
        errors: [err]
      }
    }
  }
}
