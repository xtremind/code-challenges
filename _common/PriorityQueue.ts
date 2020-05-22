// From https://github.com/trekhleb/javascript-algorithms/blob/ba2d8dc4a8e27659c1420fe52390cb7981df4a94/src/data-structures/priority-queue/PriorityQueue.js
// https://gist.github.com/rigwild/dd3f9ce36f7398a4b0e54fde76a80181
// prettier-ignore
{
  // @ts-ignore
  class Comparator{constructor(a){this.compare=a||Comparator.defaultCompareFunction}static defaultCompareFunction(c,a){return c===a?0:c<a?-1:1}equal(c,a){return 0===this.compare(c,a)}lessThan(c,a){return 0>this.compare(c,a)}greaterThan(c,a){return 0<this.compare(c,a)}lessThanOrEqual(c,a){return this.lessThan(c,a)||this.equal(c,a)}greaterThanOrEqual(c,a){return this.greaterThan(c,a)||this.equal(c,a)}reverse(){const c=this.compare;this.compare=(d,a)=>c(a,d)}}class Heap{constructor(a){if(new.target===Heap)throw new TypeError("Cannot construct Heap instance directly");this.heapContainer=[],this.compare=new Comparator(a)}getLeftChildIndex(a){return 2*a+1}getRightChildIndex(a){return 2*a+2}getParentIndex(a){return Math.floor((a-1)/2)}hasParent(a){return 0<=this.getParentIndex(a)}hasLeftChild(a){return this.getLeftChildIndex(a)<this.heapContainer.length}hasRightChild(a){return this.getRightChildIndex(a)<this.heapContainer.length}leftChild(a){return this.heapContainer[this.getLeftChildIndex(a)]}rightChild(a){return this.heapContainer[this.getRightChildIndex(a)]}parent(a){return this.heapContainer[this.getParentIndex(a)]}swap(a,b){const c=this.heapContainer[b];this.heapContainer[b]=this.heapContainer[a],this.heapContainer[a]=c}peek(){return 0===this.heapContainer.length?null:this.heapContainer[0]}poll(){if(0===this.heapContainer.length)return null;if(1===this.heapContainer.length)return this.heapContainer.pop();const a=this.heapContainer[0];return this.heapContainer[0]=this.heapContainer.pop(),this.heapifyDown(),a}add(a){return this.heapContainer.push(a),this.heapifyUp(),this}remove(a,b=this.compare){const c=this.find(a,b).length;for(let d=0;d<c;d+=1){const c=this.find(a,b).pop();if(c===this.heapContainer.length-1)this.heapContainer.pop();else{this.heapContainer[c]=this.heapContainer.pop();const a=this.parent(c);this.hasLeftChild(c)&&(!a||this.pairIsInCorrectOrder(a,this.heapContainer[c]))?this.heapifyDown(c):this.heapifyUp(c)}}return this}find(a,b=this.compare){const c=[];for(let d=0;d<this.heapContainer.length;d+=1)b.equal(a,this.heapContainer[d])&&c.push(d);return c}isEmpty(){return!this.heapContainer.length}toString(){return this.heapContainer.toString()}heapifyUp(a){for(let b=a||this.heapContainer.length-1;this.hasParent(b)&&!this.pairIsInCorrectOrder(this.parent(b),this.heapContainer[b]);)this.swap(b,this.getParentIndex(b)),b=this.getParentIndex(b)}heapifyDown(a=0){let b=a,c=null;for(;this.hasLeftChild(b)&&(c=this.hasRightChild(b)&&this.pairIsInCorrectOrder(this.rightChild(b),this.leftChild(b))?this.getRightChildIndex(b):this.getLeftChildIndex(b),!this.pairIsInCorrectOrder(this.heapContainer[b],this.heapContainer[c]));)this.swap(b,c),b=c}pairIsInCorrectOrder(a,b){throw new Error(`You have to implement heap pair comparision method for ${a} and ${b} values.`)}}class MinHeap extends Heap{pairIsInCorrectOrder(a,b){return this.compare.lessThanOrEqual(a,b)}}class _PriorityQueue extends MinHeap{constructor(){super(),this.priorities=new Map,this.compare=new Comparator(this.comparePriority.bind(this))}add(a,b=0){return this.priorities.set(a,b),super.add(a),this}remove(a,b){return super.remove(a,b),this.priorities.delete(a),this}changePriority(a,b){return this.remove(a,new Comparator(this.compareValue)),this.add(a,b),this}findByValue(a){return this.find(a,new Comparator(this.compareValue))}hasValue(a){return 0<this.findByValue(a).length}comparePriority(c,a){return this.priorities.get(c)===this.priorities.get(a)?0:this.priorities.get(c)<this.priorities.get(a)?-1:1}compareValue(c,a){return c===a?0:c<a?-1:1}}
  var PriorityQueue = _PriorityQueue
}

export default PriorityQueue
