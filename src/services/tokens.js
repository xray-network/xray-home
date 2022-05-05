import axios from "axios"

const dbClient = axios.create({
  baseURL: "https://api-tokens-db.raynet.work",
})

export async function fetchRawUrlDbClient(url) {
  return dbClient.get(url)
}

export async function getStakeHistory() {
  return dbClient.get("/stake/history")
}

export async function getStakeKeyHistory(search) {
  return dbClient.get(`/stake/history/${search}`)
}

const claimClient = axios.create({
  baseURL: "https://api-tokens-claim.raynet.work",
  // baseURL: "http://0.0.0.0:9091",
})

export async function fetchRawUrlIspoClient(url) {
  return claimClient.get(url)
}