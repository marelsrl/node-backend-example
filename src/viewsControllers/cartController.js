const assortment = [
    {
        "id": 1,
        "internalcode": 100,
        "upc": 8000990101451,
        "brand": "Lipton",
        "productline": "Ice Tea",
        "name": "Ice Tea: Green Tea Limone Zero Zucchero 1,5 l",
        "manufacturer": "PEPSICO BEVERAGES ITALIA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAZv1uWAR0ub2Y7oNc5huHd-stqVa0_CzEzddgAPESw&s"
    },
    {
        "id": 2,
        "parentcode": 1,
        "internalparentcode": 100,
        "internalcode": 101,
        "upc": 8000990117186,
        "brand": "Lipton",
        "productline": "Ice Tea",
        "name": "Ice Tea: Limone 1,5 l",
        "manufacturer": "PEPSICO BEVERAGES ITALIA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGMJFchB0471H1wedlqUNf3uIHRbVfwgCX-eAL2Rmcg&s"
    },
    {
        "id": 3,
        "parentcode": 1,
        "internalparentcode": 100,
        "internalcode": 102,
        "upc": 8000990117209,
        "brand": "Lipton",
        "productline": "Ice Tea",
        "name": "Ice Tea: Pesca 1,5 l",
        "manufacturer": "PEPSICO BEVERAGES ITALIA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aYccxXV0la1dXMZLzCifXOUpl0YE0zNlB-U3AirKKg&s"
    },
    {
        "id": 4,
        "internalcode": 103,
        "upc": 8000990117232,
        "brand": "Sant’Anna",
        "productline": "Fruity Touch",
        "name": "Fruity Touch: Lime, Zenzero e Guaranà",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://shop.santanna.it/media/catalog/product/cache/07e4d228d2f0480b12d4a98d980eef3b/f/r/fruity_0_5l_lime_zenzero_guarana_confezione_12.jpg"
    },
    {
        "id": 5,
        "parentcode": 4,
        "internalparentcode": 103,
        "internalcode": 104,
        "upc": 8000990117255,
        "brand": "Sant’Anna",
        "productline": "Fruity Touch",
        "name": "Fruity Touch: Limone",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWeWaVy_Kzmx4aXCtNzJGv9I_Z_0vWkyM-TuugCGKbg&s"
    },
    {
        "id": 6,
        "internalcode": 105,
        "upc": 8000990117278,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé: al Limone",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztgXOyJPSxx7yUoZUdsmlQhCoHf0eP-8xsC_JxBKZ2w&s"
    },
    {
        "id": 7,
        "parentcode": 6,
        "internalparentcode": 105,
        "internalcode": 106,
        "upc": 8000990117301,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé: al Limone Senza Zucchero",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSius8dwaqIE8SmAIiRaJiEhvFE3-3bL3fICjCMujDi-Q&s"
    },
    {
        "id": 8,
        "parentcode": 6,
        "internalparentcode": 105,
        "internalcode": 107,
        "upc": 8000990117324,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé: alla Pesca",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyAApRx1J9MML7-JdkOaoot5bObCuhp3TWbp9Bp7HCA&s"
    },
    {
        "id": 9,
        "parentcode": 6,
        "internalparentcode": 105,
        "internalcode": 108,
        "upc": 8000990117347,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé: alla Pesca Senza Zucchero",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1rvYIW-bl1M-oAzQucwB1yti2uJ0PhVdLNBi_G257w&s"
    },
    {
        "id": 10,
        "parentcode": 6,
        "internalparentcode": 105,
        "internalcode": 109,
        "upc": 8000990117370,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé Deteinato: al Limone",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEam1QCDjuGez6mD9fQ8URLPlBzacTo0GiG8J_CE0GxA&s"
    },
    {
        "id": 11,
        "parentcode": 6,
        "internalparentcode": 105,
        "internalcode": 110,
        "upc": 8000990117393,
        "brand": "Santhé",
        "productline": "Thé",
        "name": "Thé Deteinato: alla Pesca",
        "manufacturer": "SANT’ANNA",
        "departament": "Acqua, succhi e bibite",
        "category": "BEVANDE AL THE E INFUSI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdIAIZZvAA36vE6Bslp0mDE9FlRQ4maCYeOZcJoa9CA&s"
    },
    {
        "id": 12,
        "upc": 8000990117416,
        "brand": "Schaer",
        "productline": "Ciocko Sticks",
        "name": "Biscotti: Ciocko Sticks ricoperti di Cioccolato al Latte",
        "manufacturer": "DR. SCHAER",
        "category": "BISCOTTI - DOLCI - MERENDINE - TORTE",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMWXcNcDjI4tW9M4F54CxWSpJ3AhYnHWyyJ3GQToGtQ&s"
    },
    {
        "id": 13,
        "parentcode": 12,
        "upc": 8000990117439,
        "brand": "Schaer",
        "name": "Biscotti di Pastafrolla: con Gocce di Cioccolato - Gocce di Sole",
        "category": "BISCOTTI - DOLCI - MERENDINE - TORTE",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6cbYomtS7CLNMQBBIyeLyrJXjkDF2S52NBYxcT4V5A&s"
    },
    {
        "id": 14,
        "parentcode": 12,
        "upc": 8000990117462,
        "brand": "Schaer",
        "productline": "Carrotinis",
        "name": "Carrotinis - Tortine alla Carota con farina di Quinoa",
        "category": "BISCOTTI - DOLCI - MERENDINE - TORTE",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Sm_DC2E6aVeSEt-9-BYd9ac2BpV1crXlSg1jqKZS&s"
    },
    {
        "id": 16,
        "parentcode": 12,
        "upc": 8000990117508,
        "brand": "Schaer",
        "name": "Croissant surgelati: à La Francaise - Croissant di pasta sfoglia",
        "category": "BISCOTTI - DOLCI - MERENDINE - TORTE",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSdp9PIQu8_j67l7zBKBMHRVKipdSZbLqxN_-0ar2Tw&s"
    }
]


const companies = {
    id:1,
    name:"Marel Tecnologia e Servizi SRL",
    address: "Via Augusto Ruffo, 36 37040 Arcole (Verona)",
    telephone: "045-6135111",
    fiscal_code_alias:"P.IVA",
    fiscal_code_title:"Partita Iva",
    fiscal_code: "02275030233"
}

const retailBanners = [
    {
        id:1,
        company_id:1,
        name:"Marel Supermercati",
        logo_url:""
    },
    {
        id:2,
        company_id:1,
        name:"Marel Grossista Prezzi Bassi",
        logo_url:""
    }


]



const stores = [
    {
        id:1,
        internal_code:'SM1',
        name:"Supermercato Marel Via della Lega Roma",
        address: "Via della Lega Lombarda, 32, 00162 Roma (RM)",
        retail_banner_id:1
    },
    {
        id:2,
        internal_code:'SM2',
        name:"Supermercato Marel Bullicante",
        address: "Via dell'Acqua Bullicante, 248, 00177 Roma (RM)",
        retail_banner_id:1
    },
    {
        id:3,
        internal_code:'GR1',
        name:"Marel Grossista Galla Placida Roma",
        address: "Via Galla Placidia, 27, 00159 Roma (RM)",
        retail_banner_id:2
    },
    {
        id:4,
        internal_code:'SM3',
        name:"Supermercato Marel Magliana",
        address: "Via della Magliana, 200, 00146 Roma (RM)",
        retail_banner_id:1
    },
    {
        id:5,
        internal_code:'SM4',
        name:"Supermercato Marel Rovigo",
        address: "Viale Porta Po, 68, 45100 Rovigo (RO)",
        retail_banner_id:1
    },
    {
        id:6,
        internal_code:'GR2',
        name:"Marel Grossista Catania",
        address: "Via Acquicella Porto, 6, 95121 Catania (CT)",
        retail_banner_id:2
    },
]
  
const plist =  [
    {
        "id": 1,
        "priceDate": "2022-12-12T19:17:55.577Z",
        "productId": 1,
        "upc": 8000990101451,
        "name": "Ice Tea: Green Tea Limone Zero Zucchero 1,5 l",
        "regularPrice": 5,
        "promoType": 0
    },
    {
        "id": 2,
        "priceDate": "2022-12-12T19:18:18.955Z",
        "productId": 2,
        "upc": 8000990117186,
        "name": "Ice Tea: Limone 1,5 l",
        "regularPrice": 5.65,
        "promoType": 0
    },
    {
        "id": 3,
        "priceDate": "2022-12-12T19:18:18.947Z",
        "productId": 3,
        "upc": 8000990117209,
        "name": "Ice Tea: Pesca 1,5 l",
        "regularPrice": 6.3845,
        "promoType": 1,
        "discount": 0.1,
        "nthUnit": 1
    },
    {
        "id": 4,
        "priceDate": "2022-12-12T19:18:19.006Z",
        "productId": 4,
        "upc": 8000990117232,
        "name": "Fruity Touch: Lime, Zenzero e Guaranà",
        "regularPrice": 7.214485,
        "promoType": 1,
        "exactDiscountedPrice": 4.84,
        "nthUnit": 1
    },
    {
        "id": 5,
        "priceDate": "2022-12-12T19:18:18.927Z",
        "productId": 5,
        "upc": 8000990117255,
        "name": "Fruity Touch: Limone",
        "regularPrice": 8.15236805,
        "promoType": 1,
        "discount": 0.15,
        "nthUnit": 3
    },
    {
        "id": 6,
        "priceDate": "2022-12-12T19:18:18.970Z",
        "productId": 6,
        "upc": 8000990117278,
        "name": "Thé: al Limone",
        "regularPrice": 9.2121758965,
        "promoType": 1,
        "discount": 1,
        "nthUnit": 4
    },
    {
        "id": 7,
        "priceDate": "2022-12-12T19:18:19.617Z",
        "productId": 7,
        "upc": 8000990117301,
        "name": "Thé: al Limone Senza Zucchero",
        "regularPrice": 10.409758763045,
        "promoType": 2,
        "nthUnit": 2,
        "reference":[{"productId": 11, "quantity": 2,"price": 12}]
    },
    {
        "id": 8,
        "priceDate": "2022-12-12T19:18:18.969Z",
        "productId": 8,
        "upc": 8000990117324,
        "name": "Thé: alla Pesca",
        "regularPrice": 11.76302740224085,
        "promoType": 0
    },
    {
        "id": 9,
        "priceDate": "2022-12-12T19:18:18.970Z",
        "productId": 9,
        "upc": 8000990117347,
        "name": "Thé: alla Pesca Senza Zucchero",
        "regularPrice": 13.29222096453216,
        "promoType": 0
    },
    {
        "id": 10,
        "priceDate": "2022-12-12T19:18:19.135Z",
        "productId": 10,
        "upc": 8000990117370,
        "name": "Thé Deteinato: al Limone",
        "regularPrice": 15.02020968992134,
        "promoType": 0
    },
    {
        "id": 11,
        "priceDate": "2022-12-12T19:18:18.942Z",
        "productId": 11,
        "upc": 8000990117393,
        "name": "Thé Deteinato: alla Pesca",
        "regularPrice": 16.972836949611114,
        "promoType": 0
    },
    {
        "id": 12,
        "priceDate": "2022-12-12T19:18:19.148Z",
        "productId": 12,
        "upc": 8000990117416,
        "name": "Biscotti: Ciocko Sticks ricoperti di Cioccolato al Latte",
        "regularPrice": 19.17930575306056,
        "promoType": 0
    },
    {
        "id": 13,
        "priceDate": "2022-12-12T19:18:18.909Z",
        "productId": 13,
        "upc": 8000990117439,
        "name": "Biscotti di Pastafrolla: con Gocce di Cioccolato - Gocce di Sole",
        "regularPrice": 21.672615500958432,
        "promoType": 0
    },
    {
        "id": 14,
        "priceDate": "2022-12-12T19:18:18.966Z",
        "productId": 14,
        "upc": 8000990117462,
        "name": "Carrotinis - Tortine alla Carota con farina di Quinoa",
        "regularPrice": 24.49005551608303,
        "promoType": 0
    },
    {
        "id": 15,
        "priceDate": "2022-12-12T19:18:19.147Z",
        "productId": 16,
        "upc": 8000990117508,
        "name": "Croissant surgelati: à La Francaise - Croissant di pasta sfoglia",
        "regularPrice": 27.673762733173824,
        "promoType": 0
    }
]



module.exports = {

    companies,
    retailBanners,
    stores,
    products:assortment,
    prices:plist

}