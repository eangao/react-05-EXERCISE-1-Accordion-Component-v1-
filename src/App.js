///////////////////////////////////////////////////////////
// EXERCISE #2: Accordion Component (v2)
///////////////////////////////////////////////////////////

// Let's now take everything that we learned
// throughout this section in order to make the accordion
// that we started building earlier a bit better
// and a bit more real world.
// And here it is.
// So just like before, when I click on one of the items,
// then it'll open, but when I click on another one,
// then only this one stays open
// and all the other ones are closed.
// So basically, what this means is that now each of the items
// no longer controls whether they are open or not.
// Instead, it is now the accordion
// who knows which of the items are opened,
// and then only that item, basically, is allowed to be open.
// So for example, if item number three is the one
// that's currently opened, then number one, two, and 23
// need to be closed.
// So again, all of these items here need to know
// which is the currently open item, and so that means
// that we now need to move our state from the item
// onto here, the accordion.
// Now, I still have the code here from part one

import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={"Test 1"}
        num={22}
        key={"test 1"}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Breack up UI into Components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
