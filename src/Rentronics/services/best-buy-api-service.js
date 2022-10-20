import axios from "axios"

const API = process.env.BEST_BUY_API;
const API_KEY = process.env.BEST_BUY_API_KEY;

export const searchProduct = async (search_terms) => {
    let search_query = createSearchQuery(search_terms);

    console.log(search_query);

    const response = await axios.get(API + search_query);
    
    console.log(response.data.products);
    return response.data.products;
}

export const getProductPrice = async (sku) => {
    const query = API + '(sku='+ sku +')?apiKey=' + API_KEY + '&format=json';
    console.log(query);
    const response = await axios.get(query);
    console.log(response.data.products[0].regularPrice);
    return response.data.products[0].regularPrice;
}


const createSearchQuery = (search_terms) => {
    let splitTerms;

    console.log(search_terms.category);

    if (search_terms.keywords !== '') {
        splitTerms = search_terms.keywords.split(' ');
        splitTerms.push(search_terms.category);
    } else {
        splitTerms = [];
        splitTerms.push(search_terms.category);
    }

    // if (search_terms.keywords === '' && search_terms.category === 'any') {
    //     splitTerms = ['*'];
    // }

    let search_query = "(("; 

    console.log(splitTerms);

    let i = 0;

    while (i < splitTerms.length - 1) {
        search_query += 'search=' + splitTerms[i] + '&';
        i++;
    }
    
    search_query += 'search=' + splitTerms[i] + ")";
    search_query += '&manufacturer=' + search_terms.brand;
    search_query += "&type=HardGood)?apiKey="+ API_KEY +"&show=details.value,images,image,name,modelNumber,regularPrice,sku&format=json"
    
    return search_query;
}