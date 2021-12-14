import Prismic from '@prismicio/client'

function GetPrismic(setConteudoPrismic){
    const apiEndpoint = 'https://de-s-lynham.prismic.io/api/v2'
    const client = Prismic.client(apiEndpoint)

    const response = client.query(Prismic.Predicates.at('document.type', 'calendario'))
      
      response.then(res =>{
        //console.log(res)
        setConteudoPrismic(res)
      })
      /*if (response) {
        // response is the response object, response.results holds the documents
        setConteudoPrismic(response)
        console.log(response.results)
      }*/
     
 }
 
 
 
 export default GetPrismic
 
 
 