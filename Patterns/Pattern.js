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

const WriteStarCenter = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    for (let k = 1; k <= 2 * i + 1; k++) {
      result += "*";
    }

    for (let l = 0; l < n - i - 1; l++) {
      result += " ";
    }

    result += "\n";
  }

  console.log(result);
};

const WriteStarCenterReverse = (n) => {
  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    for (let k = 1; k <= 2 * i + 1; k++) {
      result += "*";
    }

    for (let l = 0; l < n - i - 1; l++) {
      result += " ";
    }

    result += "\n";
  }

  console.log(result);
};

const WriteStarRight = (n) => {
  let result = "",
    stars = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    if (i < n) stars = i + 1;
    else stars--;

    for (let j = 0; j < stars; j++) {
      result += "*";
    }
    result += "\n";
  }

  console.log(result);
};

const WriteNumberDecimal = (n) => {
  let result = "",
    start = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }

    for (let j = 0; j < i + 1; j++) {
      result += start + " ";
      start = 1 - start;
    }

    result += "\n";
  }

  console.log(result);
};

const WriteCatEarNumber = (n) => {
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      result += j + 1;
    }

    for (let k = 0; k < 2 * n - 2 * i - 2; k++) {
      result += " ";
    }

    for (let l = i + 1; l > 0; l--) {
      result += l;
    }

    if (i < n - 1) result += "\n";
  }

  console.log(result);
};

WriteCatEarNumber(9);
