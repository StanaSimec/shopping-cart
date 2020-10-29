import {createServer, Model} from "miragejs"

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,

        models: {
            item: Model,
            order: Model
        },

        seeds(server) {
            server.create("item", {
                name: "KAWASAKI NINJA 300",
                price: "105 000",
                category: "SPORT",
                img: "https://cdn.pixabay.com/photo/2014/10/24/08/31/motorcycle-500910_1280.jpg"
            })
            server.create("item", {
                name: "BMW 1300",
                price: "210 000",
                category: "TRAVEL",
                img: "https://cdn.pixabay.com/photo/2014/11/18/03/54/motorcycle-535595_1280.jpg"
            })
            server.create("item", {
                name: "KTM RC 390",
                price: "112 000",
                category: "SPORT",
                img: "https://cdn.pixabay.com/photo/2015/12/08/00/24/motorcycle-1081685_1280.jpg"
            })
            server.create("item", {
                name: "HONDA CBR 600",
                price: "140 000",
                category: "SPORT",
                img: "https://cdn.pixabay.com/photo/2020/07/20/10/51/honda-5422612_1280.jpg"
            })
            server.create("item", {
                id: 4,
                name: "YAMAHA R3",
                price: "130 000",
                category: "SPORT",
                img: "https://cdn.pixabay.com/photo/2020/04/13/21/57/r3-5040161_1280.jpg"
            })
            server.create("item", {
                id: 5,
                name: "BMW 1200 S",
                price: "350 000",
                category: "TRAVEL",
                img: "https://cdn.pixabay.com/photo/2017/07/09/12/03/bmw-2486777_1280.jpg"
            })
            server.create("order", {
                contact: {
                    firstName: "Jim (example order)",
                    lastName: "Morris",
                    street: "Main street 123",
                    city: "Tampa Bay"
                },
                items: [
                    {
                        id: 0,
                        name: 'KAWASAKI NINJA 300',
                        price: '105 000',
                        category: 'SPORT',
                        img: 'https://cdn.pixabay.com/photo/2014/10/24/08/31/motorcycle-500910_1280.jpg',
                        count: 1
                    },
                    {
                        id: 1,
                        name: 'BMW 1300',
                        price: '210 000',
                        category: 'TRAVEL',
                        img: 'https://cdn.pixabay.com/photo/2014/11/18/03/54/motorcycle-535595_1280.jpg',
                        count: 2
                    }
                ]
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/items", (schema) => {
                return schema.items.all()
            })

            this.get("/orders", (schema) => {
                return schema.orders.all()
            })

            this.post("/orders", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                return schema.orders.create(attrs)
            })

        },
    })

    return server
}