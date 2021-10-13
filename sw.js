self.addEventListener('fetch', event => {
    if (event.request.url.includes('.png')) {
        let respuesta = fetch('img/uta_2.png')
        //let respuesta = fetch(event.request.url)
        //let respuesta = fetch(event.request)
        event.respondWith(respuesta)
    }
    if (event.request.url.includes('styles.css')) {
        let respuesta = new Response(`
            body{
                background-color:#D8EEF9;
                color: #1F977F;
                text-align:center;
            }

            img{
                width:50%;
                border-radius:50%;
            }
        `, { headers: { 'Content-Type': 'text/css' } })
        event.respondWith(respuesta)
    }
})