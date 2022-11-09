const network = [
  {
    type: "producer",
    tags: ["producer"],
    name: "POOLS",
    coords: [46.6, 11.7],
    data: {
      country: "worldwide",
      region: "worldwide",
      location: "worldwide",
    },
  },
  {
    tags: ["relay"],
    name: "ray-relay-1",
    coords: [46.6, 13.5],
    data: {
      country: "US",
      region: "California",
      location: "Santa Clara",
    },
  },
  {
    tags: ["relay"],
    name: "ray-relay-2",
    coords: [41.5, 26.1],
    data: {
      country: "US",
      region: "New Jersey",
      location: "Clifton",
    },
  },
  {
    tags: ["relay"],
    name: "ray-relay-3",
    coords: [28.8, 42.3],
    data: {
      country: "UK",
      region: "England",
      location: "London",
    },
  },
  {
    tags: ["relay"],
    name: "ray-relay-4",
    coords: [59.5, 78.1],
    data: {
      country: "SG",
      region: "Singapore",
      location: "Singapore",
    },
  },
  {
    type: "api",
    tags: ["api", "relay"],
    name: "cardano-graphql",
    coords: [36.4, 49.4],
    data: {
      country: "DE",
      region: "Hesse",
      location: "Frankfurt am Main",
    },
  },
]

export default network
