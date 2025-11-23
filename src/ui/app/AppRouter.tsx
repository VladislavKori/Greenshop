import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, BlogPage, ProductPage, ShopsPage, BusketPage, PlantCarePage, AccountDetailSettings } from "@ui/pages"
import { DefaultLayout, SettingsLayout } from "@ui/layouts";

export const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="basket" element={<BusketPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="shops" element={<ShopsPage />} />
                    <Route path="plantcare" element={<PlantCarePage />} />
                </Route>
                <Route path="/user/settings" element={<SettingsLayout />}>
                    <Route path="accountdetail" element={<AccountDetailSettings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}