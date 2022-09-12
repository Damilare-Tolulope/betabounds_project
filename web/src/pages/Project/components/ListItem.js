import { Draggable } from "react-beautiful-dnd";


const ListItem = ({ item, index }) => {

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div className="dragItem"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="cardHeader">Header</div>
            <span>Content</span>
            <div className="cardFooter">
              <span>{item.content}</span>
              <p style={{display: "flex", alignItems: "center"}}>
                {item.id}
              </p>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
