let counter = 1

const printer = (delay) => {
    let intervalId = setInterval(() => {
        console.log("Hello World " + delay * 100)
        counter++

        if (counter === 5) {
            counter = 0
            clearInterval(intervalId)
            printer(delay + 1)
        }
    }, delay * 100)
}

printer(1)