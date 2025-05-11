import { quoteAction } from "./actions";
import { getJupiterQuote } from "./tools";
import { SolanaAgentKit, Plugin } from "solana-agent-kit";
const DonutPlugin = {
  name: "DonutPlugin",
  methods: { getJupiterQuote },
  actions: [quoteAction],

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
