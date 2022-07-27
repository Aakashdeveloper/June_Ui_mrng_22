localStorage
> Presistent Storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.removeItem('mycity')
undefined
localStorage.getItem('mycity')
null
localStorage.setItem('mycity','Delhi')

sessionStorage
> temp storage
> save wrt to tab
> remove as soon as you close tab

sessionStorage.setItem('price',988)
undefined
sessionStorage.getItem('price')
'988'
sessionStorage.removeItemItem('price')
sessionStorage.removeItem('price')
undefined
sessionStorage.getItem('price')
null

cookies
> Save wrt to website
> expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.520601616.1658886691; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Fri, 29 July 2022 13:00:00 UTC"
'city=delhi; expires=Fri, 29 July 2022 13:00:00 UTC'