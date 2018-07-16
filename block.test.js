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
   
    let blockchain,blockchain2;

beforeEach(() => {
  blockchain = new Blockchain();
  blockchain2 = new Blockchain();
})


    it("starts with genesis block",()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis())
    })

    it("adds new block",()=>{

        const data = "foo"
        blockchain.addBlock(data)
        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(data)
    })

    it("validates a chain",()=>{
      blockchain2.addBlock("foo")
      expect(blockchain.isValidChain(blockchain2.chain)).toBe(true)
    })

    it("invalidates a chain with a corrupt genesis block",()=>{
        blockchain2.chain[0].data = "Bad data"
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(false)
      })

      it("validates a chain",()=>{
        blockchain2.addBlock("foo")
        blockchain2.chain[1].data = "Not foo"
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(true)
      })
})

