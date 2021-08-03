import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import LayoutWiki from "@/layouts/Wiki"
import Heading from "@/components/shared/Heading"

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Stake Delegators Wiki" />
      <Heading id="stake-delegators">
        <strong>Stake Delegators</strong>
      </Heading>

      <h5><strong>What is the Stake Delegators program?</strong></h5>
      <p>This is a program for distributing <span className="ray__ticker">XRAY</span> tokens to Ray pools delegators.</p>

      <div className="ray__line mb-4" />
      <h5><strong>How can I participate in the Stake Delegators program?</strong></h5>
      <p>You must delegate <span className="ray__ticker">ADA</span> to the Ray pools. This can be done through various wallets such as Ray Wallet, Yoroi, Daedalus, or Adalite.</p>
      <p>Ray Wallet delegation process:</p>
      <ul>
        <li>Visit <a href="https://raywallet.io" target="_blank" rel="noopener noreferrer">https://raywallet.io</a></li>
        <li>Create a wallet or unlock an existing one</li>
        <li>Go to Stake -&gt; Pools section and delegate to any Ray pool (select a pool with a saturation less than 100%)</li>
      </ul>
      <p>Other wallets with delegation feature:</p>
      <ul>
        <li>Find delegation section</li>
        <li>Find Ray pools by ID or HASH (see <Link to="/stake/pools/">Stake &rarr; Pools</Link> section)</li>
      </ul>

      <div className="ray__line mb-4" />
      <h5><strong>How many rewards will I get?</strong></h5>
      <p>You will receive your first rewards after two epochs after the delegation (an epoch in Cardano is a period of five days):</p>
      <ul>
        <li>~0.07% in <span className="ray__ticker">ADA</span> per epoch (~5% ROI)</li>
        <li>1 <span className="ray__ticker">XRAY</span> per 50 <span className="ray__ticker">ADA</span> per epoch (rate may vary, see distribution rules)</li>
      </ul>

      <div className="ray__line mb-4" />
      <h5><strong>When can I get XRAY rewards?</strong></h5>
      <p>Follow the announcements on social networks.</p>

      <div className="ray__line mb-4" />
      <h5><strong>What is an additional bonus and how can I get it?</strong></h5>
      <p>
        <strike>Additional early delegators bonus (1,538,200 XRAY) available for delegators joined to the program up to and including epoch 275.</strike>
        {' '}Registration end.
      </p>

      <div className="ray__line mb-4" />
      <h5><strong>Where can I withdraw my rewards? Or check my balance?</strong></h5>
      <p>After two epochs after the delegation you will start to receive your rewards. Rewards can be withdrawn at any time. You can accumulate them, or withdraw them each epoch.</p>
      <p>You can check or withdraw your <span className="ray__ticker">XRAY</span> or <span className="ray__ticker">ADA</span> rewards in Ray Wallet. If you don't use Ray Wallet, do so on the token distribution page <Link to="/stake/track/">Stake &rarr; Track & Withdraw</Link>.</p>

      <div className="ray__line mb-4" />
      <h5><strong>Where can I see the distribution rules?</strong></h5>
      <p>Visit the token distribution page <Link to="/xray-token/distribution/">XRAY Token &rarr; Distribution</Link>.</p>

      <div className="ray__line mb-4" />
      <h5><strong>Why should I send 2 ADA's to a special address?</strong></h5>
      <p>Native tokens cannot be sent separately from <span className="ray__ticker">ADA</span>, this is a limitation of Cardano. Minimum amount of <span className="ray__ticker">ADA</span> sent together with token is ~1.5 (it will be returned to you with <span className="ray__ticker">XRAY</span> rewards) and ~0.5 as transaction fee.</p>
      <p>Therefore, we require 2 <span className="ray__ticker">ADA</span> to be sent to a special address to cover these costs.</p>

      <div className="ray__line mb-4" />
      <h5><strong>Can I use the Hardware Wallet for delegation?</strong></h5>
      <p>Implementation of hardware wallets is still in progress, so you can use any other wallet that supports hardware wallets.</p>
    </LayoutWiki>
  )
}

export default Page