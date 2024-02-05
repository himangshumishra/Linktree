# Dynamic Link Tree with Color Changer

![GitHub last commit](https://img.shields.io/github/last-commit/HimangshuMishra/Linktree?style=flat-square)
![GitHub license](https://img.shields.io/github/license/HimangshuMishra/Linktree?style=flat-square)

Hello, I am Himangshu Mishra😇
Welcome to my Dynamic Link Tree with Color Changer! This personalized Link Tree page not only showcases my information but also adds a vibrant touch with dynamic color changes. Let's dive into the details.

## Features

- **Personalized Design:** Featuring a profile picture, name, and connect-with-me message.
- **Responsive Layout:** Ensures a seamless experience on devices of all sizes.
- **Colorful Links:** The links have a dynamic color scheme, changing at regular intervals.
- **Background Gradient:** The background is a gradient, creating a visually appealing effect.
- **Powered by Tailwind CSS:** Utilizes the popular Tailwind CSS framework for styling.

## How to Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HimangshuMishra/Linktree.git
   cd Linktree
   ```

2. **Open the `index.html` file in your preferred code editor.**

3. **Customize the content:**

   - Replace the profile picture URL with your own.
   - Update your name in the title section.
   - Modify the link URLs and their corresponding descriptions.

4. **Optional: Adjust the color-changing interval (currently set to 1100 milliseconds) in the script section of the HTML file.**

5. **Open `index.html` in a web browser or deploy it on your web hosting platform.**

## Color Changer Script

The color-changing effect is achieved through a simple JavaScript script. Colors are randomly generated, creating a dynamic and lively appearance. Feel free to customize the script further to suit your preferences.

```javascript
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
```

## License

This project is licensed under the [MIT License](LICENSE). Feel free to fork and customize it for your own Link Tree!

Thank you for checking out my Dynamic Link Tree with Color Changer. Connect with me on various platforms and enjoy the dynamic experience! 🌈✨

## Connect with Me

- [GitHub](https://github.com/himangshumishra)
- [LinkedIn](https://linkedin.com/in/himangshumishra)
- [Twitter](https://twitter.com/himangshuji)
- [Instagram](https://instagram.com/mishra.himangshu)
- [Facebook](https://facebook.com/mishra.himangshu)
