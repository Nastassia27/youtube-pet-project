console.log('Hello World');

const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

    function expandedForm(num) {
        if (num < 10) return `${num}`;
        let over = num % (Math.pow(10, (num.toString().length - 1)));
        if (!over) return `${num}`;
        return `${num-over} + ${expandedForm(over)}`;
      }
expandedForm(743782);