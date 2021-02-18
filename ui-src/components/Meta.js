import Head from 'next/head'

const Meta = ( {title, keywords, description} ) => (
  <Head>
    { keywords && <meta name='keywords' content={keywords} /> }
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name='description' content={description} />
    <title>{ title }</title>
  </Head>
);

Meta.defaultProps = {
  title: 'Mercado Libre Colombia',
  keywords: '',
  description: 'La comunidad de compra y venta online más grande de América Latina.'
}

export default Meta;
