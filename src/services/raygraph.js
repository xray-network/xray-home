import axios from "axios"

const priceAPI = axios.create({
  baseURL: "https://api-prices.raygraph.io",
})

export async function getPricesXRAY() {
  return priceAPI.get(`/price/temp/xray`)
}

const stakeAPI = axios.create({
  baseURL: "https://api-stake.raygraph.io",
})

export async function getStage1ISPO() {
  return stakeAPI.get(`/stage1/stats/ispo`)
}

export async function getStage1Stake() {
  return stakeAPI.get(`/stage1/stats/stake`)
}
