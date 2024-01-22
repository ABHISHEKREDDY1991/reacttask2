import React from 'react'
import ProductReview from './ProductReview'
const Product = () => {






    return (
        <div>
            <div class="" id="Product">
                <h1 style={{ textalign: 'center' }}>Product Review</h1>

            </div>
            <div class="row gap-5 justify-content-center" style={{ backgroundColor: '' }}>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <ProductReview
                        productId={1}
                        productName="IPhone 14 Pro"
                        imageUrl="https://phonebox.com.mt/wp-content/uploads/2022/11/0021403_iphone-14-pro.jpeg"
                    />
                    <ProductReview
                        productId={2}
                        productName="Samsung s23 ultra"
                        imageUrl="https://tse2.mm.bing.net/th?id=OIP.EFHcOw-ryuJ_NfHXYp1iUgHaKB&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={3}
                        productName="Realme 11 pro"
                        imageUrl="https://tse2.mm.bing.net/th?id=OIP.SYpAy9twrIK6kk56vlPGOwHaHv&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={4}
                        productName="vivo z1 pro"
                        imageUrl="https://tse4.mm.bing.net/th?id=OIP.hFc1MjEnTC7jPgtpoSp3PgHaGn&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={5}
                        productName="Poco m4 pro 5g"
                        imageUrl="https://tse1.mm.bing.net/th?id=OIP.LlBwHHLlmCVc_jo6Gr-pVgHaHh&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={6}
                        productName="Samsung"
                        imageUrl="https://tse3.mm.bing.net/th?id=OIP.XIcZK1k2o421MZwWd7Nt6wHaOZ&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={7}
                        productName="Vivo"
                        imageUrl="https://tse2.mm.bing.net/th?id=OIP.teAPRSOavt0AstA3lWXnVAHaHa&pid=Api&P=0&h=180"
                    />
                    <ProductReview
                        productId={8}
                        productName="Realme"
                        imageUrl="https://tse4.mm.bing.net/th?id=OIP.Z1CJyDAridil6hCCFobBagHaEJ&pid=Api&P=0&h=180"
                    />
                </div>

            </div>
        </div>
    )
}

export default Product