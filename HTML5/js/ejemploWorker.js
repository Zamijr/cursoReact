
self.addEventListener('message', function (e) {
    self.postMessage('Num... ' + e.data);
    // for (x = 0; x < 30000; x++) {
    //     console.log(x);
    //     self.postMessage('Shalala: ' + data.msg);
    // }
    // self.postMessage('Shalala: ' + data.msg);
});