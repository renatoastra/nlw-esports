import express from "express";

const app = express();

app.get("/ads", (request, response) => {
    return response.json(
        [
            { id: 1, name: "Anúnuncio 1" },
            { id: 2, name: "Anúnuncio 2" },
            { id: 3, name: "Anúnuncio 3" },
            { id: 3, name: "Anúnuncio 4" },
            { id: 3, name: "Anúnuncio 5" },
        ]
    );
})

app.listen(3333);