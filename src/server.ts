import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",    
});

const teams = [
    { id: 1, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Ferrari", base: "Maranello, Italy" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Haas", base: "Kannapolis, United States" },
    { id: 8, name: "Visa Cash App Racing Bulls", base: "Faenza, Italy" },
    { id: 9, name: "Williams", base: "Grove, United Kingdom" },
    { id: 10, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Switzerland" }
];

const drivers = [
    { id: 1, drivers: ["Max Verstappen", "Liam Lawson"] },
    { id: 2, drivers: ["George Russell", "Andrea Kimi Antonelli"] },
    { id: 3, drivers: ["Charles Leclerc", "Lewis Hamilton"] },
    { id: 4, drivers: ["Lando Norris", "Oscar Piastri"] },
    { id: 5, drivers: ["Fernando Alonso", "Lance Stroll"] },
    { id: 6, drivers: ["Pierre Gasly", "Jack Doohan"] },
    { id: 7, drivers: ["Esteban Ocon", "Oliver Bearman"] },
    { id: 8, drivers: ["Yuki Tsunoda", "Isack Hadjar"] },
    { id: 9, drivers: ["Alexander Albon", "Carlos Sainz Jr."] },
    { id: 10, drivers: ["Nico Hülkenberg", "Gabriel Bortoleto"] }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
  return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams{
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" };
    }else {
        response.type("application/json").code(200);
        return { driver };
    }


});

server.listen({ port:3333 }, () => {
    console.log("Server init");
})