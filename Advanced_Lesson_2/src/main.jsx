import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";
import Avatar from "./Avatar";

const root = createRoot(document.getElementById("root"));

const contacts = [
  {
    ID: 1,
    name: "The rock (my friend)",
    number: "+200 292 232 434",
    email: "arock@rock.cz",
    image:
      "https://imgs.search.brave.com/sn4_BP5KefKTU-RNU0UtGdyKFtUVzecrmNVGTr0I8No/rs:fit:860:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzQwNTMxODQ4/ZDhlOTljYmExZmM3/NGM4ZWJmYzJiN2Q5/LzYwN2NhMGFiMGE2/YzU5YmEtZWEvczEy/ODB4MTkyMC9kZGY3/YTZjMGM1YTk5OGM4/Yjc3NjQyNTQ2MTE1/NDM0ODczZjA2OTBl/LmpwZw",
  },
  {
    ID: 2,
    name: "A smiling rock",
    number: "+420 421 422 423",
    email: "therock@rock.com",
    image:
      "https://imgs.search.brave.com/673fcLBF3M2nevWpDFMrLPBJFM_8YW19MT872EpE6do/rs:fit:860:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tL2U2OWI2MDQw/OGE5ODY1MDIwZWQw/M2MxYjg0MWRkNjlh/LzYwN2NhMGFiMGE2/YzU5YmEtZDYvczEy/ODB4MTkyMC81MGQ3/ZmQ4ZDEzMWM0MjY0/NDVkZTgxNzE0YTQ5/ZTA0ZDBhNzg0ODMx/LmpwZw",
  },
  {
    ID: 3,
    name: "Ambergris",
    email: "Ambergris@seznam.cz",
    number: "+321 312 232 332",
    image:
      "https://imgs.search.brave.com/mjkn-XC2mIg5wHJrsUVQ8_5-WkEyRyxj9st2bANFArk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hbWJl/cmdyaXNjb25uZWN0/LmNvbS9pbWcvY29s/L0xpZ2h0R3JleVNp/bHZlckNyZWFtSW1h/Z2VOYWJpbFZhbGl1/bGxhMnMuanBn",
  },
];

function createCard(contact) {
  return (
    <Card
      ID={contact.ID}
      key={contact.ID}
      name={contact.name}
      email={contact.email}
      number={contact.number}
      image={contact.image}
    />
  );
}

root.render(
  <div>
    <h1>This is me!</h1>
    <Avatar image="https://imgs.search.brave.com/vMuqfmljU8HgldbpHvBx_gitSVdIe8OLHkvhmbUZvqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/MmE1YzlmYjEwYWNl/LXRoZS1yb2NrLXQu/anBn" />
    <h1>My contacts</h1>

    {contacts.map(createCard)}
  </div>
);
