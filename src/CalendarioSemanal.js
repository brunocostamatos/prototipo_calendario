import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";

export function CalendarioSemanal(conteudo_prismic) {
  //console.log("FUNCAO CALENDARIO", conteudo_prismic)
 
  return (
   <>
    
       <Button style={{padding:'5px', marginLeft:'10px'}} onClick={()=> window.location.replace('/')}>Semanal</Button>
        <Button style={{padding:'5px', marginLeft:'10px'}} onClick={()=>window.location.replace('/cal_diario')}>Diário</Button>
      <div style={{textAlign:'center', color: 'black', display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'baseline'}}>
        
      <button onClick={()=>window.alert('Fase de testes')}>&lt;</button>
        Teste
        <button onClick={()=>window.alert('Fase de testes')}>&gt;</button>
        </div>
        <br></br>
    <Row>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Segunda
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.segunda_feira.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Terça
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.terca_feira.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>
    
    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Quarta
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.quarta_feira.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Quinta
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.quinta_feira.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Sexta
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.sexta_feira.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Sábado
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.sabado.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    <Col>
    <Col>
    <div id="dia_semana" style={{width:'178.3px',backgroundColor:'#D9D8D8', border:'1px solid #858585', borderRadius:'8px', textAlign:'center'}}>
    Domingo
    </div>
    </Col>
    {conteudo_prismic.conteudo_calendario.results[0].data.domingo.map(conteudo=>{
      return <Col style={{width:'178.3px', height:'96px', padding:'5px',fontSize:'10px', marginTop:'10px',backgroundColor: conteudo.cor_programa, borderRadius:'8px'}}>
      <p style={{fontWeight:'bolder'}}>{conteudo.titulo_programa[0].text}</p> <p>{conteudo.descricao_programa[0].text}</p>
      </Col>
    })}
    </Col>

    </Row>

    </>
    
  );
}



export default CalendarioSemanal;









