import axios from "axios"

const distrClient = axios.create({
  baseURL: "https://api-distr-db.raynet.work",
})

export async function fetchRawUrl(url) {
  return distrClient.get(url)
}

export async function getPools() {
  return distrClient.get("/pools")
}

export async function getHistory() {
  return distrClient.get("/ispo/history")
}

export async function getKeyHistory(search) {
  return distrClient.get(`/ispo/history/${search}`)
}

export async function getKeyAdaHistory(search) {
  return distrClient.get(`/rewards/key/${search}`)
}

const ispoClient = axios.create({
  baseURL: "https://api-distr-ispo.raynet.work",
})

export async function getKeyOrders(search) {
  return ispoClient.get(`/orders/key/${search}`)
}

export async function getKeyPayouts(search) {
  return ispoClient.get(`/payouts/key/${search}`)
}

const stakeClient = axios.create({
  baseURL: "https://api-tokens-db.raynet.work",
})

export async function getStakeHistory() {
  return stakeClient.get("/stake/history")
}

export async function getStakeBalance(search) {
  return stakeClient.get(`/stake/balance/${search}`)
}

export async function getStakeXrayPrice() {
  return stakeClient.get(`/data/price/last`)
}

export async function getStakeKeysTotal() {
  return stakeClient.get(`/data/keys/total`)
}