const Block = require('./block')



const testBlock1 = Block.mineBlock(Block.genesis(),'foo')

console.log(testBlock1.toString())