export type Product={id:string;name:string;slug:string;brand:string;category:string;reference:string;price:number;stock:number;image:string;images:string[];description:string;features:string[];warranty:string;favorite?:boolean}
export type Order={id:string;customer:string;phone:string;date:string;total:number;status:string;source:string;items:number}
export type Customer={id:string;name:string;phone:string;email:string;orders:number;spent:number;lastOrder:string}
export type Employee={id:string;name:string;role:string;phone:string;email:string;status:string;lastLogin:string}
export type Supplier={id:string;name:string;contact:string;phone:string;products:number;status:string}
export type StoreSettings={name:string;phone:string;whatsapp:string;city:string;heroTitle:string;heroText:string;theme:'light'|'dark'|'system'}
