const printer = (delay) => {
    setTimeout(() => {
        console.log("Hello world. " + delay)
        printer(delay + 1)
    }, delay * 1000)
}

printer(1)    