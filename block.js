

const SHA256 = require("crypto-js/sha256")



class Block{
  constructor(timestamp,lastHash,hash,data){
  this.timestamp = timestamp
  this.lastHash = lastHash
  this.hash = hash
  this.data = data
}
  
  toString(){
    return `Block-
    Timestammp:${this.timestamp}
    LastHash:${this.lastHash}
    Hash:${this.hash}
    Data:${this.data}
`
  }

  static genesis(){
    return new this("genesis time","----","fh8sih8eshhfud87su",[])
  }

  static mineBlock(lastBlock,data){
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp,lastHash,data)

    return new this(timestamp,lastHash,hash,data)
  }

   static hash(timestamp,lastHash,data){
    return SHA256(`${timestamp}${lastHash}${data}`).toString()
   }
  
}

module.exports = Block


