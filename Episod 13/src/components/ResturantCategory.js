import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  data.itemCards.map(itemCard => itemCard.card.info.id)


    const categoryCont = {
        border: "1px solid black",
        margin: "30px 200px",
        padding: "0 2em",
    }

    const categoryHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid red",
        cursor: "pointer"
    }

  return (
    <div style={categoryCont}>
      <div style={categoryHeader}>
        <h1 style={{fontSize: "1.2rem"}}>{data.title}</h1>
        <span>UPdonw</span>
      </div>
      <div><ItemList items= {data.itemCards}/></div>
    </div>
  );
};

export default ResturantCategory;
