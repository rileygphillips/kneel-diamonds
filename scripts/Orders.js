import { getOrders, getMetals, getStyles, getSizes } from "./database.js";

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {
  // FIND FUNCTION FOR GETTING THE PRICES FOR CHOSEN METAL
  const foundMetal = metals.find((metal) => {
    return metal.id === order.metalId;
  })
  const totalCost = foundMetal.price

  // FIND FUNCTION FOR GETTING THE PRICES FOR CHOSEN STYLE
  const foundStyle = styles.find((style) => {
      return style.id === parseInt(order.styleId)
  })
  
   const styleTotalCost = foundStyle.price

  //FIND FUNCTION FOR GETTING THE PRICES FOR CHOSEN SIZES
  const foundSize = sizes.find((size) => {
    return size.id === parseInt(order.sizeId)
})

 const sizeTotalCost = foundSize.price


  // HTML STRING FOR THE PRICE OF THE METAL
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  return `<li>
  Order #${order.id} cost ${costString}
</li>`
}
//

export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
  const orders = getOrders()

  let html = "<ul>"

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("")
  html += "</ul>"
  return html;
};
