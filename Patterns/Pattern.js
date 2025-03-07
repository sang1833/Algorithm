function WriteStar(n) {
  let star = "*".repeat(n);

  for (let i = 0; i < n; i++) {
    console.log(star);
  }
}

function WriteStarIncrease(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    console.log((star += "*"));
  }
}

function WriteStarDecrease(n) {
  let star = "*".repeat(n);
  for (let i = n; i > 0; i--) {
    console.log(star);
    star = star.slice(0, -1);
  }
}

const WriteNumber = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }
  console.log(result);
};

const WriteNumberIncrease = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i.toString().repeat(i));
  }
};

const WriteNumberDecrease = (n) => {
  let result = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }
  console.log(result);
};

WriteStar(5);
