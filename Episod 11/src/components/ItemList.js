const ItemList = ({items}) => {
    
    return <div>
        {items.map((item) => <p>{item.card.info.name} -  Rs.{item.card.info.price}</p>)}
    </div>  
}

export default  ItemList;