
# Donut MCP Server Powered by Solana Agent Kit

</div>

A Model Context Protocol (MCP) Server for Solana Blockchain Data.


## Features

- Supports actions from [Solana Agent Kit](https://github.com/sendaifun/solana-agent-kit) that do __not__ need signer
- MCP server implementation for AI integraion
- Cloudflare worker for easy sse deployment
- `DonutPlugin` for specific actions to this server

## Prerequisites

- Node.js (v16 or higher recommended)
- pnpm


## Installation


```bash
pnpm install
```

```bash
cp example.dev.vars .dev.vars
```

By default wrangler uses `.dev.vars` for loading environmental variables

## Run Dev Server

```bash
pnpm dev
```

## Add to MCP Client


```json
{
  "mcpServers": {
    "donut-mcp": {
      "url": "http://localhost:8787/sse"
    }
  }
}
```
