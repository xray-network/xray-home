import CardanoWeb3 from "../cardano-web3-browser"

const Cardano = new CardanoWeb3({
  crypto: {
    network: "mainnet",
  },
  explorer: {
    url: "https://api-mainnet-graphql.rraayy.com",
    // responseHandler: (response) => {
    //   const { data } = response
    //   if (data.errors) {
    //     data.errors.forEach(() => {
    //       notification.warning({
    //         message: "Something went wrong :(",
    //         description:
    //           "Please try to update your wallet data or reload the app",
    //       })
    //     })
    //     return false
    //   }
    //   return response
    // },
    // errorHandler: () => {
    //   notification.warning({
    //     message: "Something went wrong :(",
    //   })
    // },
  },
})

export default Cardano
