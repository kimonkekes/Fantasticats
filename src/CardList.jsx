import Card from "./Card";

const CardList = ({ cats }) => {
    return (
      <>
        {
          cats.map((user, i) => {
            return (
                <Card 
                key={i}
                id={cats[i].id}
                name={cats[i].name}
                email={cats[i].email}
                />
            )
          })
        }
      </>
    )
}

export default CardList;
