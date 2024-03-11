export const formatCurrency = (value) => 
(parseFloat(value).toLocaleString('en-US', {style: 'currency', currency: 'USD'}));