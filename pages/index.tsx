import {NextPage} from 'next'
import Layout from '@/components/Layout'

import Cart from '@/components/Cart'
import CartSummary from '@/components/CartSummary'
import Products from '@/components/Products'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Bernie's Mittens">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default IndexPage
