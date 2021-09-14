import axios from "axios"

const client = axios.create({
  baseURL: 'https://api-mainnet-graphql.raynet.work/',
})

export const getNetworkInfo = async () => {
  return client.post("/", {
    query: `
      {
        cardano {
          tip {
            number
            slotNo
          }
          currentEpoch {
            number
            startedAt
            blocksCount
          }
        }
      }
    `,
  })
}