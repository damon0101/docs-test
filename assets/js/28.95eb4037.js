(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{392:function(t,e,a){"use strict";a.r(e);var o=a(45),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wallets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallets"}},[t._v("#")]),t._v(" Wallets")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#what-ethereum-wallets-does-zksync-support"}},[t._v("What Ethereum wallets does zkSync support?")])]),a("li",[a("a",{attrs:{href:"#what-if-my-wallet-is-not-supported-or-can-t-sign-messages"}},[t._v("What if my wallet is not supported or can't sign messages?")])]),a("li",[a("a",{attrs:{href:"#why-do-i-need-to-unlock-my-account-and-why-does-it-cost-more-than-other-transactions"}},[t._v("Why do I need to unlock my account and why does it cost more than other transactions?")])]),a("li",[a("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")]),a("ul",[a("li",[a("a",{attrs:{href:"#i-used-transfer-instead-of-withdraw-to-get-my-funds-onto-mainnet"}},[t._v('I used "Transfer" instead of "Withdraw" to get my funds onto mainnet')])]),a("li",[a("a",{attrs:{href:"#my-withdrawal-was-completed-but-the-funds-have-not-arrived-on-mainnet"}},[t._v("My withdrawal was completed, but the funds have not arrived on mainnet")])]),a("li",[a("a",{attrs:{href:"#if-none-of-the-above-did-help"}},[t._v("If none of the above did help")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"what-ethereum-wallets-does-zksync-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-ethereum-wallets-does-zksync-support"}},[t._v("#")]),t._v(" What Ethereum wallets does zkSync support?")]),t._v(" "),a("p",[t._v("Generally, you can safely send funds to any Ethereum address (even to exchanges and smart contracts). The owner of this\naddress will always be able to claim the funds.")]),t._v(" "),a("p",[t._v("The up-to-date list of the Ethereum wallets that you can control from the zkSync web wallet can be found directly on\n"),a("a",{attrs:{href:"https://wallet.zksync.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("its homepage"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To control an address programmatically, all you need to is to be able to sign a message with it — either with native\nEthereum signature, or via "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP1271"),a("OutboundLink")],1),t._v(" in case of smart\ncontracts. Learn more in the "),a("RouterLink",{attrs:{to:"/dev/"}},[t._v("developer guide")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"what-if-my-wallet-is-not-supported-or-can-t-sign-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-my-wallet-is-not-supported-or-can-t-sign-messages"}},[t._v("#")]),t._v(" What if my wallet is not supported or can't sign messages?")]),t._v(" "),a("p",[t._v("Owners of some Ethereum addresses cannot use zkSync directly for various reasons:")]),t._v(" "),a("ul",[a("li",[t._v("wallet not supported yet in the web interface;")]),t._v(" "),a("li",[t._v("an address belongs to an exchange;")]),t._v(" "),a("li",[t._v("an address belongs to a smart contract without\n"),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP1271"),a("OutboundLink")],1),t._v(" support (e.g. Gnosis Safe).")])]),t._v(" "),a("p",[t._v("In such cases, you can always withdraw funds from an L2 zkSync account to the same address in L1. The protocol allows\nthis because the security invariant is not violated: funds never change the owning hand. It requires that the account\nhave never registered a zkSync public key before.")]),t._v(" "),a("p",[t._v("If you need to withdraw your funds from such an account, please use the following "),a("a",{attrs:{href:"https://withdraw.zksync.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("tool for alternative withdrawals"),a("OutboundLink")],1),t._v(". Please note, that for the tool to be able to withdraw funds from your account, all of the following must be true:")]),t._v(" "),a("ul",[a("li",[t._v("The account is at least 24 hours old.")]),t._v(" "),a("li",[t._v("The account has never been unlocked (i.e. nonce is zero).")])]),t._v(" "),a("h2",{attrs:{id:"why-do-i-need-to-unlock-my-account-and-why-does-it-cost-more-than-other-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-do-i-need-to-unlock-my-account-and-why-does-it-cost-more-than-other-transactions"}},[t._v("#")]),t._v(" Why do I need to unlock my account and why does it cost more than other transactions?")]),t._v(" "),a("p",[t._v("Informally, you need to do a one-time 'registration' of your account. More technically, zkSync accounts are defined over\na different elliptic curve than Ethereum's that is better suited for zero-knowledge proofs. Unlocking your account\ngenerates and publishes a new private-public key pair over this curve, which is associated to your Ethereum address.")]),t._v(" "),a("p",[t._v("Unlocking your account incur higher costs than other zkSync transactions (11k gas for normal Ethereum key pair\naccounts), because the process of registration happens directly on the Ethereum smart contract, and not as part of a\nzero-knowledge proof. If you are using an ERC-1271 compatible wallet (like Argent), this one-time cost becomes greater\nbecause of higher interaction with the zkSync smart contract. On the other hand, if you are using a CREATE2 smart\ncontract based wallet, this operation is cheaper.")]),t._v(" "),a("p",[t._v("The fee you pay for this operation is used to pay the fee for the corresponding Ethereum transaction, and so it goes to\nEthereum miners and not to zkSync validators.")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("h3",{attrs:{id:"i-used-transfer-instead-of-withdraw-to-get-my-funds-onto-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-used-transfer-instead-of-withdraw-to-get-my-funds-onto-mainnet"}},[t._v("#")]),t._v(' I used "Transfer" instead of "Withdraw" to get my funds onto mainnet')]),t._v(" "),a("p",[t._v('If you attempted to withdraw your zkSync funds to L1, but mistakenly used "Transfer" option instead of "Withdraw", you\nshould try to log in to zkSync with the wallet that received the funds. If that\'s not possible, then you should read the\nsection above about how to withdraw the funds from a wallet that is not supported by zkSync.')]),t._v(" "),a("h3",{attrs:{id:"my-withdrawal-was-completed-but-the-funds-have-not-arrived-on-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-withdrawal-was-completed-but-the-funds-have-not-arrived-on-mainnet"}},[t._v("#")]),t._v(" My withdrawal was completed, but the funds have not arrived on mainnet")]),t._v(" "),a("p",[t._v('If your withdrawal is marked as "Complete" in '),a("a",{attrs:{href:"https://zkscan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkscan"),a("OutboundLink")],1),t._v(", but the funds have not arrived on your\nwallet, here are a few steps you should take:")]),t._v(" "),a("h4",{attrs:{id:"_1-make-sure-that-enough-time-has-passed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-make-sure-that-enough-time-has-passed"}},[t._v("#")]),t._v(" 1. Make sure that enough time has passed")]),t._v(" "),a("p",[t._v('"Withdraw" takes a while.')]),t._v(" "),a("p",[t._v('Even when the transaction page says that the "Withdraw" is "Complete", it might still take a few hours before the funds\nwill actually arrive at your wallet.')]),t._v(" "),a("h4",{attrs:{id:"_2-make-sure-that-the-trouble-is-with-zksync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-make-sure-that-the-trouble-is-with-zksync"}},[t._v("#")]),t._v(" 2. Make sure that the trouble is with zkSync")]),t._v(" "),a("p",[t._v("So you've waited a day, but still, the funds have not reached your account. What do you do next?")]),t._v(" "),a("p",[t._v("Please open "),a("a",{attrs:{href:"https://etherscan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("etherscan"),a("OutboundLink")],1),t._v(' and go to your address page, then head to "Internal Txs". There will be a\nlist of all transactions to your account from smart contracts. In there you should see a transaction coming from the\nzkSync smart contract. If you see the transaction, then your funds did arrive. Your wallet may not display these types\nof transactions, that\'s why it might seem like your account has not received any funds at all.')]),t._v(" "),a("p",[t._v("If the account balance that is shown in your wallet is the same as on the etherscan, then everything is ok and your\nfunds did arrive, just the transaction is not displayed.")]),t._v(" "),a("p",[t._v("If the account balance is not the same as on the etherscan, contact the support of your wallet. zkSync did send funds to\nyour account.")]),t._v(" "),a("h4",{attrs:{id:"_3-your-withdrawal-transaction-was-out-of-gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-your-withdrawal-transaction-was-out-of-gas"}},[t._v("#")]),t._v(' 3. Your withdrawal transaction was "out of gas"')]),t._v(" "),a("p",[t._v('If you see an internal transaction from the zkSync smart contract (as explained in the previous item), it is possible\nthat this transaction was not completed because of insufficient gas. You can check if this is the case by clicking on\nthe transaction (on etherscan) and see if there\'s an error message "out of gas".')]),t._v(" "),a("p",[t._v("If this happened, we are sorry for the inconvenience.")]),t._v(" "),a("p",[t._v("If you are experienced working with Ethereum smart contracts, you should do the following; otherwise, please skip to the\nnext item.")]),t._v(" "),a("ul",[a("li",[t._v("call "),a("code",[t._v("getPendingBalance(yourAddress, token)")]),t._v(" on the zkSync smart contract to know the exact amount of funds stuck on\nthe contract.")]),t._v(" "),a("li",[t._v("call "),a("code",[t._v("withdrawPendingBalance(yourAddress, token, amount)")]),t._v(" on the zkSync smart contract to withdraw the funds.")])]),t._v(" "),a("h3",{attrs:{id:"if-none-of-the-above-did-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-none-of-the-above-did-help"}},[t._v("#")]),t._v(" If none of the above did help")]),t._v(" "),a("p",[t._v("If nothing above have helped you, please shoot us email to "),a("strong",[t._v("withdraw@zksync.io")]),t._v(" describing your problem. It MUST\ncontain the following info:")]),t._v(" "),a("ul",[a("li",[t._v("Your zkSync wallet address.")]),t._v(" "),a("li",[t._v("What wallet are you using (e.g. Trust).")]),t._v(" "),a("li",[t._v("What problems do you encounter.")])]),t._v(" "),a("p",[t._v("The more information you provide, the faster your problem will be solved!")])])}),[],!1,null,null,null);e.default=n.exports}}]);