export default [
  {
    type: 'producer',
    tags: ['producer'],
    name: 'RAY',
    coords: [46.6, 11.7],
    data: {
      ip: 'hidden',
      country: 'US',
      region: 'California',
      location: 'Santa Clara',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-1',
    coords: [46.6, 13.5],
    data: {
      ip: '143.198.105.5:6000',
      country: 'US',
      region: 'California',
      location: 'Santa Clara',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-2',
    coords: [41.5, 26.1],
    data: {
      ip: '68.183.62.149:6000',
      country: 'US',
      region: 'New Jersey',
      location: 'Clifton',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-3',
    coords: [28.8, 42.3],
    data: {
      ip: '159.65.23.21:6000',
      country: 'UK',
      region: 'England',
      location: 'London',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-4',
    coords: [59.5, 78.1],
    data: {
      ip: '128.199.234.204:6000',
      country: 'SG',
      region: 'Singapore',
      location: 'Singapore',
    }
  },
  {
    type: 'api',
    tags: ['api', 'relay'],
    name: 'cardano-graphql',
    coords: [36.4, 49.4],
    data: {
      ip: '207.154.251.39',
      country: 'DE',
      region: 'Hesse',
      location: 'Frankfurt am Main',
    }
  },
]