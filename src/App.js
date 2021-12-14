import {
  React,
  Component,
  useEffect,
  useState
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetSpreaker from "./getSpreaker.js"
import GetEpisode from "./getEpisode.js"
import GetDescription from "./getDescription.js"
import MultiPlayer from "./Multiplayer.js";
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
//import client from './prismic-configuration.js'
import GetPrismic from "./getprismic.js";
import CalendarioSemanal from "./CalendarioSemanal.js";
import CalendarioDiario from "./CalendarioDiario.js";
import { Container } from "react-bootstrap";

function Main() {
  const [podcast, setPodcast] = useState([])
  const [dados, setDados] = useState([])
  const [userID, setUserID] = useState([])
  const [listaProgramas, setListaProgramas] = useState([])
  const [programaNoticia, setProgramaNoticia] = useState([])
  const [listaEpisodios, setListaEpisodios] = useState([])
  const [listaNoticias, setListaNoticias] = useState([])
  const [descricaoEpisodio, setDescricaoEpisodio] = useState([])
  const [conteudoprismic, setConteudoPrismic] = useState([])



  useEffect(() => {
    GetSpreaker(setDados, setListaProgramas, setProgramaNoticia)
    GetEpisode(4119263, setListaNoticias, 0)
    GetPrismic(setConteudoPrismic)
    //GetPrismic(Client)
    //GetDescription(43826958, setDescricaoEpisodio) //Pegando a descrição de forma estática de um episodio em específico 
  }, []);


  


  
  function cria_player(lista_ordenada_episodios){
    lista_ordenada_episodios = lista_ordenada_episodios
    const iframe = document.createElement('iframe');
    const html = "https://widget.spreaker.com/player?episode_id="  + lista_ordenada_episodios.episodio_id + "&hide-logo=true"; 
    /*No link https://developers.spreaker.com/guides/embedding-the-player/ ele mostra as opções que existem no player, como mudaça para o tema dark, autoplay e 
    coisas do genero. Para implementar tais opções, só é necessario adicionar após a variável de ID do episodio ou do show um &... 
    Como está acima, &theme=dark ativa o tema dark, se fosse uma opção como hide-logo seria &hide-logo=true. */ 
    iframe.src = html;
    iframe.sandbox = 'allow-scripts allow-popups';
    iframe.width = "50%";
    iframe.height="100px";
    iframe.frameborder="0";
    document.body.appendChild(iframe);
  }

  function getImages(){
    const listaProgramasFiltrada = listaProgramas.sort((a, b) => b.datacao_filtrada - a.datacao_filtrada)
    listaNoticias.sort((a, b) => parseInt(b.episodio_id) - parseInt(a.episodio_id))
    
    
    let content = []
    for (let el in listaProgramasFiltrada){
      content.push(<img onMouseOver={() => GetEpisode(listaProgramasFiltrada[el].show_id, 0,setListaEpisodios)}
        alt="Avatar" src={listaProgramasFiltrada[el].image_url} width={176} height={180}/>)

    }
    if(programaNoticia.length > 0){
      content.push(<img 
      alt="Avatar" src={programaNoticia[0].image_url} width={176} height={180}/>)
    }

    if(listaNoticias.length == 5){
      for(let el in listaNoticias){
        content.push(<div>{listaNoticias[el].titulo}<br></br><span>{listaNoticias[el].descricao}</span><button onClick={()=>cria_player(listaNoticias[el])}>Play</button><br></br><br></br></div>)
      }
    }

    
    return content

    
   }
  
   
  
  if (listaNoticias !== []) {
    
    return (
      <Container fluid style={{backgroundColor:'#E5E5E5', padding:'10px'}}>
        {/*<MultiPlayer urls={["http://servidor21.brlogic.com:7712/live"]}/>
        <img style={{}} src="fundo_broadcast.png"/>

      
        <p>Resultados para: {dados.fullname}</p>
       {dados.image_url !== undefined &&(
        getImages()
        
       )}*/
       }
       {conteudoprismic.length !== 0 &&
       
       <CalendarioSemanal conteudo_calendario={conteudoprismic} />
       }

    

      </Container>
    )
   
    }
}

export default Main;
/*<p>{conteudoprismic.results[0].data["page-title"][0].text}</p>
       <img style={{width:conteudoprismic.results[0].data["page-image"].width, height:conteudoprismic.results[0].data["page-image"].height}}src={conteudoprismic.results[0].data["page-image"].url}></img>
       <p>{conteudoprismic.results[0].data["page-body"][0].text}</p>*/