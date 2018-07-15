 const Block = require('./block')

describe("Block",()=>{
   
    let data,lastBlock,block;

beforeEach(() => {
   data = "foo"
   lastBlock = Block.genesis();
   block = Block.mineBlock(lastBlock,data)
})


    it("sets the `data` to match the input",()=>{
        expect(block.data).toEqual(data)
    })

    it("sets the `lastHash` to match the last block",()=>{
        expect(block.lastHash).toEqual(lastBlock.hash)
    })
})


const Blockchain = require('./blockchain')

describe("Blockchain",()=>{
   
    let blockchain;

beforeEach(() => {
  blockchain = new Blockchain()
})


    it("starts with genesis block",()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis())
    })

    it("adds new block",()=>{

        const data = "foo"
        blockchain.addBlock(data)


        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(data)
    })
})

