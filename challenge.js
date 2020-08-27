// compose ::
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// trace :: (a → *) → a → a
const trace = (...args) => (data) => {
  console.log.apply(null, args.concat([data]));
  return data;
};

// words :: String -> Array
const words = (str = "") => str.split(" ");

// trim :: String -> String
const trim = (str = "") => str.replace(/\s\s+/g, " ");

// size :: Array -> Number
const size = (arr) => arr.length;

// count :: String -> Number g(f(x))
const countWords = compose(
  trace("size"),
  size,
  trace("words"),
  words,
  trace("trim"),
  trim
);


const inputWords = document.getElementById("words");
const countBtn = document.getElementById("count");
const result = document.getElementById("result");

countBtn.addEventListener(
  "click",
  () => {
    // see the trace logs
    result.innerHTML = `${countWords(inputWords.value)}`;
  },
  false
);
