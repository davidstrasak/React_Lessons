import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Setup
const numbers = [1, 5, 2, 3, 57, 23, 0];
// Plotting component
function Plot(props) {
  return <p>{props.result} </p>;
}

// For each
let newNumbers = [];
function double(array) {
  newNumbers.push(array * 2);
}
numbers.forEach(double);

// Filter
const filteredNumbers = numbers.filter((num) => {
  return num > 10;
});

// Reduce
let reducedNumbers = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});

// Find
let foundNumbers = numbers.find((num) => {
  return num > 10;
});

// Find index
let foundIndex = numbers.findIndex((num) => {
  return num > 10;
});

// This is some long text. Let's shorten it a little bit and paste just the first 100 characters into the result.
const text = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, voluptas distinctio. Rerum, magni! Quo beatae libero hic minus sint iste, voluptates enim nam vel vero nisi rem. Itaque eius debitis numquam dolorum possimus similique voluptas esse labore, velit excepturi praesentium ipsum, sunt minima. Voluptatibus, quo placeat incidunt fugit voluptatum quisquam tempora pariatur. Nostrum velit ullam, facilis, at deserunt beatae sequi, praesentium quod officia animi amet cupiditate consectetur quae repellendus. Voluptates assumenda rem consequuntur sunt deserunt, laboriosam ad cum quasi perspiciatis totam similique tempora iste odit excepturi labore porro doloremque modi vel. Architecto non quae culpa ipsam delectus veritatis, aperiam quia voluptates harum ducimus suscipit reiciendis nobis dignissimos ea numquam qui fugit in dolores quod nulla voluptatum molestiae. Molestias ipsam distinctio sit repellat voluptatem dolores laborum possimus sunt tenetur cum consequuntur unde iusto iure, quia repudiandae ducimus dolorum, minima veniam pariatur ab quisquam magnam quidem? Ab fugiat illo error, suscipit ipsum quos totam sapiente consectetur perspiciatis natus consequuntur modi nam aliquam, excepturi obcaecati officia! Quae, odio laudantium quis deleniti repudiandae et cum optio doloribus harum, doloremque sint corporis labore provident deserunt minima necessitatibus iusto rem magnam esse commodi dolores dolor ipsa. Expedita esse est id libero voluptatibus asperiores adipisci quos nesciunt.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint, deleniti autem animi laudantium minus iure perspiciatis praesentium, consequuntur at veritatis aliquam adipisci repellendus, eos eaque! Labore incidunt maiores assumenda et ducimus, ullam corrupti dignissimos magnam earum ipsam beatae cupiditate molestiae, commodi id modi rem natus! Harum fugit maiores dolorem cupiditate dicta? Modi voluptates hic rerum doloribus repellendus ratione ipsa alias atque ea fugiat et quae labore autem eum, omnis, minima soluta impedit eligendi dolorem aliquid optio sint cumque! Dolorum impedit error aperiam modi, accusamus dignissimos tempora illum excepturi velit deleniti quam, obcaecati minima provident iste quos. Perspiciatis vitae quasi labore, itaque qui sunt, temporibus odit reiciendis eligendi explicabo mollitia, accusamus accusantium assumenda nisi molestiae ullam nostrum? Cumque aliquid veniam consequatur ducimus commodi officiis odio doloremque tenetur, maxime error magnam aperiam, vero, laboriosam repudiandae doloribus aliquam eligendi. Amet consequatur neque placeat? Magnam non quaerat minus eos. Neque consequatur dolor vel officia! Deleniti adipisci commodi, inventore soluta voluptatibus ex culpa omnis! Soluta in laborum aut tempora iste iure odit possimus exercitationem illo nesciunt ea blanditiis enim quibusdam quisquam, sit reprehenderit placeat, qui atque dolorum ex maiores necessitatibus tenetur voluptatem! Illo, at consectetur atque pariatur rem aliquid perspiciatis distinctio veritatis aspernatur labore?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo error reprehenderit tenetur iure quos aliquam perspiciatis nam ipsam. Culpa possimus distinctio at quas, animi itaque dicta! Quaerat quibusdam quae harum veniam quas enim rerum saepe quo? Quae vero reiciendis illum. Ducimus maiores praesentium voluptate voluptatum earum! Ipsa ea nisi enim adipisci repellat ratione maiores, laboriosam autem, tenetur similique, minus et rerum porro animi debitis qui omnis! Doloremque dolorem similique, sequi, eius iusto nihil soluta itaque veniam et, totam animi ex amet voluptas fuga placeat illum porro cum? Soluta, iure deserunt dolorum dolores voluptatem ex repellendus aliquam laboriosam velit quidem dolor quia accusamus nemo laborum tempore fugit vitae asperiores ducimus labore voluptate iusto deleniti voluptates quas. Quaerat non cumque repellat sit totam iste nemo veritatis! Enim ut quidem modi rem excepturi, illo non ipsum tempora! Quis eius autem aspernatur quod repudiandae libero, sed, quasi quaerat nulla fuga suscipit obcaecati itaque aliquid quidem! Praesentium, totam mollitia! Laborum fugiat soluta nihil, magnam, reprehenderit id ex illum nobis deserunt quaerat voluptates officia natus voluptate. Quibusdam hic sed nobis ipsum eius aliquid enim officia quo rerum assumenda voluptate reprehenderit eum pariatur veniam in fugiat excepturi aperiam cupiditate, possimus voluptatem. Tenetur totam magnam asperiores non.",
];
let croppedString = [];
text.forEach((text) => {
  croppedString.push(
    [...text].reduce((acc, char, index) => (index < 100 ? acc + char : acc), "")
  );
});
console.log(croppedString); // Output: 100 chars of lorem ipsum

root.render(
  <div>
    <Plot result={String(numbers)} />
    <Plot result={String(newNumbers)} />
    <Plot result={String(filteredNumbers)} />
    <Plot result={String(reducedNumbers)} />
    <Plot result={String(foundNumbers)} />
    <Plot result={String(foundIndex)} />
    <Plot result={String(croppedString[0])} />
    <Plot result={String(croppedString[1])} />
    <Plot result={String(croppedString[2])} />
  </div>
);
