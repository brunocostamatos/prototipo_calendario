function GetDescription(IdEpisodio, setDescricaoEpisodio){
   let descricao = [];
   fetch(`https://api.spreaker.com/v2/episodes/`+IdEpisodio)
   .then((response)=>response.json())                 
   .then((id)=>{
       descricao.push(id.response.episode.description)
       
    })
    setDescricaoEpisodio(descricao)
}



export default GetDescription




