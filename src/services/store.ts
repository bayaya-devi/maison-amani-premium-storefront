import {products,orders,customers,employees,suppliers} from '../data/mock';import type {Product,StoreSettings} from '../types'
const get=<T,>(key:string,fallback:T):T=>JSON.parse(localStorage.getItem(key)||'null')??fallback
const put=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value))
export const productService={getAll:async()=>get<Product[]>('amani-products',products),getBySlug:async(slug:string)=>(await productService.getAll()).find(p=>p.slug===slug),save:async(p:Product)=>{const all=await productService.getAll();put('amani-products',all.some(x=>x.id===p.id)?all.map(x=>x.id===p.id?p:x):[p,...all]);return p},archive:async(id:string)=>put('amani-products',(await productService.getAll()).filter(p=>p.id!==id))}
export const orderService={getAll:async()=>get('amani-orders',orders),getById:async(id:string)=>(await orderService.getAll()).find(o=>o.id===id)}
export const customerService={getAll:async()=>get('amani-customers',customers)};export const employeeService={getAll:async()=>get('amani-employees',employees)};export const supplierService={getAll:async()=>get('amani-suppliers',suppliers)}
const defaults:StoreSettings={name:'Maison Amani',phone:'+221 33 800 20 20',whatsapp:'+221771234567',city:'Dakar',heroTitle:'L’art de bien s’équiper.',heroText:'Des essentiels choisis avec soin pour une maison qui vous ressemble.',theme:'system'}
export const settingsService={get:()=>get('amani-settings',defaults),save:(s:StoreSettings)=>put('amani-settings',s)}
