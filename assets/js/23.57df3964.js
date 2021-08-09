(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{387:function(e,t,r){"use strict";r.r(t);var a=r(45),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#security-overview"}},[e._v("Security overview")]),r("ul",[r("li",[r("a",{attrs:{href:"#validity-proofs"}},[e._v("Validity proofs")])]),r("li",[r("a",{attrs:{href:"#priority-queue"}},[e._v("Priority queue")])]),r("li",[r("a",{attrs:{href:"#upgrade-mechanism"}},[e._v("Upgrade mechanism")])])])]),r("li",[r("a",{attrs:{href:"#cryptography-used"}},[e._v("Cryptography used")]),r("ul",[r("li",[r("a",{attrs:{href:"#primitives"}},[e._v("Primitives")])]),r("li",[r("a",{attrs:{href:"#cryptographic-assumptions"}},[e._v("Cryptographic assumptions")])])])]),r("li",[r("a",{attrs:{href:"#universal-crs-setup"}},[e._v("Universal CRS setup")])]),r("li",[r("a",{attrs:{href:"#security-audits"}},[e._v("Security audits")])]),r("li",[r("a",{attrs:{href:"#bug-bounty-program"}},[e._v("Bug Bounty Program")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"security-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-overview"}},[e._v("#")]),e._v(" Security overview")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/matter-labs/zksync/blob/master/docs/protocol.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("zkSync protocol design"),r("OutboundLink")],1),e._v(" explicitly lists the\nprotocol's cryptographic assumptions and security properties.")]),e._v(" "),r("p",[e._v("In a nutshell, the protocol's claim is that, given correct implementation and validity of cryptographic assumptions,\nfunds placed into zkSync will have the same security guarantees as if they are held in an Ethereum account without any\nadditional requirements on the user part. In particular:")]),e._v(" "),r("ul",[r("li",[e._v("Users do not need to monitor the network.")]),e._v(" "),r("li",[e._v("Private keys can be held in cold storage.")]),e._v(" "),r("li",[e._v("Validators can not steal funds or corrupt the zkSync state in any way.")]),e._v(" "),r("li",[e._v("Users can withdraw their assets onto the mainnet, regardless of cooperation from zkSync validators.")])]),e._v(" "),r("p",[e._v("Several mechanisms are used to fulfill these guarantees, discussed below.")]),e._v(" "),r("h3",{attrs:{id:"validity-proofs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validity-proofs"}},[e._v("#")]),e._v(" Validity proofs")]),e._v(" "),r("p",[e._v("zkSync is built on "),r("RouterLink",{attrs:{to:"/faq/tech.html#zk-rollup-architecture"}},[e._v("zkRollup architecture")]),e._v(". This means, every single transaction is\nverified by a smart contract on the Ethereum mainnet by means of verifying the proof of the validity of the block. Thus,\nno validator can ever move the system into an incorrect state or take users' funds.")],1),e._v(" "),r("p",[e._v("See "),r("a",{attrs:{href:"https://medium.com/starkware/validity-proofs-vs-fraud-proofs-4ef8b4d3d87a",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),r("OutboundLink")],1),e._v(" for a further overview of\nthe benefits of validity proofs.")]),e._v(" "),r("h3",{attrs:{id:"priority-queue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#priority-queue"}},[e._v("#")]),e._v(" Priority queue")]),e._v(" "),r("p",[e._v("In the ultimate emergency case of all validators being shut down or becoming unresponsive, the emergency exit mechanism\nensures that users will keep control of their assets. It works as follows.")]),e._v(" "),r("ol",[r("li",[e._v("If transactions of a user are being ignored, for any reason, by the validators, an exit request can be submitted\ndirectly on mainnet into the "),r("strong",[e._v("priority queue")]),e._v(".")]),e._v(" "),r("li",[e._v("Validators are obliged to process priority queue requests within a short time window (~1 week).")]),e._v(" "),r("li",[e._v("In case the validators fail to process the requests, the system enters "),r("strong",[e._v("exodus mode")]),e._v(" and every user can immediately\nexit all of their assets by making a direct transaction on the Ethereum mainnet.")])]),e._v(" "),r("h3",{attrs:{id:"upgrade-mechanism"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-mechanism"}},[e._v("#")]),e._v(" Upgrade mechanism")]),e._v(" "),r("p",[e._v("Version 1.0 of zkSync protocol comes with a contract upgrade mechanism in order to facilitate faster design iterations.\nHowever, users have a fundamental right to opt-out of a future upgrade. A new upgrade must be announced via the zkSync\ncontract and all users get a 4-week notice period to exit in case they don't like the changes.")]),e._v(" "),r("p",[e._v("NOTICE: Currently, the beta is deployed with a 2-week notice period, and eventually will be bumped to 4 weeks. In the\nfuture, this opt-out mechanism will be replaced by a strict opt-in.")]),e._v(" "),r("h2",{attrs:{id:"cryptography-used"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptography-used"}},[e._v("#")]),e._v(" Cryptography used")]),e._v(" "),r("p",[e._v("Although zkSync is built on some of the most cutting-edge cryptography (such as PLONK and RedShift), we were very\nconservative with respect to security choices made in the protocol. Every component relies exclusively on\nwell-established cryptographic assumptions widely considered valid in the academic and professional security\ncommunities.")]),e._v(" "),r("h3",{attrs:{id:"primitives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#primitives"}},[e._v("#")]),e._v(" Primitives")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Primitive")]),e._v(" "),r("th",[e._v("Application")]),e._v(" "),r("th",[e._v("Cryptographic assumption")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://eprint.iacr.org/2019/953",target:"_blank",rel:"noopener noreferrer"}},[e._v("PLONK"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Proof system (v1)")]),e._v(" "),r("td",[e._v("1, 3")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://eprint.iacr.org/2019/1400",target:"_blank",rel:"noopener noreferrer"}},[e._v("RedShift"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Proof system (v2)")]),e._v(" "),r("td",[e._v("1")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/SHA-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("SHA256"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Hash function")]),e._v(" "),r("td",[e._v("1")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://eprint.iacr.org/2019/426.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rescue"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Hash function")]),e._v(" "),r("td",[e._v("1, 2")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://eprint.iacr.org/2018/068",target:"_blank",rel:"noopener noreferrer"}},[e._v("muSig"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Signature scheme")]),e._v(" "),r("td",[e._v("1, 2, 3")])])])]),e._v(" "),r("h3",{attrs:{id:"cryptographic-assumptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-assumptions"}},[e._v("#")]),e._v(" Cryptographic assumptions")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Collision_resistance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Collision-resistance"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pseudorandomness",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pseudo-randomness"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Discrete_logarithm#Cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discrete logarithm problem, on elliptic curves and finite fields"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"universal-crs-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#universal-crs-setup"}},[e._v("#")]),e._v(" Universal CRS setup")]),e._v(" "),r("p",[e._v('Version 1.0 of zkSync protocol uses the PLONK proof system, which requires a "trusted setup" of a Common Reference\nString (CRS). In PLONK, this setup can be done once and be reused by any number of applications (this is called\nUniversal CRS). If at least one participant deletes the entropy (randomness) used to provide their contribution, the\nsetup is secure. Having universal, and not application-specific, setup significantly reduces trust assumptions, because\nlarger number of prominent and respected members of the community have the incentive to participate in it, and more\nscrutiny can be expected around the trusted setup ceremony.')]),e._v(" "),r("p",[e._v("Another big advantage of a universal CRS is that updates and bugfixes do not require their own trusted setup ceremonies\n(which are very difficult from the logistical and security perspectives).")]),e._v(" "),r("p",[e._v("Matter Labs\n"),r("a",{attrs:{href:"https://www.aztecprotocol.com/ignition/participant/0x04a23ba68e4469061cd461e8b847e820d4ced948?timestamp=1587551054947",target:"_blank",rel:"noopener noreferrer"}},[e._v("participated"),r("OutboundLink")],1),e._v("\nin the global Ignition trusted setup ceremony for PLONK on BN256 elliptic curve, coordinated by AZTEC protocol:")]),e._v(" "),r("table",[r("tr",[r("td",[e._v("Participation address")]),e._v(" "),r("td",[e._v("0x04a23ba68e4469061cd461e8b847e820d4ced948")])]),e._v(" "),r("tr",[r("td",[e._v("Transcript hash")]),e._v(" "),r("td",[e._v("0x1f6647d91a9e667173640b67b654cabc81ceee98d6100f259788afb34a3fc529")])]),e._v(" "),r("tr",[r("td",[e._v("Signature")]),e._v(" "),r("td",[e._v("0x3f4ff7b9a6668c23c9ba45d73d1d9d0902b881191d97b307969b63f52296f2326d437ea04dd67a2ebe57a691025d7d31bb0dae88e8023a0d9b15ad599c3eb9351b")])])]),e._v(" "),r("p",[e._v("The ceremony ran from October 2019 until December 2019, with 176 participants from over 30 countries collaborating to\ncompute a secure database of encrypted points, including\n"),r("a",{attrs:{href:"https://twitter.com/VitalikButerin/status/1225856246307311616",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitalik Buterin"),r("OutboundLink")],1),e._v(" and other prominent members of the\ncrypto community. Full ceremony transcript with the list of individuals and organizations who claimed their contribution\n"),r("a",{attrs:{href:"https://www.aztecprotocol.com/ignition/",target:"_blank",rel:"noopener noreferrer"}},[e._v("is available here"),r("OutboundLink")],1),e._v(". You can use\n"),r("a",{attrs:{href:"https://github.com/matter-labs/ignition-verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("this script"),r("OutboundLink")],1),e._v(" to verify the contributions of the listed\nparticipants.")]),e._v(" "),r("p",[e._v("Despite relying on a universal trusted setup, we argue that zkSync can be called a fully trustless protocol. The reason\nfor this is that there are no systems without some form of a trusted setup. Most users do not personally verify and\ncompile the source code of their wallets, full nodes, mining software, and certainly do not verify the circuits of the\nhardware all these things run upon. In our opinion, the ease of concealed collusion of developers and experts in these\nsystems is much higher than in a trusted setup with hundreds of well-known participants. At the same time, the ongoing\noperation of zkSync requires zero trust from any party whatsoever, which is unique among all L2 scaling solutions.")]),e._v(" "),r("p",[e._v("Nonetheless, we encourage you to check the list of the contributors of the Ignition ceremony and make your own opinion\non whether there is at least one trustworthy person or organization among them. In the future, we strive to eliminate\ntrust assumptions altogether by embracing a transparent zero-knowledge proof system such as\n"),r("a",{attrs:{href:"https://eprint.iacr.org/2019/1400",target:"_blank",rel:"noopener noreferrer"}},[e._v("RedShift"),r("OutboundLink")],1),e._v(" (developed by Matter Labs).")]),e._v(" "),r("h2",{attrs:{id:"security-audits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-audits"}},[e._v("#")]),e._v(" Security audits")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/updates/security-audits.html"}},[e._v("Security audits")]),e._v(" are being conducted before each major update.")],1),e._v(" "),r("h2",{attrs:{id:"bug-bounty-program"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-bounty-program"}},[e._v("#")]),e._v(" Bug Bounty Program")]),e._v(" "),r("p",[e._v("Besides security audits, we offer bug bounty program. You can read more about it "),r("a",{attrs:{href:"/dev/bug-bounty"}},[e._v("here")]),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);