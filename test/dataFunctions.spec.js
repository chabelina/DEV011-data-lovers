import { filterData } from "../src/dataFunctions.js";
import { fakeData } from "./data.js";

//console.log(fakeData);

describe("filterData", () => {
  it("la data se filtre según el valor elegido por el usuario", () => {
    const dataResults = [
      {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        title: "Kiki's Delivery Service",
        description:
          "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        release_date: "1989",
        rt_score: "96",
        people: [
          {
            id: "4151abc6-1a9e-4e6a-5678-aac05ra641js",
            name: "Kiki",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
            gender: "Female",
            age: "13",
            eye_color: "Black",
            hair_color: "Brown",
            specie: "Witch",
          },
          {
            id: "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
            name: "Jiji",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
            gender: "Male",
            age: "13",
            eye_color: "Black",
            hair_color: "Black",
            specie: "Cat",
          },
          {
            id: "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
            name: "Ursula",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Ursula.jpg",
            gender: "Female",
            age: "18",
            eye_color: "Black",
            hair_color: "Red",
            specie: "Human",
          },
          {
            id: "4321dse3-6r6s-3r4d-5641-rdq19re765de",
            name: "Tombo",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Tombo.jpg",
            gender: "Male",
            age: "13",
            eye_color: "Black",
            hair_color: "Brown",
            specie: "Human",
          },
          {
            id: "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            name: "Osono",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
            gender: "Female",
            age: "30",
            eye_color: "Brown",
            hair_color: "Red",
            specie: "Human",
          },
          {
            id: "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            name: "Fukuo",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Fukuo.jpg",
            gender: "Male",
            age: "Adult",
            eye_color: "Black",
            hair_color: "Black",
            specie: "Human",
          },
        ],
        locations: [
          {
            id: "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
            name: "Ursula's Log Cabin",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
            climate: "TODO",
            terrain: "TODO",
            surface_water: "40",
            residents: ["TODO"],
          },
          {
            id: "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
            name: "Koriko",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
            climate: "Mild",
            terrain: "Hill",
            surface_water: "50",
            residents: ["TODO"],
          },
          {
            id: "62346d33-caa0-4c17-8016-0aca56f3066b",
            name: "Karikiya",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
            climate: "Mild",
            terrain: "City",
            surface_water: "30",
            residents: ["TODO"],
          },
          {
            id: "64a996aa-481e-4627-9624-ab23f59a05a9",
            name: "Guchokipanya",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
            climate: "Continental",
            terrain: "Hill",
            surface_water: "50",
            residents: [
              {
                id: "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
                name: "Osono",
              },
              {
                id: "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
                name: "Fukuo",
              },
            ],
          },
        ],
        vehicles: [],
      },
    ];
    expect(filterData(fakeData, "director", "Hayao Miyazaki")).toEqual(
      dataResults
    );
  });
});

/*describe("sortData", () => {
  it("la data se filtre según el valor elegido por el usuario", () => {
    const dataResults = [
      {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        title: "Kiki's Delivery Service",
        description:
          "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        release_date: "1989",
        rt_score: "96",
        people: [
          {
            id: "4151abc6-1a9e-4e6a-5678-aac05ra641js",
            name: "Kiki",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
            gender: "Female",
            age: "13",
            eye_color: "Black",
            hair_color: "Brown",
            specie: "Witch",
          },
          {
            id: "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
            name: "Jiji",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
            gender: "Male",
            age: "13",
            eye_color: "Black",
            hair_color: "Black",
            specie: "Cat",
          },
          {
            id: "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
            name: "Ursula",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Ursula.jpg",
            gender: "Female",
            age: "18",
            eye_color: "Black",
            hair_color: "Red",
            specie: "Human",
          },
          {
            id: "4321dse3-6r6s-3r4d-5641-rdq19re765de",
            name: "Tombo",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Tombo.jpg",
            gender: "Male",
            age: "13",
            eye_color: "Black",
            hair_color: "Brown",
            specie: "Human",
          },
          {
            id: "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            name: "Osono",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
            gender: "Female",
            age: "30",
            eye_color: "Brown",
            hair_color: "Red",
            specie: "Human",
          },
          {
            id: "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            name: "Fukuo",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Fukuo.jpg",
            gender: "Male",
            age: "Adult",
            eye_color: "Black",
            hair_color: "Black",
            specie: "Human",
          },
        ],
        locations: [
          {
            id: "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
            name: "Ursula's Log Cabin",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
            climate: "TODO",
            terrain: "TODO",
            surface_water: "40",
            residents: ["TODO"],
          },
          {
            id: "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
            name: "Koriko",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
            climate: "Mild",
            terrain: "Hill",
            surface_water: "50",
            residents: ["TODO"],
          },
          {
            id: "62346d33-caa0-4c17-8016-0aca56f3066b",
            name: "Karikiya",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
            climate: "Mild",
            terrain: "City",
            surface_water: "30",
            residents: ["TODO"],
          },
          {
            id: "64a996aa-481e-4627-9624-ab23f59a05a9",
            name: "Guchokipanya",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
            climate: "Continental",
            terrain: "Hill",
            surface_water: "50",
            residents: [
              {
                id: "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
                name: "Osono",
              },
              {
                id: "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
                name: "Fukuo",
              },
            ],
          },
        ],
        vehicles: [],
      },
    ];
    expect(filterData(fakeData, "director", "Hayao Miyazaki")).toEqual(
      dataResults
    );
  });
});
*/