export interface Product {
  id: number;
  unitDollar: string;
  currentMonth: string;
  nextMonth: string;
  stock: number;
  tacticId: number;
  costingDetails?:number;
  balanceOfShipment?:number;
  forecastImpact?: string;
  leaseToRetail?: string;
  comments?: string;
  iLogonAdd?: string;
  tStmpAdd?: string;
  iLogonUpd?: any;
  tStmpUdp?: any;

}

