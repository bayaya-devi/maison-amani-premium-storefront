export const formatCurrency=(amount:number)=>new Intl.NumberFormat('fr-FR',{style:'currency',currency:'XOF',maximumFractionDigits:0}).format(amount)
