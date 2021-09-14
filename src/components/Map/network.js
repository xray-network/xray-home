const network = [
  {
    type: "producer",
    tags: ["producer"],
    name: "POOLS",
    coords: [46.6, 11.7],
    data: {
      ip: "hidden",
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
      ip: "64.227.100.163:6000",
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
      ip: "167.71.100.211:6000",
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
      ip: "209.97.182.31:6000",
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
      ip: "128.199.225.190:6000",
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
      ip: "Cloudflare Proxy",
      country: "DE",
      region: "Hesse",
      location: "Frankfurt am Main",
    },
  },
]

export default network
