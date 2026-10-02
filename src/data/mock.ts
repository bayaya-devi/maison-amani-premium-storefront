import type {Brand,Category,Localized,Notification,Product} from '../types'
const l=(fr:string,en:string,ar:string):Localized=>({fr,en,ar})
const photo=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`
const product=(id:string,slug:string,fr:string,en:string,ar:string,brand:string,category:string,price:number,stock:number,image:string,isNew=false,popular=false):Product=>({id,slug,name:l(fr,en,ar),description:l(`Un choix fiable et élégant pour accompagner chaque geste de votre quotidien.`,`A dependable, elegant choice for every everyday ritual.`,`اختيار أنيق وموثوق لمرافقة كل تفاصيل يومك.`),brand,category,reference:`ER-${id.toUpperCase()}-26`,price,stock,images:[{src:photo(image),alt:l(fr,en,ar)}],features:[l('Garantie fabricant','Manufacturer warranty','ضمان الشركة المصنعة'),l('Qualité sélectionnée','Selected quality','جودة مختارة')],isNew,popular})
export const categories:Category[]=[
 {id:'home',slug:'home-appliances',name:l('Électroménager','Home appliances','الأجهزة المنزلية'),image:photo('photo-1556911220-bff31c812dba')},
 {id:'small',slug:'small-appliances',name:l('Petit électroménager','Small appliances','الأجهزة الصغيرة'),image:photo('photo-1570222094114-d054a817e56b')},
 {id:'kitchen',slug:'kitchen',name:l('Ustensiles','Kitchenware','أدوات المطبخ'),image:photo('photo-1556910103-1c02745aae4d')},
 {id:'house',slug:'home',name:l('Maison','Home','المنزل'),image:photo('photo-1618220179428-22790b461013')},
]
export const brands:Brand[]=[{id:'b1',name:'NOVA'},{id:'b2',name:'KITCHENIA'},{id:'b3',name:'ATELIER'},{id:'b4',name:'MÉRIDIEN'}]
export const products:Product[]=[
 product('af55','air-fryer-signature','Air Fryer Signature 5,5 L','Signature Air Fryer 5.5 L','قلاية هوائية سيغنتشر 5.5 لتر','NOVA','small',1299,14,'photo-1647612270451-2b19f02debd8',true,true),
 product('bl12','blender-pro-1200','Blender Pro 1200','Pro Blender 1200','خلاط برو 1200','KITCHENIA','small',899,8,'photo-1570222094114-d054a817e56b',false,true),
 product('co24','cocotte-fonte-24','Cocotte Fonte Émail 24 cm','Enameled Cast Iron Pot 24 cm','قدر حديد مطلي 24 سم','ATELIER','kitchen',1090,5,'photo-1584990347449-a4f035878ef4',false,true),
 product('st24','service-table-sable','Service de table Sable · 24 pièces','Sand table set · 24 pieces','طقم مائدة رملي · 24 قطعة','MÉRIDIEN','kitchen',790,18,'photo-1603199506016-b9a594b593c0',true),
 product('kt17','bouilloire-studio','Bouilloire Studio Inox','Studio Stainless Kettle','غلاية ستوديو من الستانلس','NOVA','small',549,22,'photo-1594213114663-d94db9b1719f'),
 product('kn06','couteaux-essentiel','Couteaux Essentiel · 6 pièces','Essential knives · 6 pieces','سكاكين أساسية · 6 قطع','ATELIER','kitchen',649,3,'photo-1593618998160-e34014e67546'),
 product('gl06','verres-ligne','Set de verres Ligne · 6 pièces','Line glass set · 6 pieces','طقم كؤوس لاين · 6 قطع','MÉRIDIEN','kitchen',299,31,'photo-1513558161293-cdaf765ed2fd'),
 product('mx45','robot-patissier-artisan','Robot Pâtissier Artisan','Artisan stand mixer','عجان آرتيزان','KITCHENIA','small',2490,2,'photo-1594385208974-2f3a2d7d2c36',true),
 product('vc90','aspirateur-silence','Aspirateur Silence 900 W','Silent vacuum 900 W','مكنسة صامتة 900 واط','NOVA','home',1790,9,'photo-1558317374-067fb5f30001'),
 product('cf10','cafe-origine','Cafetière Origine','Origine coffee maker','ماكينة قهوة أوريجين','KITCHENIA','small',1190,7,'photo-1495474472287-4d71bcdd2085'),
 product('pn28','poele-minerale','Poêle Minérale 28 cm','Mineral frying pan 28 cm','مقلاة مينيرال 28 سم','ATELIER','kitchen',459,12,'photo-1584990347449-a4f035878ef4'),
 product('ir20','fer-vapeur','Fer à repasser Vapeur','Steam iron','مكواة بخار','NOVA','home',699,0,'photo-1586208958839-06c17cacdf08'),
]
export const initialNotifications:Notification[]=[{id:'n1',title:l('Commande confirmée','Order confirmed','تم تأكيد الطلب'),body:l('Votre commande ER-2026-001234 est en préparation.','Your ER-2026-001234 order is being prepared.','طلبك ER-2026-001234 قيد التحضير.'),date:'2026-10-02',read:false},{id:'n2',title:l('Nouveautés en cuisine','New in kitchen','جديد المطبخ'),body:l('Découvrez nos nouveaux essentiels de cuisine.','Discover our new kitchen essentials.','اكتشف أساسيات المطبخ الجديدة.'),date:'2026-09-30',read:true}]
