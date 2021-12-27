import { SummaryCost } from "./models/summary-cost";
import { ShopItem } from "./models/shop-item";
import { DeliveryAddress } from "./models/delivery-address";

export class SharedParameters {      
    public static storeItems: ShopItem[] = [];
    public static costSummary: SummaryCost;
    public static deliveryAddress: DeliveryAddress = DeliveryAddress.initDeliveryAdressValue;
}

