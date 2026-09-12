export type ExplainerCategory =
  | "Money and instruments"
  | "How settlement works"
  | "Rules, laws and regulators"
  | "Bank operations"
  | "Technology"
  | "Product and delivery"
  | "Organisations and places";

export interface Explainer {
  /** The short form exactly as it appears across the site. */
  term: string;
  /** The full name spelled out. Empty when the term is already a full word. */
  full: string;
  /** Plain English, written for someone meeting the term for the first time. */
  simple: string;
  /** A concrete, everyday example. This is usually what makes the term stick. */
  example: string;
  /** Why someone in this specific role needs to know it. */
  why: string;
  category: ExplainerCategory;
  /** Current status, for things that are still changing (laws, pilots). */
  status?: string;
  url?: string;
}

export const explainers: Explainer[] = [
  // ---------------------------------------------------------------- Money
  {
    term: "Tokenised deposit",
    full: "Tokenised bank deposit",
    simple:
      "Money you already hold in a normal bank account, represented as a digital token so it can move instantly and around the clock. Nothing new is created — it is the same deposit, in a form software can move and check automatically.",
    example:
      "A company has US$10m sitting in its HSBC Hong Kong account. Tokenised, that same US$10m can be moved to its Singapore subsidiary at 2am on a Sunday. The money never left HSBC and no new money was created — only the record of which entity owns it changed.",
    why:
      "This is the product at the centre of this case study, and the real product HSBC sells as its Tokenised Deposit Service. If you can only explain one instrument precisely, make it this one.",
    category: "Money and instruments",
  },
  {
    term: "Stablecoin",
    full: "",
    simple:
      "A digital token designed to hold a steady value, usually one-for-one against a currency, backed by a separate pot of reserves such as cash and short-term government debt. Unlike a deposit, it is not a claim on a bank's balance sheet — it is a claim on that reserve pot.",
    example:
      "You buy 100 units of a Hong Kong dollar stablecoin for HK$100. The issuer puts your HK$100 into a reserve account. You can send those 100 units to anyone with a compatible wallet — they never need to be an HSBC customer — and redeem them for HK$100 later.",
    why:
      "The job title is Digital Currencies and stablecoins sit squarely in this team's remit. HSBC received one of Hong Kong's first stablecoin licences in April 2026, so this is live, not theoretical.",
    category: "Money and instruments",
  },
  {
    term: "CBDC",
    full: "Central Bank Digital Currency",
    simple:
      "Digital money issued by a central bank itself rather than by a commercial bank like HSBC. Wholesale versions are restricted to banks settling with each other; retail versions would be issued to the general public.",
    example:
      "Wholesale: HSBC and Standard Chartered settle a large trade between themselves using digital Hong Kong dollars issued directly by the Hong Kong Monetary Authority. Retail: you hold central-bank digital cash in an app on your phone instead of notes in your wallet.",
    why:
      "Central-bank money is the safest settlement asset there is, so tokenised platforms are constantly compared against it. Knowing the wholesale/retail split stops you conflating a bank experiment with a public-money policy debate.",
    category: "Money and instruments",
  },
  {
    term: "Commercial bank money",
    full: "",
    simple:
      "The money in your bank account. It is technically a promise from your bank to pay you — which is why a bank's financial strength matters. Most money in the economy is this kind.",
    example:
      "Your account says HK$50,000. That is not cash sitting in a vault with your name on it — it is HSBC owing you HK$50,000. If you withdraw it, the promise converts into physical central-bank money (banknotes).",
    why:
      "A tokenised deposit is commercial bank money in digital form. The contrast with central-bank money is the heart of most settlement-risk conversations.",
    category: "Money and instruments",
  },
  {
    term: "FX",
    full: "Foreign Exchange",
    simple:
      "Swapping one currency for another. The exchange rate is simply the price of that swap.",
    example:
      "A Hong Kong company needs to pay a US supplier US$1m. It exchanges roughly HK$7.8m for that US$1m at the prevailing rate. That swap is a foreign-exchange transaction.",
    why:
      "Cross-border treasury work is largely foreign exchange plus settlement. The job description names payment-versus-payment settlement models explicitly.",
    category: "Money and instruments",
  },

  // ------------------------------------------------------- Settlement
  {
    term: "Settlement",
    full: "",
    simple:
      "The moment value actually changes hands and the deal is genuinely done — not just agreed, promised, or sitting as pending. Before settlement, someone is still owed something.",
    example:
      "You tap your card at 9am and the shop says 'approved'. That is authorisation, not settlement. The money may only actually leave your account two days later — that later moment is settlement.",
    why:
      "Everything in this product area turns on shortening, securing or proving the moment of settlement. It is the core noun of the role.",
    category: "How settlement works",
  },
  {
    term: "DvP",
    full: "Delivery versus Payment",
    simple:
      "A rule that an asset only moves if the payment for it moves at the same instant — never one without the other.",
    example:
      "Like buying a house where the keys and the money are legally required to change hands in the same second. You cannot hand over the keys and hope the buyer pays next week, and they cannot pay and hope you move out.",
    why:
      "Used throughout the Bond DvP section of this site. The job description lists familiarity with tokenised-asset settlement as an advantage.",
    category: "How settlement works",
  },
  {
    term: "PvP",
    full: "Payment versus Payment",
    simple:
      "The same idea as delivery-versus-payment, but for two currencies. Both sides of a currency swap settle simultaneously, so neither party can pay out and receive nothing back.",
    example:
      "You agree to swap US$1m for HK$7.8m with another bank. Without this rule, you might wire your dollars in New York hours before their Hong Kong dollars arrive — and if they collapse in between, your money is gone. With it, both legs move together or neither does.",
    why:
      "Named directly in the job description. The FX PvP section of this site is built around it.",
    category: "How settlement works",
  },
  {
    term: "Atomic settlement",
    full: "",
    simple:
      "A guarantee that a set of linked steps either all happen together or none happen at all. There is no half-finished state. 'Atomic' here means indivisible, not nuclear.",
    example:
      "Think of a vending machine that will not take your coin unless the drink is ready to drop. Either you get the drink and it gets the money, or nothing moves and you keep your coin. There is no state where it has your money and you have nothing.",
    why:
      "It is the main technical claim tokenised settlement makes. Being able to separate this from legal finality is what separates a product manager from a salesperson.",
    category: "How settlement works",
  },
  {
    term: "Legal finality",
    full: "Settlement finality",
    simple:
      "The point at which the law says a transfer is permanent and cannot be unwound — including if one party later goes bankrupt. It is a legal question, decided country by country, and is not the same as software saying 'complete'.",
    example:
      "Your system shows a payment as settled at 10:00. At 11:00 the receiving company collapses and a court decides the 10:00 transfer can be clawed back into the bankruptcy pool. Technically it settled; legally it was not final.",
    why:
      "The single most common place where tokenised-settlement pitches fall apart under scrutiny. A ledger can be technically final while the law has not yet agreed.",
    category: "How settlement works",
  },
  {
    term: "Herstatt risk",
    full: "",
    simple:
      "The risk that you pay out your side of a currency trade and the other party fails before paying you. Named after Herstatt Bank, a German bank shut down mid-settlement day in 1974.",
    example:
      "In 1974 banks had already paid Deutsche Marks to Herstatt that morning, expecting US dollars back that afternoon in New York. Regulators closed Herstatt at lunchtime. The dollars never came and the counterparties simply lost the money.",
    why:
      "It is the specific danger payment-versus-payment exists to solve. Naming the 1974 origin signals genuine domain depth rather than memorised vocabulary.",
    category: "How settlement works",
  },
  {
    term: "RTGS",
    full: "Real-Time Gross Settlement",
    simple:
      "Central-bank systems that settle large payments one at a time, immediately and irreversibly, using central-bank money. 'Gross' means each payment settles individually rather than being bundled and netted off.",
    example:
      "CHAPS in the United Kingdom is how the money moves when you buy a house — a single large payment settled on its own, same day, and impossible to reverse once done.",
    why:
      "The benchmark every tokenised platform is measured against. When someone asks 'why is this better than what exists?', this is what 'what exists' means for high-value payments.",
    category: "How settlement works",
  },
  {
    term: "Netting",
    full: "",
    simple:
      "Adding up everything two parties owe each other and moving only the difference, instead of settling every transaction separately.",
    example:
      "Over a day, Bank A owes Bank B US$100m across many trades, and Bank B owes Bank A US$97m. Rather than moving US$197m in total, they move US$3m once. Far less cash is needed.",
    why:
      "It saves enormous amounts of cash and is why incumbent systems are efficient. Tokenised atomic settlement deliberately gives netting up in exchange for certainty — a real trade-off to be able to defend.",
    category: "How settlement works",
  },
  {
    term: "CLS",
    full: "Continuous Linked Settlement",
    simple:
      "A bank-owned system that settles most of the world's currency trading safely by paying both currency legs at the same time. It is the established, working solution to Herstatt risk.",
    example:
      "When two large banks trade dollars for yen, the trade typically settles through this system, which holds both legs and releases them together — removing the risk that one side pays and the other does not.",
    why:
      "If you propose blockchain-based currency settlement, the first question is 'why not just use this?'. You need an answer about the corridors and currencies it does not cover well.",
    category: "How settlement works",
    url: "https://www.cls-group.com",
  },
  {
    term: "Escrow",
    full: "",
    simple:
      "Holding money or an asset in a neutral, locked state — committed by the sender but not yet released to the receiver — until agreed conditions are met.",
    example:
      "When buying online from a marketplace, your payment is often held by the platform until you confirm the item arrived. The seller cannot touch it, and you cannot take it back on a whim.",
    why:
      "It is the mechanism that makes atomic settlement possible: both sides are locked before either is released.",
    category: "How settlement works",
  },
  {
    term: "Correspondent banking",
    full: "",
    simple:
      "The traditional way cross-border payments work: banks hold accounts with each other, and a payment hops through a chain of these relationships to reach its destination. Each hop adds time, cost and a place it can stall.",
    example:
      "Paying a supplier in Brazil from Hong Kong might route through a US bank, then a regional bank, then the supplier's bank — three hops, three sets of fees, and three places where a compliance check can hold it for days.",
    why:
      "This is the legacy system tokenised settlement is trying to improve on. You cannot argue the new model is better without describing the old one accurately.",
    category: "How settlement works",
  },
  {
    term: "Cut-off time",
    full: "",
    simple:
      "The daily deadline after which a payment will not be processed until the next business day.",
    example:
      "A treasurer realises at 6pm Hong Kong time that the Singapore office needs cash. The payment window closed at 5pm, so the money cannot arrive until Monday — leaving Singapore short all weekend while the cash sits unused in Hong Kong.",
    why:
      "This is the concrete client pain that makes 24/7 settlement worth paying for. Lead with this, not with the technology.",
    category: "How settlement works",
  },

  // ---------------------------------------------- Rules and regulators
  {
    term: "CLARITY Act",
    full: "Digital Asset Market Clarity Act (H.R. 3633)",
    simple:
      "A proposed United States law that would settle which regulator polices which digital assets. Today it is often unclear whether a token counts as a 'security' (overseen by the Securities and Exchange Commission) or a 'commodity' (overseen by the Commodity Futures Trading Commission) — so firms have effectively been finding out by being sued. The bill creates a 'digital commodity' category, gives spot-market oversight to the Commodity Futures Trading Commission, and lets a token start life as a security and later be treated as a commodity once its network is genuinely decentralised. It also sets rules for exchanges, custody, and keeping customer assets separate from company money.",
    example:
      "A company launches a token to raise money for a network it controls — that looks like an investment, so the Securities and Exchange Commission would regulate it. Years later the network runs itself with no controlling company, so the same token starts behaving more like a raw commodity such as gold, and oversight shifts to the Commodity Futures Trading Commission. Today there is no clean legal path for that change; this bill would create one.",
    why:
      "The sharpest point you can make is what it does NOT cover: a tokenised bank deposit is already a regulated bank liability, so it sits under banking law, not this bill. Knowing what does not apply to your product is as valuable as knowing what does. It still matters because HSBC extended its Tokenised Deposit Service to the United States in April 2026.",
    category: "Rules, laws and regulators",
    status:
      "Not law. Passed the House of Representatives in July 2025; still needs the Senate, where it requires 60 votes. A procedural vote was scheduled for 15 September 2026.",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/3633/text",
  },
  {
    term: "GENIUS Act",
    full: "Guiding and Establishing National Innovation for US Stablecoins Act",
    simple:
      "A United States law, in force since July 2025, governing payment stablecoins specifically: who may issue one, what reserves must back it, and how holders redeem it. It is narrower than the CLARITY Act — stablecoins only, not the wider question of which regulator supervises which token.",
    example:
      "If a company wants to issue a US dollar stablecoin, this law dictates that it must hold genuinely safe reserves (such as cash and short-term government debt) rather than risky investments, and must let holders swap tokens back for real dollars on demand.",
    why:
      "People constantly confuse this with the CLARITY Act. The clean distinction: this one is law and is about stablecoins; CLARITY is not yet law and is about market structure and regulator boundaries.",
    category: "Rules, laws and regulators",
    status: "Enacted July 2025; agency rule-writing continued through 2026.",
  },
  {
    term: "Stablecoins Ordinance",
    full: "Hong Kong Stablecoins Ordinance",
    simple:
      "Hong Kong's licensing regime for stablecoin issuers, in force since 1 August 2025. Issuing a Hong Kong dollar stablecoin requires a licence from the Hong Kong Monetary Authority, with rules on reserves and redemption.",
    example:
      "Under this law HSBC applied for and received a licence in April 2026, which is why it can put a Hong Kong dollar stablecoin into PayMe. A company without that licence simply cannot legally issue one to the public in Hong Kong.",
    why:
      "This is the local law behind HSBC receiving one of Hong Kong's first two stablecoin licences. It is the most directly relevant regulation to your interview, in your interview's city.",
    category: "Rules, laws and regulators",
    status: "In force since 1 August 2025; first licences granted April 2026.",
  },
  {
    term: "MiCA",
    full: "Markets in Crypto-Assets Regulation",
    simple:
      "The European Union's single rulebook for crypto-assets: who may issue them, who may offer services around them, and what must be disclosed.",
    example:
      "A crypto exchange wanting to serve customers in France and Germany previously faced different national rules in each. Under this regulation it gets authorised once and can operate across the whole European Union.",
    why:
      "The European equivalent of the regimes above. Useful for showing you can compare how different regions approached the same problem.",
    category: "Rules, laws and regulators",
    url: "https://esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
  },
  {
    term: "SEC",
    full: "Securities and Exchange Commission",
    simple:
      "The United States regulator for securities — investments such as shares and bonds. Its focus is protecting investors, largely by forcing companies to disclose information.",
    example:
      "When a company lists on the New York Stock Exchange, this regulator requires it to publish audited accounts so investors can judge it fairly.",
    why: "One half of the turf war the CLARITY Act is trying to resolve.",
    category: "Rules, laws and regulators",
  },
  {
    term: "CFTC",
    full: "Commodity Futures Trading Commission",
    simple:
      "The United States regulator for commodities and derivatives — historically oil, wheat and financial futures. The CLARITY Act would give it authority over 'digital commodities'.",
    example:
      "It oversees the market where an airline locks in the price of jet fuel for next year. The CLARITY Act would extend that remit to cover trading in mature crypto tokens.",
    why:
      "The other half of that turf war. Knowing both names and what each covers lets you discuss US policy without hand-waving.",
    category: "Rules, laws and regulators",
  },
  {
    term: "AML",
    full: "Anti-Money Laundering",
    simple:
      "The rules and checks banks must run to stop criminal money passing through them — screening names against watchlists, monitoring for suspicious patterns, and investigating anything unusual.",
    example:
      "An account that normally receives HK$50,000 a month suddenly receives fifty separate HK$49,000 payments in a week. That pattern triggers an alert, because breaking a large sum into smaller pieces is a classic way of hiding its origin.",
    why:
      "The control that most often stops a payment in this case study's unhappy path. For a bank, speed never outranks this.",
    category: "Rules, laws and regulators",
  },
  {
    term: "KYC",
    full: "Know Your Customer",
    simple:
      "Verifying who a customer actually is before letting them bank with you — checking identity, who really owns the company, and where their money comes from.",
    example:
      "Opening a corporate account requires passports of the directors, proof of who ultimately owns the company, and evidence of what the business actually does. It is why opening a business account takes weeks, not minutes.",
    why:
      "It is why a tokenised deposit can only move between pre-approved entities, and a big part of why bank-issued digital money is more controlled than public crypto.",
    category: "Rules, laws and regulators",
  },
  {
    term: "Sanctions screening",
    full: "",
    simple:
      "Checking every payment's sender, receiver and purpose against government lists of banned people, companies and countries before the money moves.",
    example:
      "A payment to 'M. Ivanov' is automatically held because that name resembles someone on a sanctions list. A human then checks whether it is the same person or an innocent match — most are innocent, which is why the review step exists.",
    why:
      "In this case study's exception demo, this is the control that holds the transfer. Getting it wrong carries enormous fines, which is why it sits before settlement, not after.",
    category: "Rules, laws and regulators",
  },
  {
    term: "Prudential regulation",
    full: "",
    simple:
      "Rules requiring banks to hold enough capital and cash to survive losses and sudden withdrawals, so they do not fail and take customers' money with them.",
    example:
      "For every loan a bank makes, it must hold a slice of its own money as a buffer. If some loans go bad, that buffer absorbs the loss instead of depositors doing so.",
    why:
      "It explains why a tokenised deposit sits inside an existing, well-understood safety framework while a stablecoin needed a new one built for it.",
    category: "Rules, laws and regulators",
  },

  // ------------------------------------------------------ Bank operations
  {
    term: "Reconciliation",
    full: "",
    simple:
      "Checking that two separate records of the same thing actually agree — for example that the token ledger and the bank's main account system show the same balance. A mismatch is called a break.",
    example:
      "Like comparing your receipts against your bank statement at month end. If the statement says HK$4,000 and your receipts total HK$4,200, you have a break and must find the missing HK$200 before closing the books.",
    why:
      "Reconciliation effort is one of the clearest cost savings you can promise a corporate treasurer, and breaks are a first-class operational risk in this case study.",
    category: "Bank operations",
  },
  {
    term: "Maker-checker",
    full: "Four-eyes principle",
    simple:
      "A rule that two different people must be involved in anything sensitive: one to create or request it, a different one to approve it. No single person can act alone.",
    example:
      "One treasury analyst prepares a US$5m payment; a second, more senior person must approve it before it goes. Neither can do both, so no single employee can move the money by themselves.",
    why:
      "Visible in the demo's approval step. It is also the cleanest answer to 'what stops artificial intelligence moving money on its own?' — a human checker remains accountable.",
    category: "Bank operations",
  },
  {
    term: "SLA",
    full: "Service Level Agreement",
    simple:
      "A written promise about service performance — and, just as importantly, what counts as a failure.",
    example:
      "'Any held payment will be reviewed within two hours during business days.' If it takes six hours, the bank has formally breached the agreement, which may carry financial consequences.",
    why:
      "Appears throughout the risk and operations sections. Promising 24/7 settlement means promising 24/7 support, which is a real cost.",
    category: "Bank operations",
  },
  {
    term: "Exception handling",
    full: "",
    simple:
      "What the product does when something goes wrong — a failed check, a timeout, a duplicate request. Who is told, who owns fixing it, and what the customer sees meanwhile.",
    example:
      "A transfer is held by a sanctions alert. Good handling: the client immediately sees 'under review, reference 12345', a named team owns it, and there is a deadline. Bad handling: the payment silently disappears and the client phones to ask where the money went.",
    why:
      "Designing the unhappy path first is the strongest product-thinking signal in this case study. A demo without it is a prototype, not a bank product.",
    category: "Bank operations",
  },
  {
    term: "NPA",
    full: "New Product Approval",
    simple:
      "A bank's formal internal sign-off before launching anything genuinely new. Risk, legal, compliance, operations and technology all have to agree — not just the commercial team.",
    example:
      "Before the first client can use a tokenised deposit service, each function signs off in turn. Any one of them can block it. This is usually why bank products take far longer to launch than startup products.",
    why:
      "The real-world gate behind the roadmap's go/no-go gates. Mentioning it shows you know how banks actually ship things.",
    category: "Bank operations",
  },
  {
    term: "RTO and RPO",
    full: "Recovery Time Objective and Recovery Point Objective",
    simple:
      "Two disaster-planning targets. Recovery time is how fast a system must be back after an outage. Recovery point is how much data you can afford to lose — how far back the last usable backup may be.",
    example:
      "A recovery time of 15 minutes and a recovery point of zero means: after a total failure, the service must be running again within 15 minutes and must not lose a single transaction. That combination is expensive, which is exactly why it gets debated.",
    why:
      "Regulators ask about these directly for payment systems. They turn 'is it resilient?' into numbers you can actually commit to.",
    category: "Bank operations",
  },
  {
    term: "Nostro account",
    full: "",
    simple:
      "An account one bank holds at another bank, usually abroad and in that country's currency, so it can make payments there. Latin for 'ours' — our money, held at your bank.",
    example:
      "For HSBC to pay someone in Brazilian reais, it keeps a pot of reais in an account at a Brazilian bank. That cash sits there earning little, purely so payments can be made — money that is parked rather than working.",
    why:
      "Idle cash in these accounts worldwide is a major cost that tokenised, always-on settlement claims to reduce.",
    category: "Bank operations",
  },
  {
    term: "RM",
    full: "Relationship Manager",
    simple:
      "The banker who owns the commercial relationship with a corporate client — the person who actually sells the product and fields the complaints.",
    example:
      "A Hong Kong manufacturer has one main HSBC contact who knows their business, brings them new products, and gets the call when a payment goes wrong.",
    why:
      "For a commercialisation-heavy role: if relationship managers cannot explain your product, it does not sell. The demo has a dedicated view for exactly this reason.",
    category: "Bank operations",
  },
  {
    term: "Treasurer",
    full: "Corporate treasurer",
    simple:
      "The person inside a large company responsible for its cash: making sure each part of the business has money when it needs it, spare cash earns something, and currency risk is managed.",
    example:
      "A group with offices in six countries has one treasurer deciding each morning which subsidiary needs funding, which has surplus cash to sweep back, and what to do about a weakening currency.",
    why:
      "This is your buyer. Every product claim should be in their language — trapped cash, missed cut-offs, manual reconciliation — not in blockchain language.",
    category: "Bank operations",
  },

  // ---------------------------------------------------------- Technology
  {
    term: "Blockchain",
    full: "",
    simple:
      "A shared digital record kept in sync across many computers instead of in one company's database, where each new entry is mathematically linked to everything before it. That linking makes altering history very hard to do unnoticed.",
    example:
      "Imagine a shared notebook where every page references the exact wording of the previous page. Tearing out page 40 and rewriting it breaks the reference on every page after it, so everyone immediately sees the tampering.",
    why:
      "Worth stressing that a bank product uses a permissioned version — only approved institutions take part. That is a different thing from Bitcoin, and the distinction reassures risk-minded listeners.",
    category: "Technology",
  },
  {
    term: "DLT",
    full: "Distributed Ledger Technology",
    simple:
      "The broader family blockchain belongs to: any system where several parties keep synchronised copies of the same records without one party solely controlling them. Every blockchain is a distributed ledger, but not every distributed ledger is built as a chain of blocks.",
    example:
      "Think 'shared spreadsheet everyone can see and no one can secretly edit' as the general idea. Blockchain is one specific way of building that; there are others.",
    why:
      "Job descriptions and bank documents use this term deliberately because it is broader and less loaded than 'blockchain'.",
    category: "Technology",
  },
  {
    term: "Permissioned network",
    full: "",
    simple:
      "A shared ledger where you must be approved and identified before taking part, as opposed to an open network anyone can join anonymously.",
    example:
      "Bitcoin is open — anyone can join with no identity check. A bank settlement network is the opposite: only vetted, licensed institutions are admitted, and everyone knows exactly who everyone else is.",
    why:
      "This is the design choice that makes shared ledgers acceptable to banks and regulators at all. It is also the crux of the Canton versus Corda debate on this site.",
    category: "Technology",
  },
  {
    term: "Smart contract",
    full: "",
    simple:
      "Code stored on a ledger that runs automatically when agreed conditions are met, without someone manually performing each step. Despite the name it is not a legal contract — a real contract still governs the arrangement.",
    example:
      "'If the bond units are confirmed available AND the cash is confirmed available, release both at once; otherwise release neither.' That instruction runs by itself, with no operations staff pressing a button.",
    why:
      "The automation behind atomic settlement. The 'not a legal contract' caveat is the kind of precision that earns credibility with legal and risk colleagues.",
    category: "Technology",
  },
  {
    term: "API",
    full: "Application Programming Interface",
    simple:
      "A structured doorway letting one computer system talk to another automatically — so software can instruct the bank directly, with nobody logging into a website.",
    example:
      "Instead of a treasury analyst typing a payment into online banking, the company's finance software sends the instruction straight to the bank overnight, and the bank's system replies with the outcome.",
    why:
      "It is how corporate clients actually connect. It also matters commercially: once a client wires their systems into yours, switching away becomes expensive.",
    category: "Technology",
  },
  {
    term: "Orchestration",
    full: "",
    simple:
      "The coordinating layer that runs required steps in the right order and refuses to let anything skip ahead — so nobody can jump straight to moving money without passing the checks.",
    example:
      "Like an airport where you cannot reach the gate without passing check-in, security and passport control in that order. The orchestration layer is the airport layout that makes skipping impossible.",
    why:
      "This is where the actual product control lives in this case study's architecture — not in the blockchain itself. A good answer to 'what did you build?'",
    category: "Technology",
  },
  {
    term: "ERP",
    full: "Enterprise Resource Planning",
    simple:
      "The large software system a big company runs its finance and operations on, such as SAP or Oracle. It is where a treasurer actually works day to day.",
    example:
      "A treasurer lives in SAP all morning. If your shiny new payment product requires them to open a separate bank portal and re-key everything, adoption quietly dies regardless of how good the settlement is.",
    why:
      "If your product does not connect to it, adoption stalls no matter how good the technology is.",
    category: "Technology",
  },
  {
    term: "ISO 20022",
    full: "",
    simple:
      "The modern international standard for the messages banks send each other about payments. It carries far more structured detail than the older format it replaces — including what a payment is actually for.",
    example:
      "The old format might carry a cramped free-text line like 'INV 4471 PYMT'. The new one carries separate, properly labelled fields for invoice number, purpose code and full party addresses — so a computer can read it rather than a human guessing.",
    why:
      "Richer payment data is a genuine, unglamorous benefit you can claim confidently — and it is a live migration, not a future idea.",
    category: "Technology",
    url: "https://www.swift.com/standards/iso-20022",
  },
  {
    term: "MT and MX",
    full: "Message Type and Message eXchange",
    simple:
      "The old and new SWIFT payment message formats. MT is the legacy style; MX is the newer ISO 20022 style carrying much richer structured information.",
    example:
      "MT is like a telegram with strict character limits and abbreviations. MX is like a structured form with a labelled box for every piece of information.",
    why:
      "The changeover for cross-border payments completed in November 2025, with further deadlines in November 2026 — a concrete, current fact you can cite.",
    category: "Technology",
  },
  {
    term: "HSM",
    full: "Hardware Security Module",
    simple:
      "A tamper-resistant physical device that stores the secret cryptographic keys controlling digital assets, and signs transactions without the key ever leaving the box.",
    example:
      "Like a safe that will sign documents for you through a slot but will never hand the pen outside. If someone steals the whole machine, it destroys its own contents rather than surrender the keys.",
    why:
      "In digital assets, whoever controls the keys controls the money. This is the hardware answer to 'how do you keep custody safe?'",
    category: "Technology",
  },
  {
    term: "MPC",
    full: "Multi-Party Computation",
    simple:
      "Splitting a secret key into pieces held by different parties, so a transaction can be approved only when enough of them cooperate — and no single person ever holds the whole key.",
    example:
      "Like a bank vault needing three of five managers to turn their keys together. No individual can open it alone, and losing one key does not lock everyone out permanently.",
    why:
      "The main technical alternative to hardware security modules, and the approach several custody vendors are built on.",
    category: "Technology",
  },

  // ----------------------------------------------- Product and delivery
  {
    term: "Wholesale payment client base",
    full: "",
    simple:
      "Plain translation: the big organisations a bank moves money for, as opposed to ordinary consumers. Large corporates, financial institutions, asset managers, governments. 'Wholesale' here means high-value and institutional — it has nothing to do with wholesale trade or buying in bulk.",
    example:
      "PayMe is retail — millions of people sending each other small amounts. A multinational moving US$50m between its Hong Kong and Singapore entities is wholesale. Same bank, completely different client, controls and economics.",
    why:
      "This is the first requirement on the job description, and it is the gap in most candidates' backgrounds including this one. Knowing that it means corporate treasurers and institutions rather than consumers is the minimum; knowing what those clients actually worry about is the differentiator.",
    category: "Bank operations",
  },
  {
    term: "Transaction banking",
    full: "",
    simple:
      "The unglamorous, high-volume side of corporate banking: moving clients' money, managing their cash, financing their trade. It is the day-to-day plumbing a company needs to operate, as distinct from lending them money or advising on a merger.",
    example:
      "A Hong Kong exporter gets paid by a German buyer, needs the cash swept into a central account, wants visibility of every subsidiary's balance, and needs to pay suppliers in four currencies. All of that is transaction banking. Global Payments Solutions is HSBC's transaction-banking business.",
    why:
      "The posting requires eight years of it. Worth knowing that it is prized inside banks precisely because it is sticky and deposit-rich — clients rarely switch, and the balances fund the bank. That is the commercial logic behind this whole product area.",
    category: "Bank operations",
  },
  {
    term: "Go-to-market",
    full: "GTM",
    simple:
      "The plan for how a product actually reaches and wins customers: which segment first, through which sales channel, at what price, with what proof, and who needs to be trained to sell it.",
    example:
      "In traditional finance this is concrete, not abstract. For a cash-management product it means: pick multinational clients with an Asian treasury centre, sell through the relationship managers who already cover them, arm those managers with a one-page value story and a qualifying checklist, waive the implementation fee for the first three reference clients, and price transactions below the wires being replaced so migration has no barrier.",
    why:
      "Named directly in the job description under value proposition development. In a bank the hardest part is rarely the product — it is getting a large, busy sales force to actually put it in front of clients.",
    category: "Product and delivery",
  },
  {
    term: "MVP",
    full: "Minimum Viable Product",
    simple:
      "The smallest version of a product that still delivers real value to a real customer — built to learn whether the idea works before spending heavily.",
    example:
      "Rather than building settlement for twelve currencies across forty countries, you launch Hong Kong dollars between two entities of one willing client, and learn from that.",
    why:
      "In a regulated bank the constraint differs from a startup: your minimum version must still be fully compliant. You cannot ship a partly-legal payment.",
    category: "Product and delivery",
  },
  {
    term: "Walking skeleton",
    full: "",
    simple:
      "A thin end-to-end version of the whole system — every stage connected and working, even if each does very little. It proves the pieces join up before you make any of them sophisticated.",
    example:
      "One payment, one currency, one client, moving all the way from instruction through screening to settlement and reconciliation. Nothing is clever, but every join is proven real.",
    why:
      "For settlement this is especially valuable, because the risk lives in the joins between systems rather than inside any one of them.",
    category: "Product and delivery",
  },
  {
    term: "Go/no-go gate",
    full: "",
    simple:
      "A checkpoint between phases where named people decide whether the product may continue. Not a status update — a decision with genuine power to stop the work.",
    example:
      "Before phase two, legal must confirm settlement finality in that specific country. If they cannot, the phase does not start — regardless of how much has already been spent.",
    why:
      "Showing where you would stop your own product is one of the strongest senior-judgement signals available in an interview.",
    category: "Product and delivery",
  },
  {
    term: "RFP",
    full: "Request for Proposal",
    simple:
      "A formal document a large client sends to several banks, asking each to propose a solution and compete for the business.",
    example:
      "A multinational sends the same 200 questions to HSBC, Citi and Standard Chartered about handling its Asian cash management, then scores the answers side by side and picks one.",
    why:
      "Named in the job description. It is the concrete moment where product capability becomes revenue.",
    category: "Product and delivery",
  },
  {
    term: "Jobs to be done",
    full: "",
    simple:
      "Framing customers by the task they are trying to complete rather than by their demographics or the features they request. People 'hire' a product to get a job done.",
    example:
      "Nobody wants a tokenised deposit. They want the Singapore office funded before Monday without a person staying late to process it. The token is just how that job gets done.",
    why:
      "It keeps a treasury pitch anchored on the real task rather than on tokenisation.",
    category: "Product and delivery",
  },

  // --------------------------------------- Organisations and places
  {
    term: "GPS",
    full: "Global Payments Solutions",
    simple:
      "HSBC's business line for payments and transaction banking — the part that moves corporate clients' money and manages their cash, as opposed to lending or wealth management.",
    example:
      "When a Hong Kong exporter gets paid by a German buyer and needs that money swept into a central account, this division handles it.",
    why:
      "This is the division the role sits in. The Digital Money team, and your interviewer, are inside it.",
    category: "Organisations and places",
  },
  {
    term: "GCB4",
    full: "Global Career Band 4",
    simple:
      "HSBC's internal job-grade system. Band 4 is a senior individual-contributor or manager level — senior enough to own an outcome, typically below a 'Head of' role.",
    example:
      "It appears in the job title itself. It signals you would own a product outcome and lead through influence across teams, rather than managing a large direct headcount.",
    why:
      "It tells you the seniority expected, and therefore the altitude your interview answers should sit at: strategic and cross-functional, not task-level.",
    category: "Organisations and places",
  },
  {
    term: "HKMA",
    full: "Hong Kong Monetary Authority",
    simple:
      "Hong Kong's central banking institution and financial regulator. It supervises banks, manages the currency, and runs the digital-money pilots local banks take part in.",
    example:
      "It granted HSBC its stablecoin licence in April 2026 and runs the EnsembleTX pilot that HSBC participates in.",
    why:
      "Your interview is in Hong Kong and this is the home regulator. Being fluent about it is non-negotiable for this role.",
    category: "Organisations and places",
    url: "https://www.hkma.gov.hk",
  },
  {
    term: "EnsembleTX",
    full: "",
    simple:
      "The Hong Kong Monetary Authority's programme for testing tokenised money and assets with real value, launched in November 2025 after an earlier sandbox phase. It is a controlled pilot among selected institutions, not an open public network.",
    example:
      "Selected banks and asset managers settle real tokenised money-market fund trades using tokenised deposits — genuine value, but inside a supervised sandbox rather than as an open service anyone can join.",
    why:
      "The closest local proof this product direction is real in Hong Kong. Call it a pilot — presenting it as production infrastructure would be a factual error in the room.",
    category: "Organisations and places",
  },
  {
    term: "BIS",
    full: "Bank for International Settlements",
    simple:
      "An international organisation in Switzerland, often described as the central bank for central banks. It coordinates research and joint experiments across countries.",
    example:
      "It publishes the delivery-versus-payment framework the whole industry uses, and convened Project Agorá, in which HSBC took part.",
    why:
      "Citing it lends weight, because it is a neutral institution rather than a vendor with something to sell.",
    category: "Organisations and places",
    url: "https://www.bis.org/cpmi/about/overview.htm",
  },
  {
    term: "Project Agorá",
    full: "",
    simple:
      "A large cross-border experiment run by the Bank for International Settlements, testing tokenised commercial-bank deposits settling alongside tokenised central-bank money. Twenty-eight institutions and central banks completed 17 real-value scenarios across six currencies, averaging about 80 seconds from start to settlement.",
    example:
      "A payment that might normally take a day through correspondent banking completed in roughly 80 seconds — but deliberately outside real production systems, so it proves the concept rather than the operational reality.",
    why:
      "Strong evidence the thesis works — but it was deliberately not connected to real-time gross settlement or core banking systems, so never quote the 80 seconds as a service promise.",
    category: "Organisations and places",
    status: "Experimental. Real-value testing completed 2026; not a production network.",
    url: "https://www.bis.org/project/agora",
  },
  {
    term: "MAS",
    full: "Monetary Authority of Singapore",
    simple:
      "Singapore's central bank and financial regulator. It runs Project Guardian, one of the most active tokenisation pilot programmes globally.",
    example:
      "Where Hong Kong has EnsembleTX, Singapore has Project Guardian — the two cities are in direct competition to become Asia's tokenisation hub.",
    why:
      "Singapore is the main regional comparison to Hong Kong. Knowing both positions lets you discuss where HSBC should move first and why.",
    category: "Organisations and places",
    url: "https://www.mas.gov.sg/schemes-and-initiatives/project-guardian",
  },
  {
    term: "CSD",
    full: "Central Securities Depository",
    simple:
      "The institution holding the official record of who owns which shares and bonds, and updating it when they are traded. It is the master register for securities.",
    example:
      "When you buy shares through an app, the app is not the real record. This institution updates the definitive ledger behind the scenes saying the shares are now yours.",
    why:
      "Tokenised bond settlement either works with these institutions or tries to replace them — a major reason capital-markets tokenisation is harder than payments.",
    category: "Organisations and places",
  },
  {
    term: "HKDAP",
    full: "Hong Kong Dollar At Par",
    simple:
      "A Hong Kong dollar stablecoin issued by Anchorpoint Financial — the venture Standard Chartered formed with Hong Kong Telecommunications and Animoca Brands. It is a separate company's product, not HSBC's.",
    example:
      "Standard Chartered's venture aimed this at institutional users first, while HSBC put its own stablecoin into PayMe for retail customers — two different bets on where stablecoin demand actually is.",
    why:
      "That retail-versus-institutional contrast is a genuinely interesting strategic point you can raise unprompted.",
    category: "Organisations and places",
  },
  {
    term: "SPV",
    full: "Special Purpose Vehicle",
    simple:
      "A separate legal company created to hold specific assets or run one activity, kept apart from the parent's balance sheet so its risks stay contained.",
    example:
      "A bank launching a stablecoin might put the reserve assets in a separate company, so that if the bank itself hit trouble, the reserves backing the stablecoin are legally insulated.",
    why:
      "A common structure for stablecoin reserves and tokenisation ventures, which is why it appears in market announcements.",
    category: "Organisations and places",
  },
];

export const explainerCategories: ExplainerCategory[] = [
  "Money and instruments",
  "How settlement works",
  "Rules, laws and regulators",
  "Bank operations",
  "Technology",
  "Product and delivery",
  "Organisations and places",
];

const lookup = new Map(explainers.map((entry) => [entry.term.toLowerCase(), entry]));

export function findExplainer(term: string): Explainer | undefined {
  return lookup.get(term.toLowerCase());
}
