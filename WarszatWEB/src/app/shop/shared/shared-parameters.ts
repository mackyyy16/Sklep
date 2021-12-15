import { SummaryCost } from "./models/summary-cost";
import { ShopItem } from "./models/shop-item";

export class SharedParameters {      
    public static storeItems: ShopItem[] = [];
    public static costSummary: SummaryCost;
}