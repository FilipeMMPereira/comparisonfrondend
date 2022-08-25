import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConfigTemplate from '../components/templates/ConfigTemplate.jsx'

// Pages
import ProductIndex from '../view/product/Index.jsx'

const Router = () => {
    return (
        <BrowserRouter>

            <ConfigTemplate>
                <Routes>

                    {/* <BaseTemplate> */}
                    <Route path="/" element={<ProductIndex />} />

                </Routes>
            </ConfigTemplate>
        </BrowserRouter>


    )
}

export default Router