import React from 'react'
import '../style/bitcoin.css'

function Blockchain() {
  return (
    <div className='container'>
      <h2>What is a Blockchain</h2>
      <h3>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
<br/><br/>
One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
<br/><br/>
A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible timeline of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this timeline. Each block in the chain is given an exact time stamp when it is added to the chain.</h3>
<h2>How Does a Blockchain Work?</h2>
<h3>The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).
<br/><br/>
First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.
</h3>

<img src='https://www.investopedia.com/thmb/DgmKuK6aoY6Jw3P4eox-oMEMvh0=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg' alt='transaction_img'/>
   
   <h2>Blockchain Decentralization</h2>
   <h3>Imagine that a company owns a server farm with 10,000 computers used to maintain a database holding all of its client’s account information. This company owns a warehouse building that contains all of these computers under one roof and has full control of each of these computers and all of the information contained within them. This, however, provides a single point of failure. What happens if the electricity at that location goes out? What if its Internet connection is severed? What if it burns to the ground? What if a bad actor erases everything with a single keystroke? In any case, the data is lost or corrupted.
<br/><br/>
What a blockchain does is to allow the data held in that database to be spread out among several network nodes at various locations. This not only creates redundancy but also maintains the fidelity of the data stored therein—if somebody tries to alter a record at one instance of the database, the other nodes would not be altered and thus would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information. This system helps to establish an exact and transparent order of events. This way, no single node within the network can alter information held within it.
<br/><br/>
Because of this, the information and history (such as of transactions of a cryptocurrency) are irreversible. Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for a blockchain to hold a variety of other information like legal contracts, state identifications, or a company’s product inventory.</h3>
    
    <h2>Transparency</h2>
    <h3>Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes. 
<br/><br/>
For example, exchanges have been hacked in the past, where those who kept Bitcoin on the exchange lost everything. While the hacker may be entirely anonymous, the Bitcoins that they extracted are easily traceable. If the Bitcoins stolen in some of these hacks were to be moved or spent somewhere, it would be known.
<br/><br/>
Of course, the records stored in the Bitcoin blockchain (as well as most others) are encrypted. This means that only the owner of a record can decrypt it to reveal their identity (using a public-private key pair). As a result, users of blockchains can remain anonymous while preserving transparency.</h3>
   <h2>Is Blockchain Secure?</h2>
   <h3>Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, then the hash code changes as well.
<br/><br/>
Let’s say that a hacker, who also runs a node on a blockchain network, wants to alter a blockchain and steal cryptocurrency from everyone else. If they were to alter their own single copy, it would no longer align with everyone else’s copy. When everyone else cross-references their copies against each other, they would see this one copy stand out, and that hacker’s version of the chain would be cast away as illegitimate. 
<br/><br/>
Succeeding with such a hack would require that the hacker simultaneously control and alter 51% or more of the copies of the blockchain so that their new copy becomes the majority copy and, thus, the agreed-upon chain. Such an attack would also require an immense amount of money and resources, as they would need to redo all of the blocks because they would now have different time stamps and hash codes. 
<br/><br/>
Due to the size of many cryptocurrency networks and how fast they are growing, the cost to pull off such a feat probably would be insurmountable. This would be not only extremely expensive but also likely fruitless. Doing such a thing would not go unnoticed, as network members would see such drastic alterations to the blockchain. The network members would then hard fork off to a new version of the chain that has not been affected. This would cause the attacked version of the token to plummet in value, making the attack ultimately pointless, as the bad actor has control of a worthless asset. The same would occur if the bad actor were to attack the new fork of Bitcoin. It is built this way so that taking part in the network is far more economically incentivized than attacking it.</h3>
    <h2>Bitcoin vs. Blockchain</h2>
    <h3>Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document time stamps could not be tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.1
<br/><br/>
The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.”2
<br/><br/>
The key thing to understand here is that Bitcoin merely uses blockchain as a means to transparently record a ledger of payments, but blockchain can, in theory, be used to immutably record any number of data points. As discussed above, this could be in the form of transactions, votes in an election, product inventories, state identifications, deeds to homes, and much more. 
<br/><br/>
Currently, tens of thousands of projects are looking to implement blockchains in a variety of ways to help society other than just recording transactions—for example, as a way to vote securely in democratic elections. The nature of blockchain’s immutability means that fraudulent voting would become far more difficult to occur. For example, a voting system could work such that each citizen of a country would be issued a single cryptocurrency or token. Each candidate would then be given a specific wallet address, and the voters would send their token or crypto to the address of whichever candidate for whom they wish to vote. The transparent and traceable nature of blockchain would eliminate both the need for human vote counting and the ability of bad actors to tamper with physical ballots.

</h3>
    </div>

    
  )
}

export default Blockchain