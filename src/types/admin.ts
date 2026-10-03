import type {EmployeePermission, ProOrderStatus} from './employee'

export type AdminLocale = 'fr' | 'ar'
export type AdminSession = {id:string; firstName:string; lastName:string; role:'administrator'}
export type AdminEmployee = {id:string; firstName:string; lastName:string; role:string; phone:string; email:string; active:boolean; lastLogin:string; permissions:EmployeePermission[]}
export type AdminSupplier = {id:string; name:string; contact:string; phone:string; email:string; active:boolean; products:number}
export type AdminPurchase = {id:string; supplierId:string; date:string; total:number; status:'draft'|'ordered'|'received'; lines:{productId:string; quantity:number; cost:number}[]}
export type AdminNotification = {id:string; title:string; body:string; read:boolean; date:string; level:'info'|'warning'|'success'}
export type AdminAudit = {id:string; actor:string; action:string; entity:string; date:string}
export type AdminArchiveItem = {id:string; type:'product'|'employee'|'supplier'; label:string; date:string}
export type AdminSettings = {storeName:string; phone:string; whatsapp:string; address:string; hours:string; heroTitle:string; heroText:string; primaryColor:string}
export type AdminOrderUpdate = {assigneeId?:string; status?:ProOrderStatus}
