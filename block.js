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
  
}

module.exports = Block


// "use strict";

// var _createClass = (function() {
//   function defineProperties(target, props) {
//     for (var i = 0; i < props.length; i++) {
//       var descriptor = props[i];
//       descriptor.enumerable = descriptor.enumerable || false;
//       descriptor.configurable = true;
//       if ("value" in descriptor) descriptor.writable = true;
//       Object.defineProperty(target, descriptor.key, descriptor);
//     }
//   }
//   return function(Constructor, protoProps, staticProps) {
//     if (protoProps) defineProperties(Constructor.prototype, protoProps);
//     if (staticProps) defineProperties(Constructor, staticProps);
//     return Constructor;
//   };
// })();

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// var Block = (function() {
//   function Block(timestamp, lastHash, hash, data) {
//     _classCallCheck(this, Block);

//     this.timestamp = timestamp;
//     this.lastHash = lastHash;
//     this.hash = hash;
//     this.data = data;
//   }

//   _createClass(
//     Block,
//     [
//       {
//         key: "toString",
//         value: function toString() {
//           return (
//             "Block-\n    Timestammp:" +
//             this.timestamp +
//             "\n    LastHash:" +
//             this.lastHash +
//             "\n    Hash:" +
//             this.hash +
//             "\n    Data:" +
//             this.data +
//             "\n"
//           );
//         }
//       }
//     ],
//     [
//       {
//         key: "genesis",
//         value: function genesis() {
//           return new this("genesis time", "----", "fh8sih8eshhfud87su", []);
//         }
//       }
//     ]
//   );

//   return Block;
// })();

// module.exports = Block;
