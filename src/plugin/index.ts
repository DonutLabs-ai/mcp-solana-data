import {
  quoteAction,
  unsignedSwapAction,
  transferUnsignedAction,
  getTokenListAction,
  getTokenDataBatchAction,
  getTokenInfoAction,
  donutRugcheckAction,
  solSnifferAction,
} from "./actions";
import {
  getJupiterQuote,
  getJupiterSwapUnsigned,
  transferUnsigned,
  getTokenList,
  supportedTokenAddress,
  getTokenMarketInfo,
  getTokenInfo,
  donutFetchTokenDetailedReport,
  fetchSolsnifferReport,
} from "./tools";
import { SolanaAgentKit, Plugin } from "solana-agent-kit";
const DonutPlugin = {
  name: "DonutPlugin",
  methods: {
    getJupiterQuote,
    getJupiterSwapUnsigned,
    transferUnsigned,
    getTokenList,
    supportedTokenAddress,
    getTokenMarketInfo,
    getTokenInfo,
    donutFetchTokenDetailedReport,
    fetchSolsnifferReport,
  },
  actions: [
    quoteAction,
    unsignedSwapAction,
    transferUnsignedAction,
    getTokenListAction,
    getTokenDataBatchAction,
    getTokenInfoAction,
    donutRugcheckAction,
    solSnifferAction,
  ],

  // Initialize function
  initialize: function (agent: SolanaAgentKit): void {
    // Initialize all methods with the agent instance
    for (const [methodName, method] of Object.entries(this.methods)) {
      if (typeof method === "function") {
        this.methods[methodName] = method.bind(null, agent);
      }
    }
  },
} satisfies Plugin;

export { DonutPlugin };
