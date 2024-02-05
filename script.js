function getRandomColor() {
    let chrs = "0123456789ABCDEF";
    let hashcode = "#";
    for (let i = 0; i < 6; i++) {
      hashcode += chrs[Math.floor(Math.random() * 16)];
    }
    return hashcode;
  }

  function colorChanger() {
    document.body.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;

    document.querySelectorAll(".link-cont").forEach((linkconts) => {
      linkconts.style.background = getRandomColor();
      linkconts.style.boxShadow = `0 0 10px ${getRandomColor()}, 0 0 20px ${getRandomColor()}, 0 0 30px ${getRandomColor()}`;
    });
  }

  setInterval(colorChanger, 1100);