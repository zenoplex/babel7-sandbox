const promiseFn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('\uD83D\uDE00');
    }, 1);
  });
}

const execFn = async () => {
  const msg = await promiseFn();
  console.log(`message: ${msg}`)
}

execFn();