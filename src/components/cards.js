import { useState } from "react";
import Card from './card'

function Cards() {
const [items , setItems] = useState([
{id:1 , img: '/images/css.jpeg' ,stat:""},
{id:1 , img: '/images/css.jpeg' ,stat:""},
{id:2 , img: '/images/html.jpeg' ,stat:""},
{id:2 , img: '/images/html.jpeg' ,stat:""},
{id:3 , img: '/images/js.jpeg',stat:""},
{id:3 , img: '/images/js.jpeg',stat:""},
{id:4 , img: '/images/node.jpeg' ,stat:""},
{id:4 , img: '/images/node.jpeg' ,stat:""},
{id:5 , img: '/images/react.jpeg' ,stat:""},
{id:5 , img: '/images/react.jpeg' ,stat:""},
{id:6 , img: '/images/web.jpeg' ,stat:""},
{id:6 , img: '/images/web.jpeg' ,stat:""},
{id:7 , img: '/images/app.jpeg' ,stat:""},
{id:7 , img: '/images/app.jpeg' ,stat:""},
{id:8 , img: '/images/prog.jpeg' ,stat:""},
{id:8 , img: '/images/prog.jpeg' ,stat:""}
].sort(() => Math.random() - 0.5))

const [prev , setPrev] = useState(-1)

function check(current){
  if(items[current].id == items[prev].id){
      // if previously clicked card is same as current card
      // set the stat of both cards to correct
      items[current].stat = "correct"
      items[prev].stat = "correct"
      setItems([...items])
      setPrev(-1)
  }else{
      // if previously clicked card is same not as current card
      // set the stat of both cards to wrong
      items[current].stat = "wrong"
      items[prev].stat = "wrong"
      setItems([...items])

      // After 1 second, set the stat of both cards to ""
      // So they would flip back
      setTimeout(() => {
          items[current].stat = ""
          items[prev].stat = ""
          setItems([...items])
          setPrev(-1)
      }, 1000)
  }
}

function handleClick(id){
  if(prev === -1){ // if prev is -1, then it means no card was clicked previously.
      items[id].stat = "active"
      setItems([...items])
      setPrev(id)
  }else{
      check(id)
  }
}

return (
  <div className="container">
      { items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
      )) }
  </div>
)
}

export default Cards