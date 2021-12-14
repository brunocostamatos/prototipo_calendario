import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export function CalendarioDiario(conteudo_prismic) {
  //console.log("FUNCAO CALENDARIO", conteudo_prismic.conteudo_calendario.results[0].data)
  const [diaSemana, setDiaSemana] = useState([])
  const [dateTime, setDateTime] = useState([])
  useEffect(() => {
    Dia(setDiaSemana, setDateTime)
  }, []);
  function Dia(setDiaSemana, setDateTime){
    var today = new Date();
    var date =today.getDate()+'/'+(today.getMonth()+1);
    var dateTime = date
    var options = {  weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    var prnDt = new Date().toLocaleTimeString('pt-br', options);
    console.log(new Date().toLocaleTimeString('pt-br', options))
    console.log("date",dateTime)
    const dia_mes_semana = prnDt
    const dia_da_semana = dia_mes_semana.toString().split(',')
    setDateTime(dateTime)
    if(dia_da_semana[0] === 'segunda-feira'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.segunda_feira)
    }
    if(dia_da_semana[0] === 'terça-feira'){
     setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.terca_feira)
    }
    if(dia_da_semana[0] === 'quarta-feira'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.quarta_feira)
     
    }
    if(dia_da_semana[0] === 'quinta-feira'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.quinta_feira)
      
    }
    if(dia_da_semana[0] === 'sexta-feira'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.sexta_feira)
     
    }
    if(dia_da_semana[0] === 'sabado'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.sabado)
     
    }
    if(dia_da_semana[0] === 'domingo'){
      setDiaSemana(conteudo_prismic.conteudo_calendario.results[0].data.domingo)
     
    }
    
  }

  

  return (
    
    <>
      <Button style={{padding:'5px', marginLeft:'10px'}} onClick={()=> window.location.replace('/')}>Semanal</Button>
        <Button style={{padding:'5px', marginLeft:'10px'}} onClick={()=>window.location.replace('/cal_diario')}>Diário</Button>
        <div style={{textAlign:'center', color: 'black', display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'baseline'}}>
       
       <button onClick={()=>window.alert('Fase de testes')}>&lt;</button>
        <p style={{}}>{dateTime}</p>
        <button onClick={()=>window.alert('Fase de testes')}>&gt;</button>
        </div>
        <br></br>
    <Row xs={2}>
    <Col style={{width:'8.5%'}}>

    {diaSemana.map(conteudo=>{
      const titulo_com_horario = conteudo.titulo_programa[0].text
      const horario = titulo_com_horario.toString().split('-')
      return <Col style={{width:'112px', height:'96px',padding:'5px',fontSize:'15px', marginTop:'10px',backgroundColor: '#CFCBCB', borderRadius:'8px', border:'1px solid #858585'}}>
      <p style={{fontWeight:'bolder', textAlign:'center',padding:'5px'}}>{horario[0]}
      </p> 
      </Col>
      
    })}
    </Col>
    <Col>
    {diaSemana.map(conteudo=>{
      const titulo_com_horario = conteudo.titulo_programa[0].text
      const titulo = titulo_com_horario.toString().split('-')
      return <Col style={{width:'1208px', height:'96px', padding:'5px',fontSize:'12px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px', border:'1px solid #858585'}}>
      <p style={{fontWeight:'bolder'}}>{titulo[1]}</p> <p style={{fontWeight:'bolder'}}>{conteudo.descricao_programa[0].text}</p> <p style={{cursor:'pointer'}}onClick={()=>{window.alert('Botao funcionando')}}>Ver mais</p>
      </Col>
      
    })}</Col>
    </Row>


    </>
  );
}



export default CalendarioDiario;









