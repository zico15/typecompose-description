const registry = new FinalizationRegistry((key) => {
  console.log("key", key);
});

function test() {
  //   for (let i = 0; i < 100000; i++) {
  //     registry.register(new Object(`sd_${i}`), "test");
  //   }
}

test();
console.log("test");
