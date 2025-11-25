import { Breadcrumbs } from "@ui/components/molecules";
import { Map, OrderInfo } from "@ui/components/molecules";
import { FC } from "react";

export const ShopsPage: FC = () => {
  return (<>
    <Breadcrumbs items={['shops']} />
    <Map />
    <OrderInfo />
  </>)
}