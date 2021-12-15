import { ShopItem } from "./models/shop-item";

export class SharedParameters {      
    public static storeItems: ShopItem[] = [];
    /* tutaj zrobic nowa zmienna odnosnie sumy*/
    public static globalTotalValue: number=0;
    public static globalTransportCost: number=0;
    public static globalPaymentCost: number=0;
    public static globalSum: number=0;
}