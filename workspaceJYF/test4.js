/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hashMap = {};
  this.capacity = capacity;
  this.top = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const hit = this.hashMap[key];
  if (hit) {
    if (this.top !== key) {
      if (this.tail === key) this.tail = hit.f;
      if (hit.b) hit.b.f = hit.f;
      if (hit.f) hit.f.b = hit.b;
      this.hashMap[this.top].f = key;
      hit.b = this.top;
      this.top = key;
    }
    return hit.v;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.capacity--;
  this.hashMap[key] = {
    v: value,
    f: null,
    b: this.top,
  };
  if (this.top) {
    this.hashMap[this.top].f = key;
  }
  this.top = key;
  if (this.tail === null) this.tail = key;
  if (this.capacity < 0) {
    const keyToDelete = this.tail;
    this.tail = this.hashMap[this.tail].f;
    this.hashMap[this.tail].b = null;
    delete this.hashMap[keyToDelete];
    this.capacity++;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)); // 返回 1
console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2)); // 返回 -1 (未找到))
console.log(lRUCache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1)); // 返回 -1 (未找到))
console.log(lRUCache.get(3)); // 返回 3
console.log(lRUCache.get(4)); // 返回 4
