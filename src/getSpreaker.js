function GetSpreaker(setDados, setListaProgramas, setProgramaNoticia) {
    let chave_acesso = "20e75b947a1909b99b242724438ed46dad9576b1";

    fetch(
            `https://api.spreaker.com/v2/me?oauth2_access_token=` + chave_acesso 
        )
        .then((response) => response.json())
        .then((dados) => {
            setDados(dados.response.user)
            return dados;
        })
        .then((dados) => {
            if (dados.response.user.user_id != undefined) {
                
                fetch(
                        `https://api.spreaker.com/v2/users/` +
                        dados.response.user.user_id +
                        `/shows`
                    )
                    .then((response) => response.json())
                    .then((podcasts) => {
                       
                        return podcasts;
                    })
                    .then((podcasts) => {
                        let tamanho = podcasts.response.items.length;
                        var lista_programas = [];
                        var programa_noticia = [];
                        for (var i = 0; i < tamanho; i++) {
                            if (
                                podcasts.response.items[i].title !=
                                "Rádio UFRJ - Informação & Conhecimento"
                            ) {
                                if (podcasts.response.items[i].last_episode_at != null) {
                                    lista_programas.push({
                                        show_id: podcasts.response.items[i].show_id,
                                        title: podcasts.response.items[i].title,
                                        datacao_filtrada: new Date(podcasts.response.items[i].last_episode_at.split(' ')[0]),
                                        last_episode_at: podcasts.response.items[i].last_episode_at,
                                        image_url: podcasts.response.items[i].image_url
                                    });
                                }
                            }  
                            else{
                                programa_noticia.push({
                                    show_id: podcasts.response.items[i].show_id,    
                                    title: podcasts.response.items[i].title,
                                    image_url: podcasts.response.items[i].image_url
                                })
                            }
                        }
                        
                        setProgramaNoticia(programa_noticia)
                        setListaProgramas(lista_programas)
                       
                    });
            }
        })
        
}

export default GetSpreaker