(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{372:function(e,t,n){"use strict";n.r(t);var a=n(45),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"introduction-to-zksync-for-developers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-zksync-for-developers"}},[e._v("#")]),e._v(" Introduction to zkSync for Developers")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("zkSync is a scaling and privacy engine for Ethereum. Its current functionality scope includes low gas transfers of ETH\nand ERC20 tokens in the Ethereum network, atomic swaps & limit orders as well as native L2 NFT support. This document is a high-level description of the zkSync development ecosystem.")]),e._v(" "),n("p",[e._v("zkSync is built on ZK Rollup architecture. ZK Rollup is an L2 scaling solution in which all funds are held by a smart\ncontract on the mainchain, while computation and storage are performed off-chain. For every Rollup block, a state\ntransition zero-knowledge proof (SNARK) is generated and verified by the mainchain contract. This SNARK includes the\nproof of the validity of every single transaction in the Rollup block. Additionally, the public data update for every\nblock is published over the mainchain network in the cheap calldata.")]),e._v(" "),n("p",[e._v("This architecture provides the following guarantees:")]),e._v(" "),n("ul",[n("li",[e._v("The Rollup validator(s) can never corrupt the state or steal funds (unlike Sidechains).")]),e._v(" "),n("li",[e._v("Users can always retrieve the funds from the Rollup even if validator(s) stop cooperating because the data is\navailable (unlike Plasma).")]),e._v(" "),n("li",[e._v("Thanks to validity proofs, neither users nor a single other trusted party needs to be online to monitor Rollup blocks\nin order to prevent fraud (unlike payment channels or Optimistic Rollups).")])]),e._v(" "),n("p",[e._v("In other words, ZK Rollup strictly inherits the security guarantees of the underlying L1.")]),e._v(" "),n("h2",{attrs:{id:"capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),n("p",[e._v("First of all, zkSync, as a scaling solution, is capable of making transfers, and doing them quick and cheap. Interfaces\nand principles of the core zkSync functionality are covered in the "),n("a",{attrs:{href:"/dev/payments"}},[e._v("payments section")]),e._v(" of this\ndocumentation.")]),e._v(" "),n("p",[e._v("Secondly, zkSync is smart-contract friendly. Targeting 2021, it will be possible to either write contracts in Zinc,\nRust-based type-safe programming language, or even reuse existing Solidity code. Contracts interoperability is covered\nin the "),n("a",{attrs:{href:"/dev/contracts"}},[e._v("contracts section")]),e._v(".")]),e._v(" "),n("p",[e._v("Thirdly, zkSync is friendly for exchanges. Atomic swaps — an essential component of exchange protocols — are already "),n("a",{attrs:{href:"/dev/contracts"}},[e._v("available")]),e._v(" on mainnet!")]),e._v(" "),n("p",[e._v("Fourthly, zkSync has native support of NFTs. You can try it out in our "),n("a",{attrs:{href:"https://wallet.zksync.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wallet"),n("OutboundLink")],1),e._v(" or in the "),n("a",{attrs:{href:"https://zknft.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zkNFT marketplace"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Finally, zkSync support is implemented for all the main platforms. Check out our "),n("a",{attrs:{href:"/api/sdk"}},[e._v("SDK section")]),e._v(" of docs, and\nstart developing with zkSync!")])])}),[],!1,null,null,null);t.default=r.exports}}]);