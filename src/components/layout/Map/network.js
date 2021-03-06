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
      ip: '178.128.178.48:6000',
      country: 'US',
      region: 'California',
      location: 'Santa Clara',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-3',
    coords: [41.5, 26.1],
    data: {
      ip: '104.131.30.242:6000',
      country: 'US',
      region: 'New Jersey',
      location: 'Clifton',
    }
  },
  {
    tags: ['relay'],
    name: 'ray-relay-2',
    coords: [28.8, 42.3],
    data: {
      ip: '161.35.41.136:6000',
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
      ip: '139.59.118.155:6000',
      country: 'SG',
      region: 'Singapore',
      location: 'Singapore',
    }
  },
  {
    type: 'api',
    tags: ['api', 'relay'],
    name: 'wallet-api',
    coords: [36.4, 49.4],
    data: {
      ip: '167.71.37.100:3001',
      country: 'DE',
      region: 'Hessen',
      location: 'Frankfurt am Main',
    }
  },
]