console.log("Starting");

setTimeout(
    () => {
        console.log("2 seconds timer");
    },
    2000,   // milliseconds
);

setTimeout(
    () => {
        console.log("0 seconds timer");
    },
    0,
);

console.log("Finished");    